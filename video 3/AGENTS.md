# AGENTS.md

## Workspace overview
- This repository is a minimal static frontend practice project.
- There is no build system, package manager, or test framework present.
- The page is served directly from `index.html`.

## Key files
- `index.html`: main HTML page. It currently links `style.css`.
- `script.js`: JavaScript entrypoint; currently empty.
- `style.js`: currently empty, but the HTML page references `style.css` instead.

## Helpful guidance for AI coding agents
- Do not assume a JavaScript build tool, node package manager, or existing server configuration.
- For live preview work, use a browser open of `index.html` or a VS Code Live Server-style preview.
- If CSS is required, either create `style.css` or update the HTML to match the intended stylesheet file.
- Keep changes minimal and self-contained in `index.html`, `script.js`, or a proper CSS file.
- When asked about "live preview," focus on enabling the static page to render correctly in-browser after saving.
