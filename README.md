# PosterMaker AI — Premium Studio

A responsive poster design workspace for creators and small businesses.

## Features
- Premium dark SaaS dashboard with Poppins typography
- Six art-directed poster templates and five color systems
- Live 1080px canvas rendering and high-resolution PNG export
- Editable text and shape layers with drag-to-position controls
- Font, size, color, alignment and position properties
- Image upload, canvas grid, zoom and canvas size presets
- AI-assisted campaign copy and layout direction through a secure Vercel API route
- Responsive desktop, tablet and mobile layout

## Run locally
Open `index.html` for the editor preview. To test the AI route locally, install the Vercel CLI and run `vercel dev`.

## AI setup
Set `OPENAI_API_KEY` as an Environment Variable in Vercel Project Settings. The key is used only by `/api/generate` on the server and is never exposed in browser code. AI generation requires an API key and provider usage may incur charges.

## Deploy to Vercel
1. Import `businesshqdesk/PosterMakerAI` from GitHub in Vercel.
2. Keep Framework Preset as Other and Root Directory as `./`.
3. Add `OPENAI_API_KEY` in Project Settings → Environment Variables to enable AI generation.
4. Deploy. Redeploy after changing environment variables.

## Notes
PNG rendering and editing run in the browser. AI generation is optional; templates and the editor work without an API key.
