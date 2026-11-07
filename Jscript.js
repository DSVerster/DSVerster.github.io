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
      file: "certificates/neo4j-generative-ai-fundamentals.pdf",
      credentialId: "864b8c59-19a2-4bf5-9aab-4d3d9c9107a2",
      url: "",
      details: ["I completed all requirements of the Neo4j GraphAcademy Generative AI Fundamentals programme."] },

    { id: "data-analysis-in-matlab", group: "MathWorks", org: "MathWorks", type: "Learning path",
      title: "Data Analysis in MATLAB", date: "2026-01-28",
      file: "certificates/matlab-data-analysis.pdf",
      details: ["I completed this learning path, which covers preparing, analysing and summarising data in MATLAB."],
      courses: ["Tables", "Clean and Prepare Data for Analysis", "Common Data Analysis Techniques", "Find and Extract Subsets of Data", "Calculations on Grouped Data"] },
    { id: "core-matlab-skills", group: "MathWorks", org: "MathWorks", type: "Learning path",
      title: "Core MATLAB Skills", date: "2026-01-27",
      file: "certificates/matlab-core-skills.pdf",
      details: ["I completed this learning path, which covers the everyday foundations of working in MATLAB."],
      courses: ["MATLAB Desktop Tools and Troubleshooting Scripts", "Explore Data with MATLAB Plots", "Make and Manipulate Matrices", "Calculations with Vectors and Matrices"] },
    { id: "visualization-in-matlab", group: "MathWorks", org: "MathWorks", type: "Learning path",
      title: "Visualization in MATLAB", date: "2026-01-27",
      file: "certificates/matlab-visualization.pdf",
      details: ["I completed this learning path, which covers creating and customising plots and graphics in MATLAB."],
      courses: ["Explore Data with MATLAB Plots", "Plot Beyond the Second Dimension", "How MATLAB Graphics Work"] },
    { id: "matlab-app-building-onramp", group: "MathWorks", org: "MathWorks", type: "Course",
      title: "App Building Onramp", date: "2026-01-22",
      file: "certificates/matlab-app-building-onramp.pdf",
      details: ["I completed this self-paced course (100%)."] },
    { id: "matlab-statistics-onramp", group: "MathWorks", org: "MathWorks", type: "Course",
      title: "Statistics Onramp", date: "2026-01-22",
      file: "certificates/matlab-statistics-onramp.pdf",
      details: ["I completed this self-paced course (100%)."] },
    { id: "matlab-onramp", group: "MathWorks", org: "MathWorks", type: "Course",
      title: "MATLAB Onramp", date: "2026-01-21",
      file: "certificates/matlab-onramp.pdf",
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
  const state = { repos: [], reposStatus: "loading", open: new Set(["portfolio"]), tabs: [], active: null };

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
    return `<div class="facts">${state.repos.slice(0, limit || 999).map(r => `<button class="card" data-open="projects/${esc(r.name)}"><strong>${esc(r.name)}</strong><small>${esc(r.language || "Mixed")}</small><small>Created ${esc(repoDay(r.created_at))}</small><small>Updated ${esc(repoDay(r.pushed_at))}</small>${compact
      ? ""
      : `<p>${esc(r.description || "Description to be added.")}</p>`}</button>`).join("")}</div>`;
  };

  const staticCards = list => `<div class="facts wide">${list.map(e => `<div class="card static"><strong>${esc(e.title)}</strong><small>${e.url ? `<a href="${esc(e.url)}" target="_blank" rel="noopener noreferrer">${esc(e.org)}</a>` : esc(e.org)}</small><small>${esc(e.period)}</small><ul class="plain">${(e.details || []).map(d => `<li>${esc(d)}</li>`).join("")}</ul></div>`).join("")}</div>`;
  const skillsHtml = () => Object.entries(DATA.skills).map(([k, v]) => `<h3>${esc(k)}</h3><ul class="chips">${v.map(s => `<li>${esc(s)}</li>`).join("")}</ul>`).join("");
  const contactBlock = () => `<div class="contact-card" id="contact-card"><p class="meta">Email address</p><p class="email">${esc(DATA.email)}</p>
      <a class="btn" href="${esc(DATA.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a class="btn" href="https://github.com/${DATA.githubUser}" target="_blank" rel="noopener noreferrer">GitHub</a></div>`;

  const aboutCerts = () => {
    const n = DATA.certificates.length;
    if (!n) return '<p class="placeholder">My certificates will appear here as I earn them.</p>';
    return `<div class="facts">${sortedCerts().slice(0, 3).map(c => `<button class="card" data-open="certificates/${esc(c.id)}"><strong>${esc(c.title)}</strong><small>${esc(c.org)}</small><small>${esc(fmtDate(c.date))}</small></button>`).join("")}</div>
      ${n > 3 ? `<p><button class="btn" data-open="certificates">View all ${n} certificates</button></p>` : ""}`;
  };

  const views = {
    about: () => `
      <div class="hero"><img src="${esc(DATA.photo)}" alt="Portrait of ${esc(DATA.name)}">
        <div><h1>${esc(DATA.name)}</h1><p class="role">${esc(DATA.role)}</p>
        <a class="btn" href="${esc(DATA.cv)}" download>Download CV (PDF)</a>
        <button class="btn" data-scroll="contact-card">Contact me</button></div></div>
      <h2>About me</h2><p>${esc(DATA.summary)}</p>
      <h2>Education</h2>${staticCards(DATA.education)}
      <h2>Experience</h2>${DATA.experience.length ? staticCards(DATA.experience) : '<p class="placeholder">I will add further experience here as I gain it.</p>'}
      <h2>Skills and languages</h2>${skillsHtml()}
      <h2>Projects</h2>${repoCards(6, true)}
      ${state.repos.length > 6 ? '<p><button class="btn" data-open="projects">View all projects</button></p>' : ""}
      <h2>Certificates</h2>${aboutCerts()}
      <h2>Contact</h2>${contactBlock()}`,
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
})();
