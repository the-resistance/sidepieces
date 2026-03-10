# The Change Work

State-of-the-art website redesign for **Dr. Mary Sanders** — AI Leadership Summit, Change Management Consulting, and Neuro Linguistic Programming.

> *"They say: 'You can't stop AI.' What if we don't stop it and we choose to collaborate with it so it serves you?"*

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Home — hero, services, stats, CTA |
| `about.html` | About Dr. Mary Sanders & Makrina Feagins |
| `contact.html` | Contact form + details |
| `legal.html` | Legal notice |
| `privacy.html` | Privacy policy |

## Concept Art

Design mockups for client review are in the **`concept/`** folder:

```
concept/
├── index.html          ← Design concept gallery (open this)
├── home-concept.svg    ← Home page mockup
├── about-concept.svg   ← About Us page mockup
└── contact-concept.svg ← Contact page mockup
```

Open `concept/index.html` in a browser to view the full design concept gallery including color palette and typography tokens.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v14+

### Install & Run

```bash
npm install
npm start
```

This serves the site at `http://localhost:3000`.

## Project Structure

```
sidepieces/
├── index.html
├── about.html
├── contact.html
├── legal.html
├── privacy.html
├── src/
│   ├── styles.css     # Full design system
│   └── script.js      # Nav, animations, form
├── concept/           # Design concept SVG mockups
└── package.json
```

## Design System

- **Colors:** Deep Navy `#0A1628` · Teal `#0B7285` · Gold `#D97706`
- **Type:** Playfair Display (headings) · Inter (body)
- **Layout:** CSS Grid, fluid `clamp()` typography, mobile-first

## License

MIT

