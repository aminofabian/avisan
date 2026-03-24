# Avisan — Coming Soon Page

> Pixel-accurate "Coming Soon" landing page built with Next.js, Tailwind CSS, and shadcn/ui.

Reference design:

![Reference](.cursor/projects/Users-mac-Desktop-avisan-trader-avisan/assets/image-23a4c5a5-e2cf-4e42-854c-d45f04cec8c6.png)

---

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS 4 + custom CSS
- **Components:** shadcn/ui, Radix UI primitives
- **Icons:** Lucide React
- **Language:** TypeScript

---

## Milestones

### Milestone 1 — Project Setup & Design Tokens

**Goal:** Lock in the visual foundation so every subsequent milestone is consistent.

- [x] Choose and import web font (geometric sans — e.g. Poppins or similar) via `next/font`
- [x] Define design tokens in `globals.css`:
  - Primary black: `#000000`
  - Accent yellow: `~#F5C544` (warm golden from reference)
  - Off-white background: `#FFFFFF`
  - Muted text: `~#888888`
  - Input border: `~#1A1A1A`
- [x] Set base typography scale (heading, subheading, body, caption)
- [x] Confirm tokens render correctly with a quick test page

---

### Milestone 2 — Layout Skeleton

**Goal:** Build the full-page structure with correct proportions at desktop (1024–1440px).

- [x] Create semantic layout in `app/page.tsx`: `<header>`, `<main>`, `<footer>`
- [x] Header row:
  - Left: logo mark (bold "D" shape)
  - Center: nav links — `About`, `Services`, `Retainership`
  - Right: `Shop ↗` pill button + hamburger menu icon
- [x] Main section — two-column grid:
  - Left column: text content area (vertically centered)
  - Right column: mockup/card area (relatively positioned container)
- [x] Footer row:
  - Left: social icon circles (Facebook, Twitter, Instagram, YouTube)
  - Right: text links — `FAQ`, `Privacy Policy` (underlined), `Email Us`
- [x] Verify spacing and proportions match the reference at 1280px width

---

### Milestone 3 — Hero Left Content

**Goal:** Implement all text and form elements on the left side of the hero.

- [x] "— Coming Soon" kicker line with em-dash prefix
- [x] Headline: **"Get Notified When we Launch"** — large, bold, two-line
- [x] Email capture row:
  - Rounded pill container with dark border
  - Left side: placeholder text `Enter your email address`
  - Right side: dark filled `Notify Me` button inside the pill
- [x] Disclaimer: `*Don't worry we will not spam you :)`
- [x] Match exact font sizes, weights, and vertical spacing from reference

---

### Milestone 4 — Hero Right Mockup Cards

**Goal:** Recreate the overlapping product/app card composition on the right side.

- [x] Large soft yellow gradient circle as background shape (CSS radial gradient or SVG)
- [x] Main card — "Product Info" phone-style card:
  - Header with `Product Info` title + status bar
  - Profile row: avatar, name `Broops Goat`, `Influencer` label, `View` button
  - Product image strip (row of product thumbnails)
  - Product name: `Omega-Q`, subtitle: `Men's Running Shoe`
  - Price row with house icon + `15+` stat
- [x] Floating card — map/share card (top-right overlap):
  - Map pin graphic
  - `Share Path Now` and `Go To Home` buttons
- [x] Floating card — analytics mini-card (mid-right):
  - Small bar chart graphic
  - Share icon
- [x] Floating card — review/comment card (bottom):
  - Avatar, `Selina Brooks` name
  - `Wonderful product. Amazing 👍` text
  - Heart icon, `54 min` timestamp
  - `$45.99` price + `Add to Cart` button
- [x] Position all cards with absolute/relative positioning and z-index stacking
- [x] Add subtle box-shadow to each card

---

### Milestone 5 — Responsiveness

**Goal:** Make the page look great at every breakpoint without losing the design intent.

- [x] **Desktop (≥1024px):** Exact reference match — two-column layout with overlapping cards
- [x] **Tablet (768–1023px):** Maintain two columns but reduce card overlap/scale
- [x] **Mobile (<768px):**
  - Stack layout — hero text above, mockup cards below
  - Simplify nav to hamburger-only
  - Scale down card composition or show single primary card
- [x] Test at 1440px, 1280px, 1024px, 768px, 375px

---

### Milestone 6 — Micro-Interactions & Polish

**Goal:** Add the subtle motion and hover states that make it feel production-quality.

- [x] `Shop` button hover: subtle scale + shadow lift
- [x] `Notify Me` button hover: background lighten + transition
- [x] Email input focus: ring/outline state
- [x] Nav links hover: underline slide-in or opacity shift
- [x] Social icons hover: fill or background change
- [x] Optional: floating cards subtle float/bob animation (CSS keyframes, very gentle)
- [x] Footer link hover states
- [x] Smooth page entrance animation (fade-in on load)

---

### Milestone 7 — Email Capture Integration (Optional)

**Goal:** Wire up the email form to actually collect subscribers.

- [ ] Choose provider (e.g. Resend, Mailchimp, ConvertKit, or custom API route)
- [ ] Create `app/api/subscribe/route.ts` server action or API route
- [ ] Add form validation (email format check)
- [ ] Success/error toast or inline feedback
- [ ] Rate limiting / honeypot for spam prevention
- [ ] Test end-to-end submission flow

---

## File Structure (Target)

```
app/
├── page.tsx              # Full coming-soon page
├── layout.tsx            # Root layout (font loading, metadata)
├── globals.css           # Design tokens, custom styles
├── api/
│   └── subscribe/
│       └── route.ts      # Email capture endpoint (Milestone 7)
components/
├── ui/
│   └── button.tsx        # shadcn button (existing)
├── header.tsx            # Nav bar
├── hero.tsx              # Hero section (left + right)
├── hero-cards.tsx        # Floating card composition
├── email-form.tsx        # Email input + submit
├── footer.tsx            # Footer with socials + links
└── social-icons.tsx      # Social media icon circles
public/
├── logo.svg              # Logo mark
└── products/             # Product card images (if using real assets)
```

---

## Getting Started

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Acceptance Criteria

- At 1280px, side-by-side screenshot comparison with reference is visually aligned
- Layout, spacing, typography hierarchy, overlap depth, and color tones all match
- No layout breaks at common desktop / tablet / mobile widths
- Clean, maintainable JSX with consistent Tailwind class usage
- Lighthouse performance score ≥ 90
# avisan
