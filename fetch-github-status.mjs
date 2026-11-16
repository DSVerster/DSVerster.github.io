/* Keeps a rolling history of GitHub's own incident reports (https://www.githubstatus.com) in data/github-status.json.
   The portfolio draws its "GitHub availability" strip from this file. It runs inside the GitHub Action
   (see .github/workflows/update-github-data.yml), straight after scripts/fetch-github-data.mjs.

   GitHub's status API only returns its 50 most recent incidents, so each run merges them into the saved file
   (matched by incident id, newest information wins). That way the history keeps growing beyond those 50.
   The file is only rewritten when something actually changed, so the repository history stays clean. */
import { readFile, writeFile, mkdir } from "node:fs/promises";

const API = "https://www.githubstatus.com/api/v2/incidents.json";
const OUT = "data/github-status.json";
const KEEP_DAYS = 400;                 /* incidents older than this are dropped from the file */

const res = await fetch(API, { headers: { Accept: "application/json", "User-Agent": "DSVerster-portfolio-status" } });
if (!res.ok) { console.error(`GitHub Status answered ${res.status} ${res.statusText}.`); process.exit(1); }
const { incidents = [] } = await res.json();
if (!Array.isArray(incidents)) { console.error("Unexpected answer from GitHub Status."); process.exit(1); }

let previous = null;
try { previous = JSON.parse(await readFile(OUT, "utf8")); } catch { /* first run */ }

const byId = new Map(((previous && previous.incidents) || []).map(i => [i.id, i]));
for (const i of incidents) {
  byId.set(i.id, {
    id: i.id,
    name: i.name,
    impact: i.impact,                                  /* none, minor, major or critical */
    started: i.started_at || i.created_at,
    resolved: i.resolved_at || null,                   /* null while the incident is still open */
    components: (i.components || []).map(c => c.name)
  });
}

const cutoff = Date.now() - KEEP_DAYS * 864e5;
const list = [...byId.values()]
  .filter(i => Date.parse(i.resolved || i.started) >= cutoff)
  .sort((a, b) => b.started.localeCompare(a.started) || a.id.localeCompare(b.id));

const body = { source: "https://www.githubstatus.com", keptDays: KEEP_DAYS, incidents: list };
if (previous) {
  const { generatedAt, ...rest } = previous;
  if (JSON.stringify(rest) === JSON.stringify(body)) { console.log("No changes since the last run."); process.exit(0); }
}

await mkdir("data", { recursive: true });
await writeFile(OUT, JSON.stringify({ generatedAt: new Date().toISOString(), ...body }, null, 1) + "\n");
console.log(`Saved ${list.length} incidents.`);
