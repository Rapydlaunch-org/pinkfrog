# 🐸 Pink Frog Studio

**Stories that leap. Films worth jumping for.**

An award-winning, cinematic single-page scrolling website built with Next.js 16, Framer Motion, and Tailwind CSS.

---

## 🎬 Concept

This is **ONE PAGE** that feels like **3-4 pages stitched together** on scroll. A playful frog mascot jumps between sections as you scroll, creating a unique storytelling experience.

### Sections

1. **Hero / Landing** - Massive typography, bold statement, primary CTA
2. **Story Section** - Scroll-driven line-by-line narrative reveal
3. **Work Showcase** - 2 premium movie presentations (quality over quantity)
4. **CTA / Contact** - Final call to action with dual CTAs

---

## 🛠 Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Framer Motion** (scroll-based animations)
- **Tailwind CSS** (via `@theme inline`)
- **React 19**

---

## 🎨 Design Features

### Brand Identity
- **Primary Color**: Soft pink backgrounds (`#fff0f5`)
- **Accent Color**: Strong frog green (`#22c55e`)
- **Typography**: Massive scales up to 16rem for hero sections
- **Vibe**: Bold, playful, cinematic, slightly rebellious

### Animations
- ✨ Scroll-snap sections for page-like transitions
- 🐸 Frog mascot with jump animations synced to scroll
- 📖 Line-by-line text reveals
- 🎥 Hover effects on movie showcases
- 🎊 Celebration confetti on final section

### Premium Details
- Smooth cubic-bezier easing (`[0.34, 1.56, 0.64, 1]`)
- Responsive fluid typography with `clamp()`
- Gradient backgrounds and decorative elements
- Shadow effects and glassmorphism touches

---

## 🚀 Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the magic.

### Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
pinkfrog/
├── app/
│   ├── globals.css          # Brand colors, massive typography, animations
│   ├── layout.tsx            # Root layout with SEO metadata
│   └── page.tsx              # Main page orchestrating all sections
├── components/
│   ├── FrogAnimation.tsx     # Animated frog mascot (scroll-synced)
│   ├── Hero.tsx              # Section 1: Hero with massive typography
│   ├── StorySection.tsx      # Section 2: Line-by-line narrative
│   ├── WorkShowcase.tsx      # Section 3: 2 premium movie showcases
│   └── CTA.tsx               # Section 4: Contact & final CTA
└── public/                   # Static assets
```

---

## 🎯 Key Components

### FrogAnimation
The star of the show! A playful frog that:
- Jumps between sections on scroll
- Has idle bounce animation
- Shows celebration confetti on final section
- Uses `useScroll` and `useTransform` from Framer Motion

### Hero
- Massive responsive typography (up to 16rem)
- Staggered fade-in animations
- Premium CTA button with hover effects
- Scroll indicator

### StorySection
- Line-by-line text reveals with staggered delays
- Scroll-triggered animations using `useInView`
- Gradient decorative elements
- Highlighted key phrases

### WorkShowcase
- Showcases exactly 2 movies (quality over quantity)
- Large gradient thumbnails
- Play button overlays
- Hover effects with scale and border animations

### CTA
- Bold final statement
- Dual CTAs (primary + secondary)
- Contact information
- Footer with branding

---

## 🎨 Customization

### Colors
Edit `app/globals.css` to change brand colors:
```css
:root {
  --pink-primary: #ff75a5;
  --frog-green: #22c55e;
  /* ... */
}
```

### Typography
Massive typography scales are defined in `globals.css`:
```css
.text-massive {
  font-size: clamp(4rem, 15vw, 16rem);
}
```

### Movies
Edit the `movies` array in `components/WorkShowcase.tsx`:
```typescript
const movies: Movie[] = [
  {
    id: 1,
    title: "Your Movie Title",
    description: "One-line description",
    thumbnail: "linear-gradient(...)",
  },
  // Only 2 movies max!
];
```

---

## 🏆 Design Philosophy

### Hard Rules
- ✅ No template vibes
- ✅ No generic startup copy
- ✅ No clutter
- ✅ Maximum 2 movies in showcase
- ✅ Editorial + cinematic feel
- ✅ Readable, scalable code

### Animation Principles
- Smooth, premium easing
- Scroll-based reveals
- No cheap effects
- Intentional motion
- Performance-first

---

## 📱 Responsive Design

Fully responsive across all devices:
- **Desktop**: Full massive typography experience
- **Tablet**: Scaled typography with maintained proportions
- **Mobile**: Optimized layouts with `clamp()` for fluid scaling

---

## 🔍 SEO

- Semantic HTML structure
- Optimized metadata in `layout.tsx`
- Open Graph tags for social sharing
- Accessible fonts and contrast
- Fast page load times

---

## 📝 License

© 2025 Pink Frog Studio. All rights reserved.

---

## 🐸 Final Note

This website is designed to feel like **a frog leaping through a brand story** — bold, playful, and unforgettable.

Every frame is intentional. Every animation matters. Every story deserves to leap.

**Now go create something amazing!** 🚀
