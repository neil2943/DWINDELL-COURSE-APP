# Dwindell — Next.js local website

A simple Next.js recreation of the supplied `index.html` layout. It is intended for local development and a Git repository, not deployment.

## Run locally

1. Install Node.js (18.18+ recommended).
2. Open this folder in a terminal.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Visit http://localhost:3000

## Notes

- Built with the Next.js App Router.
- The Add to cart buttons update the cart count in the header (demo-only state).
- The original HTML referenced `style.css` and `dwindell without bg.png`, but those assets were not included with the uploaded file. This version recreates the styling and uses a text-based Dwindell mark so it runs without extra assets.
- Product artwork is made with CSS placeholders. Replace it with your own images in `public/` when ready.
- No database, payment gateway, authentication, or deployment setup is included.
