# Royalty Processing System

A music royalty processing UI built as a take-home assignment. Allows users to track song royalty progress and issue invoices, with a full invoice history.

---

## Architecture

**Workspace Monorepo** powered by `pnpm` workspaces.

```
royalty-processing/
├── apps/
│   ├── client/       # TanStack Start frontend
│   └── server/       # Hono REST API
└── packages/
    └── types/        # Shared TypeScript types (@royalty/types)
```

---

## Tech Stack

### Framework
- [TanStack Start](https://tanstack.com/start) — full-stack React framework with server functions and file-based routing

### Data Fetching
- [TanStack Query](https://tanstack.com/query) — server state management with `useSuspenseQuery` and route-level prefetching via loaders

### UI
- [Base UI](https://base-ui.com) — unstyled, accessible primitives (Tooltip, Toast, Meter)
- [TanStack Table](https://tanstack.com/table) — headless table with reusable `DataTable` component
- [Vanilla Extract](https://vanilla-extract.style) — zero-runtime CSS-in-TypeScript with design token system

### State Management
- [Redux Toolkit](https://redux-toolkit.js.org) — invoice records stored as `Record<number, InvoiceRecord>` for O(1) lookups

### Backend
- [Hono](https://hono.dev) — lightweight API server serving song data

---

## Features

### Songs Table

Displays all songs with royalty progress. Each row includes:

- Song ID, name, author
- Progress bar (via Base UI `Meter`) with tooltip showing exact percentage
- **Issue Invoice** button — issues once per song, disabled after issuance with visual feedback
- **Last Issued** cell — shows issuance timestamp and progress snapshot in monospace code format, with ASCII placeholder when not yet issued

<img width="1710" alt="Songs table" src="https://github.com/user-attachments/assets/6027c741-d375-4b8f-aa73-6bcc98b399b2" />
<img width="1710" alt="Songs table with issued invoices" src="https://github.com/user-attachments/assets/e3c7d085-1745-45ec-9848-149838a01b77" />

### Invoice History Table

Displays all issued invoices sourced directly from Redux state.

Each row contains:
- Date of issuance
- Author
- Song name
- Progress at the moment of issuance (ASCII bar)

<img width="1710" alt="Invoice history" src="https://github.com/user-attachments/assets/4511b1d5-2afc-4d0d-bf38-1959d4319519" />

### Empty History State

<img width="1710" alt="Empty invoice history" src="https://github.com/user-attachments/assets/6a1a982a-0e25-44de-8fe8-a93bcfd72956" />

---

## Getting Started

```bash
pnpm install

# Start both client and server
pnpm dev
```

- Client: `http://localhost:3001`
- Server: `http://localhost:3000`
