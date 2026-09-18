# JIRAKING NEWS

A polished starter news dashboard with a landing page, story filtering, search, and newsletter signup UI.

## Run locally

Requires Node.js 18 or newer.

```bash
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

For development with Node's built-in watcher:

```bash
npm run dev
```

## Project structure

- `server.js` — dependency-free static file server
- `public/index.html` — landing page and dashboard markup
- `public/styles.css` — responsive visual design
- `public/app.js` — sample stories, filters, search, and signup interaction
- `package.json` — project metadata and run scripts

The sample stories are currently defined in `public/app.js`; replace them with an API call when a content backend is ready.
