# PosterMaker AI Studio

A responsive poster-design studio with editable canvas layers and AI-assisted poster copy.

## Features
- Premium dark studio interface with Poppins typography
- Six art-directed starting layouts: launch, sale, food, event, beauty and tech
- Editable text, font family, size, alignment, colour and position
- Add text and shape layers
- Upload images as movable canvas layers
- Drag layers on the canvas and delete selected layers
- Colour palettes and custom canvas background
- Portrait, square and story canvas formats
- High-resolution PNG export
- AI-assisted poster copy and layout direction through a secure Vercel API route

## Run locally
Open `index.html` for the static editor. The AI endpoint requires Vercel Functions; use `npm run dev` with the Vercel CLI to test it locally.

## Deploy on Vercel
1. Import `businesshqdesk/PosterMakerAI` into Vercel.
2. Use the **Other** framework preset.
3. Keep the project root as the repository root and deploy.
4. In Vercel Project Settings → Environment Variables, add `OPENAI_API_KEY`.
5. Redeploy after adding the variable.

## AI scope
The current AI endpoint generates poster copy and recommends one of the built-in templates and palettes. It does not yet generate a new photographic background or finished image. The API key is read server-side and must never be placed in browser JavaScript.

## Next development milestones
- True AI image generation and generated-background placement
- Undo/redo and autosaved projects
- Crop, image opacity and layer resizing handles
- More category-specific premium templates
- Browser-based automated and real-device mobile testing
