# Agent Instructions

## 1. Tech Stack & Environment
- Runtime / Language: Node 20.x / TypeScript 7.x / React 19
- Framework: Next.js App Router
- Package Manager: `npm` (never use `pnpm` or `yarn`)

## 2. Essential Commands
Run these exact commands to verify changes:
- Build: `npm run build`
- Lint & Format: `npm lint` and `npm format:check`


## 3. Hard Boundaries ("Never" List)
- NEVER commit secrets, `.env*` files, or production credentials.
- NEVER read, inspect, display, or commit secrets, `.env*` files, or production credentials.
- NEVER delete or edit database migrations directly; create a new migration.
- NEVER disable lint rules or skip test suites to force a pass.

## 4. Code & Architecture Patterns
- Prefer functional components and hooks over class components.
- Error Handling: Return standard Result objects; do not swallow exceptions silently.

## 5. Definition of "Done"
Before declaring a task complete, ensure:
1. `npm run build` completes without throwing an errors.
2. Git diff contains only files relevant to the requested task.