# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a React-based web application called "HalaHome" built with modern web technologies including Vite, TypeScript, and Ant Design. It appears to be a landing page or marketing site for a product called "Hala" with features like data visualization, partner displays, and multi-language support.

## Development Commands

### Core Development Workflow
```bash
# Install dependencies
pnpm install

# Start development server (localhost:5173)
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run linting
pnpm lint
```

### TypeScript and Build Process
The project uses TypeScript with strict mode enabled and Vite as the build tool. The build process involves:
1. TypeScript compilation (`tsc`)
2. Vite bundling with React SWC plugin for fast refresh
3. PostCSS processing with px-to-vw conversion for responsive design

## Architecture Overview

### Tech Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5 with SWC plugin
- **UI Library**: Ant Design 5
- **Routing**: React Router DOM 6
- **Styling**: Less modules with PostCSS px-to-viewport conversion
- **Internationalization**: react-i18next with English and Chinese support
- **HTTP Client**: Axios with custom interceptors
- **Package Manager**: pnpm

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Main layout wrapper with header/footer
│   ├── header/         # Navigation component
│   ├── footer/         # Footer component
│   └── featureItem/    # Feature display components
├── pages/              # Route-based page components
│   ├── home/           # Landing page with sections
│   └── dataGraph/      # Data visualization page
├── api/                # API layer and HTTP client setup
├── i18n/               # Internationalization setup and translations
├── router/             # React Router configuration
└── assets/             # Static assets (images, fonts, videos)
```

### Key Architectural Patterns

**Component Organization**: 
- Components follow a modular structure with separate `.tsx`, `.module.less`, and `data.ts` files
- Layout uses a standard Header > Outlet > Footer pattern
- Pages are organized as route-based components with nested subcomponents

**Styling Strategy**:
- Less modules for component-scoped styling
- PostCSS px-to-viewport plugin converts px to vw units for responsive design (viewportWidth: 1440)
- Path alias `@/*` maps to `./src/*` for clean imports

**API Integration**:
- Centralized axios instance with base URL `https://api.aigram.chat`
- Response interceptors handle API result unwrapping
- Type-safe API functions with explicit return types

**Internationalization**:
- react-i18next with English (default) and Chinese translations
- Language-specific assets (images) are conditionally loaded
- Translation files organized in `src/i18n/translate/`

### State Management
The application uses React hooks (useState, useEffect, useRef) for local state management. No external state management library is currently implemented.

### Development Configuration
- **ESLint**: Configured with TypeScript, React, and React Hooks rules
- **TypeScript**: Strict mode with path mapping and bundler module resolution
- **Vite**: Configured with React SWC, path aliases, and development server on port 5173
- **PostCSS**: Automatic px-to-vw conversion for responsive design

### API Structure
The application makes requests to external APIs for data fetching, particularly for group/user information. The API layer includes proper TypeScript typing and response handling.