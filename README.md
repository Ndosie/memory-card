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
