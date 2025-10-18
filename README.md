# CreatorCredit — Vite + React starter (Netlify-ready)

This repo contains a minimal Vite + React app and Netlify configuration so you can deploy quickly.

Quick summary of what's included
- `package.json` — scripts: `dev`, `build`, `preview`
- `src/` — React app (`App.jsx`, `main.jsx`, `styles.css`)
- `public/` — static fallback pages (`index.html`, `contact.html`) and `_redirects`
- `netlify.toml` — instructs Netlify to run `npm run build` and publish `dist`

One-click deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/creatorcredit/CreatorCredit)

Netlify build settings
- Build command: `npm run build`
- Publish directory: `dist`

Special features added
- SPA redirects: `public/_redirects` ensures client-side routing falls back to the SPA
- Netlify Forms: `public/contact.html` is a basic contact form wired to Netlify Forms (no backend required)

Local development
```bash
# install deps
npm install

# run dev server
npm run dev

# build for production
npm run build

# preview production build
npm run preview
```

Notes
- If you prefer a different stack (Next.js, Gatsby, Hugo) or want Netlify Functions for server-side work, tell me and I'll scaffold and wire the CI settings.
# CreatorCredit — Netlify-ready static site

This repository now contains a minimal static site so you can connect the repo to Netlify and deploy immediately.

What was added
- `index.html` — the site entry point
- `styles.css` — simple styling
- `script.js` — tiny interactive demo
- `netlify.toml` — Netlify config (publish = `/`)

Quick deploy to Netlify
1. Go to https://app.netlify.com/sites/new
2. Choose "Import from Git" and connect your GitHub account
3. Select the `creatorcredit/CreatorCredit` repository
4. On the "Build settings" page:
   - Set "Build command" to blank (no build needed)
   - Set "Publish directory" to `/` (or leave blank)
5. Click "Deploy site" — Netlify will publish the static files and provide a URL

Try it locally
- Serve the folder with any static server. With Python 3 you can run:

```bash
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

Notes
- If you later add a build step (React, Hugo, etc.), update `netlify.toml` or the Netlify build settings with the appropriate build command and publish directory.

If you want a different starter (React, Next.js, Gatsby, or a backend), tell me which stack and I will scaffold it and wire up Netlify build settings.
## Hi there 👋

<!--
**creatorcredit/CreatorCredit** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
