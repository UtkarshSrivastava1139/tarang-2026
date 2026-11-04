# TARANG 2.0 — Visual Asset Pack

This pack contains original, web-ready SVG assets for the TARANG 2.0 cultural-event website. The assets are designed around the approved warm-ivory / midnight-navy / antique-gold palette and the theme “एक भारत • अनेक रंग”.

## Contents

- `backgrounds/01-signature-canvas.svg` — low-contrast ivory base with subtle jali geometry and corner rangoli linework. Use selectively; do not place it behind every section.
- `backgrounds/02-cultural-panorama.svg` — wide heritage-inspired panorama for the theme / “Many Traditions. One Shared Rhythm.” section.
- `backgrounds/03-woven-canvas.svg` — repeatable, restrained textile-inspired background for programme/category surfaces. Use at low visual prominence.
- `backgrounds/04-midnight-celebration.svg` — navy celebration background for video or one dramatic feature section.
- `backgrounds/05-footer-border.svg` — decorative strip for the footer top edge or one transition only.
- `motifs/rangoli-mandala.svg` — standalone transparent ornamental motif.
- `motifs/heritage-arch-frame.svg` — transparent arch frame for decorative photo framing; do not cover faces.
- `motifs/lotus-section-divider.svg` — horizontal lotus divider.
- `motifs/rhythm-wave.svg` — three-colour flowing rhythm line.
- `motifs/botanical-corner.svg` — corner accent for hero or invitation-style details.
- `category-icons/*.svg` — six consistent line illustrations: music, dance, singing, drama, art & craft, regional unity.
- `design-tokens.css` — CSS custom properties and optional background utility classes.
- `COPILOT_IMPLEMENTATION_PROMPT.md` — implementation instructions for the existing project.

## Suggested public path

Copy the `backgrounds`, `motifs`, and `category-icons` folders into:

`public/assets/tarang/`

Copy `design-tokens.css` into your existing global styles or import it from your global stylesheet. Adjust paths only if the repository uses a different asset convention.

## Important design rules

1. Treat these as supporting assets. The supplied TARANG logo, theme artwork, two school logos and genuine TARANG 2024 photographs remain the primary brand/content assets.
2. Use the signature canvas on selected warm sections, not as a high-contrast full-page wallpaper.
3. Use the cultural panorama only where text can sit in a clean, legible area. Add a subtle ivory overlay behind copy where needed.
4. Keep the woven texture very subtle (roughly 5–12% effective visual prominence). If it competes with text, reduce opacity or remove it.
5. Use the midnight background for the video feature only; preserve strong text contrast.
6. Use category illustrations at consistent sizes, with a shared visual rhythm. Do not mix in unrelated emoji or stock icon families.
7. Keep the mobile experience light: decorative assets should not create layout overflow, block content, or cause expensive animation.
8. No generated text or fictional event details are embedded in the artwork.

## Technical notes

All supplied illustrations and patterns are SVG and can be resized without pixelation. For backgrounds, prefer CSS `background-image` with an appropriate `background-size` and mobile-specific positioning. Do not inline all SVG markup into a giant homepage component; keep assets in `public/assets/tarang/` and reference them by URL.
