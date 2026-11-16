/* ==========================================================================
   EDIT THIS BLOCK TO UPDATE THE SITE. Add an object to an array and it
   appears in the explorer and its overview automatically.

   Certificates: add one object to DATA.certificates. The "group" field
   decides which provider folder it is filed under, and the site sorts
   everything newest first, so the order in this file does not matter.
   ========================================================================== */
const DATA = {
  name: "Denzel Stockenström Verster",
  role: "BSc Information Technology Graduate | Honours Student in Computer Science and IT",
  githubUser: "DSVerster",
  /* Time zone used to decide which day a commit belongs to, and to show dates (an IANA name, for example "Africa/Johannesburg") */
  timezone: "Africa/Johannesburg",
  /* Activity graph: window in days (one point per day, maximum 90) and how often a date label is shown.
     Both lines are calculated from the commits in my public repositories, so they always agree with each other. */
  activity: { days: 30, labelEvery: 2 },

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
  const state = { snapshot: null, source: "live", rateLimited: false, repos: [], reposStatus: "loading", open: new Set(["portfolio"]), tabs: [], active: null, activity: { status: "loading", buckets: [] }, certFocus: null, langs: {} };

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
  const fillLangs = () => document.querySelectorAll("[data-lang-repo]:not([data-done])").forEach(el => {
    const r = state.repos.find(x => x.name === el.dataset.langRepo);
    if (r && state.langs[r.name]) { el.innerHTML = langHtml(r); el.setAttribute("data-done", ""); }
  });
  const langRequested = new Set();
  async function loadLanguages() {
    if (state.reposStatus !== "ok") return;
    const wanted = new Set([...document.querySelectorAll("[data-lang-repo]:not([data-done])")].map(el => el.dataset.langRepo));
    await Promise.allSettled(state.repos.filter(r => wanted.has(r.name) && !langRequested.has(r.name)).map(async r => {
      langRequested.add(r.name);
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
      }
    }));
  }

  /* ---------- Activity graph (commits in public repositories, one point per day in the configured time zone) ---------- */
  const shortDate = d => d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", timeZone: "UTC" });
  const rnd = n => Math.round(n * 10) / 10;
  const addDays = (d, n) => { const x = new Date(d); x.setUTCDate(x.getUTCDate() + n); return x; };
  const tzKey = d => new Date(d).toLocaleDateString("en-CA", { timeZone: DATA.timezone }); /* YYYY-MM-DD in my time zone */
  const SERIES = [
    { key: "repos", cls: "s-a", name: "Repositories worked on", one: "repository", many: "repositories" },   /* green */
    { key: "commits", cls: "s-b", name: "Commits", one: "commit", many: "commits" }                          /* blue */
  ];

  /* Both lines come from the same commits, so a day with commits always shows at least one repository */
  function buildBuckets(commits) {
    const n = Math.max(2, Math.min(90, DATA.activity.days));
    const base = new Date(tzKey(new Date()) + "T00:00:00Z");
    const buckets = Array.from({ length: n }, (_, i) => ({ end: addDays(base, -(n - 1 - i)), commits: 0, repos: 0, _repos: new Set() }));
    const byKey = new Map(buckets.map(b => [b.end.toISOString().slice(0, 10), b]));
    const all = new Set();
    commits.forEach(c => {
      const b = byKey.get(tzKey(c.date));
      if (!b) return;
      b.commits += 1; b._repos.add(c.repo); all.add(c.repo);
    });
    buckets.forEach(b => { b.repos = b._repos.size; });
    buckets.repoCount = all.size;
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
    const every = Math.max(1, DATA.activity.labelEvery || 2);
    const labelled = i => (b.length - 1 - i) % every === 0; /* always includes the latest day */
    let g = "";
    for (let v = 0; v <= yMax; v += unit) g += `<line class="grid" x1="${L}" x2="${W - R}" y1="${rnd(Y(v))}" y2="${rnd(Y(v))}"/><text x="${L - 8}" y="${rnd(Y(v) + 4)}" text-anchor="end">${v}</text>`;
    let prevMonth = -1;
    b.forEach((x, i) => {
      if (!labelled(i)) return;
      const first = x.end.getUTCMonth() !== prevMonth; prevMonth = x.end.getUTCMonth();
      g += `<line class="grid" x1="${rnd(X(i))}" x2="${rnd(X(i))}" y1="${T}" y2="${T + ih}"/><text x="${rnd(X(i))}" y="${T + ih + 16}" text-anchor="middle">${x.end.getUTCDate()}</text>`;
      if (first) g += `<text x="${rnd(X(i))}" y="${T + ih + 30}" text-anchor="middle">${esc(x.end.toLocaleDateString("en-GB", { month: "short", timeZone: "UTC" }))}</text>`;
    });
    g += `<line class="axis" x1="${L}" x2="${L}" y1="${T}" y2="${T + ih}"/><line class="axis" x1="${L}" x2="${W - R}" y1="${T + ih}" y2="${T + ih}"/>`;
    const dotR = b.length > 20 ? 3 : 3.5;
    /* A zero day gets an outlined point only where the line drops from activity to zero; runs of quiet days get none */
    const showDot = (s, i) => b[i][s.key] > 0 || (i > 0 && b[i - 1][s.key] > 0);
    ser.forEach(s => {
      const pts = b.map((x, i) => [X(i), Y(x[s.key])]);
      g += `<path class="line ${s.cls}" pathLength="1" d="${smoothPath(pts)}"/>`;
      pts.forEach((p, i) => { if (!showDot(s, i)) return; g += `<circle class="dot ${s.cls}" cx="${rnd(p[0])}" cy="${rnd(p[1])}" r="${dotR}" style="--f:${(i / (b.length - 1)).toFixed(3)}"><title>${esc(shortDate(b[i].end))}: ${plural(b[i][s.key], s.one, s.many)}</title></circle>`; });
    });
    const total = b.reduce((a, x) => a + x.commits, 0), active = b.filter(x => x.commits > 0 || x.repos > 0).length;
    const summary = (active ? `${plural(total, "commit", "commits")} across ${plural(b.repoCount || 0, "repository", "repositories")}, active on ${active} of ${b.length} days` : "No activity in this period") + " · public activity only" + (fetchedAt ? ` · updated ${new Date(fetchedAt).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: DATA.timezone })}` : "");
    return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="GitHub activity: ${esc(summary)}">${g}</svg>
      <ul class="legend">${ser.map(s => `<li><i class="sw ${s.cls === "s-a" ? "a" : "b"}"></i>${esc(s.name)}</li>`).join("")}</ul>
      <p class="meta note">${esc(summary)}</p>
      <table class="sr"><caption>GitHub activity by date</caption><tr><th>Date</th>${ser.map(s => `<th>${esc(s.name)}</th>`).join("")}</tr>${b.map(x => `<tr><td>${esc(shortDate(x.end))}</td>${ser.map(s => `<td>${x[s.key]}</td>`).join("")}</tr>`).join("")}</table>`;
  }

  const activityHtml = () => {
    const a = state.activity, { days, labelEvery } = DATA.activity;
    const sub = `<p class="meta">Last ${days} days &middot; one point per day, labelled every ${labelEvery} days</p>`;
    if (a.status === "loading") return sub + `<p class="placeholder">Loading activity&hellip;</p>`;
    if (a.status === "error") return sub + `<p class="placeholder">My activity could not be loaded at this time. Please view it directly on <a href="https://github.com/${DATA.githubUser}" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>`;
    return sub + chartSvg(a.buckets, a.fetchedAt);
  };

  /* Commits are read straight from each public repository, so they appear as soon as they are pushed (the public events feed can lag by hours) */
  async function loadActivity() {
    if (state.reposStatus !== "ok") throw new Error("Repositories unavailable");
    const cached = cacheGet("dsv-commits-v2"); if (cached) return cached;
    const days = Math.max(2, Math.min(90, DATA.activity.days));
    const since = addDays(new Date(tzKey(new Date()) + "T00:00:00Z"), -days).toISOString(); /* a day of margin; the buckets do the exact cut */
    const snap = state.snapshot, live = state.source === "live";
    const snapCommits = n => snap ? snap.commits.filter(c => c.repo === n) : [];
    const liveCommits = async r => {
      const out = [];
      for (let page = 1; page <= 3; page++) {
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
    const results = await Promise.allSettled(active.map(async r => {
      if (snapCurrent(r)) return snapCommits(r.name);    /* the snapshot already holds everything up to the latest push */
      try { return await liveCommits(r); }
      catch (e) { if (snapRepo(r.name)) return snapCommits(r.name); throw e; }
    }));
    if (active.length && results.every(x => x.status === "rejected")) {
      let saved = null; try { saved = JSON.parse(localStorage.getItem("dsv-commits-saved")); } catch (e) { /* none */ }
      if (saved && Array.isArray(saved.data)) return saved;   /* the last good result, with its own time */
      throw new Error("Commits unavailable");
    }
    const commits = results.flatMap(x => x.status === "fulfilled" ? x.value : []);
    const t = live || !snap ? Date.now() : Date.parse(snap.generatedAt);
    const complete = !results.some(x => x.status === "rejected");
    if (complete) { try { localStorage.setItem("dsv-commits-saved", JSON.stringify({ t, data: commits })); } catch (e) { /* storage unavailable */ } }
    return complete && live ? cacheSet("dsv-commits-v2", commits) : { t, data: commits };
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
    return `<div class="facts">${state.repos.slice(0, limit ?? 999).map(r => `<button class="card" data-open="projects/${esc(r.name)}"><strong>${esc(r.name)}</strong>${langBox(r)}<small>Created ${esc(repoDay(r.created_at))}</small><small>Updated ${esc(repoDay(r.pushed_at))}</small>${compact
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
    projects: () => `<h1>Projects</h1><p>These are retrieved automatically from my public <a href="https://github.com/${DATA.githubUser}" target="_blank" rel="noopener noreferrer">GitHub profile</a>, so the list stays current as I build and contribute to new projects.</p>${repoCards()}`,
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
    $("#crumbs").textContent = "portfolio > " + ((DATA.certificatesInEducation && state.active.split("/")[0] === "certificates") ? "education/" : "") .concat(state.active).replace(/\//g, " > ");
    renderTree();
    loadLanguages();
  }

  /* ---------- Explorer tree ---------- */
  const badge = (t, c) => `<span class="badge" style="--c:${c}">${t}</span>`;

  /* A folder lists its sub-folders first (the "extra" block), then its files in alphabetical order */
  const folderNode = (id, name, emptyText, children, extra = "") => {
    const isOpen = state.open.has(id);
    const sorted = [...children].sort((a, b) => byName(a.label, b.label));
    return `<div class="folder ${isOpen ? "open" : ""}"><button class="node ${state.active === id ? "active" : ""}" data-folder="${id}" style="--d:1" role="treeitem" aria-expanded="${isOpen}"><span class="chev">&#9654;</span><span class="label">${name}</span></button>
      <div class="kids"><div>${extra}${sorted.length ? sorted.map(c => `<button class="node ${state.active === id + "/" + c.id ? "active" : ""}" data-open="${id}/${esc(c.id)}" style="--d:3">${badge("MD", "var(--blue)")}<span class="label">${esc(c.label)}</span></button>`).join("") : (extra ? "" : `<div class="empty-note" style="--d:3">${emptyText}</div>`)}</div></div></div>`;
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

  /* Like a normal file directory: folders first, then files, each group in alphabetical order */
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
      <div class="kids" style="grid-template-rows:${state.open.has("portfolio") ? "1fr" : "0fr"}"><div>${folders}${files}</div></div>`;
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
  const snapshotP = (location.protocol === "file:" ? Promise.resolve(null) : fetch(DATA.snapshotFile, { cache: "no-cache" }).then(r => r.ok ? r.json() : null).catch(() => null))
    .then(s => s && Array.isArray(s.repos) && s.commits && s.languages ? s : null);
  const cached = cacheGet("dsv-repos-v2");
  const liveRepos = () => cached ? Promise.resolve(cached.data)
    : gh(`https://api.github.com/users/${DATA.githubUser}/repos?per_page=100&sort=pushed`)
        .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(repos => { cacheSet("dsv-repos-v2", repos); try { localStorage.setItem("dsv-repos-saved", JSON.stringify(repos)); } catch (e) { /* storage unavailable */ } return repos; });
  const load = snapshotP.then(snap => {
    state.snapshot = snap;
    return liveRepos().catch(err => {
      console.warn("Live GitHub data unavailable:", err);
      if (snap) { state.source = "snapshot"; return snap.repos; }
      let saved = null; try { saved = JSON.parse(localStorage.getItem("dsv-repos-saved")); } catch (e) { /* none */ }
      if (Array.isArray(saved) && saved.length) { state.source = "saved"; return saved; }
      throw err;
    });
  });

  /* The blue status bar shows when the portfolio repository was last pushed to */
  const siteUpdated = iso => {
    const days = Math.round((new Date(tzKey(new Date()) + "T00:00:00Z") - new Date(tzKey(iso) + "T00:00:00Z")) / 864e5);
    const date = new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric", timeZone: DATA.timezone });
    return `Portfolio repository: ${date}; last update ${days <= 0 ? "today" : days + (days === 1 ? " day ago" : " days ago")}`;
  };

  const reposDone = load
    .then(repos => {
      state.rawRepos = repos.filter(r => !r.fork);
      const site = repos.find(r => r.name.toLowerCase() === `${DATA.githubUser.toLowerCase()}.github.io`);
      state.repos = repos.filter(r => !r.fork && (DATA.showPortfolioRepo || r.name.toLowerCase() !== `${DATA.githubUser.toLowerCase()}.github.io`))
        .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
      state.reposStatus = "ok";
      state.repos.forEach(r => { const l = snapCurrent(r) && snapLangs(r.name); if (l) state.langs[r.name] = l; });   /* no flash: the full bars are there on the first draw */
      const saved = state.snapshot && new Date(state.snapshot.generatedAt).toLocaleString("en-GB", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit", timeZone: DATA.timezone });
      const note = state.source === "snapshot" ? ` (live GitHub unavailable; data saved ${saved})` : state.source === "saved" ? " (live GitHub unavailable; saved copy)" : "";
      $("#statusRepos").textContent = (site ? siteUpdated(site.pushed_at) : `${plural(state.repos.length, "public repository", "public repositories")} loaded from GitHub`) + note;
    })
    .catch(err => { console.error("GitHub API error:", err); state.reposStatus = "error"; $("#statusRepos").textContent = state.rateLimited ? "GitHub's hourly request limit was reached; please try again later" : "GitHub repositories unavailable"; })
    .finally(() => { const s = location.hash.slice(1); if (s.startsWith("projects/") && !state.tabs.includes(s)) open(s); else render(); });

  /* Full language breakdowns arrive after the repositories and are filled in without redrawing the page */
  reposDone.then(loadLanguages);

  /* The graph updates in place, so the page does not jump when the data arrives */
  /* Only for landscape screens (wider than tall); portrait screens skip the graph and its request */
  const landscape = matchMedia("(orientation: landscape)");
  let activityStarted = false;
  const refreshActivity = () => { const el = $("#activity"); if (el) el.innerHTML = activityHtml(); };
  function startActivity() {
    if (activityStarted) return;
    activityStarted = true;
    reposDone.then(loadActivity)
      .then(r => { state.activity = { status: "ok", buckets: buildBuckets(r.data), fetchedAt: r.t }; })
      .catch(err => { console.error("Activity data error:", err); state.activity.status = "error"; })
      .finally(refreshActivity);
  }
  if (landscape.matches) startActivity();
  landscape.addEventListener("change", e => { if (e.matches) startActivity(); });
})();
