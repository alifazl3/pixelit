# Site Pix

A Next.js and TypeScript demonstration app for a visual site-launch workspace.
The project uses mocked services so the UI can run without backend credentials
or external API availability.

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

- `src/app`: Next.js App Router entry points and global styles.
- `src/core`: application-level configuration.
- `src/features`: composed user-facing experiences.
- `src/entities`: domain models, service contracts, mock implementations, and entity UI.
- `src/shared`: reusable UI primitives, design tokens, formatting utilities, and shared types.
- `public/mock-sites`: static demonstration assets used by the mocked project data.

## Quality Commands

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## API Strategy

Mock APIs live behind typed service contracts. Replace the mock implementations
inside each `entities/*/api` folder with real clients when backend endpoints are
available, while keeping feature code dependent on the service shape rather than
transport details.
