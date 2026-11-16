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
│       github-status.json     (created and refreshed by the GitHub Action)
│
├───scripts
│       fetch-github-data.mjs
│       fetch-github-status.mjs
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

1. **Snapshot file (`data/github.json`).** The GitHub Action in `.github/workflows/update-github-data.yml` runs every 15 minutes (and on every push to this repository, and on demand from the Actions tab). It uses the built-in `GITHUB_TOKEN` to collect the public repositories, every project's language breakdown and the last two years of commits, and saves them to `data/github.json`, only when something changed. The site reads this file first, so there is no request limit and no dependence on the GitHub API being up.
2. **Live top-up.** The site then makes one live request for the repository list. Only for a repository pushed to *after* the snapshot was made does it fetch that repository's commits and languages live, so a fresh push shows immediately.
3. **Fallbacks.** If GitHub refuses (HTTP 403, the hourly limit) or is down, the site sends no more requests and shows the snapshot, or failing that the last repository list saved in the browser. The blue status bar says when this happens.

**One-off set-up:** push the `.github`, `scripts` and `data` folders, open the repository's **Actions** tab and run **Update GitHub data** once with **Run workflow**. If it cannot save the file, go to Settings, Actions, General, Workflow permissions and choose **Read and write permissions**.

## GitHub availability

A small box on the About page, beneath the "About me" text (its bottom edge lines up with the bottom edge of the activity graph box beside it), shows how often GitHub itself has had problems. It exists because everything on this site that comes from GitHub (projects, languages, activity) is only as available as GitHub is. Like the activity graph, it is hidden on portrait screens.

**What it shows.** One square per day for the last 90 days. The colour is the most serious incident that was open on that day: teal for none, yellow for minor, orange for major and red for critical. Hovering over a square gives the date, the number of incidents and the total time an incident was open. The line beneath the strip adds up that time over the whole period and gives it as a percentage.

**Where the data comes from.** From GitHub's own status page, [githubstatus.com](https://www.githubstatus.com), through its public incidents endpoint (`https://www.githubstatus.com/api/v2/incidents.json`). That endpoint only returns the 50 most recent incidents, which is a few weeks of history at most. To keep a longer history:

1. The GitHub Action runs `scripts/fetch-github-status.mjs` every 15 minutes, straight after the main data script.
2. The script merges what it receives into `data/github-status.json`. Incidents are matched by their id, so an incident that is updated or resolved replaces its earlier entry, and nothing is counted twice. Incidents older than 400 days are dropped. The file is only rewritten when something changed.
3. The site reads that file first, which is on the same host, so it has no request limit and does not depend on the status page being reachable. If the file does not exist (for example when the page is opened from a local folder, or before the Action has run once), the site reads the status API directly and shows only the incidents it returns.

**How the squares are worked out.**

- Only incidents rated minor, major or critical count. Incidents rated "none" are ignored.
- An incident that has not been resolved counts up to the current moment.
- Time is divided into one-minute slots, in the time zone set by `timezone` in `Jscript.js`. A slot counts once, even if several incidents overlap it, and takes the highest impact among them.

**What it is not.**

- It is not an official uptime figure. GitHub does not publish one, and the percentage here is simply the share of time during which at least one incident was open.
- Most incidents affect a single service (for example Actions or Copilot) while the rest of GitHub keeps working, so a coloured square does not mean the whole site was unreachable.
- Incident times are written by GitHub's engineers, often after the event, and are approximate.
- It does not measure this website's own failures. A static site has no server of its own to collect failed requests from visitors, and a counter kept in one visitor's browser would only describe that visitor. The official history avoids that problem.

**Settings.**

- `status: { days, snapshotFile }` in `Jscript.js` sets the number of days shown (up to 400, the length of the saved history) and the data file.
- The colours are the `.sq` rules at the end of `stylesheet.css`.
- **One-off set-up:** add `scripts/fetch-github-status.mjs`, replace `.github/workflows/update-github-data.yml` with the new version, and run **Update GitHub data** once from the Actions tab. The status step is set to `continue-on-error`, so a problem with the status page never stops the main data from being saved.
- If the strip says that the history could not be loaded, check that `data/github-status.json` exists in the repository, and that the latest Action run was not marked as failed.

## Updating the content

All content lives in the `DATA` block at the top of `Jscript.js`.

- **Certificates:** save the PDF in `certificates/`, then add one object to `DATA.certificates`. The `group` field files it under a provider folder, and the site sorts everything newest first.
- **Experience and education:** add an object to the matching array.
- **Projects:** these load automatically from my public GitHub repositories, including this portfolio's own repository. `showPortfolioRepo` in `Jscript.js` hides that one if set to `false`.
- **Languages:** every project shows its full language breakdown (a stacked bar and a legend with each percentage, as GitHub shows it) on the About page, the Projects page and the project's own page. The data comes from GitHub's languages endpoint, one request per repository. `languageCacheMinutes` in `Jscript.js` sets how long a breakdown is reused (it is also refreshed whenever the repository is pushed to). Until a breakdown arrives, the main language is shown.
- **Language pie chart:** the Projects page shows one pie of the languages across all projects, in its own box above the repository cards. It adds up the bytes of code in every repository's language breakdown, names the eight largest languages and groups the rest as "Other". While the data is collected it shows a progress bar, and the pie then fills in clockwise like a loading bar. `--pie-time`, beside `--orbit-time` and `--graph-time` in `stylesheet.css`, sets how long that takes. When the pie has finished filling, a power symbol flashes over it (a ring the size of the pie and a line from the top to the centre). Its colour is fixed, whatever the orbit colours are: `--power-color` (white by default). `--power-in` (fade in, 0.45s), `--power-hold` (stays, 0.1s) and `--power-out` (fade out, 0.45s) sit in the same block and can be changed freely.
- **Orbit colours:** every box has the circling dots on hover (project, certificate, contact, activity, GitHub availability and language pie boxes); only the Skills.json chips do not. The dots are blue by default. On a project box they take the colour of that project's most used language, on the language pie box they take the average colour of all the slices (the mean red, green and blue values), and on the GitHub availability box they take the average colour of all its squares, as they look on screen. That shows the overall severity of the period: a dim teal when GitHub has been healthy, shifting through yellow and orange towards red as incidents accumulate. The square colours are read from the `.sq` rules in `stylesheet.css`, so changing them changes the dots too.
- **Automatic retry:** if GitHub cannot be reached on a first visit and nothing is saved, the site retries every minute (up to ten times), whenever the connection returns and whenever the tab is shown again, so the graph and the language bars appear as soon as the data can be loaded.
- **Activity graph:** the About page charts my public GitHub activity, in the last 30 days by default, with one point per day. The buttons beneath it switch the range to 60 days, 6 months, 1 year or 2 years. The longer ranges group the commits into weekly points (6 months and 1 year) or 30-day points (2 years), so the line stays readable. `activity: { defaultRange, ranges }` in `Jscript.js` defines the ranges: `days` is how far back the graph reaches (up to 730), `step` is the number of days in each point, and `labelEvery` is how often a date label is shown. Both lines, repositories worked on (green) and commits (blue), are calculated from the commits in my public repositories, so they always agree with each other. Days are counted in the time zone set by `timezone` in `Jscript.js`. Only public repositories are shown; private activity never appears. The vertical scale fits the busiest period automatically, and the graph is hidden on portrait screens. The ranges beyond 90 days rely on the snapshot file (it holds two years of commits); without it, the site falls back to reading each repository live, which GitHub limits to 60 requests an hour, so long ranges may then be incomplete.
- **About page limits:** `aboutLimits: { projects, certificates }` in `Jscript.js` sets how many projects and certificates the About page shows.
- **Animation speeds:** `--orbit-time` (the circling dots), `--graph-time` (the graph drawing itself) and `--pie-time` (the language pie filling in) are at the top of the motion section in `stylesheet.css`.
- **Explorer order:** the tree lists files first and then folders and sub-folders, each group in alphabetical order. The pages themselves keep their own order (certificates newest first, projects most recently pushed first).
- **Certificates in the explorer:** `certificatesInEducation` in `Jscript.js` places Certificates as a sub-folder of Education (`true`) or as its own top-level folder (`false`).
- **Status bar:** the blue bar shows when the portfolio repository was last pushed to (dd/mm/yyyy, and the number of days ago).
- **Refresh interval:** `cacheMinutes` in `Jscript.js` sets how long GitHub data is reused before it is fetched again (GitHub allows 60 anonymous requests per hour).
