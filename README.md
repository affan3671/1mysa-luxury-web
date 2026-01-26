# 1mysa-luxury-web

Frontend application for 1MYSA luxury brand. Built with React, TypeScript, and Tailwind CSS.

## Project Overview

This is a responsive, high-performance web application designed for a luxury fashion/lifestyle brand. The architecture prioritizes clean component design, type safety, and fast load times.

The site features a minimalist aesthetic with smooth interactions, optimized image loading, and a component-based architecture that allows for easy content updates.

## Tech Stack

- **Vite** - Fast build tool with HMR
- **React 18** - Component-based UI with hooks
- **TypeScript** - Static type checking throughout
- **Tailwind CSS** - Utility-first styling system
- **shadcn/ui** - Accessible UI primitives (Radix-based)
- **Lucide React** - Consistent iconography

## Getting Started

```bash
# Clone repository
git clone https://github.com/affan3671/1mysa-luxury-web.git

# Install dependencies
cd 1mysa-luxury-web
npm install

# Start development server
npm run dev
Application runs at http://localhost:5173.
Build & Deployment
bash
Copy
# Production build
npm run build

# Preview production build
npm run preview
The build generates static files in dist/ suitable for deployment on Vercel, Netlify, AWS S3, or any static host.
Architecture
Copy
src/
├── components/
│   ├── ui/              # Reusable UI components (buttons, cards, modals)
│   ├── layout/          # Layout wrappers (header, footer, navigation)
│   └── sections/        # Page sections (hero, gallery, features)
├── pages/               # Route components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and helpers
└── styles/              # Global styles and Tailwind config
Customization
Branding: Edit tailwind.config.ts to modify the color palette, typography scale, and spacing system. The design tokens are centralized there.
Content: Page content is component-driven. Update text and imagery in the respective section components under src/components/sections/.
Assets: Static files (images, fonts, videos) belong in public/. Reference them with root-relative paths.
Development Notes
Strict TypeScript configuration enabled
ESLint rules for React Hooks and accessibility
Components designed for composition over inheritance
Image optimization handled at build time
Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
Browser Support
Chrome/Edge (last 2 versions)
Firefox (last 2 versions)
Safari (last 2 versions)
Mobile Safari iOS 14+
Chrome Android
License
MIT License - feel free to use this as a template for similar projects.
