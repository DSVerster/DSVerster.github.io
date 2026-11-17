/* ==========================================================================
   EDIT THIS BLOCK TO UPDATE THE SITE. Add an object to an array and it
   appears in the explorer and its overview automatically.

   Certificates: add one object to DATA.certificates. The "group" field
   decides which provider folder it is filed under, and the site sorts
   everything newest first, so the order in this file does not matter.
   ========================================================================== */
const DATA = {
  name: "Denzel Stockenström Verster",
  role: "BSc Information Technology Graduate | BSc Honours Student in Computer Science and Information Technology",
  githubUser: "DSVerster",
  /* Time zone used to decide which day a commit belongs to, and to show dates (an IANA name, for example "Africa/Johannesburg") */
  timezone: "Africa/Johannesburg",
  /* Activity graph: the time ranges offered by the buttons beneath it (the first is shown unless "defaultRange" says otherwise).
     days = how far back the graph reaches (maximum 730), step = days per point (1 = daily, 7 = weekly), labelEvery = a date label every N points.
     Both lines are calculated from the commits in my public repositories, so they always agree with each other. */
  activity: {
    defaultRange: 0,
    invaders: true,                 /* the small space-invader game in the empty space of the activity box (false removes it) */
    ranges: [
      { label: "30 days",  days: 30,  step: 1,  labelEvery: 2 },
      { label: "60 days",  days: 60,  step: 1,  labelEvery: 5 },
      { label: "6 months", days: 182, step: 7,  labelEvery: 4 },
      { label: "1 year",   days: 364, step: 7,  labelEvery: 5 },
      { label: "2 years",  days: 720, step: 30, labelEvery: 3 }
    ]
  },

  /* GitHub availability strip (About page, beneath the activity graph): how many days it shows, and the data file that the
     GitHub Action keeps up to date (see "GitHub availability" in the README) */
  status: { days: 90, snapshotFile: "data/github-status.json" },

  /* How long (in minutes) GitHub data is reused before it is fetched again. GitHub allows 60 anonymous requests per hour. */
  cacheMinutes: 2,

  /* Data file refreshed every 15 minutes by the GitHub Action (see README). The site reads it first, so it does not depend on GitHub's hourly request limit. */
  snapshotFile: "data/github.json",

  /* How long (in minutes) a project's language breakdown is reused. It is also refreshed whenever that repository is pushed to.
     Each repository costs one GitHub request per refresh. */
  languageCacheMinutes: 60,

  /* Show this portfolio's own repository (DSVerster.github.io) in the Projects list (false = hide it) */
  showPortfolioRepo: true,

  /* How many projects and certificates the About.md page shows before the "View all" button (use 0 to show none) */
  aboutLimits: { projects: 5, certificates: 5 },

  /* Show Certificates as a sub-folder of Education in the explorer (false = a separate top-level folder) */
  certificatesInEducation: true,
  email: "denzelverster@gmail.com",
  linkedin: "https://www.linkedin.com/in/denzel-verster-642373375/",
  cv: "media/DS Verster Cirriculum-Vitae.pdf",
  photo: "media/CirriculumVitae_Me.jpg",
  summary: "I am an Information Technology graduate from North-West University, and I am now studying towards an Honours degree in Computer Science and Information Technology. I enjoy programming, computer hardware and hands-on projects, particularly Raspberry Pi systems, and I am comfortable working across several programming languages, networking and problem-solving. I am looking for the opportunity to apply what I have learnt in a real working environment, and I value every chance to keep learning alongside other people.",

  education: [
    { id: "nwu-honours", title: "BSc Honours Computer Science and Information Technology", org: "North-West University", logo: "media/NWU-Logo-SWIcon.png",
      url: "https://www.nwu.ac.za/", period: "January 2026 – December 2026",
      details: ["I am currently pursuing postgraduate study in Computer Science and Information Technology."] },
    { id: "nwu-bsc", title: "BSc Information Technology", org: "North-West University", logo: "media/NWU-Logo-SWIcon.png",
      url: "https://www.nwu.ac.za/", period: "January 2023 – December 2025",
      details: ["I studied how computerised systems are designed, developed and delivered.", "I learnt how information and information sources are managed.", "I developed IT-related solutions, with an emphasis on lifelong learning and entrepreneurship."] }
  ],

  experience: [
    { id: "citeq", title: "Student Intern", org: "Cite Q Computers (Pty) Ltd", logo: "media/CiteQ-Web-Logo-TransIcon.png",
      url: "https://citeq.co.za/", period: "July 2024 (1 month)",
      details: ["I assisted with operating system installations.", "I diagnosed and resolved computer faults.", "I managed and installed computer networks."] }
    /* Template:
    , { id: "unique-id", title: "Job title", org: "Employer", logo: "media/logo.png", url: "https://...", period: "Month Year – Month Year", details: ["I did this.", "I achieved that."] }
    */
  ],

  certificates: [
    { id: "neo4j-genai-fundamentals", group: "Neo4j", org: "Neo4j GraphAcademy", type: "Certificate",
      title: "Neo4j & Generative AI Fundamentals", date: "2026-09-07",
      file: "certificates/Neo4j & GenerativeAI Fundamentals Certificate _ GraphAcademy.pdf",
      credentialId: "864b8c59-19a2-4bf5-9aab-4d3d9c9107a2",
      url: "",
      details: ["I completed all requirements of the Neo4j GraphAcademy Generative AI Fundamentals programme."] },

    { id: "great-learning-cyber-security", group: "Great Learning", org: "Great Learning", type: "Course",
      title: "Introduction to Cyber Security", date: "2024-03-27",
      file: "certificates/Great Learning Intro to Cyber Security.pdf",
      credentialId: "JLYMVDCH",
      url: "https://verify.mygreatlearning.com/JLYMVDCH",
      details: ["I completed this introductory course on cyber security."] },

    { id: "data-analysis-in-matlab", group: "MathWorks", org: "MathWorks", type: "Learning path",
      title: "Data Analysis in MATLAB", date: "2026-01-28",
      file: "certificates/MATLAB Data Analysis in MATLAB certificate.pdf",
      details: ["I completed this learning path, which covers preparing, analysing and summarising data in MATLAB."],
      courses: ["Tables", "Clean and Prepare Data for Analysis", "Common Data Analysis Techniques", "Find and Extract Subsets of Data", "Calculations on Grouped Data"] },
    { id: "core-matlab-skills", group: "MathWorks", org: "MathWorks", type: "Learning path",
      title: "Core MATLAB Skills", date: "2026-01-27",
      file: "certificates/MATLAB Core MATLAB Skills certificate.pdf",
      details: ["I completed this learning path, which covers the everyday foundations of working in MATLAB."],
      courses: ["MATLAB Desktop Tools and Troubleshooting Scripts", "Explore Data with MATLAB Plots", "Make and Manipulate Matrices", "Calculations with Vectors and Matrices"] },
    { id: "visualization-in-matlab", group: "MathWorks", org: "MathWorks", type: "Learning path",
      title: "Visualization in MATLAB", date: "2026-01-27",
      file: "certificates/MATLAB Visualization in MATLAB certificate.pdf",
      details: ["I completed this learning path, which covers creating and customising plots and graphics in MATLAB."],
      courses: ["Explore Data with MATLAB Plots", "Plot Beyond the Second Dimension", "How MATLAB Graphics Work"] },
    { id: "matlab-app-building-onramp", group: "MathWorks", org: "MathWorks", type: "Course",
      title: "App Building Onramp", date: "2026-01-22",
      file: "certificates/MATLAB App Building Onramp certificate.pdf",
      details: ["I completed this self-paced course (100%)."] },
    { id: "matlab-statistics-onramp", group: "MathWorks", org: "MathWorks", type: "Course",
      title: "Statistics Onramp", date: "2026-01-22",
      file: "certificates/MATLAB Statistic Onramp certificate.pdf",
      details: ["I completed this self-paced course (100%)."] },
    { id: "matlab-onramp", group: "MathWorks", org: "MathWorks", type: "Course",
      title: "MATLAB Onramp", date: "2026-01-21",
      file: "certificates/MATLAB Onramp certificate.pdf",
      details: ["I completed this self-paced introductory course (100%)."] }
    /* Template:
    , { id: "unique-id", group: "Provider", org: "Issuing organisation", type: "Course", title: "Certificate title", date: "YYYY-MM-DD",
        file: "certificates/file-name.pdf", credentialId: "", url: "https://verification-link", details: ["What I completed."], courses: ["Optional list"] }
    */
  ],

  skills: {
    "Technical": ["Programming", "Database Management (SQL Server)", "Web Development", "Cybersecurity", "Computer Repair and Maintenance", "Networking", "Microsoft Word and Excel"],
    "Professional": ["Time Management", "Teamwork", "Problem-Solving"],
    "Programming Languages": ["Python", "Java", "C++", "C#", "HTML and CSS", "JavaScript", "Delphi", "SQL"],
    "Spoken Languages": ["English (Fluent)", "Afrikaans (Fluent)", "German (Basic)"]
  }
};
/* ======================= END OF EDITABLE CONTENT ========================== */

(() => {
  const $ = s => document.querySelector(s);
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const mobile = () => matchMedia("(max-width: 768px)").matches;
  /* The snapshot is "current" for a repository when it was made at or after that repository's latest push */
  const snapRepo = n => state.snapshot && state.snapshot.repos.find(x => x.name === n);
  const snapCurrent = r => { const s = snapRepo(r.name); return !!s && s.pushed_at >= r.pushed_at; };
  const snapLangs = n => state.snapshot && state.snapshot.languages && state.snapshot.languages[n];
  /* Short-lived cache: data is reused for DATA.cacheMinutes, then fetched again */
  const cacheGet = key => { try { const c = JSON.parse(sessionStorage.getItem(key)); if (c && Date.now() - c.t < DATA.cacheMinutes * 60000) return c; } catch (e) { /* no cache */ } return null; };
  const cacheSet = (key, data) => { const c = { t: Date.now(), data }; try { sessionStorage.setItem(key, JSON.stringify(c)); } catch (e) { /* storage unavailable */ } return c; };
  /* All GitHub requests go through here. Once GitHub answers 403 or 429 (hourly limit reached), no further requests are sent until the page is reloaded */
  const gh = async url => {
    if (state.rateLimited) throw new Error("GitHub rate limit reached");
    const res = await fetch(url);
    if (res.status === 403 || res.status === 429) state.rateLimited = true;
    return res;
  };
  const state = { snapshot: null, source: "live", rateLimited: false, repos: [], reposStatus: "loading", open: new Set(["portfolio"]), tabs: [], active: null, activity: { status: "loading", buckets: [] }, range: DATA.activity.defaultRange || 0, gstatus: { status: "loading" }, certFocus: null, langs: {} };

  /* ---------- Certificate helpers ---------- */
  const fmtDate = iso => new Date(iso + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const sortedCerts = () => [...DATA.certificates].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  const certGroups = () => {
    const m = new Map();
    sortedCerts().forEach(c => { if (!m.has(c.group)) m.set(c.group, []); m.get(c.group).push(c); });
    return m; /* providers appear in order of their newest certificate */
  };
  const certHref = c => encodeURI(c.file);
  const repoDay = iso => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;
  /* Alphabetical comparison used by the explorer tree (case-insensitive, numbers in natural order) */
  const byName = (a, b) => a.localeCompare(b, "en", { numeric: true, sensitivity: "base" });

  /* ---------- Languages per repository (the full breakdown, as GitHub shows it) ---------- */
  const LANG_COLORS = {
    "Python": "#3572A5", "C++": "#f34b7d", "C": "#555555", "C#": "#178600", "Java": "#b07219", "JavaScript": "#f1e05a",
    "TypeScript": "#3178c6", "HTML": "#e34c26", "CSS": "#563d7c", "SCSS": "#c6538c", "Shell": "#89e051", "Batchfile": "#C1F12E",
    "PowerShell": "#2f6fb5", "Pascal": "#E3F171", "Delphi": "#E3F171", "TSQL": "#e38c00", "PLpgSQL": "#336790", "SQL": "#e38c00",
    "Jupyter Notebook": "#DA5B0B", "MATLAB": "#e16737", "Makefile": "#427819", "CMake": "#DA3434", "Dockerfile": "#384d54",
    "Go": "#00ADD8", "Rust": "#dea584", "Kotlin": "#A97BFF", "Dart": "#00B4AB", "PHP": "#4F5D95", "Ruby": "#701516",
    "Swift": "#F05138", "Objective-C": "#438eff", "Lua": "#3d6fb0", "Vue": "#41b883", "Assembly": "#6E4C13", "Verilog": "#b2b7f8",
    "VHDL": "#adb2cb", "Perl": "#0298c3", "R": "#198CE7", "Haskell": "#5e5086", "Arduino": "#bd79d1"
  };
  const langColor = n => LANG_COLORS[n] || "#8b949e";
  /* The most used language of a repository (by bytes, or GitHub's main language until the breakdown arrives) sets the colour of its orbiting dots */
  const topLang = r => {
    const d = state.langs[r.name], top = d && Object.entries(d).sort((a, b) => b[1] - a[1])[0];
    return top ? top[0] : r.language || null;
  };
  const orbitStyle = r => { const n = topLang(r); return n ? ` style="--orbit-color:${langColor(n)}"` : ""; };
  const fmtBytes = b => b < 1024 ? `${b} B` : b < 1048576 ? `${(b / 1024).toFixed(1)} KB` : `${(b / 1048576).toFixed(1)} MB`;
  const langCacheRead = r => { try { return JSON.parse(localStorage.getItem("dsv-lang-v1:" + r.name)); } catch (e) { return null; } };
  /* Valid while the repository has not been pushed to since. Right after a push it is only trusted briefly (GitHub can take a few minutes to update its figures) */
  const langCacheGet = r => {
    const c = langCacheRead(r);
    if (!c || c.p !== r.pushed_at) return null;
    const settled = c.t - Date.parse(r.pushed_at) > 15 * 60000;
    return settled || Date.now() - c.t < DATA.languageCacheMinutes * 60000 ? c.d : null;
  };
  const langCacheStale = r => { const c = langCacheRead(r); return c && c.d || null; };   /* any saved breakdown, however old: better than none when GitHub is unavailable */
  const langCacheSet = (r, d) => { try { localStorage.setItem("dsv-lang-v1:" + r.name, JSON.stringify({ p: r.pushed_at, t: Date.now(), d })); } catch (e) { /* storage unavailable */ } };

  /* Every language of the repository: one stacked bar plus a legend with each percentage (GitHub style) */
  function langHtml(r) {
    const d = state.langs[r.name];
    if (!d) {   /* the full breakdown is not available (yet): the same bar, in the main language's colour and without a percentage */
      if (!r.language) return `<span class="lang-fallback">No language data</span>`;
      const c = langColor(r.language), tip = `${r.language} (main language; the full breakdown could not be loaded)`;
      return `<span class="lang-bar" role="img" aria-label="${esc("Main language: " + r.language)}"><span class="lang-seg" style="flex-grow:1;background:${c}" title="${esc(tip)}"></span></span>
        <span class="lang-legend"><span class="lang-item" title="${esc(tip)}"><i style="background:${c}"></i><b>${esc(r.language)}</b></span></span>`;
    }
    const total = Object.values(d).reduce((a, b) => a + b, 0);
    if (!total) return `<span class="lang-fallback">No code detected</span>`;
    const list = Object.entries(d).sort((a, b) => b[1] - a[1]).map(([name, bytes]) => {
      const pct = bytes / total * 100;
      return { name, bytes, color: langColor(name), label: pct < 0.1 ? "<0.1%" : pct.toFixed(1) + "%", tip: `${name}: ${pct < 0.1 ? "<0.1" : pct.toFixed(1)}% (${fmtBytes(bytes)})` };
    });
    return `<span class="lang-bar" role="img" aria-label="${esc("Languages: " + list.map(l => `${l.name} ${l.label}`).join(", "))}">${list.map(l => `<span class="lang-seg" style="flex-grow:${l.bytes};background:${l.color}" title="${esc(l.tip)}"></span>`).join("")}</span>
      <span class="lang-legend">${list.map(l => `<span class="lang-item" title="${esc(l.tip)}"><i style="background:${l.color}"></i><b>${esc(l.name)}</b> ${esc(l.label)}</span>`).join("")}</span>`;
  }
  const langBox = (r, big) => `<span class="langs${big ? " big" : ""}" data-lang-repo="${esc(r.name)}"${state.langs[r.name] ? " data-done" : ""}>${langHtml(r)}</span>`;
  /* Fills in breakdowns that arrived after the page was drawn, without redrawing the page */
  const fillLangs = () => {
    document.querySelectorAll("[data-lang-repo]:not([data-done])").forEach(el => {
      const r = state.repos.find(x => x.name === el.dataset.langRepo);
      if (r && state.langs[r.name]) { el.innerHTML = langHtml(r); el.setAttribute("data-done", ""); const card = el.closest(".card"), t = topLang(r); if (card && t) card.style.setProperty("--orbit-color", langColor(t)); }
    });
    refreshPie();
  };
  const langRequested = new Set();
  let langBusy = 0, langCalled = false;   /* requests in flight, and whether loading has started at all (used by the pie chart) */
  async function loadLanguages() {
    if (state.reposStatus !== "ok") return;
    langCalled = true;
    const wanted = new Set([...document.querySelectorAll("[data-lang-repo]:not([data-done])")].map(el => el.dataset.langRepo));
    await Promise.allSettled(state.repos.filter(r => wanted.has(r.name) && !langRequested.has(r.name)).map(async r => {
      langRequested.add(r.name); langBusy++;
      try {
        let d = snapCurrent(r) ? snapLangs(r.name) : null;
        if (!d) d = langCacheGet(r);
        if (!d) {
          const res = await gh(`https://api.github.com/repos/${DATA.githubUser}/${encodeURIComponent(r.name)}/languages`);
          if (!res.ok) throw new Error(res.status);
          d = await res.json(); langCacheSet(r, d);
        }
        state.langs[r.name] = d; fillLangs();
      } catch (e) {
        const old = snapLangs(r.name) || langCacheStale(r);   /* GitHub unavailable: an older saved breakdown is better than none */
        if (old) { state.langs[r.name] = old; fillLangs(); }
        else { langRequested.delete(r.name); throw e; }      /* the main language stays shown; a later page view tries again */
      } finally { langBusy--; }
    }));
    refreshPie();
  }

  /* ---------- Languages across all projects: one pie, separate from the project cards, drawn like a loading bar ---------- */
  const PIE_MAX = 8;                                   /* the largest languages are named; the rest are grouped as "Other" */
  const pctLabel = p => p < 0.1 ? "<0.1%" : p.toFixed(1) + "%";
  function pieData() {
    const totals = {}; let have = 0;
    state.repos.forEach(r => {
      const d = state.langs[r.name]; if (!d) return;
      have++;
      Object.entries(d).forEach(([n, b]) => { totals[n] = (totals[n] || 0) + b; });
    });
    const sum = Object.values(totals).reduce((a, b) => a + b, 0);
    let list = Object.entries(totals).sort((a, b) => b[1] - a[1]).map(([name, bytes]) => ({ name, bytes, color: langColor(name), pct: sum ? bytes / sum * 100 : 0 }));
    if (list.length > PIE_MAX + 1) {
      const rest = list.slice(PIE_MAX);
      list = [...list.slice(0, PIE_MAX), { name: "Other", bytes: rest.reduce((a, x) => a + x.bytes, 0), color: "#8b949e", pct: rest.reduce((a, x) => a + x.pct, 0) }];
    }
    return { have, sum, list };
  }
  /* The pie's orbiting dots take the average colour (the mean of the red, green and blue values) of every slice */
  const hexRgb = h => { const m = /^#?([0-9a-f]{6})$/i.exec(h); return m ? [0, 2, 4].map(i => parseInt(m[1].slice(i, i + 2), 16)) : null; };
  const avgColor = colors => {
    const rgb = colors.map(hexRgb).filter(Boolean);
    return rgb.length ? `rgb(${[0, 1, 2].map(i => Math.round(rgb.reduce((a, c) => a + c[i], 0) / rgb.length)).join(",")})` : null;
  };
  const pieOrbit = () => avgColor(pieData().list.map(l => l.color));
  const pieSig = () => { const d = pieData(); return `${state.reposStatus}|${d.have}|${langBusy}|${d.sum}|${langCalled}`; };
  const pieInner = () => {
    const total = state.repos.length;
    if (state.reposStatus === "loading") return `<p class="meta">Loading repositories&hellip;</p><div class="pie-progress"><i style="width:0%"></i></div>`;
    if (state.reposStatus === "error") return `<p class="placeholder">The language chart needs the repository list, which could not be loaded at this time. Please view the repositories directly on <a href="https://github.com/${DATA.githubUser}?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>`;
    if (!total) return `<p class="placeholder">No public repositories are available yet.</p>`;
    const { have, sum, list } = pieData();
    if (have < total && (!langCalled || langBusy > 0)) {   /* still collecting: a real progress bar, then the pie is drawn once */
      return `<p class="meta">Analysing languages&hellip; ${have} of ${total} repositories</p><div class="pie-progress" role="progressbar" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${have}"><i style="width:${Math.round(have / total * 100)}%"></i></div>`;
    }
    if (!sum) return `<p class="placeholder">No language data is available for these repositories yet.</p>`;
    let acc = 0;
    const segs = list.map(l => {
      const s = acc; acc += l.pct;
      return `<circle class="pie-seg" cx="50" cy="50" r="25" pathLength="100" fill="none" stroke="${l.color}" stroke-width="50" stroke-dasharray="${Math.max(l.pct - 0.25, 0.05).toFixed(3)} 100" stroke-dashoffset="${(-s).toFixed(3)}" style="--s:${(s / 100).toFixed(4)};--w:${(l.pct / 100).toFixed(4)}"><title>${esc(l.name)}: ${pctLabel(l.pct)}</title></circle>`;
    }).join("");
    const basis = `Measured in bytes of code across ${plural(have, "repository", "repositories")}, as GitHub measures languages (${fmtBytes(sum)} in total).` + (have < total ? ` ${plural(total - have, "repository", "repositories")} had no language data.` : "");
    return `<div class="pie-wrap">
      <svg class="pie" viewBox="0 0 100 100" role="img" aria-label="${esc("Languages across all projects: " + list.map(l => `${l.name} ${pctLabel(l.pct)}`).join(", "))}"><circle class="pie-track" cx="50" cy="50" r="50"/><g transform="rotate(-90 50 50)">${segs}</g><g class="pie-power" aria-hidden="true"><path class="pie-power-glyph" d="M50 -6V50M14.64 14.64A50 50 0 1 0 85.36 14.64"/></g></svg>
      <ul class="pie-legend">${list.map(l => `<li><i style="background:${l.color}"></i><b>${esc(l.name)}</b><span class="pct">${pctLabel(l.pct)}</span></li>`).join("")}</ul></div>
      <p class="meta note">${esc(basis)}</p>`;
  };
  const pieSection = () => { const oc = pieOrbit(); return `<section class="lang-pie-card" id="langpie" data-sig="${pieSig()}"${oc ? ` style="--orbit-color:${oc}"` : ""}>${pieInner()}</section>`; };
  /* Redraws only when something changed, so the animation does not replay needlessly */
  const refreshPie = () => {
    const el = document.getElementById("langpie"); if (!el) return;
    const sig = pieSig(); if (el.dataset.sig === sig) return;
    el.dataset.sig = sig; el.innerHTML = pieInner();
    const oc = pieOrbit(); if (oc) el.style.setProperty("--orbit-color", oc); else el.style.removeProperty("--orbit-color");
  };

  /* ---------- Activity graph (commits in public repositories, one point per day in the configured time zone) ---------- */
  const shortDate = d => d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", timeZone: "UTC" });
  const rnd = n => Math.round(n * 10) / 10;
  const addDays = (d, n) => { const x = new Date(d); x.setUTCDate(x.getUTCDate() + n); return x; };
  const tzKey = d => new Date(d).toLocaleDateString("en-CA", { timeZone: DATA.timezone }); /* YYYY-MM-DD in my time zone */
  const SERIES = [
    { key: "repos", cls: "s-a", name: "Repositories worked on", one: "repository", many: "repositories" },   /* green */
    { key: "commits", cls: "s-b", name: "Commits", one: "commit", many: "commits" }                          /* blue */
  ];

  /* Both lines come from the same commits, so a period with commits always shows at least one repository.
     Each point covers cfg.step days (1 = a day, 7 = a week); the last point always ends today. */
  function buildBuckets(commits, cfg) {
    const step = Math.max(1, cfg.step || 1);
    const n = Math.max(2, Math.floor(cfg.days / step));
    const base = new Date(tzKey(new Date()) + "T00:00:00Z");
    const buckets = Array.from({ length: n }, (_, i) => {
      const end = addDays(base, -(n - 1 - i) * step);
      return { start: addDays(end, -(step - 1)), end, commits: 0, repos: 0, _repos: new Set() };
    });
    const byKey = new Map();
    buckets.forEach(b => { for (let k = 0; k < step; k++) byKey.set(addDays(b.start, k).toISOString().slice(0, 10), b); });
    const all = new Set(), activeDays = new Set();
    commits.forEach(c => {
      const key = tzKey(c.date), b = byKey.get(key);
      if (!b) return;
      b.commits += 1; b._repos.add(c.repo); all.add(c.repo); activeDays.add(key);
    });
    buckets.forEach(b => { b.repos = b._repos.size; });
    Object.assign(buckets, { repoCount: all.size, activeDays: activeDays.size, windowDays: n * step, step, cfg });
    return buckets;
  }

  /* Monotone cubic curve: smooth, but never dips below zero or overshoots a peak */
  function smoothPath(pts) {
    const n = pts.length, dx = [], m = [], t = new Array(n);
    for (let i = 0; i < n - 1; i++) { dx[i] = pts[i + 1][0] - pts[i][0]; m[i] = (pts[i + 1][1] - pts[i][1]) / dx[i]; }
    t[0] = m[0]; t[n - 1] = m[n - 2];
    for (let i = 1; i < n - 1; i++) t[i] = m[i - 1] * m[i] <= 0 ? 0 : (m[i - 1] + m[i]) / 2;
    for (let i = 0; i < n - 1; i++) {
      if (m[i] === 0) { t[i] = 0; t[i + 1] = 0; continue; }
      const a = t[i] / m[i], b = t[i + 1] / m[i], h = Math.hypot(a, b);
      if (h > 3) { const k = 3 / h; t[i] = k * a * m[i]; t[i + 1] = k * b * m[i]; }
    }
    let d = `M${rnd(pts[0][0])},${rnd(pts[0][1])}`;
    for (let i = 0; i < n - 1; i++) {
      d += ` C${rnd(pts[i][0] + dx[i] / 3)},${rnd(pts[i][1] + t[i] * dx[i] / 3)} ${rnd(pts[i + 1][0] - dx[i] / 3)},${rnd(pts[i + 1][1] - t[i + 1] * dx[i] / 3)} ${rnd(pts[i + 1][0])},${rnd(pts[i + 1][1])}`;
    }
    return d;
  }

  /* A "nice" tick spacing (1, 2, 5, 10, 20, 50, 100, 200 ...) giving about four intervals at any scale */
  function niceStep(maxV) {
    const raw = maxV / 4, pow = Math.pow(10, Math.floor(Math.log10(raw)));
    return [1, 2, 5, 10].map(m => m * pow).find(u => u >= raw);
  }

  function chartSvg(b, fetchedAt) {
    const ser = SERIES;
    const maxV = Math.max(4, ...b.flatMap(x => ser.map(s => x[s.key])));
    const unit = niceStep(maxV);
    const yMax = Math.ceil(maxV / unit) * unit;          /* the vertical scale fits the busiest day */
    const W = 400, H = 250, T = 12, B = 40, R = 16;
    const L = 16 + String(yMax).length * 6.5;             /* left margin grows with the size of the numbers */
    const iw = W - L - R, ih = H - T - B;
    const X = i => L + i * iw / (b.length - 1);
    const Y = v => T + ih - (v / yMax) * ih;
    const every = Math.max(1, b.cfg.labelEvery || 2);
    const labelled = i => (b.length - 1 - i) % every === 0; /* always includes the latest day */
    let g = "";
    for (let v = 0; v <= yMax; v += unit) g += `<line class="grid" x1="${L}" x2="${W - R}" y1="${rnd(Y(v))}" y2="${rnd(Y(v))}"/><text x="${L - 8}" y="${rnd(Y(v) + 4)}" text-anchor="end">${v}</text>`;
    const longRange = b.windowDays >= 300;               /* year ranges: the year is shown beside the first label and every January */
    const dfmt = d => longRange ? d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }) : shortDate(d);
    const range = x => b.step === 1 ? dfmt(x.end) : `${dfmt(x.start)} – ${dfmt(x.end)}`;
    let prevMonth = -1;
    b.forEach((x, i) => {
      if (!labelled(i)) return;
      const firstEver = prevMonth === -1, first = x.end.getUTCMonth() !== prevMonth; prevMonth = x.end.getUTCMonth();
      g += `<line class="grid" x1="${rnd(X(i))}" x2="${rnd(X(i))}" y1="${T}" y2="${T + ih}"/><text x="${rnd(X(i))}" y="${T + ih + 16}" text-anchor="middle">${x.end.getUTCDate()}</text>`;
      if (first) g += `<text x="${rnd(X(i))}" y="${T + ih + 30}" text-anchor="middle">${esc(x.end.toLocaleDateString("en-GB", { month: "short", timeZone: "UTC" }) + (longRange && (firstEver || x.end.getUTCMonth() === 0) ? " " + x.end.getUTCFullYear() : ""))}</text>`;
    });
    g += `<line class="axis" x1="${L}" x2="${L}" y1="${T}" y2="${T + ih}"/><line class="axis" x1="${L}" x2="${W - R}" y1="${T + ih}" y2="${T + ih}"/>`;
    const dotR = b.length > 40 ? 2.5 : b.length > 20 ? 3 : 3.5;
    /* A zero day gets an outlined point only where the line drops from activity to zero; runs of quiet days get none */
    const showDot = (s, i) => b[i][s.key] > 0 || (i > 0 && b[i - 1][s.key] > 0);
    ser.forEach(s => {
      const pts = b.map((x, i) => [X(i), Y(x[s.key])]);
      g += `<path class="line ${s.cls}" pathLength="1" d="${smoothPath(pts)}"/>`;
      pts.forEach((p, i) => { if (!showDot(s, i)) return; g += `<circle class="dot ${s.cls}" cx="${rnd(p[0])}" cy="${rnd(p[1])}" r="${dotR}" style="--f:${(i / (b.length - 1)).toFixed(3)}"><title>${esc(range(b[i]))}: ${plural(b[i][s.key], s.one, s.many)}</title></circle>`; });
    });
    const total = b.reduce((a, x) => a + x.commits, 0);
    const summary = (total ? `${plural(total, "commit", "commits")} across ${plural(b.repoCount || 0, "repository", "repositories")}, active on ${b.activeDays} of ${b.windowDays} days` : "No activity in this period") + " · public activity only" + (fetchedAt ? ` · updated ${new Date(fetchedAt).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: DATA.timezone })}` : "");
    return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="GitHub activity: ${esc(summary)}">${g}</svg>
      <ul class="legend">${ser.map(s => `<li><i class="sw ${s.cls === "s-a" ? "a" : "b"}"></i>${esc(s.name)}</li>`).join("")}</ul>
      <p class="meta note">${esc(summary)}</p>
      <table class="sr"><caption>GitHub activity by date</caption><tr><th>Date</th>${ser.map(s => `<th>${esc(s.name)}</th>`).join("")}</tr>${b.map(x => `<tr><td>${esc(range(x))}</td>${ser.map(s => `<td>${x[s.key]}</td>`).join("")}</tr>`).join("")}</table>`;
  }

  /* "one point per day / week / 30 days", and the matching label spacing */
  const spanName = (cfg, n) => cfg.step === 1 ? (n === 1 ? "day" : `${n} days`) : cfg.step === 7 ? (n === 1 ? "week" : `${n} weeks`) : `${n * cfg.step} days`;
  const rangeBar = () => `<div class="range-bar" role="group" aria-label="Time range">${DATA.activity.ranges.map((r, i) => `<button class="range-btn${i === state.range ? " active" : ""}" data-range="${i}" aria-pressed="${i === state.range}">${esc(r.label)}</button>`).join("")}</div>`;

  /* ---------- Loading bar for the activity graph: it follows the real steps the graph waits for ----------
     LOAD_WEIGHTS = how much of the bar each step is worth (the weights are added up and scaled to 100%):
     snapshot = the data file, repos = the repository list, commits = reading the commits (one share per repository), chart = drawing it. */
  const LOAD_WEIGHTS = { snapshot: 10, repos: 20, commits: 60, chart: 10 };
  const loadProg = { snapshot: 0, repos: 0, commits: 0, chart: 0, label: "Loading repositories" };
  const loadPct = () => {
    const w = LOAD_WEIGHTS, sum = w.snapshot + w.repos + w.commits + w.chart;
    return Math.round(Math.min(1, (w.snapshot * loadProg.snapshot + w.repos * loadProg.repos + w.commits * loadProg.commits + w.chart * loadProg.chart) / sum) * 100);
  };
  const loadBarHtml = () => { const p = loadPct(); return `<div class="load-wrap"><p class="meta" id="loadLabel">${esc(loadProg.label)} &middot; ${p}%</p><div class="load-bar" id="loadBar" role="progressbar" aria-label="Loading the activity graph" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${p}"><i style="width:${p}%"></i></div></div>`; };
  /* Records a finished step and moves the bar in place (the page is not redrawn) */
  const setLoad = (part, label) => {
    Object.assign(loadProg, part); if (label) loadProg.label = label;
    const bar = $("#loadBar"), text = $("#loadLabel"); if (!bar || !text) return;
    const p = loadPct(); bar.setAttribute("aria-valuenow", p); bar.firstElementChild.style.width = p + "%"; text.innerHTML = `${esc(loadProg.label)} &middot; ${p}%`;
  };

  const activityHtml = () => {
    const a = state.activity, cfg = DATA.activity.ranges[state.range] || DATA.activity.ranges[0];
    const sub = `<p class="meta">Last ${esc(cfg.label)} &middot; one point per ${spanName(cfg, 1)}, labelled every ${spanName(cfg, cfg.labelEvery)}</p>`;
    let body;
    if (a.status === "loading") body = loadBarHtml() + (a.lastChart ? `<div class="is-loading">${a.lastChart}</div>` : "");
    else if (a.status === "error") body = `<p class="placeholder">My activity could not be loaded at this time. Please view it directly on <a href="https://github.com/${DATA.githubUser}" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>`;
    else body = a.chart;
    return sub + body + invZone() + rangeBar();
  };

  /* ---------- Space invader: a small game in the empty space of the activity box ----------
     The ship is ready as soon as the box is drawn. Left and right arrows move it, the up arrow shoots (and starts the game), and every shot
     erodes the text and graph above, tile by tile. R restores everything, and so does switching the time range. It is only a drawing laid over
     the box: the real text and graph underneath are never changed, so screen readers and copying are unaffected. */
  /* THE PLAYER: redraw it here. X is a block and . is empty; keep every row the same length and use about 12 rows or fewer.
     The size, movement and shooting adjust to whatever is drawn. */
  const SHIP = ["......X......", ".....XXX.....", ".XXXXXXXXXXX.", "XXXXXXXXXXXXX", "XXXXXXXXXXXXX", "XXXXXXXXXXXXX"];
  const PX = 4, SHIP_W = SHIP[0].length * PX, SHIP_H = SHIP.length * PX;          /* the sprite: 13 x 6 blocks of 4 pixels */
  const TILE = 10, SHIP_SPEED = 300, BULLET_SPEED = 560, FIRE_DELAY = 0.24;       /* tile size (px), ship speed (px/s), bullet speed (px/s), seconds between shots */
  /* The cheat code: up, up, down, down multiplies the fire rate by CHEAT_RATE (enter it again to switch it off) */
  const CHEAT = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown"], CHEAT_RATE = 2;
  /* The end of the game: once INV_DOOM per cent is destroyed the page glitches for DOOM_GLITCH seconds, a fake blue screen follows for DOOM_BSOD seconds, and the page reloads */
  const INV_DOOM = 88, DOOM_GLITCH = 3.5, DOOM_BSOD = 5;
  const INV_HINT = "&larr; &rarr; move &middot; &uarr; shoot";
  const invZone = () => DATA.activity.invaders === false ? "" : `<div class="invader-zone" id="invader" aria-hidden="true"><span class="invader-hint">${INV_HINT}${rapidNote()}</span></div>`;
  const rapidNote = () => inv.rapid ? ` &middot; rapid fire &times;${CHEAT_RATE}` : "";
  const inv = { card: null, cv: null, ctx: null, scar: null, sctx: null, ro: null, raf: 0, last: 0, dpr: 1, g: null, col: null, ratio: null, x: 0, cool: 0,
    held: { l: false, r: false, u: false }, bullets: [], parts: [], dead: new Set(), content: new Set(), hit: 0, started: false, pct: -1, doom: false, rapid: false, codeKeys: [] };
  const tileKey = (c, r) => r * 4096 + c;
  const invShipY = () => Math.max(inv.g.zy, inv.g.zy + inv.g.zh - SHIP_H - 6);

  /* Where the text lines, the drawn graph lines and dots and the legend swatches are, measured relative to the box, so shots only hit things that are really there */
  function invTargets() {
    const c = inv.card, cr = c.getBoundingClientRect(), ox = cr.left + c.clientLeft, oy = cr.top + c.clientTop, out = [];
    const add = r => { if (r.width > 1 && r.height > 1) out.push({ x: r.left - ox, y: r.top - oy, w: r.width, h: r.height }); };
    const walker = document.createTreeWalker(c, NodeFilter.SHOW_TEXT);
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
      if (!n.nodeValue.trim() || n.parentElement.closest(".range-bar, .invader-zone, .sr")) continue;
      const rg = document.createRange(); rg.selectNodeContents(n); [...rg.getClientRects()].forEach(add);
    }
    c.querySelectorAll(".sw").forEach(el => add(el.getBoundingClientRect()));
    c.querySelectorAll("svg.chart path, svg.chart line, svg.chart circle").forEach(el => {   /* the drawn lines and dots, measured point by point, so the empty parts of the graph are not targets */
      const m = el.getScreenCTM(); if (!m || !el.getTotalLength) return;
      const len = el.getTotalLength();
      for (let d = 0; d <= len; d += 4) { const p = el.getPointAtLength(d); out.push({ x: m.a * p.x + m.c * p.y + m.e - ox - 1, y: m.b * p.x + m.d * p.y + m.f - oy - 1, w: 2, h: 2 }); }
    });
    return out;
  }

  function invLayout() {
    const c = inv.card, z = $("#invader");
    if (!c || !z || !c.isConnected) return;
    const cw = c.clientWidth, ch = c.clientHeight; if (!cw || !ch) return;
    const cr = c.getBoundingClientRect(), zr = z.getBoundingClientRect();
    inv.dpr = Math.min(2, window.devicePixelRatio || 1);
    inv.g = { cw, ch, zy: zr.top - cr.top - c.clientTop, zh: zr.height };
    [inv.cv, inv.scar].forEach(el => { el.width = Math.round(cw * inv.dpr); el.height = Math.round(ch * inv.dpr); });
    inv.sctx.setTransform(inv.dpr, 0, 0, inv.dpr, 0, 0); inv.sctx.fillStyle = inv.col.bg;
    inv.content = new Set();
    invTargets().forEach(t => { for (let r = Math.floor(t.y / TILE); r <= Math.floor((t.y + t.h) / TILE); r++) for (let k = Math.floor(t.x / TILE); k <= Math.floor((t.x + t.w) / TILE); k++) if (r >= 0 && k >= 0) inv.content.add(tileKey(k, r)); });
    inv.hit = 0;
    inv.dead.forEach(key => { if (inv.content.has(key)) inv.hit++; inv.sctx.fillRect((key % 4096) * TILE, Math.floor(key / 4096) * TILE, TILE, TILE); });
    inv.x = inv.ratio == null ? (cw - SHIP_W) / 2 : inv.ratio * (cw - SHIP_W);
    inv.pct = -1; invDraw(); invHint();
  }

  function invDraw() {
    const ctx = inv.ctx, g = inv.g; if (!ctx || !g) return;
    ctx.setTransform(inv.dpr, 0, 0, inv.dpr, 0, 0);
    ctx.clearRect(0, 0, g.cw, g.ch);
    ctx.drawImage(inv.scar, 0, 0, g.cw, g.ch);                                   /* the erased tiles */
    const y0 = invShipY(), x0 = Math.round(inv.x);
    ctx.fillStyle = inv.col.ship;
    SHIP.forEach((row, r) => { for (let k = 0; k < row.length; k++) if (row[k] === "X") ctx.fillRect(x0 + k * PX, y0 + r * PX, PX, PX); });
    ctx.fillStyle = inv.col.bullet;
    inv.bullets.forEach(b => ctx.fillRect(Math.round(b.x) - 1, Math.round(b.y), 2, 10));
    inv.parts.forEach(p => { ctx.globalAlpha = Math.max(0, p.life / p.max); ctx.fillStyle = p.color; ctx.fillRect(Math.round(p.x), Math.round(p.y), 2, 2); });
    ctx.globalAlpha = 1;
  }

  function invHint() {
    const h = $("#invader .invader-hint");
    if (!h || !inv.started) return;
    const pct = inv.content.size ? Math.min(100, Math.round(inv.hit / inv.content.size * 100)) : 0;
    if (pct !== inv.pct) { inv.pct = pct; h.innerHTML = `${pct}% destroyed &middot; R restores${rapidNote()}`; }
  }

  /* A shot flies upwards in small steps (so it cannot jump over anything) and explodes on the first tile of text or graph that is still there */
  function invMoveBullet(b, dist) {
    for (let d = 0; d < dist; d += 4) {
      b.y -= Math.min(4, dist - d);
      if (b.y < -12) return false;
      const col = Math.floor(b.x / TILE), row = Math.floor(b.y / TILE), key = tileKey(col, row);
      if (inv.content.has(key) && !inv.dead.has(key)) { invExplode(col, row, b.x, b.y); return false; }
    }
    return true;
  }
  function invExplode(col, row, x, y) {
    for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) {
      if ((dr || dc) && Math.random() > 0.55) continue;                            /* a ragged crater, not a perfect square */
      const c = col + dc, r = row + dr, key = tileKey(c, r);
      if (c < 0 || r < 0 || r * TILE >= inv.g.zy || inv.dead.has(key)) continue;
      inv.dead.add(key); inv.sctx.fillRect(c * TILE, r * TILE, TILE, TILE);
      if (inv.content.has(key)) inv.hit++;
    }
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) for (let i = 0; i < 12; i++) inv.parts.push({ x, y, vx: (Math.random() - .5) * 220, vy: -Math.random() * 160, life: .5, max: .5, color: inv.col.spark[i % inv.col.spark.length] });
    invHint();
    if (!inv.doom && inv.content.size && inv.hit / inv.content.size >= INV_DOOM / 100) invDoom();
  }

  function invTick(ts) {
    inv.raf = 0;
    if (inv.doom) return;
    if (!inv.card || !inv.card.isConnected || !inv.g) return;
    const dt = Math.min(0.05, (ts - (inv.last || ts)) / 1000); inv.last = ts;
    const g = inv.g, dir = (inv.held.r ? 1 : 0) - (inv.held.l ? 1 : 0);
    if (dir) { inv.x = Math.max(6, Math.min(g.cw - SHIP_W - 6, inv.x + dir * SHIP_SPEED * dt)); inv.ratio = inv.x / Math.max(1, g.cw - SHIP_W); }
    inv.cool -= dt;
    if (inv.held.u && inv.cool <= 0 && inv.bullets.length < (inv.rapid ? 8 * CHEAT_RATE : 8)) {
      inv.bullets.push({ x: inv.x + SHIP_W / 2, y: invShipY() - 10 }); inv.cool = FIRE_DELAY / (inv.rapid ? CHEAT_RATE : 1);
      if (!inv.started) { inv.started = true; invHint(); }                         /* the game starts with the first shot */
    }
    inv.bullets = inv.bullets.filter(b => invMoveBullet(b, BULLET_SPEED * dt));
    inv.parts = inv.parts.filter(p => { p.life -= dt; p.vy += 520 * dt; p.x += p.vx * dt; p.y += p.vy * dt; return p.life > 0; });
    invDraw();
    if (dir || inv.held.u || inv.bullets.length || inv.parts.length) inv.raf = requestAnimationFrame(invTick); else inv.last = 0;   /* idle: no animation running */
  }
  const invWake = () => { if (!inv.raf && inv.card && inv.g && !inv.doom) { inv.last = 0; inv.raf = requestAnimationFrame(invTick); } };

  function invReset() {
    inv.dead.clear(); inv.bullets = []; inv.parts = []; inv.hit = 0; inv.started = false; inv.pct = -1; inv.cool = 0;
    if (inv.sctx && inv.g) inv.sctx.clearRect(0, 0, inv.g.cw, inv.g.ch);
    const h = $("#invader .invader-hint"); if (h) h.innerHTML = INV_HINT + rapidNote();
    invDraw();
  }

  /* ---------- The end of the game: glitch, "Invaders!", a fake blue screen, then a full reload with everything reset ---------- */
  const fakeQr = () => {
    const n = 21, cells = [];
    const inFinder = (x, y) => (x < 8 && y < 8) || (x > n - 9 && y < 8) || (x < 8 && y > n - 9);
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (!inFinder(x, y) && Math.random() < 0.5) cells.push(`<rect x="${x}" y="${y}" width="1" height="1"/>`);
    const finder = (x, y) => `<rect x="${x}.5" y="${y}.5" width="6" height="6" fill="none" stroke="#0078d7" stroke-width="1"/><rect x="${x + 2}" y="${y + 2}" width="3" height="3"/>`;
    return `<svg class="doom-qr" viewBox="-2 -2 ${n + 4} ${n + 4}" fill="#0078d7" aria-hidden="true">${cells.join("")}${finder(0, 0)}${finder(n - 7, 0)}${finder(0, n - 7)}</svg>`;
  };
  /* Thin coloured bars that tear across the screen, moved again every fraction of a second */
  function doomTears(box) {
    box.innerHTML = Array.from({ length: 7 }, (_, i) => `<i style="top:${(Math.random() * 96).toFixed(1)}%;left:${(Math.random() * 25).toFixed(1)}%;width:${(55 + Math.random() * 45).toFixed(1)}%;height:${(0.6 + Math.random() * 2.2).toFixed(1)}%;background:${["#ff2a6d", "#05d9e8", "#f9f871"][i % 3]};transform:translateX(${((Math.random() - .5) * 40).toFixed(0)}px)"></i>`).join("");
  }
  function doomBlueScreen(box) {
    box.className = "bsod";
    box.innerHTML = `<span class="sr">The page has been overrun and is restarting.</span>
      <div class="doom-bsod" aria-hidden="true"><div class="face">:(</div>
        <p>Your portfolio ran into a problem and needs to restart. We&rsquo;re just collecting some error info, and then we&rsquo;ll restart for you.</p>
        <p class="pct"><span id="doomPct">0</span>% complete</p>
        <div class="info">${fakeQr()}<div><p>For more information about this issue and possible fixes, visit the nearest arcade.</p>
          <p>If you call a support person, give them this info:<br>Stop code: INVADERS_DESTROYED_THE_PAGE<br>What failed: Jscript.js</p></div></div></div>`;
    const pct = box.querySelector("#doomPct"), t0 = Date.now();
    const timer = setInterval(() => { pct.textContent = Math.min(100, Math.floor((Date.now() - t0) / (DOOM_BSOD * 10))); }, 100);
    setTimeout(() => { clearInterval(timer); location.reload(); }, DOOM_BSOD * 1000);   /* a full reload: the graph is restored and the ship is centred again */
  }
  function invDoom() {
    if (inv.doom) return;
    inv.doom = true; inv.held.l = inv.held.r = inv.held.u = false;
    if (inv.raf) { cancelAnimationFrame(inv.raf); inv.raf = 0; }
    const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;           /* no glitching or flashing for visitors who ask for less motion */
    const box = document.createElement("div");
    box.id = "doom"; box.setAttribute("role", "alert");
    box.innerHTML = `<span class="sr">The page has been overrun and will restart in a few seconds.</span>` + (calm ? "" :
      `<div class="doom-dim" aria-hidden="true"></div><div class="doom-title" aria-hidden="true"><span>Invaders!</span></div><div class="doom-tears" aria-hidden="true"></div><div class="doom-scan" aria-hidden="true"></div>`);
    document.body.appendChild(box);
    if (document.fonts && document.fonts.load) document.fonts.load('italic 900 40px "Back to the Future"').catch(() => {});
    let tears = 0;
    if (!calm) {
      const t = box.querySelector(".doom-tears");
      document.body.classList.add("doom-glitch"); doomTears(t); tears = setInterval(() => doomTears(t), 140);
    }
    setTimeout(() => { clearInterval(tears); document.body.classList.remove("doom-glitch"); doomBlueScreen(box); }, calm ? 0 : DOOM_GLITCH * 1000);
  }

  /* Called whenever the activity box has been drawn (or redrawn with new data, which also restores the text and graph) */
  function mountInvaders() {
    if (inv.ro) { inv.ro.disconnect(); inv.ro = null; }
    if (inv.raf) { cancelAnimationFrame(inv.raf); inv.raf = 0; }
    const card = $("#activity");
    if (!card || !$("#invader")) { inv.card = null; return; }
    const cs = getComputedStyle(document.documentElement), v = (n, d) => cs.getPropertyValue(n).trim() || d;
    inv.col = { ship: v("--teal", "#4ec9b0"), bullet: v("--fg", "#fff"), bg: v("--bg", "#000"), spark: [v("--teal", "#4ec9b0"), v("--blue", "#569cd6"), v("--fg", "#fff")] };
    inv.card = card;
    inv.cv = document.createElement("canvas"); inv.cv.className = "invader-canvas"; inv.cv.setAttribute("aria-hidden", "true");
    card.appendChild(inv.cv);
    inv.ctx = inv.cv.getContext("2d"); inv.scar = document.createElement("canvas"); inv.sctx = inv.scar.getContext("2d");
    inv.dead = new Set(); inv.bullets = []; inv.parts = []; inv.hit = 0; inv.started = false; inv.pct = -1; inv.cool = 0;
    invLayout();                                                                   /* the ship is drawn straight away, ready for play */
    inv.ro = new ResizeObserver(invLayout); inv.ro.observe(card);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(invLayout);
  }

  /* The keys only work while the whole game area is on screen, so the arrow keys still scroll the page everywhere else */
  const invLive = () => {
    const z = $("#invader"), p = $("#pane");
    if (!z || !p || !inv.card || !inv.card.isConnected) return false;
    const r = z.getBoundingClientRect(), pr = p.getBoundingClientRect();
    return r.width > 0 && r.top >= pr.top && r.bottom <= pr.bottom;
  };
  /* Follows the cheat code. It is recognised even after extra key presses (up, up, up, down, down still works).
     Returns true when the latest keys form the start of the code, so a Down that belongs to it is not used for scrolling. */
  function invCode(k) {
    const keys = inv.codeKeys; keys.push(k); if (keys.length > CHEAT.length) keys.shift();
    let n = 0;                                                                   /* how much of the code the latest keys already form */
    for (let m = keys.length; m > 0; m--) if (keys.slice(-m).every((x, i) => x === CHEAT[i])) { n = m; break; }
    if (n === CHEAT.length) {
      keys.length = 0; inv.rapid = !inv.rapid; inv.pct = -1;
      if (inv.started) invHint(); else { const h = $("#invader .invader-hint"); if (h) h.innerHTML = INV_HINT + rapidNote(); }
    }
    return n > 0;
  }
  document.addEventListener("keydown", ev => {
    const k = ev.key;
    if (inv.doom) { if (k.startsWith("Arrow") || k === " ") ev.preventDefault(); return; }   /* the game is over */
    if (!inv.card || ev.ctrlKey || ev.metaKey || ev.altKey) return;
    const t = ev.target; if (t && (/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable)) return;
    if (!invLive()) { inv.codeKeys.length = 0; return; }
    const part = ev.repeat || k === "Shift" ? false : invCode(k);                              /* the cheat code: up, up, down, down */
    if (k !== "ArrowLeft" && k !== "ArrowRight" && k !== "ArrowUp" && k !== "ArrowDown" && k !== "r" && k !== "R") return;
    if (k === "ArrowDown") { if (part) ev.preventDefault(); return; }                          /* down only belongs to the game while the code is entered; otherwise it scrolls as usual */
    if (k === "r" || k === "R") { if (!ev.repeat) invReset(); return; }
    ev.preventDefault();
    if (k === "ArrowLeft") inv.held.l = true; else if (k === "ArrowRight") inv.held.r = true; else inv.held.u = true;
    invWake();
  });
  document.addEventListener("keyup", ev => { if (ev.key === "ArrowLeft") inv.held.l = false; else if (ev.key === "ArrowRight") inv.held.r = false; else if (ev.key === "ArrowUp") inv.held.u = false; });
  window.addEventListener("blur", () => { inv.held.l = inv.held.r = inv.held.u = false; });

  /* Commits are read straight from each public repository, so they appear as soon as they are pushed (the public events feed can lag by hours) */
  async function loadActivity(days) {
    if (state.reposStatus !== "ok") throw new Error("Repositories unavailable");
    days = Math.max(2, Math.min(730, days));
    const cacheKey = "dsv-commits-v3:" + days;
    const cached = cacheGet(cacheKey); if (cached) { setLoad({ commits: 1 }, "Drawing the graph"); return cached; }
    const since = addDays(new Date(tzKey(new Date()) + "T00:00:00Z"), -days).toISOString(); /* a day of margin; the buckets do the exact cut */
    const snap = state.snapshot, live = state.source === "live";
    const snapCovers = !!snap && (snap.days || 0) >= days;   /* an older snapshot may not reach back far enough for the longer ranges */
    const snapCommits = n => snap ? snap.commits.filter(c => c.repo === n) : [];
    const liveCommits = async r => {
      const out = [];
      const pages = days > 90 ? 10 : 3;
      for (let page = 1; page <= pages; page++) {
        const res = await gh(`https://api.github.com/repos/${DATA.githubUser}/${encodeURIComponent(r.name)}/commits?author=${DATA.githubUser}&since=${since}&per_page=100&page=${page}`);
        if (res.status === 409) return out;              /* an empty repository */
        if (!res.ok) throw new Error(res.status);
        const batch = await res.json();
        out.push(...batch.map(c => ({ date: c.commit.author.date, repo: r.name })));
        if (batch.length < 100) break;
      }
      return out;
    };
    const active = state.rawRepos.filter(r => new Date(r.pushed_at) >= new Date(since));
    let finished = 0;
    const repoWord = n => plural(n, "repository", "repositories");
    setLoad({ commits: active.length ? 0 : 1 }, active.length ? `Reading commits (0 of ${repoWord(active.length)})` : "Drawing the graph");
    const results = await Promise.allSettled(active.map(async r => {
      try {
        if (snapCovers && snapCurrent(r)) return snapCommits(r.name);    /* the snapshot already holds everything up to the latest push */
        try { return await liveCommits(r); }
        catch (e) { if (snapRepo(r.name)) return snapCommits(r.name); throw e; }
      } finally { finished++; setLoad({ commits: finished / active.length }, finished < active.length ? `Reading commits (${finished} of ${repoWord(active.length)})` : "Drawing the graph"); }
    }));
    if (active.length && results.every(x => x.status === "rejected")) {
      let saved = null; try { saved = JSON.parse(localStorage.getItem("dsv-commits-saved:" + days)); } catch (e) { /* none */ }
      if (saved && Array.isArray(saved.data)) return saved;   /* the last good result, with its own time */
      throw new Error("Commits unavailable");
    }
    const commits = results.flatMap(x => x.status === "fulfilled" ? x.value : []);
    const t = live || !snap ? Date.now() : Date.parse(snap.generatedAt);
    const complete = !results.some(x => x.status === "rejected");
    if (complete) { try { localStorage.setItem("dsv-commits-saved:" + days, JSON.stringify({ t, data: commits })); } catch (e) { /* storage unavailable */ } }
    return complete && live ? cacheSet(cacheKey, commits) : { t, data: commits };
  }

  /* ---------- GitHub availability (GitHub's own incident reports, one square per day) ---------- */
  const STATUS_API = "https://www.githubstatus.com/api/v2/incidents.json";
  const IMPACT = { minor: 1, major: 2, critical: 3 };               /* incidents whose impact is "none" are ignored */
  const IMPACT_NAME = ["no incidents", "minor", "major", "critical"];
  const hm = m => m < 60 ? `${m} min` : `${Math.floor(m / 60)} h ${String(m % 60).padStart(2, "0")} min`;

  /* Time is measured in one-minute slots, so incidents that overlap are never counted twice. Days follow the configured time zone. */
  function statusDays(incidents, n) {
    const SLOT = 60000, now = Date.now(), from = now - (n + 1) * 864e5;
    const dayFmt = new Intl.DateTimeFormat("en-CA", { timeZone: DATA.timezone });
    const keyOf = slot => dayFmt.format(new Date(slot * SLOT));
    const best = new Map(), owner = [], days = new Map();
    incidents.forEach(i => {
      const rank = IMPACT[i.impact] || 0, a = Date.parse(i.started), z = i.resolved ? Date.parse(i.resolved) : now;
      if (!rank || !(a < z) || z < from) return;
      for (let s = Math.floor(Math.max(a, from) / SLOT); s * SLOT < z; s++) { best.set(s, Math.max(best.get(s) || 0, rank)); owner.push([s, i.id]); }
    });
    const day = key => { if (!days.has(key)) days.set(key, { minutes: 0, rank: 0, ids: new Set() }); return days.get(key); };
    best.forEach((rank, s) => { const d = day(keyOf(s)); d.minutes += 1; d.rank = Math.max(d.rank, rank); });
    owner.forEach(([s, id]) => day(keyOf(s)).ids.add(id));
    const base = new Date(tzKey(new Date()) + "T00:00:00Z");
    return Array.from({ length: n }, (_, i) => {
      const date = addDays(base, -(n - 1 - i)), d = days.get(date.toISOString().slice(0, 10)) || { minutes: 0, rank: 0, ids: new Set() };
      return { date, minutes: d.minutes, rank: d.rank, count: d.ids.size };
    });
  }

  /* The data file written by the GitHub Action comes first (no request limit); the live status API is the fallback */
  async function getStatus() {
    const cached = cacheGet("dsv-status-v1"); if (cached) return cached.data;
    let r = null;
    if (location.protocol !== "file:") {
      const snap = await fetch(DATA.status.snapshotFile, { cache: "no-cache" }).then(x => x.ok ? x.json() : null).catch(() => null);
      if (snap && Array.isArray(snap.incidents)) r = { data: snap.incidents, t: Date.parse(snap.generatedAt) || Date.now(), source: "snapshot" };
    }
    if (!r) {
      const res = await fetch(STATUS_API);
      if (!res.ok) throw new Error(res.status);
      const j = await res.json();
      r = { data: (j.incidents || []).map(i => ({ id: i.id, impact: i.impact, started: i.started_at || i.created_at, resolved: i.resolved_at || null })), t: Date.now(), source: "live" };
    }
    return cacheSet("dsv-status-v1", r).data;
  }

  /* The availability box's orbiting dots take the average colour (the mean of the red, green and blue values) of all its squares, as they look on screen,
     so the dots show the overall severity of the period. The square colours are set in the CSS only; they are read from there. */
  const rgbOf = s => { const m = /rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/.exec(s || ""); return m ? [1, 2, 3].map(i => +m[i]) : null; };
  function statusOrbit() {
    const g = state.gstatus; if (!g || g.status !== "ok" || !g.days.length) return null;
    const bg = rgbOf(getComputedStyle(document.body).backgroundColor) || [0, 0, 0];
    const look = [0, 1, 2, 3].map(r => {                       /* how a square of each severity really appears (faded squares blend into the background) */
      const p = document.createElement("i"); p.className = "sq r" + r; p.style.cssText = "position:absolute;visibility:hidden;pointer-events:none";
      document.body.appendChild(p); const cs = getComputedStyle(p), c = rgbOf(cs.backgroundColor), o = parseFloat(cs.opacity); p.remove();
      return c ? c.map((v, i) => v * o + bg[i] * (1 - o)) : null;
    });
    if (look.some(c => !c)) return null;
    return `rgb(${[0, 1, 2].map(i => Math.round(g.days.reduce((a, d) => a + look[d.rank][i], 0) / g.days.length)).join(",")})`;
  }
  const statusOrbitAttr = () => { const c = statusOrbit(); return c ? ` style="--orbit-color:${c}"` : ""; };

  const statusHtml = () => {
    const g = state.gstatus, n = DATA.status.days, head = `<p class="status-title">GitHub availability</p>`;
    if (g.status === "loading") return head + `<p class="meta">Loading GitHub's status history&hellip;</p>`;
    if (g.status === "error") return head + `<p class="meta">GitHub's status history could not be loaded at this time. Please see <a href="https://www.githubstatus.com" target="_blank" rel="noopener noreferrer">githubstatus.com</a>.</p>`;
    const total = g.days.reduce((a, d) => a + d.minutes, 0), pct = total / (n * 1440) * 100;
    const when = new Date(g.t).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: DATA.timezone });
    const summary = (total ? `An incident was open for ${hm(total)} (${pct < 0.01 ? "under 0.01" : pct.toFixed(2)}%) of the last ${n} days.` : `No incidents in the last ${n} days.`) + ` Updated ${when}.`;
    const tip = d => `${d.date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}: ${d.minutes ? `${plural(d.count, "incident", "incidents")}, ${hm(d.minutes)}, ${IMPACT_NAME[d.rank]}` : "no incidents"}`;
    return head + `<p class="meta">Last ${n} days &middot; one square per day</p>
      <div class="status-strip" role="img" aria-label="${esc(summary)}">${g.days.map(d => `<i class="sq r${d.rank}" title="${esc(tip(d))}"></i>`).join("")}</div>
      <ul class="status-legend"><li><i class="sq r0"></i>None</li><li><i class="sq r1"></i>Minor</li><li><i class="sq r2"></i>Major</li><li><i class="sq r3"></i>Critical</li></ul>
      <p class="meta note">${esc(summary)} <a href="https://github.com/${DATA.githubUser}/${DATA.githubUser}.github.io#github-availability" target="_blank" rel="noopener noreferrer">How this is measured</a></p>`;
  };
  async function loadStatus() {
    state.gstatus = { status: "loading" };
    try { const r = await getStatus(); state.gstatus = { status: "ok", days: statusDays(r.data, DATA.status.days), t: r.t, source: r.source }; }
    catch (err) { console.error("GitHub status error:", err); state.gstatus = { status: "error" }; }
    const el = $("#gh-status");
    if (el) { el.innerHTML = statusHtml(); const c = statusOrbit(); if (c) el.style.setProperty("--orbit-color", c); else el.style.removeProperty("--orbit-color"); }
  }

  /* ---------- Views ---------- */
  const entryDetail = (e, kind) => `
    <h1>${esc(e.title)}</h1>
    <div class="entry-head">${e.logo ? `<img src="${esc(e.logo)}" alt="Logo of ${esc(e.org)}">` : ""}
      <div><strong>${e.url ? `<a href="${esc(e.url)}" target="_blank" rel="noopener noreferrer">${esc(e.org)}</a>` : esc(e.org)}</strong>
      <div class="meta">${esc(e.period)}</div></div></div>
    <h2>${kind === "experience" ? "What I did" : "What it covers"}</h2>
    <ul class="plain">${(e.details || []).map(d => `<li>${esc(d)}</li>`).join("") || "<li>Details to be added.</li>"}</ul>`;

  const certRow = c => `<div class="cert-row" data-search="${esc([c.title, c.org, c.group, c.type].join(" ").toLowerCase())}">
      <button class="cert-title" data-open="certificates/${esc(c.id)}">${esc(c.title)}</button>
      <span class="tag">${esc(c.type)}</span><span class="meta">${c.date ? esc(fmtDate(c.date)) : ""}</span>
      <a class="cert-pdf" href="${esc(certHref(c))}" target="_blank" rel="noopener noreferrer" aria-label="Open the PDF for ${esc(c.title)}">PDF</a></div>`;

  const certOverview = () => {
    const total = DATA.certificates.length;
    if (!total) return `<h1>Certificates</h1><p class="placeholder">My certificates will appear here as I earn them.</p>`;
    const groups = [...certGroups()];
    return `<h1>Certificates</h1>
      <p>I have earned ${plural(total, "certificate", "certificates")} from ${plural(groups.length, "provider", "providers")}. They are grouped by provider, newest first. Select a title for the details, or open the PDF directly.</p>
      ${total > 5 ? `<div class="cert-tools"><label class="sr" for="certFilter">Filter certificates</label><input id="certFilter" type="search" placeholder="Filter by title, provider or type" autocomplete="off"><span class="meta" id="certCount" aria-live="polite"></span></div>` : ""}
      ${groups.map(([g, list], i) => `<details class="cert-group" data-group="${esc(g)}" ${(state.certFocus ? g === state.certFocus : true) ? "open" : ""}>
        <summary><span>${esc(g)}</span><span class="meta">${plural(list.length, "certificate", "certificates")} ${list[0].date ? ` &middot; latest ${esc(fmtDate(list[0].date))}` : ""}</span></summary>
        <div class="cert-list">${list.map(certRow).join("")}</div></details>`).join("")}`;
  };

  const certDetail = c => `
    <h1>${esc(c.title)}</h1>
    <div class="entry-head"><div><strong>${esc(c.org)}</strong>
      <div class="meta">${esc(c.type)}${c.date ? ` &middot; Completed ${esc(fmtDate(c.date))}` : ""}</div>
      ${c.credentialId ? `<div class="meta">Credential ID: ${esc(c.credentialId)}</div>` : ""}</div></div>
    <h2>About this certificate</h2>
    <ul class="plain">${(c.details || []).map(d => `<li>${esc(d)}</li>`).join("")}</ul>
    ${c.courses && c.courses.length ? `<h2>Courses in this learning path</h2><ul class="plain">${c.courses.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
    <p><a class="btn" href="${esc(certHref(c))}" target="_blank" rel="noopener noreferrer">View certificate (PDF)</a>
      ${c.url ? `<a class="btn" href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">Verify online</a>` : ""}
      <button class="btn" data-open="certificates">All certificates</button></p>`;

  const overview = (title, list, folder, emptyText, extra = "", heading = "") => `
    <h1>${title}</h1>
    ${list.length ? `${heading && extra ? `<h2>${heading}</h2>` : ""}<div class="facts">${list.map(e => `<button class="card${e.logo ? " has-logo" : ""}" data-open="${folder}/${esc(e.id)}">${e.logo ? `<img class="card-logo" src="${esc(e.logo)}" alt="">` : ""}<span class="card-text"><strong>${esc(e.title)}</strong><small>${esc(e.org)}</small><small>${esc(e.period)}</small></span></button>`).join("")}</div>`
      : `<p class="placeholder">${emptyText}</p>`}${extra}`;
  const certSection = () => {
    const n = DATA.certificates.length;
    if (!DATA.certificatesInEducation || !n) return "";
    const groups = [...certGroups()];
    return `<section class="edu-certs"><h2>Certificates</h2>
      <p>These are the short courses and learning paths I have completed alongside my degrees, from ${plural(groups.length, "provider", "providers")}.</p>
      <ul class="chips">${groups.map(([g, list]) => `<li class="jump"><button data-certjump="${esc(g)}" title="Show the ${esc(g)} certificates">${esc(g)} (${list.length})</button></li>`).join("")}</ul>
      <p><button class="btn" data-open="certificates">View all ${n} certificates</button></p></section>`;
  };

  const repoCards = (limit, compact) => {
    if (state.reposStatus === "loading") return `<p class="placeholder">Loading repositories from GitHub&hellip;</p>`;
    if (state.reposStatus === "error") return `<p class="placeholder">The repositories could not be loaded at this time. Please view them directly on <a href="https://github.com/${DATA.githubUser}?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>`;
    if (!state.repos.length) return `<p class="placeholder">No public repositories are available yet.</p>`;
    return `<div class="facts">${state.repos.slice(0, limit ?? 999).map(r => `<button class="card" data-open="projects/${esc(r.name)}"${orbitStyle(r)}><strong>${esc(r.name)}</strong>${langBox(r)}<small>Created ${esc(repoDay(r.created_at))}</small><small>Updated ${esc(repoDay(r.pushed_at))}</small>${compact
      ? ""
      : `<p>${esc(r.description || "Description to be added.")}</p>`}</button>`).join("")}</div>`;
  };

  const staticCards = list => `<div class="facts wide">${list.map(e => `<div class="card static"><strong>${esc(e.title)}</strong><small>${e.url ? `<a href="${esc(e.url)}" target="_blank" rel="noopener noreferrer">${esc(e.org)}</a>` : esc(e.org)}</small><small>${esc(e.period)}</small><ul class="plain">${(e.details || []).map(d => `<li>${esc(d)}</li>`).join("")}</ul></div>`).join("")}</div>`;
  const skillsHtml = () => Object.entries(DATA.skills).map(([k, v]) => `<h3>${esc(k)}</h3><ul class="chips">${v.map(s => `<li>${esc(s)}</li>`).join("")}</ul>`).join("");
  const contactBlock = () => `<div class="contact-card" id="contact-card"><p class="meta">Email address</p><p class="email">${esc(DATA.email)}</p>
      <button class="btn" data-copy="${esc(DATA.email)}">Copy address</button>
      <a class="btn" href="${esc(DATA.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a class="btn" href="https://github.com/${DATA.githubUser}" target="_blank" rel="noopener noreferrer">GitHub</a></div>`;

  const aboutCerts = () => {
    const n = DATA.certificates.length;
    if (!n) return '<p class="placeholder">My certificates will appear here as I earn them.</p>';
    return `<div class="facts">${sortedCerts().slice(0, DATA.aboutLimits.certificates).map(c => `<button class="card" data-open="certificates/${esc(c.id)}"><strong>${esc(c.title)}</strong><small>${esc(c.org)}</small>${c.date ? `<small>${esc(fmtDate(c.date))}</small>` : ""}</button>`).join("")}</div>
      ${n > DATA.aboutLimits.certificates ? `<p><button class="btn" data-open="certificates">View all ${n} certificates</button></p>` : ""}`;
  };

  const views = {
    about: () => `
      <div class="about-grid"><div class="about-intro">
      <div class="hero"><img src="${esc(DATA.photo)}" alt="Portrait of ${esc(DATA.name)}">
        <div><h1>${esc(DATA.name)}</h1><p class="role">${esc(DATA.role)}</p>
        <a class="btn" href="${esc(DATA.cv)}" download>Download CV (PDF)</a>
        <button class="btn" data-scroll="contact-card">Contact me</button></div></div>
      <h2>About me</h2><p>${esc(DATA.summary)}</p></div>
      <div class="status-card" id="gh-status"${statusOrbitAttr()}>${statusHtml()}</div>
      <aside class="about-side"><h2>GitHub Activity</h2><div class="activity-card" id="activity">${activityHtml()}</div></aside>
      <div class="about-rest">
      <h2>Education</h2>${staticCards(DATA.education)}
      <h2>Experience</h2>${DATA.experience.length ? staticCards(DATA.experience) : '<p class="placeholder">I will add further experience here as I gain it.</p>'}
      <h2>Skills and languages</h2>${skillsHtml()}
      <h2>Projects</h2>${repoCards(DATA.aboutLimits.projects, true)}
      ${state.repos.length > DATA.aboutLimits.projects ? `<p><button class="btn" data-open="projects">View all ${plural(state.repos.length, "project", "projects")}</button></p>` : ""}
      <h2>Certificates</h2>${aboutCerts()}
      <h2>Contact</h2>${contactBlock()}</div></div>`,
    experience: () => overview("Experience", DATA.experience, "experience", "I will add further experience here as I gain it."),
    education: () => overview("Education", DATA.education, "education", "My education details will appear here.", certSection(), "Degrees"),
    certificates: certOverview,
    projects: () => `<h1>Projects</h1><p>These are retrieved automatically from my public <a href="https://github.com/${DATA.githubUser}" target="_blank" rel="noopener noreferrer">GitHub profile</a>, so the list stays current as I build and contribute to new projects.</p><h2>Languages across all projects</h2>${pieSection()}<h2>Repositories</h2>${repoCards()}`,
    skills: () => `<h1>Skills</h1>${Object.entries(DATA.skills).map(([k, v]) => `<h2>${esc(k)}</h2><ul class="chips">${v.map(s => `<li>${esc(s)}</li>`).join("")}</ul>`).join("")}`,
    contact: () => `<h1>Contact</h1><p>If you would like to work with me, or simply to talk about a project, please get in touch. I will gladly reply as soon as I can.</p>${contactBlock()}`
  };

  /* Resolve any id (e.g. "projects/my-repo") to {title, html} */
  function resolve(id) {
    const [folder, child] = id.split("/");
    if (!child) return views[folder] ? { title: { about: "About.md", skills: "Skills.json", contact: "Contact.md" }[folder] || folder, html: views[folder]() } : null;
    if (folder === "projects") {
      const r = state.repos.find(x => x.name === child);
      return r ? { title: r.name, html: `<h1>${esc(r.name)}</h1><p class="meta">Created ${repoDay(r.created_at)} &middot; Updated ${repoDay(r.pushed_at)}</p>
        <p>${esc(r.description || "Description to be added.")}</p>
        <h2>Languages</h2>${langBox(r, true)}
        <p><a class="btn" href="${esc(r.html_url)}" target="_blank" rel="noopener noreferrer">View repository</a>
        ${r.homepage ? `<a class="btn" href="${esc(r.homepage)}" target="_blank" rel="noopener noreferrer">Live demonstration</a>` : ""}</p>` } : null;
    }
    if (folder === "certificates") {
      const c = DATA.certificates.find(x => x.id === child);
      return c ? { title: c.title, html: certDetail(c) } : null;
    }
    const e = DATA[folder] && DATA[folder].find && DATA[folder].find(x => x.id === child);
    return e ? { title: e.title, html: entryDetail(e, folder) } : null;
  }

  /* ---------- Tabs and pane ---------- */
  function open(id) {
    const v = resolve(id);
    if (!v) return;
    if (DATA.certificatesInEducation && id.split("/")[0] === "certificates") state.open.add("education");
    if (id.startsWith("certificates/")) {
      const c = DATA.certificates.find(x => x.id === id.split("/")[1]);
      if (c) { state.open.add("certificates"); state.open.add("cg:" + c.group); }
    }
    if (!state.tabs.includes(id)) state.tabs.push(id);
    state.active = id;
    history.replaceState(null, "", "#" + id);
    render();
    if (mobile()) setExplorer(false);
  }
  function close(id) {
    const i = state.tabs.indexOf(id);
    state.tabs.splice(i, 1);
    if (state.active === id) state.active = state.tabs[Math.max(0, i - 1)] || null;
    if (!state.active) { state.tabs.push("about"); state.active = "about"; }
    render();
  }
  function render() {
    $("#tabs").innerHTML = state.tabs.map(id => {
      const v = resolve(id); if (!v) return "";
      return `<div class="tab ${id === state.active ? "active" : ""}" role="tab" data-open="${esc(id)}" tabindex="0">${esc(v.title)}<span class="x" data-close="${esc(id)}" aria-label="Close tab">&times;</span></div>`;
    }).join("");
    const cur = resolve(state.active);
    const pane = $("#pane");
    pane.innerHTML = cur ? cur.html : "";
    pane.style.animation = "none"; void pane.offsetWidth; pane.style.animation = "";
    pane.scrollTop = 0;
    mountInvaders();
    $("#crumbs").textContent = "portfolio > " + ((DATA.certificatesInEducation && state.active.split("/")[0] === "certificates") ? "education/" : "") .concat(state.active).replace(/\//g, " > ");
    renderTree();
    loadLanguages();
  }

  /* ---------- Explorer tree ---------- */
  const badge = (t, c) => `<span class="badge" style="--c:${c}">${t}</span>`;

  /* A folder lists its files first, in alphabetical order, and then its sub-folders (the "extra" block) */
  const folderNode = (id, name, emptyText, children, extra = "") => {
    const isOpen = state.open.has(id);
    const sorted = [...children].sort((a, b) => byName(a.label, b.label));
    return `<div class="folder ${isOpen ? "open" : ""}"><button class="node ${state.active === id ? "active" : ""}" data-folder="${id}" style="--d:1" role="treeitem" aria-expanded="${isOpen}"><span class="chev">&#9654;</span><span class="label">${name}</span></button>
      <div class="kids"><div>${sorted.length ? sorted.map(c => `<button class="node ${state.active === id + "/" + c.id ? "active" : ""}" data-open="${id}/${esc(c.id)}" style="--d:3">${badge("MD", "var(--blue)")}<span class="label">${esc(c.label)}</span></button>`).join("") : (extra ? "" : `<div class="empty-note" style="--d:3">${emptyText}</div>`)}${extra}</div></div></div>`;
  };

  /* Certificates are nested by provider so the tree stays short as the list grows (providers and certificates A to Z) */
  const certFolder = (d = 1) => {
    const isOpen = state.open.has("certificates");
    const groups = [...certGroups()].sort((a, b) => byName(a[0], b[0]));
    const inner = groups.length ? groups.map(([g, list]) => {
      const gOpen = state.open.has("cg:" + g);
      list = [...list].sort((a, b) => byName(a.title, b.title));
      return `<div class="folder ${gOpen ? "open" : ""}"><button class="node" data-certgroup="${esc(g)}" style="--d:${d + 2}" aria-expanded="${gOpen}"><span class="chev">&#9654;</span><span class="label">${esc(g)} (${list.length})</span></button>
        <div class="kids"><div>${list.map(c => `<button class="node ${state.active === "certificates/" + c.id ? "active" : ""}" data-open="certificates/${esc(c.id)}" style="--d:${d + 4}">${badge("PDF", "var(--string)")}<span class="label">${esc(c.title)}</span></button>`).join("")}</div></div></div>`;
    }).join("") : `<div class="empty-note" style="--d:${d + 2}">Nothing added yet</div>`;
    return `<div class="folder ${isOpen ? "open" : ""}"><button class="node ${state.active === "certificates" ? "active" : ""}" data-folder="certificates" style="--d:${d}" role="treeitem" aria-expanded="${isOpen}"><span class="chev">&#9654;</span><span class="label">Certificates</span></button>
      <div class="kids"><div>${inner}</div></div></div>`;
  };

  /* Files first, then folders, each group in alphabetical order */
  function renderTree() {
    const file = (id, name, ext, c) => `<button class="node ${state.active === id ? "active" : ""}" data-open="${id}" style="--d:1">${badge(ext, c)}<span class="label">${name}</span></button>`;
    const kids = list => list.map(e => ({ id: e.id, label: e.title }));
    const repoKids = state.repos.map(r => ({ id: r.name, label: r.name }));
    const emptyRepos = state.reposStatus === "loading" ? "Loading&hellip;" : state.reposStatus === "error" ? "Unavailable" : "Nothing added yet";

    const folders = [
      { name: "Education",  html: folderNode("education", "Education", "Nothing added yet", kids(DATA.education), DATA.certificatesInEducation ? certFolder(3) : "") },
      { name: "Experience", html: folderNode("experience", "Experience", "Nothing added yet", kids(DATA.experience)) },
      { name: "Projects",   html: folderNode("projects", "Projects", emptyRepos, repoKids) },
      ...(DATA.certificatesInEducation ? [] : [{ name: "Certificates", html: certFolder(1) }])
    ].sort((a, b) => byName(a.name, b.name)).map(f => f.html).join("");

    const files = [
      { name: "About.md",    html: file("about", "About.md", "MD", "var(--blue)") },
      { name: "Contact.md",  html: file("contact", "Contact.md", "MD", "var(--blue)") },
      { name: "Skills.json", html: file("skills", "Skills.json", "{ }", "var(--fn)") }
    ].sort((a, b) => byName(a.name, b.name)).map(f => f.html).join("");

    $("#tree").innerHTML = `
      <button class="node" data-folder="portfolio" style="--d:0"><span class="chev" style="transform:${state.open.has("portfolio") ? "rotate(90deg)" : "none"}">&#9654;</span><span class="label"><strong>PORTFOLIO</strong></span></button>
      <div class="kids" style="grid-template-rows:${state.open.has("portfolio") ? "1fr" : "0fr"}"><div>${files}${folders}</div></div>`;
  }

  /* ---------- Events ---------- */
  function setExplorer(show) {
    const ex = $("#explorer");
    if (mobile()) { ex.classList.toggle("mobile-open", show); $("#scrim").classList.toggle("show", show); }
    else ex.classList.toggle("collapsed", !show);
    $("#explorerBtn").classList.toggle("active", show);
    $("#menuBtn").setAttribute("aria-expanded", show);
  }
  const explorerShown = () => mobile() ? $("#explorer").classList.contains("mobile-open") : !$("#explorer").classList.contains("collapsed");

  document.addEventListener("click", ev => {
    const x = ev.target.closest("[data-close]");
    if (x) { ev.stopPropagation(); return close(x.dataset.close); }
    const cp = ev.target.closest("[data-copy]");
    if (cp) {
      const done = () => { const t = cp.textContent; cp.textContent = "Copied"; setTimeout(() => cp.textContent = t, 2000); };
      if (navigator.clipboard) navigator.clipboard.writeText(cp.dataset.copy).then(done, () => prompt("Copy the address:", cp.dataset.copy));
      else prompt("Copy the address:", cp.dataset.copy);
      return;
    }
    const sc = ev.target.closest("[data-scroll]");
    if (sc) { const t = document.getElementById(sc.dataset.scroll); if (t) t.scrollIntoView({ behavior: "smooth", block: "center" }); return; }
    const rb = ev.target.closest("[data-range]");
    if (rb) { const i = +rb.dataset.range; if (i !== state.range) { state.range = i; loadRange(); } return; }
    const cj = ev.target.closest("[data-certjump]");
    if (cj) {
      const name = cj.dataset.certjump;
      state.certFocus = name; state.open.add("certificates"); state.open.add("cg:" + name);
      open("certificates"); state.certFocus = null;
      const t = [...document.querySelectorAll(".cert-group")].find(x => x.dataset.group === name);
      if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const g = ev.target.closest("[data-certgroup]");
    if (g) { const k = "cg:" + g.dataset.certgroup; state.open.has(k) ? state.open.delete(k) : state.open.add(k); renderTree(); return; }
    const f = ev.target.closest("[data-folder]");
    if (f) {
      const id = f.dataset.folder;
      state.open.has(id) && id === "portfolio" ? state.open.delete(id) : state.open.add(id);
      if (id !== "portfolio") { if (state.active === id) state.open.has(id) && state.open.delete(id); open(id); } else renderTree();
      return;
    }
    const o = ev.target.closest("[data-open]");
    if (o) { const id = o.dataset.open; const top = id.split("/")[0]; if (id.includes("/")) state.open.add(top); else if (!["about", "skills", "contact"].includes(id)) state.open.add(id); open(id); }
  });

  /* Certificate filter: hides non-matching rows and empty provider groups */
  document.addEventListener("input", ev => {
    if (ev.target.id !== "certFilter") return;
    const q = ev.target.value.trim().toLowerCase();
    let shown = 0;
    document.querySelectorAll(".cert-group").forEach(grp => {
      let n = 0;
      grp.querySelectorAll(".cert-row").forEach(r => { const hit = !q || r.dataset.search.includes(q); r.hidden = !hit; if (hit) n++; });
      grp.hidden = n === 0;
      if (q && n) grp.open = true;
      shown += n;
    });
    $("#certCount").textContent = q ? `Showing ${shown} of ${DATA.certificates.length}` : "";
  });

  document.addEventListener("keydown", ev => { if (ev.key === "Enter" && ev.target.classList.contains("tab")) open(ev.target.dataset.open); });
  $("#explorerBtn").addEventListener("click", () => setExplorer(!explorerShown()));
  $("#menuBtn").addEventListener("click", () => setExplorer(!explorerShown()));
  $("#scrim").addEventListener("click", () => setExplorer(false));

  /* ---------- Start ---------- */
  const start = location.hash.slice(1);
  open(start && resolve(start) ? start : "about");
  if (mobile()) setExplorer(false);

  /* Where the data comes from, in order:
     1. the snapshot file (same origin, so GitHub's request limit does not apply)
     2. one live GitHub request, which tops it up for anything pushed since the snapshot was made
     3. if GitHub refuses or is down: the snapshot alone, or else the last copy saved on this device */
  const fetchSnapshot = () => (location.protocol === "file:" ? Promise.resolve(null) : fetch(DATA.snapshotFile, { cache: "no-cache" }).then(r => r.ok ? r.json() : null).catch(() => null))
    .then(s => s && Array.isArray(s.repos) && s.commits && s.languages ? s : null);
  const cached = cacheGet("dsv-repos-v2");
  const liveRepos = fresh => cached && !fresh ? Promise.resolve(cached.data)
    : gh(`https://api.github.com/users/${DATA.githubUser}/repos?per_page=100&sort=pushed`)
        .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(repos => { cacheSet("dsv-repos-v2", repos); try { localStorage.setItem("dsv-repos-saved", JSON.stringify(repos)); } catch (e) { /* storage unavailable */ } return repos; });
  const loadRepos = fresh => fetchSnapshot().then(snap => {
    setLoad({ snapshot: 1 }, "Loading repositories");
    state.snapshot = snap; state.source = "live";
    return liveRepos(fresh).catch(err => {
      console.warn("Live GitHub data unavailable:", err);
      if (snap) { state.source = "snapshot"; return snap.repos; }
      let saved = null; try { saved = JSON.parse(localStorage.getItem("dsv-repos-saved")); } catch (e) { /* none */ }
      if (Array.isArray(saved) && saved.length) { state.source = "saved"; return saved; }
      throw err;
    });
  });

  const load = loadRepos(false);

  /* The blue status bar shows when the portfolio repository was last pushed to */
  const siteUpdated = iso => {
    const days = Math.round((new Date(tzKey(new Date()) + "T00:00:00Z") - new Date(tzKey(iso) + "T00:00:00Z")) / 864e5);
    const date = new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric", timeZone: DATA.timezone });
    return `Portfolio repository: ${date}; last update ${days <= 0 ? "today" : days + (days === 1 ? " day ago" : " days ago")}`;
  };

  const applyRepos = repos => {
      state.rawRepos = repos.filter(r => !r.fork);
      const site = repos.find(r => r.name.toLowerCase() === `${DATA.githubUser.toLowerCase()}.github.io`);
      state.repos = repos.filter(r => !r.fork && (DATA.showPortfolioRepo || r.name.toLowerCase() !== `${DATA.githubUser.toLowerCase()}.github.io`))
        .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
      state.reposStatus = "ok";
      setLoad({ repos: 1 }, "Reading commits");
      state.repos.forEach(r => { const l = snapCurrent(r) && snapLangs(r.name); if (l) state.langs[r.name] = l; });   /* no flash: the full bars are there on the first draw */
      const saved = state.snapshot && new Date(state.snapshot.generatedAt).toLocaleString("en-GB", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit", timeZone: DATA.timezone });
      const note = state.source === "snapshot" ? ` (live GitHub unavailable; data saved ${saved})` : state.source === "saved" ? " (live GitHub unavailable; saved copy)" : "";
      $("#statusRepos").textContent = (site ? siteUpdated(site.pushed_at) : `${plural(state.repos.length, "public repository", "public repositories")} loaded from GitHub`) + note;
  };
  const onRepoFail = err => {
    console.error("GitHub API error:", err);
    state.reposStatus = "error";
    const again = retries < 10 ? "; retrying automatically" : "; please try again later";
    $("#statusRepos").textContent = (state.rateLimited ? "GitHub's hourly request limit was reached" : "GitHub repositories unavailable") + again;
    scheduleRetry();
  };
  const finishLoad = () => { const s = location.hash.slice(1); if (s.startsWith("projects/") && !state.tabs.includes(s)) open(s); else render(); };
  const reposDone = load.then(applyRepos).catch(onRepoFail).finally(finishLoad);

  /* If nothing could be loaded and nothing is saved (for example on a first visit while GitHub is unreachable), try again by itself:
     every minute (up to ten times), whenever the connection returns and whenever the tab is shown again. The graph and the language bars then appear. */
  let retries = 0, retrying = false, retryTimer = null;
  const scheduleRetry = () => { if (retries >= 10 || location.protocol === "file:") return; retries++; clearTimeout(retryTimer); retryTimer = setTimeout(retryNow, 60000); };
  function retryNow() {
    if (retrying || state.reposStatus !== "error") return;
    retrying = true; clearTimeout(retryTimer);
    state.rateLimited = false; state.reposStatus = "loading"; render();
    $("#statusRepos").textContent = "Retrying GitHub\u2026";
    loadRepos(true).then(applyRepos)
      .then(() => { state.activity = { status: "loading", buckets: [] }; activityStarted = false; if (landscape.matches) startActivity(); })
      .catch(onRepoFail)
      .finally(() => { retrying = false; finishLoad(); });
  }
  window.addEventListener("online", retryNow);
  document.addEventListener("visibilitychange", () => { if (!document.hidden) retryNow(); });

  /* Full language breakdowns arrive after the repositories and are filled in without redrawing the page */
  reposDone.then(loadLanguages);

  /* The graph updates in place, so the page does not jump when the data arrives */
  /* Only for landscape screens (wider than tall); portrait screens skip the graph and its request */
  const landscape = matchMedia("(orientation: landscape)");
  let activityStarted = false, rangeToken = 0;
  const refreshActivity = () => {
    const el = $("#activity"); if (!el) return;
    const focused = document.activeElement && document.activeElement.dataset ? document.activeElement.dataset.range : undefined;
    el.innerHTML = activityHtml();
    mountInvaders();
    if (focused !== undefined) { const btn = el.querySelector(`[data-range="${focused}"]`); if (btn) btn.focus(); }   /* keep keyboard focus on the button just used */
  };
  /* Loads and draws the graph for the selected range. While a new range loads, the previous graph stays visible but dimmed. */
  function loadRange() {
    const cfg = DATA.activity.ranges[state.range] || DATA.activity.ranges[0], token = ++rangeToken;
    state.activity = { status: "loading", buckets: [], lastChart: state.activity.chart || state.activity.lastChart || "" };
    Object.assign(loadProg, { snapshot: state.reposStatus === "loading" ? loadProg.snapshot : 1, repos: state.reposStatus === "ok" ? 1 : 0, commits: 0, chart: 0,
      label: state.reposStatus === "ok" ? "Reading commits" : "Loading repositories" });   /* the steps already finished stay finished */
    refreshActivity();
    reposDone.then(() => loadActivity(cfg.days))
      .then(r => { if (token !== rangeToken) return; setLoad({ commits: 1 }, "Drawing the graph"); const b = buildBuckets(r.data, cfg); state.activity = { status: "ok", buckets: b, fetchedAt: r.t, chart: chartSvg(b, r.t) }; setLoad({ chart: 1 }); return new Promise(done => setTimeout(done, 300)); })   /* a moment at 100%, so the bar visibly finishes */
      .catch(err => { if (token !== rangeToken) return; console.error("Activity data error:", err); state.activity = { status: "error", buckets: [] }; })
      .finally(() => { if (token === rangeToken) refreshActivity(); });
  }
  function startActivity() {
    if (activityStarted) return;
    activityStarted = true;
    loadRange();
    loadStatus();
  }
  if (landscape.matches) startActivity();
  landscape.addEventListener("change", e => { if (e.matches) startActivity(); });
})();
