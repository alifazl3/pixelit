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

## CI/CD Deployment

This repo includes GitHub Actions workflow:

- `.github/workflows/deploy-master.yml`

It deploys automatically on every push to `master` (and can be triggered manually with `workflow_dispatch`).

Deployment flow:

1. Install dependencies
2. Run lint, typecheck, and build
3. Sync project files to `/opt/marburg-tech-app` on the server
4. Run production build on server
5. Restart `marburg-tech.service`

### Required GitHub repository secrets

- `DEPLOY_HOST`: server hostname or IP (example: `93.187.70.37`)
- `DEPLOY_PORT`: SSH port (example: `2233`)
- `DEPLOY_USER`: SSH user (example: `root`)
- `DEPLOY_SSH_KEY`: private key for SSH authentication
- `DEPLOY_KNOWN_HOSTS` (optional): known_hosts line for stricter host verification

If `DEPLOY_KNOWN_HOSTS` is not set, the workflow uses `ssh-keyscan` during the run.

## API Strategy

Mock APIs live behind typed service contracts. Replace the mock implementations
inside each `entities/*/api` folder with real clients when backend endpoints are
available, while keeping feature code dependent on the service shape rather than
transport details.
