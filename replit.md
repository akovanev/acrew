# SailVenture - Next.js Website

## Overview
This is a Next.js 16 application (App Router) with Tailwind CSS featuring a sailboat/maritime theme. The site has a "Coming soon" homepage and an About page with team members.

## Current State
- **Status**: Fully functional and running on Replit
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 with custom maritime theme
- **Package Manager**: npm
- **Development Server**: Running on port 5000

## Recent Changes (December 4, 2025)
- Redesigned entire site with new sailboat logo and maritime color theme
- Created simplified Home page with "Coming soon" message
- Created About page with 3 team members (round photo styling)
- Updated navigation to Home and About only
- Removed all old Netlify demo pages
- Updated header and footer with new logo

## Project Architecture

### Pages
1. **Home** (`/`) - Simple "Coming soon" message
2. **About** (`/about`) - Team page with 3 members, round photos

### Directory Structure
- `/app` - Next.js App Router pages and layouts
  - `/about` - About/Team page
  - `layout.jsx` - Root layout with header and footer
  - `page.jsx` - Home page
- `/components` - React components
  - `header.jsx` - Navigation header with logo
  - `footer.jsx` - Footer with logo and copyright
- `/public` - Static assets
  - `/images/logo.png` - Sailboat logo
  - `/images/team/` - Team member photos
- `/styles` - Global CSS and Tailwind config

### Theme Colors
- **Primary**: #0891b2 (Ocean Cyan)
- **Primary Dark**: #0e7490 (Deep Cyan)
- **Secondary/Background**: #1e3a5f (Navy Blue)
- **Accent**: #06b6d4 (Bright Cyan)

### Configuration Files
- `next.config.js` - Next.js configuration with React Compiler
- `package.json` - Dependencies and scripts (dev server on port 5000)
- `postcss.config.js` - PostCSS configuration for Tailwind
- `jsconfig.json` - JavaScript path aliases

## Development

### Running Locally
The development server is automatically started via the configured workflow:
```bash
npm run dev
```
Server runs on: http://0.0.0.0:5000

### Building for Production
```bash
npm run build
```

### Running Production Build
```bash
npm run start
```

## Deployment
The project is configured for deployment:
- Compatible with Netlify (Next.js native support)
- Compatible with Replit autoscale deployment
- **Build**: `npm run build`
- **Run**: `npm run start`
- **Port**: 5000

## User Preferences
None recorded yet.

## Dependencies
All dependencies are managed via npm and defined in `package.json`. Key dependencies include:
- next@^16.0.7
- react@19.2.0
- react-dom@19.2.0
- tailwindcss@^4.1.15
