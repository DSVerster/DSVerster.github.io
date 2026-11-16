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
├───.github
│   └───workflows
│           update-github-data.yml
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
├───data
│       github.json            (created and refreshed by the GitHub Action)
│
├───scripts
│       fetch-github-data.mjs
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

## Where the GitHub data comes from

A visitor's browser may only make 60 anonymous GitHub requests per hour, so the site does not depend on that. In order:

1. **Snapshot file (`data/github.json`).** The GitHub Action in `.github/workflows/update-github-data.yml` runs every 15 minutes (and on every push to this repository, and on demand from the Actions tab). It uses the built-in `GITHUB_TOKEN` to collect the public repositories, every project's language breakdown and the last 90 days of commits, and saves them to `data/github.json`, only when something changed. The site reads this file first, so there is no request limit and no dependence on the GitHub API being up.
2. **Live top-up.** The site then makes one live request for the repository list. Only for a repository pushed to *after* the snapshot was made does it fetch that repository's commits and languages live, so a fresh push shows immediately.
3. **Fallbacks.** If GitHub refuses (HTTP 403, the hourly limit) or is down, the site sends no more requests and shows the snapshot, or failing that the last repository list saved in the browser. The blue status bar says when this happens.

**One-off set-up:** push the `.github`, `scripts` and `data` folders, open the repository's **Actions** tab and run **Update GitHub data** once with **Run workflow**. If it cannot save the file, go to Settings, Actions, General, Workflow permissions and choose **Read and write permissions**.

## Updating the content

All content lives in the `DATA` block at the top of `Jscript.js`.

- **Certificates:** save the PDF in `certificates/`, then add one object to `DATA.certificates`. The `group` field files it under a provider folder, and the site sorts everything newest first.
- **Experience and education:** add an object to the matching array.
- **Projects:** these load automatically from my public GitHub repositories, including this portfolio's own repository. `showPortfolioRepo` in `Jscript.js` hides that one if set to `false`.
- **Languages:** every project shows its full language breakdown (a stacked bar and a legend with each percentage, as GitHub shows it) on the About page, the Projects page and the project's own page. The data comes from GitHub's languages endpoint, one request per repository. `languageCacheMinutes` in `Jscript.js` sets how long a breakdown is reused (it is also refreshed whenever the repository is pushed to). Until a breakdown arrives, the main language is shown.
- **Language pie chart:** the Projects page shows one pie of the languages across all projects, in its own box above the repository cards. It adds up the bytes of code in every repository's language breakdown, names the eight largest languages and groups the rest as "Other". While the data is collected it shows a progress bar, and the pie then fills in clockwise like a loading bar. `--pie-time`, beside `--orbit-time` and `--graph-time` in `stylesheet.css`, sets how long that takes. When the pie has finished filling, a power symbol flashes over it (a ring the size of the pie and a line from the top to the centre, in the pie's average colour): `--power-in` (fade in, 0.45s), `--power-hold` (stays, 0.1s) and `--power-out` (fade out, 0.45s) sit in the same block and can be changed freely.
- **Orbit colours:** the circling dots are blue by default. On a project box they take the colour of that project's most used language, and on the language pie box they take the average colour of all the slices (the mean red, green and blue values).
- **Automatic retry:** if GitHub cannot be reached on a first visit and nothing is saved, the site retries every minute (up to ten times), whenever the connection returns and whenever the tab is shown again, so the graph and the language bars appear as soon as the data can be loaded.
- **Activity graph:** the About page charts my public GitHub activity per day (the last 30 days by default). `activity: { days, labelEvery }` in `Jscript.js` sets the period and how often a date label is shown. Both lines, repositories worked on (green) and commits (blue), are calculated from the commits in my public repositories, read directly from each repository, so they appear as soon as they are pushed and always agree. Days are counted in the time zone set by `timezone` in `Jscript.js`. Only public repositories are shown; private activity never appears. The vertical scale fits the busiest day automatically, and the graph is hidden on portrait screens.
- **About page limits:** `aboutLimits: { projects, certificates }` in `Jscript.js` sets how many projects and certificates the About page shows.
- **Animation speeds:** `--orbit-time` (the circling dots), `--graph-time` (the graph drawing itself) and `--pie-time` (the language pie filling in) are at the top of the motion section in `stylesheet.css`.
- **Explorer order:** the tree lists files first and then folders and sub-folders, each group in alphabetical order. The pages themselves keep their own order (certificates newest first, projects most recently pushed first).
- **Certificates in the explorer:** `certificatesInEducation` in `Jscript.js` places Certificates as a sub-folder of Education (`true`) or as its own top-level folder (`false`).
- **Status bar:** the blue bar shows when the portfolio repository was last pushed to (dd/mm/yyyy, and the number of days ago).
- **Refresh interval:** `cacheMinutes` in `Jscript.js` sets how long GitHub data is reused before it is fetched again (GitHub allows 60 anonymous requests per hour).
