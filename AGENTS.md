# Agent Rules

Always follow these repository rules when modifying this project:

1. Build with Next.js, React, and TypeScript using the App Router under `src/app`.
2. Keep a clean frontend architecture: route entry points in `src/app`, feature composition in `src/features`, domain models and API contracts in `src/entities`, shared primitives in `src/shared`, and app configuration in `src/core`.
3. Keep API usage behind typed services. Use mock services for demonstration behavior until a real API contract is provided, and make real clients swappable without changing feature UI.
4. Maintain the design system through shared tokens and reusable UI components. Add one-off styles only when they belong to a specific feature or entity.
5. Prefer simple, typed, readable code over premature abstraction. Add abstractions only when they remove real duplication or clarify ownership.
6. Run `pnpm lint`, `pnpm typecheck`, and `pnpm build` before considering changes complete.
7. Commit work incrementally with clear messages, separating scaffolding, architecture, docs, and follow-up changes when practical.
8. Do not revert unrelated user changes. Read current files before editing and keep changes scoped to the task.
