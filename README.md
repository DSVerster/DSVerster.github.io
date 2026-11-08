# DSVerster.github.io

This is my personal portfolio website, hosted on GitHub Pages. It presents my Curriculum Vitae, education, experience, skills, projects and certificates in the style of a code editor. It began as a requirement for a university project, and I now maintain it as a living portfolio.

**Live site:** https://DSVerster.github.io

## Built with

- HTML
- CSS
- JavaScript (no frameworks or build step)

## Project structure

```text
DSVerster.github.io
│   index.html
│   Jscript.js
│   README.md
│   stylesheet.css
│
├───certificates
│       MATLAB App Building Onramp certificate.pdf
│       MATLAB Core MATLAB Skills certificate.pdf
│       MATLAB Data Analysis in MATLAB certificate.pdf
│       MATLAB Onramp certificate.pdf
│       MATLAB Statistic Onramp certificate.pdf
│       MATLAB Visualization in MATLAB certificate.pdf
│       Neo4j & GenerativeAI Fundamentals Certificate _ GraphAcademy.pdf
│
└───media
        CirriculumVitae_Me.jpg
        CiteQ-Web-Logo-Trans.png
        CiteQ-Web-Logo-TransIcon.png
        DS Verster Cirriculum-Vitae.pdf
        github.png
        linkedin.png
        NWU-Logo-SW.png
        NWU-Logo-SWIcon.png
```

## Updating the content

All content lives in the `DATA` block at the top of `Jscript.js`.

- **Certificates:** save the PDF in `certificates/`, then add one object to `DATA.certificates`. The `group` field files it under a provider folder, and the site sorts everything newest first.
- **Experience and education:** add an object to the matching array.
- **Projects:** these load automatically from my public GitHub repositories.
- **Activity graph:** the About page charts my public GitHub activity per day (the last 30 days by default). In `Jscript.js`, `activity: { days, labelEvery, series }` sets the period, how often a date label is shown, and which two measures are plotted (repositories worked on, commits, pushes, branches, items created or all activity). The vertical scale fits the busiest day automatically.
- **About page limits:** `aboutLimits: { projects, certificates }` in `Jscript.js` sets how many projects and certificates the About page shows.
- **Animation speeds:** `--orbit-time` (the circling dots) and `--graph-time` (the graph drawing itself) are at the top of the motion section in `stylesheet.css`.
