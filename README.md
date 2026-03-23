# Movable Voice Landing Page

A modern, animated landing page for [Movable Voice](https://movablevoice.com) — the voice AI platform for operational intelligence.

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Astro](https://astro.build) | ^6.0.8 | Static site generator |
| [React](https://react.dev) | ^19.2.4 | Interactive components |
| [Tailwind CSS](https://tailwindcss.com) | ^4.2.2 | Styling |
| [Motion](https://motion.dev) | ^12.38.0 | Animations |
| Node.js | >=22.12.0 | Runtime |

## Getting Started

### Prerequisites

- Node.js 22.12.0 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd movable-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Project Structure

```
movable-landing/
├── public/
│   ├── assets/
│   │   └── LOGO/          # Brand logos (SVG & PNG)
│   └── team/              # Team member images
├── src/
│   ├── components/
│   │   ├── ui/            # Reusable UI components
│   │   │   ├── animated-beam.tsx
│   │   │   ├── resizable-navbar.tsx
│   │   │   └── sliding-testimonial.tsx
│   │   ├── Hero.astro
│   │   ├── HeroAnimation.tsx
│   │   ├── HowItWorks.astro
│   │   ├── Industries.astro
│   │   ├── UnifiedIntelligenceBeam.tsx
│   │   └── ...
│   ├── layouts/
│   │   └── Layout.astro   # Base HTML layout
│   ├── pages/
│   │   ├── index.astro    # Home page
│   │   ├── privacy.astro  # Privacy policy
│   │   └── team.astro     # Team page
│   ├── styles/
│   │   └── global.css     # Global styles & brand colors
│   └── lib/
│       └── utils.ts       # Utility functions
└── package.json
```

## Key Features

- **Animated Hero Section** — Cycling alerts demonstrating the Alert → Call → Ground Truth flow
- **Animated Beam Visualization** — Shows data flowing from multiple sources into unified intelligence
- **Sliding Testimonials** — Two-row infinite scroll testimonials
- **Responsive Navbar** — Collapsible navigation with scroll-aware styling
- **Brand-Compliant Design** — Follows Movable brand guidelines (colors, typography, gradients)

## Brand Guidelines

### Colors

```css
--color-deep-blue: #060634;    /* Primary background */
--color-tango: #ff4220;        /* Signature accent */
--color-aqua: #4addff;         /* Secondary accent */
--color-lime: #e7fe00;         /* Highlight accent */
```

### Typography

- **Headings:** Figtree (Bold 700, Medium 500)
- **Body:** Inter (Light 300)

### Button Shape

Movable uses a distinctive pill/octagonal button shape:
```css
border-radius: 50px 4px 50px 4px;
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Main landing page |
| `/privacy` | Privacy policy |
| `/team` | Team members |

## Development

### Adding New Components

1. Create `.astro` files for static components
2. Create `.tsx` files for interactive React components
3. Use `client:load` or `client:visible` directives for React components in Astro

### Styling

- Use Tailwind CSS utility classes
- Brand colors available via `text-tango`, `bg-deep-blue`, etc.
- Custom utilities in `src/styles/global.css`

## Deployment

Build the static site:

```bash
npm run build
```

Output will be in the `dist/` directory, ready for deployment to any static hosting service.

## License

Proprietary — Movable Voice Inc.
