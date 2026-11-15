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
│       Great Learning Intro to Cyber Security.pdf
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
- **Projects:** these load automatically from my public GitHub repositories, including this portfolio's own repository. `showPortfolioRepo` in `Jscript.js` hides that one if set to `false`.
- **Activity graph:** the About page charts my public GitHub activity per day (the last 30 days by default). `activity: { days, labelEvery }` in `Jscript.js` sets the period and how often a date label is shown. Both lines, repositories worked on (green) and commits (blue), are calculated from the commits in my public repositories, read directly from each repository, so they appear as soon as they are pushed and always agree. Days are counted in the time zone set by `timezone` in `Jscript.js`. Only public repositories are shown; private activity never appears. The vertical scale fits the busiest day automatically, and the graph is hidden on portrait screens.
- **About page limits:** `aboutLimits: { projects, certificates }` in `Jscript.js` sets how many projects and certificates the About page shows.
- **Animation speeds:** `--orbit-time` (the circling dots) and `--graph-time` (the graph drawing itself) are at the top of the motion section in `stylesheet.css`.
- **Certificates in the explorer:** `certificatesInEducation` in `Jscript.js` places Certificates as a sub-folder of Education (`true`) or as its own top-level folder (`false`).
- **Status bar:** the blue bar shows when the portfolio repository was last pushed to (dd/mm/yyyy, and the number of days ago).
- **Refresh interval:** `cacheMinutes` in `Jscript.js` sets how long GitHub data is reused before it is fetched again (GitHub allows 60 anonymous requests per hour).
