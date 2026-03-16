# Plate, Socket & Canvas Generator Tool - Next.js, TypeScript, TailwindCSS Fundamental Project 3

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue)](https://www.typescriptlang.org/)

A comprehensive, interactive German electrical plate and socket configuration tool built with Next.js 14. This project implements a sophisticated drag-and-drop interface for designing custom electrical plate layouts with real-time validation, responsive design, and precise centimeter-based positioning. It is ideal for learning modern React patterns, canvas-based UIs, and constraint-based validation—suitable for both instruction and hands-on experimentation.

- **Live Demo:** [https://plate-socket-generator-tool.vercel.app/](https://plate-socket-generator-tool.vercel.app/)

![Screenshot 2025-11-02 at 14 26 49](https://github.com/user-attachments/assets/a6ecf70c-af51-4ab7-954c-e1b2372cd569)

![Screenshot 2025-11-02 at 19 16 35](https://github.com/user-attachments/assets/9b8fcffa-226e-4571-9a93-b2c1dbf144a5)

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#️-technology-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Environment Variables](#-environment-variables)
- [How to Run & Use](#-how-to-run--use)
- [Project Walkthrough](#-project-walkthrough)
- [Routes & Pages](#-routes--pages)
- [Components & Reusability](#-components--reusability)
- [Libraries & Dependencies](#-libraries--dependencies)
- [Functionalities & How It Works](#-functionalities--how-it-works)
- [API & Backend](#-api--backend)
- [Keywords](#️-keywords)
- [Conclusion](#-conclusion)
- [License](#license)

---

## 🎯 Overview

The **Plate, Socket & Canvas Generator Tool** is a professional-grade web application that lets users design and visualize electrical plate (Rückwand) and socket group (Steckdosengruppe) configurations. It demonstrates:

- **Real-time interactive design** with drag-and-drop
- **Precise validation** using geometric algorithms and constraint checking
- **Responsive design** for desktop, tablet, and mobile
- **State persistence** via browser localStorage (no backend required)
- **Mathematical accuracy** in coordinate transformations and scaling
- **UX polish** with live guidelines, toasts, and touch support

The app keeps **realistic proportions** between plates and socket groups and follows German electrical layout constraints (edge distance, group spacing, anchor point).

---

## ✨ Features

### Core Functionality

- ✅ **Plate management** — Add, delete, and set dimensions (width 20–300 cm, height 30–128 cm)
- ✅ **Socket configuration** — Toggle socket mode, add groups with 1–5 sockets, horizontal/vertical
- ✅ **Drag-and-drop** — Position socket groups with live guidelines and distance (cm) display
- ✅ **Real-time validation** — Instant feedback and error messages for invalid positions
- ✅ **Responsive scaling** — Plates and sockets scale proportionally across screen sizes
- ✅ **Touch support** — Mobile-friendly with expanded touch targets
- ✅ **Zoom controls** — Canvas zoom in / out / reset
- ✅ **Persistent storage** — Configurations saved automatically in localStorage

### Visual & UX

- 🎨 Live guidelines during drag (X/Y distances in cm)
- 🎨 Color-coded toasts (success, warning, error)
- 🎨 Plate cards with correct aspect ratios
- 🎨 Typewriter-style welcome screen (first visit only)
- 🎨 Collapsible sidebar and burger menu on smaller screens

---

## 🛠️ Technology Stack

| Layer         | Technology                                     | Purpose                                 |
| ------------- | ---------------------------------------------- | --------------------------------------- |
| Framework     | Next.js 14                                     | App Router, SSR/SSG, image optimization |
| UI            | React 18                                       | Components, hooks, concurrent features  |
| Language      | TypeScript 5.4                                 | Type safety, interfaces, strict mode    |
| Styling       | Tailwind CSS 3.4                               | Utility-first CSS, responsive layout    |
| Icons         | Lucide React                                   | Icon set used across the UI             |
| Notifications | Sonner                                         | Toast messages                          |
| Utilities     | clsx, tailwind-merge, class-variance-authority | Class names and variants                |
| Linting       | ESLint + eslint-config-next                    | Code quality and Next.js rules          |

---

## 📁 Project Structure

```bash
socket-generator/
├── app/
│   ├── globals.css          # Global styles, CSS variables
│   ├── layout.tsx           # Root layout, metadata/SEO, Toaster
│   └── page.tsx             # Home page (renders AppWrapper)
├── components/
│   ├── app-wrapper.tsx      # Client wrapper: welcome screen vs main app
│   ├── welcome-screen.tsx   # First-time splash with typewriter
│   ├── socket-generator.tsx # Main orchestrator (state, drag, scaling)
│   ├── plate-canvas.tsx     # Canvas: plates, sockets, guidelines, zoom
│   ├── control-panel.tsx   # Inputs: plates, sockets, positions
│   ├── stacked-indicator.tsx # Stacked socket count indicator
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       ├── toggle.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── alert-dialog.tsx
│       └── toaster.tsx
├── lib/
│   ├── types.ts             # Interfaces, constants, validation
│   ├── utils.ts             # cn(), clamp()
│   └── hooks/
│       └── useTypewriter.ts # Typewriter animation hook
├── public/
│   ├── favicon.ico
│   └── steckdose.webp       # Socket image (optional CDN in next.config)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

**Important files:**

- **`app/layout.tsx`** — SEO metadata, fonts, global Toaster.
- **`app/page.tsx`** — Renders `AppWrapper` (server component).
- **`components/socket-generator.tsx`** — Central state, canvas scaling, drag logic, localStorage sync.
- **`components/plate-canvas.tsx`** — Renders plates and socket groups, guidelines, zoom.
- **`components/control-panel.tsx`** — Plate/socket forms, validation UI, lists.
- **`lib/types.ts`** — `Plate`, `SocketGroup`, validation and dimension helpers.

---

## 🚀 Installation & Setup

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher (or yarn/pnpm)
- **Git** (for cloning)

### Steps

1. **Clone and enter the project**

   ```bash
   git clone <repository-url>
   cd socket-generator
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | Description                     |
| --------------- | ------------------------------- |
| `npm run dev`   | Start dev server (default 3000) |
| `npm run build` | Production build                |
| `npm run start` | Run production server           |
| `npm run lint`  | Run ESLint (Next.js config)     |

---

## 🔐 Environment Variables

**You do not need any environment variables to run this project.** It works entirely in the browser with localStorage for persistence. There is no `.env` file in the repository.

**Optional (if you extend the app later):**

- If you add a backend or external API, you can create a `.env.local` and add variables such as:
  - `NEXT_PUBLIC_API_URL` — for a future API base URL
  - Any other keys your code reads via `process.env`
- Next.js loads `.env.local` automatically; do not commit secrets. For this current version, **no env vars are required**.

---

## 📖 How to Run & Use

1. **Start the app** — `npm run dev` and open <http://localhost:3000>.
2. **First visit** — Welcome screen with typewriter animation; it closes automatically or you can wait for it to finish.
3. **Main screen** — Left: canvas with plates and socket groups. Right (or behind burger menu on mobile): control panel.
4. **Plates** — Use “+ Neue Rückwand” to add a plate; edit width/height (clamped to 20–300 cm and 30–128 cm). Delete plates (at least one must remain).
5. **Sockets** — Turn “Steckdosen” ON. Select a plate (≥40×40 cm), set count (1–5), direction (horizontal/vertical), and X/Y in cm. Add groups with “+ Steckdosengruppe hinzufügen”.
6. **Drag** — On canvas, drag a socket group; guidelines show distances. Invalid positions snap back and show a toast.
7. **Zoom** — Use + / − / ↻ on the canvas to zoom in, out, or reset.

---

## 🧭 Project Walkthrough

### Entry and layout

- **`app/page.tsx`** — Default route; renders `AppWrapper`.
- **`AppWrapper`** — Client component. Reads `localStorage` for “has seen welcome”; shows `WelcomeScreen` once, then `SocketGenerator`.
- **`app/layout.tsx`** — Wraps all pages with font, global CSS, and Sonner `Toaster`. Metadata (title, description, Open Graph, etc.) is set here for SEO.

### Data and state

- **Plates** — Array of `{ id, width, height }` in cm. Stored in `socket-generator-plates` in localStorage.
- **Socket groups** — Array of `{ id, plateId, count, direction, positionX, positionY }`. Stored in `socket-generator-socket-groups`.
- **Scaling** — Each plate has a scale factor so that all plates fit in the canvas while keeping aspect ratio; socket positions are scaled the same way.

### Validation (learning focus)

- **Plates** — Width 20–300 cm, height 30–128 cm; at least one plate; only plates ≥40×40 cm can have sockets.
- **Socket groups** — 1–5 sockets; anchor at bottom-left center of first socket; ≥3 cm from plate edges; ≥4 cm between groups (Euclidean distance). Implemented in `lib/types.ts` (`validateSocketPosition`, `calculateSocketGroupDimensions`, etc.).

### Drag flow

1. Mouse/touch down on a socket group → store group id and pointer offset.
2. Move → convert pixel position to plate cm, update “live” position and guideline distances.
3. Mouse/touch up → call `validateSocketPosition`; if valid, update state and localStorage; if invalid, revert and show toast.

---

## 🛣️ Routes & Pages

The app uses the **Next.js App Router** with a single main route:

| Route | File           | Description                |
| ----- | -------------- | -------------------------- |
| `/`   | `app/page.tsx` | Home; renders `AppWrapper` |

There are **no dynamic routes** (e.g. `/plate/[id]`) or **API routes**. All logic is client-side; data lives in React state and localStorage.

---

## 🧩 Components & Reusability

### `AppWrapper`

- **Role:** Chooses between welcome screen and main app; avoids hydration issues by reading localStorage in `useEffect`.
- **Reuse:** Pattern is reusable for any “first-time vs returning user” flow with a single client gate.

### `WelcomeScreen`

- **Role:** First-time splash with typewriter and optional auto-close.
- **Reuse:** Use `useTypewriter` and the same localStorage key pattern in other onboarding UIs.

### `SocketGenerator`

- **Role:** Holds all state (plates, socket groups, drag, zoom, panel), computes scaling, handles drag and localStorage.
- **Reuse:** The structure (state + canvas + panel) can be adapted for other “canvas + form” editors (e.g. simple floor plans, layout tools).

### `PlateCanvas`

- **Role:** Renders plates and socket groups, drag handlers, guidelines, zoom controls. Receives ref for measuring container.
- **Reuse:** Good reference for any canvas that renders rectangles and draggable items with a bottom-left coordinate system and scaling.

### `ControlPanel`

- **Role:** Plate CRUD, socket form (plate, count, direction, X/Y), list of configured groups, delete confirmations.
- **Reuse:** Adapt for other “list + form + validation” UIs (different fields, same structure).

### `StackedIndicator`

- **Role:** Visual “stack” for socket count (e.g. 3 circles).
- **Reuse:** Any small numeric stack or badge visualization.

### `lib/hooks/useTypewriter`

- **Role:** Reveals a string character-by-character with configurable speed and delay.
- **Reuse:** Drop into any component that needs typewriter text:

```tsx
const { displayText, isComplete } = useTypewriter({
  text: "Your message here",
  speed: 80,
  delay: 500,
});
```

### `lib/utils.ts` — `cn()` and `clamp()`

- **`cn()`** — Merges Tailwind classes (via clsx + tailwind-merge). Use anywhere you build conditional class names.
- **`clamp(value, min, max)`** — Clamps numbers. Use for inputs (e.g. dimensions) that must stay in a range.

### UI components (`components/ui/`)

- **Button, Input, Toggle, Card, Badge, AlertDialog, Toaster** — Standard building blocks. Copy the `ui` folder into another Next.js + Tailwind project and reuse as-is or customize.

---

## 📦 Libraries & Dependencies

### Core

- **next** — React framework with App Router, file-based routing, and image optimization.
- **react** / **react-dom** — UI library and DOM renderer.

### Styling and UI

- **tailwindcss** — Utility CSS; configure in `tailwind.config.ts` and `postcss.config.js`.
- **lucide-react** — Icons (e.g. `Menu`, `X`, `Plus`, `Minus`); import by name.
- **sonner** — Toasts: `import { toast } from "sonner"`; use `toast.success()`, `toast.error()`, etc.
- **clsx** — Conditional class names: `clsx("base", condition && "active")`.
- **tailwind-merge** — Merges Tailwind classes without conflicts; used inside `cn()`.
- **class-variance-authority (cva)** — Optional variant APIs for components (e.g. button variants).

### Development

- **typescript** — Typing and strict checks.
- **eslint** / **eslint-config-next** — Linting and Next.js rules.
- **autoprefixer** / **postcss** — CSS pipeline for Tailwind.

**Example — using `cn()` and Sonner:**

```tsx
import { cn } from "@/lib/utils";
import { toast } from "sonner";

<div className={cn("p-4", isActive && "bg-blue-100")} />
<button onClick={() => toast.success("Saved!")}>Save</button>
```

---

## ⚙️ Functionalities & How It Works

### Plate dimensions and scaling

- Plate dimensions are in cm. Canvas size is in pixels. For each plate, a scale factor is computed so that:
  - In single-plate edit mode, the plate fills most of the canvas.
  - In multi-plate mode, all plates fit side-by-side (with optional centering if total width is less than viewport).
- Positions (e.g. socket X/Y) are stored in cm and multiplied by the same scale when rendering.

### Socket group dimensions

- Each socket is 7×7 cm; gap between sockets 0.2 cm. So for `count` sockets in a group:
  - Horizontal: width = `count * 7 + (count - 1) * 0.2`, height = 7.
  - Vertical: height = `count * 7 + (count - 1) * 0.2`, width = 7.
- Implemented in `lib/types.ts` as `calculateSocketGroupDimensions(count, direction)`.

### Validation (edge and spacing)

- **Edge distance** — The rectangle of the socket group must stay ≥3 cm from each plate edge. Anchor is at the bottom-left center of the first socket (3.5 cm from socket edges).
- **Group distance** — The minimum distance between any two groups on the same plate is 4 cm, computed as Euclidean distance between the two rectangles (axis-aligned).
- **`validateSocketPosition()`** in `lib/types.ts` returns `{ valid, error?, positionX, positionY }`. The UI calls it on “confirm” and on drag end.

### Coordinate system

- **Origin** — Bottom-left of each plate. X increases right, Y increases up.
- **Anchor** — Socket group position (positionX, positionY) is the bottom-left center of the first socket (3.5 cm from left and bottom of that socket). This is used both in validation and in `PlateCanvas` for positioning.

### localStorage keys

- `socket-generator-plates` — JSON array of plates.
- `socket-generator-socket-groups` — JSON array of socket groups.
- `socket-generator-is-editing-socket` — Whether user is in “editing socket” mode.
- `socket-generator-socket-toggle` — Whether socket mode is ON.
- `socket-generator-has-seen-welcome` — Whether to skip the welcome screen.

State is read in `useEffect` after mount (to avoid hydration mismatch) and written when the user changes plates or socket groups.

---

## 🔌 API & Backend

**This project has no backend and no API routes.** It is a fully client-side application:

- No `app/api/` routes.
- No server-side database or external HTTP API for the core flow.
- Data is stored only in the browser via **localStorage**.

If you later add a backend (e.g. to save designs to a server), you would:

1. Add API routes under `app/api/` (e.g. `app/api/plates/route.ts`).
2. Optionally add environment variables (e.g. `NEXT_PUBLIC_API_URL` in `.env.local`).
3. Call those APIs from the client (e.g. in `SocketGenerator`) and keep or replace localStorage as a cache.

---

## 🏷️ Keywords

**Technologies:** Next.js, React, TypeScript, Tailwind CSS, Vercel, Sonner, Lucide

**Features:** Drag-and-drop, real-time validation, responsive layout, touch support, localStorage, zoom, live guidelines

**Domain:** Electrical design, socket configuration, plate generator, German standards, Rückwand, Steckdose, Steckdosengruppe

**Concepts:** Coordinate systems, Euclidean distance, geometric validation, canvas rendering, state management, hydration-safe storage

**Learning:** Frontend architecture, React hooks, TypeScript interfaces, reusable UI components, constraint-based validation

---

## 📝 Conclusion

This repository is a complete **Plate, Socket & Canvas Generator** suitable for:

- **Learning** — Next.js App Router, React state, canvas UIs, validation logic, and localStorage.
- **Teaching** — Clear separation of layout, canvas, control panel, types, and utilities.
- **Reuse** — UI components, `useTypewriter`, `cn`/`clamp`, and patterns (welcome screen, scaling, drag) can be reused in other projects.

You can extend it with export (e.g. PDF/image), more socket types, grid snapping, undo/redo, or a backend API without changing the core structure described in this README.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
