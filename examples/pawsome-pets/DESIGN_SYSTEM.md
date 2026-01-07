# 🎨 Pawsome Pets - Design System Guide

## Color Palette

### Primary Colors
```
🟣 Purple Vibrant: #7c3aed
   - Hero backgrounds
   - Primary CTAs
   - Accent text

🟪 Purple Light: #a78bfa
   - Gradients
   - Hover states
   - Card backgrounds

🍑 Peach Warm: #ffb088
   - Section backgrounds
   - Warm accents
   - Card highlights

🌸 Peach Light: #ffd4ba
   - Subtle backgrounds
   - Gradients
   - Soft accents

💛 Yellow Fun: #fde047
   - CTA buttons
   - Highlights
   - Playful accents

🧡 Coral Bright: #fb923c
   - Secondary CTAs
   - Warm highlights
   - Energy accents
```

---

## Typography

### Font Sizes
```css
.text-mega
  - Size: clamp(2.5rem, 10vw, 7rem)
  - Weight: 900
  - Transform: UPPERCASE
  - Use: Main headlines

.text-ultra
  - Size: clamp(4rem, 15vw, 10rem)
  - Weight: 900
  - Transform: UPPERCASE
  - Use: Hero headlines

.text-playful
  - Size: clamp(1.5rem, 5vw, 3rem)
  - Weight: 800
  - Use: Section titles
```

### Font Weights
- **900**: Main headlines
- **800**: Subheadings
- **700**: Bold text
- **600**: Semi-bold

---

## Buttons

### Primary Button (Purple)
```css
.btn-fun
  - Background: Purple gradient
  - Border: 4px solid black
  - Shadow: 6px 6px 0px black
  - Padding: 1.25rem 3rem
  - Border-radius: 50px
  - Transform: UPPERCASE
```

**States:**
- Hover: Translate(3px, 3px), shadow reduces
- Active: Translate(6px, 6px), no shadow

### Secondary Button (Yellow)
```css
.btn-yellow
  - Background: Yellow gradient
  - Border: 4px solid black
  - Shadow: 6px 6px 0px black
  - Color: Black text
```

---

## Cards

### Bold Card
```css
.card-bold
  - Background: White
  - Border: 4px solid black
  - Border-radius: 20px
  - Shadow: 8px 8px 0px black
```

**Hover Effect:**
- Transform: translate(4px, 4px)
- Shadow: 4px 4px 0px black

---

## Special Elements

### Thought Bubble
```css
.thought-bubble
  - Shape: Circle
  - Border: 3px solid black
  - Shadow: 4px 4px 0px black
  - Includes: 2 smaller circles below
```

**Usage:**
- Pet character thoughts
- Icon highlights
- Playful callouts

### Decorative Icons
- Size: 4rem - 9rem
- Opacity: 0.1 - 1
- Animation: Float, wiggle, bounce

---

## Animations

### Bounce Fun
```css
Duration: 2s
Easing: ease-in-out
Effect: Vertical bounce with rotation
```

### Wiggle
```css
Duration: 1s
Easing: ease-in-out
Effect: Rotate left/right
```

### Float
```css
Duration: 3s
Easing: ease-in-out
Effect: Vertical float with slight rotation
```

### Pop
```css
Duration: 0.5s
Easing: cubic-bezier(0.34, 1.56, 0.64, 1)
Effect: Scale from 0 to 1 with overshoot
```

---

## Spacing

### Section Padding
- Mobile: py-12 px-6
- Desktop: py-20 px-12

### Card Padding
- Small: p-6
- Medium: p-8
- Large: p-12

### Grid Gaps
- Mobile: gap-4
- Tablet: gap-6
- Desktop: gap-8

---

## Borders

### Standard
- Width: 4px
- Color: Black (#0a0a0a)
- Style: Solid

### Rounded Corners
- Small: 16px
- Medium: 20px
- Large: 24px
- Pill: 50px

---

## Shadows

### Button Shadow
```css
box-shadow: 6px 6px 0px #0a0a0a
```

### Card Shadow
```css
box-shadow: 8px 8px 0px #0a0a0a
```

### Thought Bubble Shadow
```css
box-shadow: 4px 4px 0px #0a0a0a
```

---

## Icons & Emojis

### Recommended Icons
- 🐕 Dogs
- 🐈 Cats
- 🦴 Bones
- 💛 Hearts
- 👍 Thumbs up
- 😊 Smileys
- 🌭 Hot dogs
- 🎮 Games
- 🎾 Toys
- ⭐ Stars
- 🏆 Trophies
- 💚 Green hearts

### Size Guidelines
- Decorative: 4rem - 9rem
- In cards: 4rem - 7rem
- Inline: 1.5rem - 2rem

---

## Gradients

### Purple Gradient
```css
background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)
```

### Yellow Gradient
```css
background: linear-gradient(135deg, #fde047 0%, #fbbf24 100%)
```

### Peach Background
```css
background: linear-gradient(to-br, #ffedd5, #fed7aa, #fde68a)
```

---

## Layout Patterns

### Hero Layout
```
Grid: 1 column (mobile) → 2 columns (desktop)
Left: Text content
Right: Character/image
Background: Purple gradient
```

### Benefits Grid
```
Grid: 1 column → 2 columns → 4 columns
Cards: Equal height
Spacing: gap-6
```

### Stats Section
```
Background: Peach gradient
Center: Large headline
Below: Testimonial card
Bottom: 3-column stat grid
```

---

## Responsive Breakpoints

```css
Mobile:  < 768px
Tablet:  768px - 1024px
Desktop: > 1024px
```

### Typography Scaling
- Mobile: Base sizes
- Tablet: 1.2x
- Desktop: 1.5x - 2x

---

## Best Practices

### Do's ✅
- Use bold borders (4px)
- Add strong shadows
- Uppercase headlines
- Vibrant colors
- Playful icons
- Hover animations

### Don'ts ❌
- Thin borders
- Subtle shadows
- Lowercase headlines
- Muted colors
- Static elements
- No interactions

---

## Component Checklist

When creating new components:
- [ ] Bold 4px black border
- [ ] Strong shadow (6-8px)
- [ ] Uppercase typography
- [ ] Vibrant background color
- [ ] Hover animation
- [ ] Playful icon/emoji
- [ ] Responsive sizing
- [ ] Smooth transitions

---

## Accessibility

### Contrast Ratios
- Text on purple: Use white
- Text on peach: Use black
- Text on yellow: Use black
- Minimum ratio: 4.5:1

### Interactive Elements
- Minimum tap target: 44px
- Clear focus states
- Keyboard navigation
- Screen reader friendly

---

## Performance

### Optimization Tips
- Use CSS animations (GPU accelerated)
- Lazy load images
- Optimize emoji/icon sizes
- Minimize re-renders
- Use will-change sparingly

---

**This design system creates bold, playful, memorable experiences! 🐕💜**
