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
│       matlab-app-building-onramp.pdf
│       matlab-core-skills.pdf
│       matlab-data-analysis.pdf
│       matlab-onramp.pdf
│       matlab-statistics-onramp.pdf
│       matlab-visualization.pdf
│       neo4j-generative-ai-fundamentals.pdf
│
└───media
        Denzel-Verster-CV.pdf
        Denzel-Verster-Portrait.jpg
        CiteQ-Web-Logo-Trans.png
        CiteQ-Web-Logo-TransIcon.png
        NWU-Logo-SW.png
        NWU-Logo-SWIcon.png
        github.png
        linkedin.png
```

## Updating the content

All content lives in the `DATA` block at the top of `Jscript.js`.

- **Certificates:** save the PDF in `certificates/`, then add one object to `DATA.certificates`. The `group` field files it under a provider folder, and the site sorts everything newest first.
- **Experience and education:** add an object to the matching array.
- **Projects:** these load automatically from my public GitHub repositories.
