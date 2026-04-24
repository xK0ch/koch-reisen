# Koch Reisen

Website for the travel agency Anja Koch — a modern, responsive Angular frontend.

## Contents

- [Tech stack](#tech-stack)
- [Installation](#installation)
- [Development](#development)
- [Components](#components)
- [Assets](#assets)
- [Tests](#tests)
- [Build](#build)
- [Design decisions](#design-decisions)

## Tech stack

| Technology | Version | Purpose |
|---|---|---|
| Angular | 21.x | Frontend framework |
| TypeScript | 5.9 | Language |
| SCSS | – | Styling |
| Vitest | 4.x | Unit tests |
| Angular CLI | 21.x | Build & development |

## Installation

```bash
npm install
```

## Development

Start the development server:

```bash
npm start
# or
ng serve
```

The app is then available at [http://localhost:4200](http://localhost:4200). Source changes trigger automatic reloads.

## Components

The site is a single-page application composed of the following standalone components:

### `HeaderComponent` (`app-header`)
Sticky header using the corporate color (#E30018). Contains:
- SVG logo and brand name
- Anchor navigation to each section (`#ueber-mich`, `#kontakt`, `#buerozeiten`)
- Responsive hamburger menu on mobile
- Explicit click handler that calls `scrollIntoView({ behavior: 'smooth' })` so anchor navigation works reliably even with Angular router present

### `AboutComponent` (`app-about`)
"About me" section with a two-column layout (image left, text right). Shows the profile picture of Anja Koch and the personal greeting text.

### `ContactComponent` (`app-contact`)
Contact section with three cards for address, phone, and email. Clickable `tel:` and `mailto:` links.

### `OfficeHoursComponent` (`app-office-hours`)
Embeds the office-hours PDF from `https://www.koch-reisen.de/pdfs/office_hours.pdf` via an `iframe` (sanitized through `DomSanitizer.bypassSecurityTrustResourceUrl`). A button below the iframe opens the PDF in a new tab as a fallback.

### `FooterComponent` (`app-footer`)
Simple footer with the logo, brand name, copyright year, and address.

## Assets

Files in `public/`:

| File | Purpose |
|---|---|
| `profile-picture.jpg` | Profile photo (833×865 px) |
| `koch-reisen-airplane.svg` | Logo, also used as favicon |
| `Avenir.ttc` | Font (TrueType Collection) |

## Tests

Run unit tests with Vitest:

```bash
npm test
# or
ng test
```

Tests run once (no watch mode):

```bash
ng test --watch=false
```

Every component has its own `*.spec.ts` file:

```
src/app/
├── app.spec.ts
└── components/
    ├── header/header.spec.ts
    ├── about/about.spec.ts
    ├── contact/contact.spec.ts
    ├── office-hours/office-hours.spec.ts
    └── footer/footer.spec.ts
```

The tests cover:
- Component creation
- Rendering of text, names, and addresses
- Correct `href` attributes for phone and email
- Mobile menu toggle behavior
- Smooth-scroll navigation via `scrollIntoView`
- PDF URL and iframe embedding

## Build

Create a production build:

```bash
npm run build
# or
ng build
```

Build artifacts end up in `dist/`.

## Design decisions

**Corporate design**
The primary color `#E30018` (red) is used for the header background, heading accents, dividers, and buttons. Body text uses dark gray (`#1f2937` / `#111827`) on white and light-gray backgrounds to keep contrast comfortably above 4.5:1.

**Typography**
`Avenir.ttc` is loaded via `@font-face` (served from `public/`). System sans-serif fonts are used as fallbacks.

**Favicon / logo**
The original `koch-reisen-airplane.svg` shipped with an A4-sized viewBox (420×595) while the airplane shape only occupied a small corner, which made it render tiny in favicons and headers. The SVG was rewritten with a tight `viewBox="280 208 120 92"` so the airplane fills its container at any size.

**PDF embedding**
Office hours are embedded via an `<iframe>`. The URL is marked safe with `DomSanitizer.bypassSecurityTrustResourceUrl`. A separate button below lets users open or download the PDF directly.

**Navigation**
Instead of relying only on `href="#anchor"` (which can interact unpredictably with Angular's router), the header adds an explicit `(click)` handler that calls `scrollIntoView({ behavior: 'smooth' })` and updates `location.hash` via `history.replaceState`. This guarantees smooth scrolling regardless of routing setup.

**Responsiveness**
Breakpoints at 768px (tablet/mobile) and 900px (about section). The navigation collapses into an animated hamburger menu on small screens.
