# Pink Frog Website Replication Guide

This guide provides a comprehensive summary of the "Pink Frog" website architecture, design system, and key components to help replicate the design for a new project.

## 1. Technology Stack

*   **Framework**: Next.js 16 (App Router)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS v4 (using `@theme inline` in CSS)
*   **Animations**: Framer Motion (`framer-motion` ^12.x)
*   **Icons**: Lucide React (`lucide-react`)
*   **Fonts**: Google Fonts (Inter, JetBrains Mono, Slackey, etc.)

## 2. Design System

### Colors
Defined as CSS variables and Tailwind theme extensions:
*   **Primary Pink**: `#FF69B4` (`--frog-pink`)
*   **Primary Green**: `#2CCC4C` (`--frog-green`)
*   **Background**: `#ffffff` / `#fdfdfd` (Light theme base)
*   **Foreground**: `#1a1a1a`

### Typography
*   **Headings / Display**: "Slackey" (Cursive/Funky feel), "Space Grotesk"
*   **Body Text**: "Inter", "Sansation"
*   **Technical / Console**: "JetBrains Mono" (Critical for the "terminal" vibe)

### Visual Effects (The "Vibe")
*   **Theme**: Cyberpunk / Terminal meets Organic / playful.
*   **Key Elements**:
    *   **Glitch Effects**: CSS animations for displacing text/borders.
    *   **CRT/Scanlines**: Overlays with repeating linear gradients to simulate old screens.
    *   **Glassmorphism**: Backdrop blur with semi-transparent backgrounds (`backdrop-blur-md`).
    *   **Floating Elements**: Animated SVG leaves and scanning lines in the background.

## 3. Project Structure & Core Layout

### Root Layout (`app/layout.tsx`)
*   Wraps the application.
*   Loads Google Fonts via `<head>`.
*   Includes global components that persist across pages:
    *   `<BackgroundElements />`: The animated background layer.
    *   `<NavigationMenu />`: The floating header/nav.
    *   `children`: The page content.

### Global Styles (`app/globals.css`)
*   Imports Tailwind.
*   Defines custom animations (`blink`, `scanline-move`, `glitch-effect`).
*   Sets base font styles and custom scrollbar styling (Pink/Green gradient).
*   Defines utility classes like `.text-hero`, `.console-box`, `.crt-effect`.

## 4. Key Components Breakdown

### 1. `FrogLoader.tsx` (The Preloader)
*   **Functionality**: Blocks interaction until "loaded".
*   **Visuals**:
    *   Central Frog Logo (SVG mask) that "fills" with green water based on percentage.
    *   Terminal-style boot logs ("INITIALIZING...", "MOUNTING MODULES...").
    *   Animated using Framer Motion (`AnimatePresence`).

### 2. `NavigationMenu.tsx` (Header)
*   **Behavior**:
    *   Fixed at top, initially transparent/glassy.
    *   **Hides on scroll down**, reappears on scroll up (detected via `window.scrollY`).
    *   **Mobile**: Full-screen overlay menu with massive typography and skewed background SVGs.
*   **Style**: "Mono" font for links with animated underlines.

### 3. `BackgroundElements.tsx`
*   **Composition**:
    *   `<GridBackground />`: Faint tactical grid.
    *   `MovingLine`: Vertical and horizontal scanning lines (green/pink colors).
    *   `Leaf`: Floating SVG icons that drift, rotate, and fade in/out randomly.

### 4. `WorkShowcase.tsx` (Project Gallery)
*   **Aesthetic**: "System Error" / Glitch theme.
*   **Implementation**:
    *   Video player wrapped in a container with `system-error-container` class.
    *   CSS-based "Glitch Border" (`animate-pulse-border`) and "Corner Brackets".
    *   **CRT Overlay**: Divs with `.scanlines`, `.chromatic-aberration`, `.vignette-flicker` absolute positioned over the video.
    *   Sidebar list of projects. Clicking updates the video state.

### 5. `Console.tsx` & Typography
*   Uses `JetBrains Mono` for a "code block" aesthetic.
*   Boxes have a "Console Box" style: white background, pink border, green left accent, heavy shadow.
*   **Dynamic Data**: The Story Section console displays real-time clock and system status.

### 6. Additional Interactive Sections
*   **About Section Slider**: An infinite scrolling horizontal marquee (`x: ["0%", "-50%"]`) showcasing posters.
*   **Modal Interactions**: Poster clicks open a full-screen backdrop-blur modal with download options.
*   **Geometric Layouts**: Use of `clip-path` (polygon) to create "cut corners" on images (e.g., Founder section).

## 5. Animation Techniques

### Framer Motion Usage
*   **Page Transitions**: `AnimatePresence` used in `app/page.tsx` to crossfade between Loader and Content.
*   **Scroll Animations**: Elements fade in or slide up as they enter the viewport.
*   **Complex Sequences**: The `FrogLoader` uses sequence animations for the water fill and text logs.

### CSS Animations
Custom `@keyframes` in `globals.css` or styled-jsx blocks are used for continuous "noise" effects that would be too heavy for JS:
*   `glitch-header`: Jitters text left/right.
*   `scanline-move`: Moves a gradient down infinitely.
*   `pulse-border`: Fades opacity.

## 6. How to Replicate

1.  **Setup Next.js**: `npx create-next-app@latest` (TS, Tailwind, ESLint).
2.  **Install Deps**: `npm install framer-motion lucide-react`.
3.  **Copy Assets**: You need the `Frog.svg`, `logo.svg`, and font imports.
4.  **Port Global CSS**: Copy the content of `app/globals.css` to get the variables and animation classes.
5.  **Recreate Layout**:
    *   Create `components/BackgroundElements.tsx` and imports its sub-components.
    *   Add it to `layout.tsx`.
6.  **Build Components**: Start with `NavigationMenu` and the `FrogLoader` as they define the initial experience.
