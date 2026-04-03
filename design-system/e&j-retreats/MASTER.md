# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** E&J Retreats
**Generated:** 2026-04-03
**Category:** Luxury Hospitality / Vacation Rental Management
**Style:** Liquid Glass + Premium Dark

---

## Global Rules

### Color Palette

| Role | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| Primary | `#FF7A00` | `orange-500` custom | CTA buttons, accents, highlights |
| Primary Hover | `#E86E00` | — | Button hover states |
| Primary Glow | `rgba(255,122,0,0.25)` | — | Button shadows, glows |
| Primary Light | `rgba(255,122,0,0.10)` | — | Subtle backgrounds, badges |
| Dark Base | `#0B1121` | `slate-950` | Hero/dark section backgrounds |
| Dark Surface | `#131C31` | — | Cards on dark backgrounds |
| Dark Elevated | `#1A2540` | — | Elevated cards, navbar scroll |
| Light Base | `#F8FAFC` | `slate-50` | Light section backgrounds |
| White | `#FFFFFF` | `white` | Cards, content areas |
| Text Primary | `#0F172A` | `slate-900` | Headings on light bg |
| Text Secondary | `#475569` | `slate-600` | Body text on light bg |
| Text Muted | `#64748B` | `slate-500` | Captions, labels |
| Text on Dark | `#F1F5F9` | `slate-100` | Headings on dark bg |
| Text on Dark Muted | `rgba(255,255,255,0.65)` | — | Body on dark bg |
| Border Light | `#E2E8F0` | `slate-200` | Borders, dividers |
| Border Glass | `rgba(255,255,255,0.12)` | — | Glass card borders |
| Success | `#22C55E` | `green-500` | Positive values, checks |
| Danger | `#EF4444` | `red-500` | Negative, excluded items |

### Typography

- **Heading Font:** Montserrat (weights: 600, 700, 800)
- **Body Font:** Inter (weights: 400, 500, 600)
- **Mood:** Professional, warm, trustworthy, premium hospitality

**Type Scale (Tailwind):**

| Element | Class | Weight |
|---------|-------|--------|
| H1 Hero | `text-5xl md:text-6xl lg:text-7xl` | `font-extrabold` (800) |
| H2 Section | `text-3xl md:text-4xl lg:text-5xl` | `font-bold` (700) |
| H3 Card Title | `text-xl md:text-2xl` | `font-bold` (700) |
| Body Large | `text-lg` | `font-normal` (400) |
| Body | `text-base` | `font-normal` (400) |
| Caption/Label | `text-xs uppercase tracking-widest` | `font-bold` (700) |
| Small | `text-sm` | `font-medium` (500) |

### Spacing Scale

| Token | Tailwind | Usage |
|-------|----------|-------|
| xs | `p-1` / `gap-1` | Tight icon gaps |
| sm | `p-2` / `gap-2` | Inline spacing |
| md | `p-4` / `gap-4` | Standard padding |
| lg | `p-6` / `gap-6` | Card padding |
| xl | `p-8` / `gap-8` | Large gaps |
| 2xl | `py-16` / `py-20` | Section vertical padding |
| 3xl | `py-24` / `py-32` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| sm | `shadow-sm` | Subtle lift |
| md | `shadow-md` | Cards, nav |
| lg | `shadow-lg` | Elevated cards, modals |
| orange | `shadow-[0_4px_20px_rgba(255,122,0,0.25)]` | Primary CTA buttons |
| glass | `shadow-[0_8px_32px_rgba(0,0,0,0.12)]` | Glass cards |

### Border Radius

| Element | Class |
|---------|-------|
| Buttons | `rounded-lg` (8px) |
| Cards | `rounded-2xl` (16px) |
| Large Cards | `rounded-3xl` (24px) |
| Inputs | `rounded-lg` (8px) |
| Images | `rounded-xl` to `rounded-2xl` |
| Badges | `rounded-full` |

---

## Style Guidelines

**Style:** Liquid Glass + Premium Dark

**Key Visual Language:**
- Dark gradient hero sections with glass-morphism overlays
- Translucent cards with `backdrop-blur` on dark backgrounds
- Clean white sections with subtle shadows for contrast rhythm
- Orange accents used sparingly for maximum impact (CTAs, highlights, badges)

**Key Effects:**
- Fluid animations (400-600ms cubic-bezier curves)
- Dynamic blur (`backdrop-filter: blur(16px)`)
- Smooth color transitions on hover
- Subtle parallax on hero elements
- Animated number counters for data points
- Staggered fade-in on scroll for content sections

### Glass Card Pattern

```
bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl
```

### Light Card Pattern

```
bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300
```

---

## Page Pattern

**Pattern:** Storytelling + Feature-Rich

**Section Flow:**
1. **Hero** — Dark gradient bg, split layout (copy + dashboard preview), primary CTA above fold
2. **Problem Awareness** — White bg, icon grid, emotional hook
3. **Property Showcase** — Full-bleed image strip
4. **Authority/What You Receive** — Light alt bg, checklist, dashboard screenshot
5. **Report Preview** — White bg, split layout with data card
6. **Urgency** — Dark section, bold messaging
7. **How We Help** — White bg, feature grid
8. **Pricing** — Light alt bg, card comparison
9. **ROI** — White bg, split with property image
10. **Lead Form** — Dark section, glass-morphism form
11. **Final CTA** — Dark gradient with property images
12. **Footer** — Dark, multi-column

---

## Anti-Patterns (Do NOT Use)

- ❌ **Emojis as icons** — Use Lucide React icons exclusively
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor-pointer
- ❌ **Layout-shifting hovers** — No scale transforms that shift surrounding content
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms for micro, 400-600ms for reveals)
- ❌ **Invisible focus states** — Focus states must be visible
- ❌ **Cheap stock visuals** — Use actual property photos
- ❌ **Fast/jarring animations** — All motion should feel smooth and intentional
- ❌ **Generic flat design** — Every section should have depth (shadows, gradients, or blur)
- ❌ **Inconsistent icon sizing** — Use w-5 h-5 for inline, w-6 h-6 for feature icons

---

## Pre-Delivery Checklist

- [ ] No emojis used as icons (use Lucide React SVGs)
- [ ] All icons from Lucide React, consistent sizing
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (200-300ms)
- [ ] Light mode text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected via Framer Motion
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbar
- [ ] No horizontal scroll on mobile
- [ ] All original text content preserved exactly
- [ ] All links and form actions preserved exactly
- [ ] Orange (#FF7A00) used only for CTAs and accents, not large surface areas
