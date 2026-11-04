# Copilot prompt — integrate TARANG raster visual assets

Read `TARANG_2.0_Raster_Asset_Pack/README.md` and inspect every asset before editing. Integrate the pack into the existing Next.js project; do not replace the project scaffold or change existing routes/content contracts.

## Setup
1. Copy the contents into `public/assets/tarang/` using these folders: `backgrounds`, `category-illustrations`, `decorative-motifs`, `patterns`.
2. Use WebP variants for normal rendering where possible; keep PNG variants as lossless masters/fallbacks. Use Next.js Image for content images and CSS backgrounds for decorative section canvases.
3. Add centralised CSS variables for the established TARANG palette.

## Art direction
- The intended direction is Contemporary Indian Cultural Editorial: premium, warm, expressive, restrained and distinctly TARANG.
- Do not turn the page into an ornamental poster or dashboard. Keep the existing information architecture and make visual improvements through composition, background treatment, imagery and typography.
- Use the signature watercolor canvas sparingly as a subtle background. Avoid placing detailed text directly over busy artwork.
- Use the heritage panorama only for the theme/about feature section. It should be a wide visual moment with clear contrast and enough space for the section heading.
- Use the portrait dancer artwork only where the crop remains respectful and legible, especially on mobile. Do not crop off the dancer's face or hands.
- Use the midnight celebration background for the video/highlight section, with a subtle dark overlay if needed.
- Use the woven pattern only at low contrast (approximately 8–14% visual strength) as a section texture or border.
- Replace generic category glyphs with the six supplied category illustrations. Keep their scale consistent and avoid placing the ivory-background crops on stark white cards.
- Use the rangoli, arch, lotus, bells, divider and rhythm wave motifs as occasional accents, not on every section.
- Use textile border strips at one or two transitions only; do not repeat them between every component.

## Suggested mapping
- Overall background: `backgrounds/01_signature-canvas-16x9.webp` (subtle; avoid fixed full-page scaling).
- Theme editorial section: `backgrounds/05_heritage-panorama-ultrawide.webp` or `backgrounds/02_heritage-watercolor-16x9.webp`.
- Mobile-only art detail: `backgrounds/04_dancer-cultural-portrait.webp` where appropriate.
- TARANG video section: `backgrounds/06_midnight-celebration-16x9.webp`.
- Programme categories: `category-illustrations/*.webp`.
- Section accents: `decorative-motifs/*.webp`.
- Low-contrast woven area: `patterns/01_subtle-woven-floral-background.webp`.

## Responsive and performance rules
- Design for 360, 390, 430, 768, 1024 and 1440 px widths.
- On mobile, use section-specific background positioning and simpler crops; do not shrink desktop backgrounds mechanically.
- Avoid loading multiple large backgrounds above the fold. Lazy-load below-fold decorative images.
- Add accessible alt text for meaningful illustrations; use empty alt for purely decorative elements.
- Respect `prefers-reduced-motion`; do not introduce heavy parallax.
- Check contrast, text overflow, image focal points and horizontal scroll.

## Content integrity
Use only PRD-approved information. Do not invent performances, performers, timings, announcements, participation rules or historical claims. Keep the official date as Wednesday, 18 November 2026 at 3:00 PM IST and venue as School Campus, Mathauli Bazar. Preserve `tarang_logo.png`, `theme_logo.png`, `college_logo.png`, `academy_logo.png` and all verified TARANG 2024 photos unchanged.

## Deliverable
Implement the visual changes in the actual homepage, run the app, inspect desktop and mobile renderings, and fix issues. Do not merely add unused assets or create a design document. Report exact files changed and any assets that were not suitable. Do not proceed to redesign all secondary pages until the homepage has been reviewed.
