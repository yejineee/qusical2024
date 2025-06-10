# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Development:**
- `pnpm dev` - Start development server
- `pnpm build` - Build for production 
- `pnpm lint` - Lint and auto-fix with Biome
- `pnpm preview` - Preview production build

## Architecture

This is a React 18 + TypeScript SPA for a Korean musical promotion website built with:
- **TanStack Router** for file-based routing with auto-generated route tree
- **Tailwind CSS** with custom design system and tailwind-merge for conditional classes
- **Biome** for linting/formatting (not ESLint/Prettier)

### Routing
- File-based routing in `src/routes/` with 5 main pages: `/`, `/contents`, `/story`, `/relation`, `/daejangbu`
- Type-safe routing with auto-generated `routeTree.gen.ts`
- Root layout in `__root.tsx` handles analytics and dev tools

### Component Structure
Components use mixed extensions (.tsx for newer, .jsx for legacy):
- **Layout:** SubPageTemplate, SubPageHeader, BlockContainer for consistent page structure
- **Content blocks:** InstagramBlock, YoutubeBlock, CheerLink for social media integration
- **UI:** TextList, ContentsBox, LinkButton, Icon, Image for reusable elements
- **Features:** Share, MenuSection, ProfileSection, Time for page-specific functionality

### Styling Patterns
- Tailwind with custom CSS properties (primary color: `#7d736d`)
- Custom utility classes (`.container-width`, `.container-height`) 
- Mobile-first responsive design
- Use `tailwind-merge` for conditional class composition

### File Organization
- Path alias `~/*` maps to `src/*`
- Constants in `constants.js`
- Utilities in `src/utils/`
- Public assets in `/public/image/` and `/public/favicon/`

### TypeScript Configuration
- Strict mode with tab indentation and double quotes
- React hooks and JSX rules enforced via Biome
- Target ES2022 with DOM libraries

## Development Notes

- Always use TypeScript (.tsx) for new components
- Follow existing component composition patterns (BlockContainer for styling, compound components)
- State management is local with React hooks - no global state
- Biome handles all code formatting and linting
- Site uses Intersection Observer for scroll-based visibility features
- Deployed on Vercel with SPA rewrites configured