# Ditto React prototype

Plain JavaScript React components and CSS. esbuild compiles JSX and serves the app; Vite, Tailwind, and TypeScript are removed.

```sh
npm install
npm run dev
```

Open http://localhost:8443. Source changes rebuild automatically; refresh the browser to see them. Restart after HTML or public asset changes.

Run `npm run build` for a static site in `dist`, and `npm run preview` to serve the production build.

- `src/main.jsx`: React entry point.
- `src/App.jsx`: homepage and booking components.
- `src/booking.js`: date, time-slot, and calendar helpers.
- `src/index.css`: responsive styling.
- `scripts/build.mjs`: build and development server.

Availability is sample data. No appointment is submitted or email sent. The three-step booking flow preserves selections, offers optional email and language preference, and includes contact consent. Light and dark themes follow the system preference initially and save the visitor’s choice locally.

See `UX_NOTES.md` for conversion hypotheses, copy principles and an evaluation plan.
