# Memory Card — Kids Memory Game

Memory Card is a small React + Vite project that helps children practice memory and object recognition by clicking images only once. The game shuffles cards each round and encourages repeat-less selection to score points.

**Key goals**

- Simple, kid-friendly interface for memory practice.
- Randomized card layout to exercise recall.
- Lightweight and easy to run locally for development and testing.

**Current features**

- Clickable image cards (fetched from Pexels) with names.
- Shuffled card layout on each round.
- Basic scoreboard placeholders in the UI.

Getting started

- Install dependencies:

```bash
npm install
```

- Run the dev server:

```bash
npm run dev
```

Open the site at the address shown by Vite (usually http://localhost:5173).

Project structure (high level)

- `src/` — source files and components (see `src/components/Card.jsx` and `src/App.jsx`).
- `src/data/` — sample data and shuffle helper.

## Netlify configuration

This project includes a Netlify Functions endpoint used to fetch images from Pexels. Follow these steps to deploy on Netlify:

- Netlify settings: `netlify.toml` configures the functions directory to `netlify/functions`.
- Environment variable: set `PEXELS_KEY` in your Netlify Site settings (Site settings  Build & deploy  Environment).
- Build command: `npm run build`
- Publish directory: `dist`

Local testing and deploy:

- Install the Netlify CLI: `npm install -g netlify-cli`.
- Run locally with `netlify dev` to test functions and the frontend together.
- To deploy from the CLI, run `netlify deploy --prod` (or connect the repository in the Netlify UI).

Example environment variable in Netlify UI:

- Key: `PEXELS_KEY`
- Value: your Pexels API key (from https://www.pexels.com/api/)

See [netlify.toml](netlify.toml) for the functions path.

Future features (planned)

- Pronunciation feature: speak the object name when a card is shown or clicked (helpful for language learning).
- Custom image sets: ability to upload or select specific images/objects you want your child to learn about.
- Persistent scoring and progress tracking across sessions.

Contributing

Feel free to open issues or submit PRs. If you add features (pronunciation, uploads), include tests and update this README with usage details.

License

This repository is open for learning and experimentation. Add a license file if you plan to publish or share more widely.

File: src/App.jsx — main UI and shuffle handler

See the `src` folder to explore implementation details and extend the app.
