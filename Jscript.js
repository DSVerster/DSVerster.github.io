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
  /* Activity graph: window in days (one point per day, maximum 90), how often a date label is shown, and the two lines
     (first = green, second = blue). Choose any two of: "repos", "commits", "pushes", "branches", "created", "events". */
  activity: { days: 30, labelEvery: 2, series: ["repos", "commits"] },

  /* How many projects and certificates the About.md page shows before the "View all" button (use 0 to show none) */
  aboutLimits: { projects: 6, certificates: 3 },
  email: "denzelverster@gmail.com",
  linkedin: "https://www.linkedin.com/in/denzel-verster-642373375/",
  cv: "media/DS Verster Cirriculum-Vitae.pdf",
  photo: "media/CirriculumVitae_Me.jpg",
  summary: "I am an Information Technology graduate from North-West University, and I am now studying towards an Honours degree in Computer Science and Information Technology. I enjoy programming, computer hardware and hands-on projects, particularly Raspberry Pi systems, and I am comfortable working across several programming languages, networking and problem-solving. I am looking for the opportunity to apply what I have learnt in a real working environment, and I value every chance to keep learning alongside other people.",

  education: [
    { id: "nwu-honours", title: "Honours Degree in Computer Science and IT", org: "North-West University", logo: "media/NWU-Logo-SWIcon.png",
      url: "https://www.nwu.ac.za/", period: "2026 – Present (In progress)",
      details: ["I am currently pursuing postgraduate study in Computer Science and Information Technology."] },
    { id: "nwu-bsc", title: "BSc Information Technology", org: "North-West University", logo: "media/NWU-Logo-SWIcon.png",
      url: "https://www.nwu.ac.za/", period: "2023 – 2025 (Completed)",
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
  const state = { repos: [], reposStatus: "loading", open: new Set(["portfolio"]), tabs: [], active: null, activity: { status: "loading", buckets: [] } };

  /* ---------- Certificate helpers ---------- */
  const fmtDate = iso => new Date(iso + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const sortedCerts = () => [...DATA.certificates].sort((a, b) => b.date.localeCompare(a.date));
  const certGroups = () => {
    const m = new Map();
    sortedCerts().forEach(c => { if (!m.has(c.group)) m.set(c.group, []); m.get(c.group).push(c); });
    return m; /* providers appear in order of their newest certificate */
  };
  const certHref = c => encodeURI(c.file);
  const repoDay = iso => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;

  /* ---------- Activity graph (public GitHub push events, per date) ---------- */
  const dayStart = d => { const x = new Date(d); x.setHours(0, 0, 0, 0); return x; };
  const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
  const shortDate = d => d.toLocaleDateString("en-GB", { day: "2-digit", month: "short" });
  const rnd = n => Math.round(n * 10) / 10;

  const METRICS = {
    commits:  { name: "Commits",                one: "commit",       many: "commits" },
    pushes:   { name: "Pushes",                 one: "push",         many: "pushes" },
    repos:    { name: "Repositories worked on", one: "repository",   many: "repositories" },
    branches: { name: "Branches pushed to",     one: "branch",       many: "branches" },
    created:  { name: "Items created",          one: "item created", many: "items created" },
    events:   { name: "All activity",           one: "event",        many: "events" }
  };
  const chosenSeries = () => {
    const keys = (DATA.activity.series || []).filter(k => METRICS[k]);
    return [...keys, "repos", "commits"].filter((k, i, a) => a.indexOf(k) === i).slice(0, 2)
      .map((k, i) => ({ key: k, cls: i ? "s-b" : "s-a", ...METRICS[k] }));
  };

  function buildBuckets(events) {
    const n = Math.max(2, DATA.activity.days);
    const today = dayStart(new Date());
    const buckets = Array.from({ length: n }, (_, i) => {
      const day = addDays(today, -(n - 1 - i)); /* one bucket per day */
      return { start: day, end: day, commits: 0, pushes: 0, created: 0, events: 0, repos: 0, branches: 0, _repos: new Set(), _branches: new Set() };
    });
    const allRepos = new Set();
    events.forEach(ev => {
      const d = dayStart(new Date(ev.created_at));
      const b = buckets.find(x => +x.start === +d);
      if (!b) return;
      b.events += 1;
      if (ev.type === "CreateEvent") b.created += 1;
      if (ev.type !== "PushEvent") return;
      const p = ev.payload || {};
      b.pushes += 1;
      b.commits += p.distinct_size ?? p.size ?? 1;
      if (ev.repo) { b._repos.add(ev.repo); allRepos.add(ev.repo); b._branches.add(ev.repo + "#" + (p.ref || "")); }
    });
    buckets.forEach(b => { b.repos = b._repos.size; b.branches = b._branches.size; });
    buckets.repoCount = allRepos.size;
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

  function chartSvg(b) {
    const ser = chosenSeries();
    const maxV = Math.max(4, ...b.flatMap(x => ser.map(s => x[s.key])));
    const unit = niceStep(maxV);
    const yMax = Math.ceil(maxV / unit) * unit;          /* the vertical scale fits the busiest day */
    const W = 400, H = 250, T = 12, B = 40, R = 16;
    const L = 16 + String(yMax).length * 6.5;             /* left margin grows with the size of the numbers */
    const iw = W - L - R, ih = H - T - B;
    const X = i => L + i * iw / (b.length - 1);
    const Y = v => T + ih - (v / yMax) * ih;
    const every = Math.max(1, DATA.activity.labelEvery || 2);
    const labelled = i => (b.length - 1 - i) % every === 0; /* always includes today */
    let g = "";
    for (let v = 0; v <= yMax; v += unit) g += `<line class="grid" x1="${L}" x2="${W - R}" y1="${rnd(Y(v))}" y2="${rnd(Y(v))}"/><text x="${L - 8}" y="${rnd(Y(v) + 4)}" text-anchor="end">${v}</text>`;
    let prevMonth = -1;
    b.forEach((x, i) => {
      if (!labelled(i)) return;
      const first = x.end.getMonth() !== prevMonth; prevMonth = x.end.getMonth();
      g += `<line class="grid" x1="${rnd(X(i))}" x2="${rnd(X(i))}" y1="${T}" y2="${T + ih}"/><text x="${rnd(X(i))}" y="${T + ih + 16}" text-anchor="middle">${x.end.getDate()}</text>`;
      if (first) g += `<text x="${rnd(X(i))}" y="${T + ih + 30}" text-anchor="middle">${esc(x.end.toLocaleDateString("en-GB", { month: "short" }))}</text>`;
    });
    g += `<line class="axis" x1="${L}" x2="${L}" y1="${T}" y2="${T + ih}"/><line class="axis" x1="${L}" x2="${W - R}" y1="${T + ih}" y2="${T + ih}"/>`;
    const dotR = b.length > 20 ? 3 : 3.5;
    /* No outlined points for the quiet days after the last real activity (the line itself still runs to today) */
    const lastActive = b.reduce((last, x, i) => ser.some(s => x[s.key] > 0) ? i : last, -1);
    ser.forEach(s => {
      const pts = b.map((x, i) => [X(i), Y(x[s.key])]);
      g += `<path class="line ${s.cls}" pathLength="1" d="${smoothPath(pts)}"/>`;
      pts.forEach((p, i) => { if (i > lastActive) return; g += `<circle class="dot ${s.cls}" cx="${rnd(p[0])}" cy="${rnd(p[1])}" r="${dotR}" style="--f:${(i / (b.length - 1)).toFixed(3)}"><title>${esc(shortDate(b[i].end))}: ${plural(b[i][s.key], s.one, s.many)}</title></circle>`; });
    });
    const commits = b.reduce((a, x) => a + x.commits, 0), active = b.filter(x => x.pushes > 0).length;
    const summary = active ? `${plural(commits, "commit", "commits")} across ${plural(b.repoCount || 0, "repository", "repositories")}, active on ${active} of ${b.length} days` : "No public activity in this period";
    return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Public GitHub activity: ${esc(summary)}">${g}</svg>
      <ul class="legend">${ser.map(s => `<li><i class="sw ${s.cls === "s-a" ? "a" : "b"}"></i>${esc(s.name)}</li>`).join("")}</ul>
      <p class="meta note">${esc(summary)}</p>
      <table class="sr"><caption>Public GitHub activity by date</caption><tr><th>Date</th>${ser.map(s => `<th>${esc(s.name)}</th>`).join("")}</tr>${b.map(x => `<tr><td>${esc(shortDate(x.end))}</td>${ser.map(s => `<td>${x[s.key]}</td>`).join("")}</tr>`).join("")}</table>`;
  }

  const activityHtml = () => {
    const a = state.activity, { days, labelEvery } = DATA.activity;
    const sub = `<p class="meta">Last ${days} days &middot; one point per day, labelled every ${labelEvery} days</p>`;
    if (a.status === "loading") return sub + `<p class="placeholder">Loading activity from GitHub&hellip;</p>`;
    if (a.status === "error") return sub + `<p class="placeholder">My activity could not be loaded at this time. Please view it directly on <a href="https://github.com/${DATA.githubUser}" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>`;
    return sub + chartSvg(a.buckets);
  };

  async function loadEvents() {
    try { const c = JSON.parse(sessionStorage.getItem("dsv-events-v2")); if (c) return c; } catch (e) { /* no cache */ }
    const out = [], cutoff = addDays(dayStart(new Date()), -DATA.activity.days);
    for (let page = 1; page <= 3; page++) {
      const r = await fetch(`https://api.github.com/users/${DATA.githubUser}/events/public?per_page=100&page=${page}`);
      if (!r.ok) throw new Error(r.status);
      const batch = await r.json();
      out.push(...batch.map(e => ({ type: e.type, created_at: e.created_at, repo: e.repo && e.repo.name, payload: { size: e.payload && e.payload.size, distinct_size: e.payload && e.payload.distinct_size, ref: e.payload && e.payload.ref } })));
      if (batch.length < 100 || new Date(batch[batch.length - 1].created_at) < cutoff) break;
    }
    try { sessionStorage.setItem("dsv-events-v2", JSON.stringify(out)); } catch (e) { /* storage unavailable */ }
    return out;
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
      <span class="tag">${esc(c.type)}</span><span class="meta">${esc(fmtDate(c.date))}</span>
      <a class="cert-pdf" href="${esc(certHref(c))}" target="_blank" rel="noopener noreferrer" aria-label="Open the PDF for ${esc(c.title)}">PDF</a></div>`;

  const certOverview = () => {
    const total = DATA.certificates.length;
    if (!total) return `<h1>Certificates</h1><p class="placeholder">My certificates will appear here as I earn them.</p>`;
    const groups = [...certGroups()];
    return `<h1>Certificates</h1>
      <p>I have earned ${plural(total, "certificate", "certificates")} from ${plural(groups.length, "provider", "providers")}. They are grouped by provider, newest first. Select a title for the details, or open the PDF directly.</p>
      ${total > 5 ? `<div class="cert-tools"><label class="sr" for="certFilter">Filter certificates</label><input id="certFilter" type="search" placeholder="Filter by title, provider or type" autocomplete="off"><span class="meta" id="certCount" aria-live="polite"></span></div>` : ""}
      ${groups.map(([g, list], i) => `<details class="cert-group" ${i < 2 ? "open" : ""}>
        <summary><span>${esc(g)}</span><span class="meta">${plural(list.length, "certificate", "certificates")} &middot; latest ${esc(fmtDate(list[0].date))}</span></summary>
        <div class="cert-list">${list.map(certRow).join("")}</div></details>`).join("")}`;
  };

  const certDetail = c => `
    <h1>${esc(c.title)}</h1>
    <div class="entry-head"><div><strong>${esc(c.org)}</strong>
      <div class="meta">${esc(c.type)} &middot; Completed ${esc(fmtDate(c.date))}</div>
      ${c.credentialId ? `<div class="meta">Credential ID: ${esc(c.credentialId)}</div>` : ""}</div></div>
    <h2>About this certificate</h2>
    <ul class="plain">${(c.details || []).map(d => `<li>${esc(d)}</li>`).join("")}</ul>
    ${c.courses && c.courses.length ? `<h2>Courses in this learning path</h2><ul class="plain">${c.courses.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
    <p><a class="btn" href="${esc(certHref(c))}" target="_blank" rel="noopener noreferrer">View certificate (PDF)</a>
      ${c.url ? `<a class="btn" href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">Verify online</a>` : ""}
      <button class="btn" data-open="certificates">All certificates</button></p>`;

  const overview = (title, list, folder, emptyText) => `
    <h1>${title}</h1>
    ${list.length ? `<div class="facts">${list.map(e => `<button class="card" data-open="${folder}/${esc(e.id)}"><strong>${esc(e.title)}</strong><small>${esc(e.org)}</small><small>${esc(e.period)}</small></button>`).join("")}</div>`
      : `<p class="placeholder">${emptyText}</p>`}`;

  const repoCards = (limit, compact) => {
    if (state.reposStatus === "loading") return `<p class="placeholder">Loading repositories from GitHub&hellip;</p>`;
    if (state.reposStatus === "error") return `<p class="placeholder">The repositories could not be loaded at this time. Please view them directly on <a href="https://github.com/${DATA.githubUser}?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>`;
    if (!state.repos.length) return `<p class="placeholder">No public repositories are available yet.</p>`;
    return `<div class="facts">${state.repos.slice(0, limit ?? 999).map(r => `<button class="card" data-open="projects/${esc(r.name)}"><strong>${esc(r.name)}</strong><small>${esc(r.language || "Mixed")}</small><small>Created ${esc(repoDay(r.created_at))}</small><small>Updated ${esc(repoDay(r.pushed_at))}</small>${compact
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
    return `<div class="facts">${sortedCerts().slice(0, DATA.aboutLimits.certificates).map(c => `<button class="card" data-open="certificates/${esc(c.id)}"><strong>${esc(c.title)}</strong><small>${esc(c.org)}</small><small>${esc(fmtDate(c.date))}</small></button>`).join("")}</div>
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
      <aside class="about-side"><h2>Activity</h2><div class="activity-card" id="activity">${activityHtml()}</div></aside>
      <div class="about-rest">
      <h2>Education</h2>${staticCards(DATA.education)}
      <h2>Experience</h2>${DATA.experience.length ? staticCards(DATA.experience) : '<p class="placeholder">I will add further experience here as I gain it.</p>'}
      <h2>Skills and languages</h2>${skillsHtml()}
      <h2>Projects</h2>${repoCards(DATA.aboutLimits.projects, true)}
      ${state.repos.length > DATA.aboutLimits.projects ? '<p><button class="btn" data-open="projects">View all projects</button></p>' : ""}
      <h2>Certificates</h2>${aboutCerts()}
      <h2>Contact</h2>${contactBlock()}</div></div>`,
    experience: () => overview("Experience", DATA.experience, "experience", "I will add further experience here as I gain it."),
    education: () => overview("Education", DATA.education, "education", "My education details will appear here."),
    certificates: certOverview,
    projects: () => `<h1>Projects</h1><p>These are retrieved automatically from my public <a href="https://github.com/${DATA.githubUser}" target="_blank" rel="noopener noreferrer">GitHub profile</a>, so the list stays current as I build new things.</p>${repoCards()}`,
    skills: () => `<h1>Skills</h1>${Object.entries(DATA.skills).map(([k, v]) => `<h2>${esc(k)}</h2><ul class="chips">${v.map(s => `<li>${esc(s)}</li>`).join("")}</ul>`).join("")}`,
    contact: () => `<h1>Contact</h1><p>If you would like to work with me, or simply to talk about a project, please get in touch. I will gladly reply as soon as I can.</p>${contactBlock()}`
  };

  /* Resolve any id (e.g. "projects/my-repo") to {title, html} */
  function resolve(id) {
    const [folder, child] = id.split("/");
    if (!child) return views[folder] ? { title: { about: "About.md", skills: "Skills.json", contact: "Contact.md" }[folder] || folder, html: views[folder]() } : null;
    if (folder === "projects") {
      const r = state.repos.find(x => x.name === child);
      return r ? { title: r.name, html: `<h1>${esc(r.name)}</h1><p class="meta">${esc(r.language || "Mixed")} &middot; Created ${repoDay(r.created_at)} &middot; Updated ${repoDay(r.pushed_at)}</p>
        <p>${esc(r.description || "Description to be added.")}</p>
        <a class="btn" href="${esc(r.html_url)}" target="_blank" rel="noopener noreferrer">View repository</a>
        ${r.homepage ? `<a class="btn" href="${esc(r.homepage)}" target="_blank" rel="noopener noreferrer">Live demonstration</a>` : ""}` } : null;
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
    $("#crumbs").textContent = "portfolio > " + state.active.replace("/", " > ");
    renderTree();
  }

  /* ---------- Explorer tree ---------- */
  const badge = (t, c) => `<span class="badge" style="--c:${c}">${t}</span>`;
  const folderNode = (id, name, emptyText, children) => {
    const isOpen = state.open.has(id);
    return `<div class="folder ${isOpen ? "open" : ""}"><button class="node ${state.active === id ? "active" : ""}" data-folder="${id}" style="--d:1" role="treeitem" aria-expanded="${isOpen}"><span class="chev">&#9654;</span><span class="label">${name}</span></button>
      <div class="kids"><div>${children.length ? children.map(c => `<button class="node ${state.active === id + "/" + c.id ? "active" : ""}" data-open="${id}/${esc(c.id)}" style="--d:3">${badge("MD", "var(--blue)")}<span class="label">${esc(c.label)}</span></button>`).join("") : `<div class="empty-note" style="--d:3">${emptyText}</div>`}</div></div></div>`;
  };

  /* Certificates are nested by provider so the tree stays short as the list grows */
  const certFolder = () => {
    const isOpen = state.open.has("certificates");
    const groups = [...certGroups()];
    const inner = groups.length ? groups.map(([g, list]) => {
      const gOpen = state.open.has("cg:" + g);
      return `<div class="folder ${gOpen ? "open" : ""}"><button class="node" data-certgroup="${esc(g)}" style="--d:3" aria-expanded="${gOpen}"><span class="chev">&#9654;</span><span class="label">${esc(g)} (${list.length})</span></button>
        <div class="kids"><div>${list.map(c => `<button class="node ${state.active === "certificates/" + c.id ? "active" : ""}" data-open="certificates/${esc(c.id)}" style="--d:5">${badge("PDF", "var(--string)")}<span class="label">${esc(c.title)}</span></button>`).join("")}</div></div></div>`;
    }).join("") : `<div class="empty-note" style="--d:3">Nothing added yet</div>`;
    return `<div class="folder ${isOpen ? "open" : ""}"><button class="node ${state.active === "certificates" ? "active" : ""}" data-folder="certificates" style="--d:1" role="treeitem" aria-expanded="${isOpen}"><span class="chev">&#9654;</span><span class="label">Certificates</span></button>
      <div class="kids"><div>${inner}</div></div></div>`;
  };

  function renderTree() {
    const file = (id, name, ext, c) => `<button class="node ${state.active === id ? "active" : ""}" data-open="${id}" style="--d:1">${badge(ext, c)}<span class="label">${name}</span></button>`;
    const kids = list => list.map(e => ({ id: e.id, label: e.title }));
    const repoKids = state.repos.map(r => ({ id: r.name, label: r.name }));
    $("#tree").innerHTML = `
      <button class="node" data-folder="portfolio" style="--d:0"><span class="chev" style="transform:${state.open.has("portfolio") ? "rotate(90deg)" : "none"}">&#9654;</span><span class="label"><strong>PORTFOLIO</strong></span></button>
      <div class="kids" style="grid-template-rows:${state.open.has("portfolio") ? "1fr" : "0fr"}"><div>
        ${file("about", "About.md", "MD", "var(--blue)")}
        ${folderNode("experience", "Experience", "Nothing added yet", kids(DATA.experience))}
        ${folderNode("education", "Education", "Nothing added yet", kids(DATA.education))}
        ${file("skills", "Skills.json", "{ }", "var(--fn)")}
        ${folderNode("projects", "Projects", state.reposStatus === "loading" ? "Loading&hellip;" : state.reposStatus === "error" ? "Unavailable" : "Nothing added yet", repoKids)}
        ${certFolder()}
        ${file("contact", "Contact.md", "MD", "var(--blue)")}
      </div></div>`;
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

  /* Repositories are cached for the session to stay within GitHub's anonymous rate limit */
  const cached = (() => { try { return JSON.parse(sessionStorage.getItem("dsv-repos")); } catch (e) { return null; } })();
  const load = cached ? Promise.resolve(cached)
    : fetch(`https://api.github.com/users/${DATA.githubUser}/repos?per_page=100&sort=pushed`)
        .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(repos => { try { sessionStorage.setItem("dsv-repos", JSON.stringify(repos)); } catch (e) { /* storage unavailable */ } return repos; });

  load
    .then(repos => {
      state.repos = repos.filter(r => !r.fork && r.name.toLowerCase() !== `${DATA.githubUser.toLowerCase()}.github.io`)
        .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
      state.reposStatus = "ok";
      $("#statusRepos").textContent = `${state.repos.length} public repositories loaded from GitHub`;
    })
    .catch(err => { console.error("GitHub API error:", err); state.reposStatus = "error"; $("#statusRepos").textContent = "GitHub repositories unavailable"; })
    .finally(() => { const s = location.hash.slice(1); if (s.startsWith("projects/") && !state.tabs.includes(s)) open(s); else render(); });

  /* The graph updates in place, so the page does not jump when the data arrives */
  /* Only for landscape screens (wider than tall); portrait screens skip the graph and its request */
  const landscape = matchMedia("(orientation: landscape)");
  let activityStarted = false;
  function startActivity() {
    if (activityStarted) return;
    activityStarted = true;
    loadEvents()
      .then(ev => { state.activity = { status: "ok", buckets: buildBuckets(ev) }; })
      .catch(err => { console.error("GitHub activity error:", err); state.activity.status = "error"; })
      .finally(() => { const el = $("#activity"); if (el) el.innerHTML = activityHtml(); });
  }
  if (landscape.matches) startActivity();
  landscape.addEventListener("change", e => { if (e.matches) startActivity(); });
})();
