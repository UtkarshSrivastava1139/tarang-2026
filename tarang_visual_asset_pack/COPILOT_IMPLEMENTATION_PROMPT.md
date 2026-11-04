# Copilot implementation prompt — TARANG visual identity integration

The supplied TARANG visual asset pack is now available. Integrate it into the existing Next.js project in `D:\Projects\tarang`. Do not scaffold a new project or replace existing working functionality.

## Goal

Upgrade the existing TARANG 2.0 homepage from a clean but generic beige event site into a premium, art-directed Indian cultural festival experience. The new assets must create a coherent visual identity, not a decorative layer pasted everywhere.

## First inspect

1. Inspect the existing app structure, global styles, homepage components, current public assets and package scripts.
2. Confirm where the current brand assets live (`tarang_logo.png`, `theme_logo.png`, `college_logo.png`, `academy_logo.png`, `tarang_2024_1.jpg` through `tarang_2024_4.jpg`). Do not duplicate or alter them.
3. Copy the supplied `backgrounds/`, `motifs/`, and `category-icons/` folders into `public/assets/tarang/` (or the repository's established public asset directory). Keep the directory structure intact.
4. Import `design-tokens.css` through the existing global stylesheet. Merge tokens carefully if equivalents already exist; avoid duplicate/conflicting variables.

## Apply the visual system

Use these existing official tokens:

- Warm Ivory `#F7F0E3`
- Parchment `#E5D5B8`
- Midnight Navy `#17264A`
- Antique Gold `#C49A4B`
- Vermilion `#AD3025`
- Saffron `#E98727`
- Emerald `#286B50`
- Muted Rose `#925064`

Use Cormorant Garamond for English display, Manrope for English UI/body, Noto Serif Devanagari for Hindi display and Noto Sans Devanagari for Hindi UI/body. Reuse fonts already configured where possible; do not add unnecessary font-loading dependencies.

### Background placement

- General page canvas: use `01-signature-canvas.svg` selectively or recreate its subtle treatment with CSS. Do not repeat a large background image behind every section.
- Theme / “Many Traditions. One Shared Rhythm.” section: use `02-cultural-panorama.svg` as a wide feature backdrop. Keep copy on a readable, relatively quiet region; use a restrained ivory overlay or dedicated text panel if needed.
- Programme / cultural forms: use `03-woven-canvas.svg` at low prominence behind the section, not as a noisy card fill. Keep the cards editorial and spacious; avoid six identical dashboard tiles.
- Video feature: use `04-midnight-celebration.svg` as the only dramatic dark section background. Preserve contrast and keep the video itself visually dominant.
- Footer: use `05-footer-border.svg` as a thin top border. Do not add further decorative borders around every footer column.

### Motifs and category illustrations

- Use `lotus-section-divider.svg` for selected major section transitions only.
- Use `rhythm-wave.svg` sparingly in the hero or theme area as a visual thread connecting the brand.
- Use `rangoli-mandala.svg` as a low-opacity decorative accent, never behind important copy.
- Use `heritage-arch-frame.svg` only as a decorative frame around a featured image if it improves the composition; never crop faces or important details.
- Use `botanical-corner.svg` in one or two places, not everywhere.
- Replace generic category iconography with the supplied six matching illustrations: `music.svg`, `dance.svg`, `singing.svg`, `drama.svg`, `art-craft.svg`, `regional-unity.svg`. Keep the illustrations at a consistent size and preserve their proportions.

## Homepage art direction

1. Hero: retain the approved TARANG logo and exact theme artwork. Make the hero a deliberate editorial composition with clear hierarchy, generous whitespace, a short invitation, event metadata and strong primary CTA. Use no giant cropped invitation-card image.
2. Event details: retain a compact, elegant information band for date, time and venue. It must not compete with the hero.
3. Theme: create the strongest custom background moment using the cultural panorama, followed by a clear editorial text layout. Avoid overlaying dense text on detailed parts of the illustration.
4. Cultural forms: use the category illustrations and subtle woven texture. Present content with varied composition or a refined editorial grid; avoid repetitive generic icon cards.
5. TARANG 2024 memories: keep authentic photographs as the main visual content. Use an asymmetric editorial collage with restrained captions. Do not apply textures over photographs.
6. Video: use the midnight celebration canvas with subtle depth; use a click-to-load YouTube embed if this is already part of the project.
7. Announcements: keep an understated editorial bulletin. Show only verified announcements; otherwise show a graceful empty state.
8. Social: maintain official Instagram `@srdic_mathauli` and the official TARANG YouTube archive links. Do not scrape or invent social content.
9. Footer: represent both schools with complete official names and original logos; use the supplied textile border once.

## Content and brand integrity

Official event details:
- TARANG 2.0 — Annual Function & Cultural Event 2026
- Theme: `एक भारत • अनेक रंग`
- Tagline: `The Rhythm of Togetherness`
- Wednesday, 18 November 2026
- 3:00 PM onwards (IST)
- School Campus, Mathauli Bazar

Official institutions:
- Smt. Radhika Devi Intermediate College
- Smt. Radhika Devi Children Academy

Do not invent programme items, performers, timings, results, announcements, faculty, committees or registration procedures. Do not invent or alter historic TARANG 2024 captions. Participation is informational and offline; do not introduce online registration or payments. Preserve all original supplied logos and artwork exactly as provided.

## Responsive and quality requirements

- Mobile-first: check 360px, 390px and 430px widths; desktop: check 1440px and wider.
- Preserve the five primary destinations: Home, Programme, Journey, Gallery, More, including the existing fixed mobile bottom navigation.
- Backgrounds must have deliberate mobile positioning; use separate positioning / crop rules when needed. Avoid downloading a large background where a CSS/vector alternative is sufficient.
- Keep decorative details behind content using pseudo-elements or dedicated decorative wrappers with `pointer-events: none`; they must not interfere with keyboard or touch interaction.
- Respect reduced-motion preferences. No parallax or continuous decorative animation is needed.
- Maintain WCAG-conscious contrast and 44px minimum touch targets.
- Prevent horizontal overflow and cumulative layout shift. Add image dimensions/aspect ratios and lazy-load below-the-fold imagery.
- No excessive rounded cards, generic icon tiles, repeated shadows, gradient CTA overload or decorative badges everywhere.

## Execution

1. Integrate assets and tokens.
2. Update the homepage section by section, not as one giant component.
3. Run the existing lint/typecheck/build scripts.
4. Run the local app and inspect actual rendered desktop and mobile screenshots.
5. Fix any visual, responsive, console, accessibility or build issues.
6. Report which files changed, which supplied assets were used where, and any remaining content placeholders.

Do not stop after writing a plan. Implement the changes in the existing codebase. Prioritise art direction, spacing, image composition and consistency over adding more sections or features.
