# Anchorline Studio — Website

A 4-page responsive marketing site for a fictional brand & product consultancy, built with plain HTML, CSS, and vanilla JavaScript — no build step, no frameworks, no dependencies to install.

**Theme:** dark gradient background with ambient color blobs, glassmorphism panels (frosted, blurred, translucent cards), a video hero, and a subtle "architectural drawing sheet" motif (corner registration marks + rotated sheet labels) carried over from the site's original identity.

---

## Files

```
anchorline-studio-site/
├── index.html      Home — video hero, services, process, CTA
├── about.html       About — studio story, principles, team
├── contact.html     Contact — studio details + contact form
├── account.html      Client Access — Log in / Create account (tabbed)
├── styles.css        Shared stylesheet — all colors, layout, glass effects
└── script.js         Shared behavior — nav, tabs, corner marks, forms
```

All four pages load the same `styles.css` and `script.js`, so a change to either file updates every page at once.

## Running it

No server or build tools required — just open `index.html` in a browser. Internet access is needed for:
- Google Fonts (Space Grotesk, Literata, JetBrains Mono)
- The hero background video, hosted on Mixkit's CDN

If you'll be hosting this yourself, any static file host works (Netlify, Vercel, GitHub Pages, S3, or a plain web server) — just upload all six files to the same folder, keeping their relative paths.

## Customizing

**Colors & theme** — every color is a CSS custom property at the top of `styles.css`, under `:root`. Change a variable once and it updates everywhere it's used:
```css
--violet: #8B5CF6;
--magenta: #EC4899;
--cyan: #22D3EE;
--grad-primary: linear-gradient(135deg, #6D28D9 0%, #8B5CF6 45%, #EC4899 100%);
```

**Hero video** — set in `index.html` inside the `<video class="hero-video">` tag. Currently points to a free low-resolution preview clip from Mixkit for fast loading:
```html
<source src="https://assets.mixkit.co/videos/13231/13231-360.mp4" type="video/mp4">
```
Swap this `src` for a higher-resolution or licensed clip before using the site in production. Keep `autoplay muted loop playsinline` on the tag — muted autoplay is required by all major browsers.

**Glass effect intensity** — controlled by the `.glass` utility class and the `backdrop-filter: blur(...)` value used on cards, the nav bar, and form fields throughout `styles.css`. Increase the blur value (e.g. `blur(24px)`) for a hazier look, or reduce it for more clarity.

**Copy & content** — all text lives directly in each page's HTML; there's no CMS or data file. Search for the studio name "Anchorline" to find and replace branding throughout.

**Company/brand name** — appears in the `<title>` tag and `.logo` element of every page, plus the footer.

## Browser support

Built on modern, widely-supported CSS: `backdrop-filter` (the glass effect), CSS Grid, `clamp()`, and custom properties. This covers current Chrome, Edge, Safari, and Firefox. In older browsers without `backdrop-filter` support, glass panels fall back to a plain translucent background — the layout stays intact.

## Accessibility notes already built in

- Visible focus outlines on all interactive elements
- `prefers-reduced-motion` respected (disables smooth scrolling and transitions)
- Semantic HTML landmarks (`header`, `nav`, `section`, `footer`)
- Form fields all have associated `<label>` elements
- Decorative corner marks and hero video are marked `aria-hidden` / non-interactive

## Known placeholders

These are intentionally fake and should be replaced before real-world use:
- Contact form and newsletter sign-up submit client-side only (no backend — they show a success message but don't send data anywhere)
- Login / Create account forms are visual only (no authentication logic)
- Studio address, phone number, email, and team names are fictional
- Client logos in the "client strip" are placeholder text names

## Credits

- Fonts: [Google Fonts](https://fonts.google.com) — Space Grotesk, Literata, JetBrains Mono
- Hero video: free stock footage via [Mixkit](https://mixkit.co) (Mixkit Free License — no attribution required, but see their license page for full terms)
