# Ecorp Terminal (Retro Hacker UI)

A single-page React application styled as a retro hacker terminal. This project simulates a Unix-like filesystem containing original, fictional investigation documents about the fictional megacorporation "Ecorp". 

It is designed to be an atmospheric "document explorer" that feels alive, featuring CRT effects, command history, auto-completion, and immersive flavor text.

## Features

- **Simulated Filesystem**: A nested data structure (`src/data/filesystem.ts`) containing fictional corporate logs, emails, and memos.
- **Interactive Terminal**: Supports standard Unix commands (`ls`, `cd`, `cat`, `pwd`, `clear`, `help`, `whoami`, `date`, `tree`, `find`, `grep`, `sysinfo`).
- **Retro Aesthetics**: Monospace fonts, green phosphor colors, scanlines, vignette, and subtle flicker effects implemented in pure CSS.
- **Easter Eggs**: Try `sudo rm -rf /` or `hack the planet`. Certain files also trigger a visual glitch effect when accessed.

## Tech Stack

- React 18+ (Vite)
- TypeScript
- Tailwind CSS (for layout utilities) + Vanilla CSS (for CRT effects)
- No Backend / Zero Config

## Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run the Development Server**
   ```bash
   npm run dev
   ```

3. **Open your browser** to the local URL provided by Vite (usually `http://localhost:5173`).

## Expanding the Lore

All documents and directory structures are defined in `src/data/filesystem.ts`. You can easily add new files, directories, or modify existing content by editing this single data file. The terminal commands (`ls`, `cd`, `cat`, `tree`, `find`, `grep`) will automatically work with any new content you add.

## Deployment to Vercel

This project is a static site and can be deployed to Vercel with zero configuration.

1. Push your code to a GitHub repository.
2. Import the repository into Vercel.
3. Vercel will automatically detect Vite and configure the build settings (`npm run build` and `dist` output directory).
4. Deploy! No environment variables or serverless functions are required.
