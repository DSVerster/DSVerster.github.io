/* Collects the public GitHub data the portfolio shows (repositories, language breakdowns and recent commits)
   and writes it to data/github.json. It runs inside a GitHub Action (see .github/workflows/update-github-data.yml),
   where GITHUB_TOKEN gives a far higher request limit than a visitor's browser has.
   The file is only rewritten when something actually changed, so the repository history stays clean. */
import { readFile, writeFile, mkdir } from "node:fs/promises";

const owner = process.env.GH_OWNER;
const token = process.env.GITHUB_TOKEN;
const DAYS = 90;                       /* the site never shows more than 90 days */
const OUT = "data/github.json";
if (!owner) { console.error("GH_OWNER is not set."); process.exit(1); }

const headers = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": `${owner}-portfolio-data`,
  ...(token ? { Authorization: `Bearer ${token}` } : {})
};

async function api(path, allow = []) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    const res = await fetch(`https://api.github.com${path}`, { headers });
    if (res.ok) return res.json();
    if (allow.includes(res.status)) return null;          /* for example 409: an empty repository */
    if (attempt < 3 && (res.status >= 500 || res.status === 429)) { await new Promise(r => setTimeout(r, 2000 * attempt)); continue; }
    throw new Error(`${res.status} ${res.statusText} for ${path}`);
  }
}

/* A failure anywhere stops the run, so a half-complete file is never saved over a good one */
const all = [];
for (let page = 1; ; page++) {
  const batch = await api(`/users/${owner}/repos?per_page=100&sort=pushed&page=${page}`);
  all.push(...batch);
  if (batch.length < 100) break;
}
const repos = all
  .map(r => ({ name: r.name, fork: r.fork, language: r.language, description: r.description, html_url: r.html_url, homepage: r.homepage, created_at: r.created_at, pushed_at: r.pushed_at }))
  .sort((a, b) => b.pushed_at.localeCompare(a.pushed_at) || a.name.localeCompare(b.name));

const own = repos.filter(r => !r.fork);
const since = new Date(Date.now() - DAYS * 864e5).toISOString();

const languages = {};
for (const r of own) languages[r.name] = await api(`/repos/${owner}/${encodeURIComponent(r.name)}/languages`);

const commits = [];
for (const r of own.filter(r => r.pushed_at >= since)) {
  for (let page = 1; page <= 10; page++) {
    const batch = await api(`/repos/${owner}/${encodeURIComponent(r.name)}/commits?author=${owner}&since=${since}&per_page=100&page=${page}`, [409]);
    if (!batch) break;
    commits.push(...batch.map(c => ({ date: c.commit.author.date, repo: r.name })));
    if (batch.length < 100) break;
  }
}
commits.sort((a, b) => b.date.localeCompare(a.date) || a.repo.localeCompare(b.repo));

const body = { owner, days: DAYS, repos, languages, commits };
let previous = null;
try { previous = JSON.parse(await readFile(OUT, "utf8")); delete previous.generatedAt; } catch { /* first run */ }
if (previous && JSON.stringify(previous) === JSON.stringify(body)) { console.log("No changes since the last run."); process.exit(0); }

await mkdir("data", { recursive: true });
await writeFile(OUT, JSON.stringify({ generatedAt: new Date().toISOString(), ...body }, null, 1) + "\n");
console.log(`Saved ${repos.length} repositories, ${commits.length} commits.`);
