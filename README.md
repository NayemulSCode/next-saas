npx create-next-app@latest

npm i baseline-browser-mapping@latest -D

npx shadcn@latest init

npx shadcn@latest add button card input label dropdown-menu dialog sonner avatar badge separator

src/
├── app/
│ ├── (auth)/
│ │ ├── login/
│ │ └── register/
│ ├── (dashboard)/
│ │ ├── dashboard/
│ │ ├── tasks/
│ │ ├── projects/
│ │ └── settings/
│ ├── api/
│ │ ├── auth/
│ │ ├── tasks/
│ │ └── projects/
│ ├── layout.tsx
│ └── page.tsx
├── components/
│ ├── ui/ (shadcn components)
│ ├── auth/
│ ├── dashboard/
│ └── shared/
├── lib/
│ ├── db.ts
│ ├── auth.ts
│ └── utils.ts
├── store/
│ └── useStore.ts
└── types/
└── index.ts

// ============================================================
// FOLDER STRUCTURE SUMMARY
// ============================================================

/_
src/
├── app/
│ ├── layout.tsx ← ROOT LAYOUT (no header/footer)
│ ├── page.tsx ← Landing page (with LandingHeader & Footer)
│ │
│ ├── (auth)/ ← Auth route group
│ │ ├── layout.tsx ← Auth layout (centered)
│ │ ├── login/
│ │ │ └── page.tsx
│ │ └── register/
│ │ └── page.tsx
│ │
│ ├── (dashboard)/ ← Dashboard route group
│ │ ├── layout.tsx ← Dashboard layout (Sidebar + Header)
│ │ ├── dashboard/
│ │ │ └── page.tsx
│ │ ├── tasks/
│ │ │ └── page.tsx
│ │ ├── projects/
│ │ │ └── page.tsx
│ │ └── settings/
│ │ └── page.tsx
│ │
│ └── api/
│ ├── auth/
│ ├── tasks/
│ └── projects/
│
├── components/
│ ├── dashboard/
│ │ ├── Header.tsx ← Used in dashboard layout
│ │ └── Sidebar.tsx ← Used in dashboard layout
│ ├── landing/
│ │ └── LandingHeader.tsx ← Used in landing page
│ └── shared/
│ └── Footer.tsx ← Used in landing page
_/
