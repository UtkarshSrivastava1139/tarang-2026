# MASTER PRODUCT REQUIREMENTS DOCUMENT
# TARANG — Official Cultural Festival Platform

**Product:** TARANG 2.0 — Annual Function 2026  
**Organization:** Smt. Radhika Devi Intermediate College & Children Academy  
**Primary Domain:** https://tarang.srdintercollege.in  
**Theme:** एक भारत • अनेक रंग  
**Permanent Tagline:** The Rhythm of Togetherness  
**Event Date:** Wednesday, 18 November 2026  
**Event Time:** 3:00 PM onwards  
**Venue:** School Campus

---

# 1. ROLE AND OBJECTIVE

You are acting as a senior product designer, creative director, frontend architect and full-stack developer.

Your task is to design and develop the official TARANG cultural-event website for Smt. Radhika Devi Intermediate College and Children Academy.

This is not a conventional school website. It is a dedicated, annual cultural-festival platform with a distinctive Indian heritage-inspired visual identity and a modern, application-like user experience.

The platform must:

1. Present TARANG as an established annual cultural event.
2. Communicate the current edition's identity, theme and event information.
3. Provide programme schedules, event timelines and announcements.
4. Preserve and showcase previous TARANG memories.
5. Integrate official YouTube videos and Instagram presence.
6. Provide clear information about student participation.
7. Work exceptionally well on mobile devices.
8. Be maintainable through manually updated structured content.
9. Be installable as a Progressive Web App (PWA).
10. Remain suitable for future TARANG editions without requiring a complete rebuild.

**Primary product philosophy:**

Create an experience that feels like an Indian cultural heritage application built with contemporary digital-product design principles.

Do not create a generic school website with decorative Indian elements added to it.

---

# 2. BRAND IDENTITY

The permanent event identity is TARANG.

The 2026 edition is:

**TARANG 2.0**

**Theme:** एक भारत • अनेक रंग

**Permanent Tagline:** The Rhythm of Togetherness

The theme represents India's cultural diversity, traditions, music, dance, regional identities, art and shared cultural heritage.

The visual and content experience should communicate unity through cultural diversity.

## Institutional identity

Display both institutions:

- Smt. Radhika Devi Intermediate College
- Smt. Radhika Devi Children Academy

Both institutional logos must be available in the website header, with appropriate sizing and proportions.

Use the actual supplied logo assets. Never recreate, distort, crop or recolour the original logos.

The TARANG logo and approved theme typography should also be used as original assets.

## Branding rules

Keep the permanent identity separate from edition-specific branding.

Permanent:
- TARANG identity.
- The Rhythm of Togetherness.
- Institutional identities.
- Overall cultural visual language.

Edition-specific:
- Edition name and year.
- Theme.
- Theme illustrations.
- Event dates.
- Programme content.
- Photographs and announcements.

---

# 3. DESIGN DIRECTION

This section is a critical requirement. Follow it consistently across all pages.

## 3.1 Creative direction

Develop a deliberate hybrid of:

A. Indian cultural heritage
B. Premium editorial design
C. Modern mobile application UI

The overall design should feel:

- Culturally rooted.
- Elegant and refined.
- Artistic and expressive.
- Youthful but institutionally appropriate.
- Visually rich without becoming cluttered.
- Contemporary and highly usable.

Avoid:
- Generic school website layouts.
- Excessive saffron-white-green gradients.
- Cartoon-style illustrations.
- Overuse of mandalas and floral decorations.
- Excessive card borders and shadows.
- Too many competing colours.
- Generic AI-generated cultural stock graphics.
- Excessive animations and parallax effects.

## 3.2 Colour tokens

Implement these as centralized CSS design tokens.

| Token | HEX |
|---|---|
| Warm Ivory | #F7F0E3 |
| Parchment | #E5D5B8 |
| Midnight Navy | #17264A |
| Antique Gold | #C49A4B |
| Vermilion | #AD3025 |
| Saffron | #E98727 |
| Emerald | #286B50 |
| Muted Rose | #925064 |

Usage:

- Ivory: Main page backgrounds.
- Navy: Primary text, navigation and dark surfaces.
- Gold: Borders, separators and highlights.
- Vermilion: Important actions and selected accents.
- Saffron and Emerald: Cultural accents.
- Rose: Occasional artistic highlights.

Maintain a predominantly ivory and navy interface.

## 3.3 Typography

Use:

| Purpose | Font |
|---|---|
| English display headings | Cormorant Garamond |
| English UI and body | Manrope |
| Hindi display headings | Noto Serif Devanagari |
| Hindi UI and body | Noto Sans Devanagari |

Ensure proper font loading and fallback handling.

Do not regenerate the TARANG logo or Hindi theme artwork using normal text fonts. Use the official graphic assets.

## 3.4 Design elements

Develop a reusable visual asset system containing:

- Fine antique-gold ornamental dividers.
- Traditional Indian architectural silhouettes.
- Regional textile-inspired decorative patterns.
- Subtle mandala geometry.
- Watercolor cultural illustrations.
- Musical instrument illustrations.
- Classical and folk dance silhouettes.
- Theatre and performing-arts visual elements.
- Subtle tricolour brush accents.
- Authentic school-event photographs.

Use these selectively.

Photography and typography should remain the primary communication elements.

---

# 4. PRODUCT ARCHITECTURE

The website has five primary destinations:

1. Home
2. Programme
3. Journey
4. Gallery
5. More

The mobile interface must use a fixed bottom navigation.

The desktop interface may adapt to a traditional top navigation.

## 4.1 HOME PAGE

The homepage is the main event experience.

Required content hierarchy:

### A. Institutional header

Display:
- College logo.
- Academy logo.
- Institutional names.
- Compact institutional identification.

Maintain clear proportions without consuming excessive vertical space on mobile.

### B. Hero section

Display in this sequence:

TARANG 2.0

एक भारत • अनेक रंग

The Rhythm of Togetherness

Annual Function & Cultural Event 2026.

Use the official logos and supplied TARANG artwork.

The hero should be culturally rich and visually striking while keeping text readable.

### C. Event information

Display:

18 NOVEMBER 2026

3:00 PM ONWARDS

Venue: School Campus.

### D. Live countdown

Implement a live countdown displaying:

- Days
- Hours
- Minutes
- Seconds

Target:
18 November 2026, 3:00 PM, Asia/Kolkata timezone.

Requirements:
- Correct timezone handling.
- No dependence on the visitor's device timezone.
- Automatically update the countdown.
- Display a suitable event-day state when the countdown reaches zero.
- Display a completed-event state after the event.

### E. Primary actions

Provide visually distinct actions:

- Explore Programme.
- Relive TARANG 2024.
- Watch on YouTube.
- Follow us on Instagram.

### F. Theme introduction

Introduce:

एक भारत • अनेक रंग

Explain the idea of India's many regional cultures, languages, traditions and artistic expressions coming together.

Keep the explanation engaging and relatively short.

### G. Featured memories

Show a curated selection of TARANG 2024 photographs.

Use an editorial collage rather than a conventional gallery grid.

Link to the complete gallery section.

### H. Cultural categories

Introduce the event's cultural categories:

- Music.
- Dance.
- Singing.
- Drama.
- Art.
- Cultural Performances.

Use custom illustrations, photography or subtle iconography.

### I. Announcements

Display the latest official updates directly on the homepage.

This is not a separate announcements destination.

Each announcement should support:
- Title.
- Short description.
- Date.
- Optional image.
- Optional external link.
- Optional highlighted status.

Announcements are manually maintained.

### J. Footer

Include:
- TARANG logo.
- Both school identities.
- Permanent tagline.
- Website navigation links.
- Instagram profile link.
- YouTube channel link.
- Contact and institutional information.

---

# 5. PROGRAMME PAGE

Create an interactive programme experience.

The visual direction should resemble a cultural-event programme timeline, not a spreadsheet.

Each programme entry should support:

- Performance title.
- Description.
- Category.
- Scheduled time.
- Duration.
- Participating class or group, where approved.
- Thumbnail or supporting media.
- Optional special notes.

## Interface features

- Chronological timeline.
- Category filters.
- Clearly visible event times.
- Expandable performance details.
- Responsive single-column mobile layout.
- Appropriate loading and empty states.

Possible categories:

- Dance.
- Music.
- Singing.
- Drama.
- Regional Cultural Performances.
- Special Performances.

Do not invent any actual performance, participant, class, schedule or timing.

Use placeholders until official programme information is supplied.

---

# 6. JOURNEY PAGE

This page communicates the story and identity of TARANG.

Structure it into three sections:

## A. About TARANG

Explain the annual cultural event and its institutional purpose.

Focus on creativity, student expression, togetherness and cultural celebration.

## B. Theme: एक भारत • अनेक रंग

Explain the theme through:

- Indian cultural diversity.
- Regional identities.
- Folk and classical traditions.
- Music and dance.
- Languages and cultural heritage.
- Unity and togetherness.

Use a combination of short editorial text, custom illustrations and regional visual motifs.

## C. Event Journey

Build a chronological event timeline.

Possible milestones:

- Event announcement.
- Registrations and participation.
- Preparation.
- Rehearsals.
- Programme announcement.
- Main event.
- Post-event memories.

The milestones should be editable through structured content.

Clearly distinguish planned milestones from completed milestones.

---

# 7. GALLERY PAGE

The gallery must offer two complementary visual experiences.

## A. Editorial Memories

Create a visually engaging collage of selected TARANG photographs.

Use:
- Asymmetric image arrangements.
- Different photo proportions.
- Editorial captions.
- Featured photographs.
- Short visual stories.

Avoid generic equal-sized card grids as the only presentation.

## B. Organized Albums

Create categorized albums.

Initial content:

TARANG 2024 — Memories.

Potential categories:
- Stage Performances.
- Dance.
- Music.
- Drama.
- Behind the Scenes.
- Audience and Celebrations.
- Memorable Moments.

TARANG 2026 photographs can be added after the event.

## Image viewer

Implement:
- Full-screen image viewing.
- Swipe navigation on mobile.
- Previous and next controls.
- Image captions.
- Close action.
- Responsive image loading.

All gallery photographs are public and accessible without authentication.

Only institutionally approved photographs should be published. Respect applicable student and guardian permissions.

---

# 8. SOCIAL MEDIA AND VIDEO INTEGRATION

This is an important part of the platform.

TARANG's website should complement its social-media presence, not replace it.

## 8.1 Instagram — Primary social channel

Official handle:

@srdic_mathauli

Profile URL:

https://www.instagram.com/srdic_mathauli/

Instagram is the primary destination for:

- Official event announcements.
- Preparation updates.
- Reels.
- Behind-the-scenes photographs.
- Performance highlights.
- Event-day coverage.
- Community engagement.

### Website integration

Add Instagram prominently in:

1. Homepage hero action area.
2. Latest announcements area.
3. Social-media section near the homepage footer.
4. Footer.
5. More page.

Recommended call-to-action:

FOLLOW TARANG

Stay connected with the latest updates, preparations and event highlights.

BUTTON: FOLLOW US ON INSTAGRAM

Link directly to the official profile.

### Instagram embedding

Support manually selected public Instagram posts where appropriate.

Requirements:
- Only embed selected official posts or reels.
- Use embeds as optional enhancements.
- Lazy-load embeds.
- Provide an attractive image and direct Instagram link as fallback.
- Do not depend on unofficial APIs or scraping.
- Never make Instagram embeds essential for the website to function.
- Respect third-party privacy and loading behavior.

The primary social-media CTA must always lead to @srdic_mathauli.

## 8.2 YouTube — TARANG video archive

Official channel:

https://www.youtube.com/@SRDICTarang2024

This channel contains the previous TARANG edition's video content.

Its primary role on the website is to preserve and showcase TARANG 2024 memories.

### Homepage integration

Create a dedicated section:

RELIVE THE MOMENTS

TARANG 2024 — The Memories, The Performances, The Celebration.

Show selected video thumbnails.

Provide an action:

WATCH TARANG ON YOUTUBE

Link to the official channel.

### Dedicated video experience

Embed selected YouTube videos directly into the website.

Requirements:

- Use official video IDs supplied in content configuration.
- Support multiple curated videos.
- Use responsive 16:9 players.
- Use privacy-enhanced YouTube embeds where supported.
- Lazy-load players or load them following user interaction.
- Provide thumbnail previews before playback.
- Display video title and short description.
- Provide a direct YouTube watch link.
- Include a graceful fallback when an embed is unavailable.

Do not invent video IDs.

Do not attempt to scrape YouTube content or automatically enumerate videos through an unsupported method.

Maintain the video list manually.

### Suggested video section layout

1. Featured TARANG 2024 video.
2. Selected performances.
3. Special highlights.
4. Behind-the-scenes content.
5. View the complete channel.

YouTube video embeds should only load when useful, to protect mobile performance.

---

# 9. MORE PAGE

Create a secondary navigation interface.

Include:

- About TARANG.
- About Smt. Radhika Devi Intermediate College.
- About Smt. Radhika Devi Children Academy.
- Theme information.
- Participation information.
- Venue information.
- Contact details.
- Frequently asked questions.
- Social-media links.

Do not create unnecessary standalone pages for every small detail.

---

# 10. BILINGUAL SUPPORT

The website must be fully bilingual.

Languages:
- English.
- Hindi.

Default language: English.

Allow visitors to switch between English and Hindi through a clearly visible language control.

Requirements:

1. All navigation labels must support both languages.
2. All page content must have English and Hindi variants.
3. All announcements and programme information must support translation.
4. Language preference must persist across navigation and visits.
5. The default selection for a new visitor should be English.
6. The stored visitor preference should override the default.
7. Hindi typography must use appropriate Devanagari fonts.
8. Do not automatically machine-translate official institutional content at runtime.
9. Keep the approved TARANG logo and permanent event tagline unchanged.
10. Ensure both languages have equivalent information and hierarchy.

Use structured translation files.

Suggested files:

locales/en.json

locales/hi.json

---

# 11. MOBILE-FIRST EXPERIENCE

Approximately 90% of visitors are expected to use mobile devices.

Therefore, mobile is the primary design target.

Do not build a desktop website and subsequently squeeze it into a mobile layout.

Design for a 360–390 px screen first, then expand progressively.

## Bottom navigation

Implement five destinations:

Home | Programme | Journey | Gallery | More

Requirements:

- Fixed at the bottom on mobile.
- Icon and short text label.
- Clearly visible active state.
- Touch targets of at least 44 × 44 px.
- Respect device safe areas.
- Smooth but restrained transitions.
- Never overlap page content.
- Maintain navigation accessibility.

On desktop, use a suitable top-navigation arrangement.

## Responsive layout requirements

- Single-column layouts on narrow screens.
- Responsive editorial image grids.
- Readable headings and paragraph sizes.
- Responsive timeline.
- No horizontal overflow.
- Appropriately sized media.
- Comfortable spacing.
- Proper keyboard and accessibility behavior.

## PWA requirements

Make the website installable.

Implement:

- Web app manifest.
- App name and short name.
- Custom TARANG application icons.
- Matching theme and background colours.
- Standalone display mode.
- Service worker.
- Offline fallback screen.
- App-shell caching.
- Appropriate static asset caching.
- Safe revalidation for announcements and programme data.

Do not allow stale programme information to remain indefinitely after content updates.

The PWA should provide a useful previously visited experience when the visitor is offline, without pretending that live updates are available.

---

# 12. TECHNICAL STACK

Use the following recommended stack unless an existing repository imposes a valid constraint.

| Layer | Technology |
|---|---|
| Framework | Next.js App Router |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Interface | Custom component system |
| Content | Typed static data / JSON |
| Localization | English and Hindi locale files |
| Image handling | Next.js Image |
| Media storage | Optimized static assets initially; external image storage/CDN when required |
| Hosting | Vercel |
| Domain | tarang.srdintercollege.in |
| PWA | Web manifest + service worker |

No database is required for the first release.

No admin dashboard is required.

No authentication is required.

No online registration backend is required.

The content should be manually maintained through structured files in the repository.

---

# 13. SUGGESTED PROJECT STRUCTURE

src/
  app/
    page.tsx
    programme/
      page.tsx
    journey/
      page.tsx
    gallery/
      page.tsx
    more/
      page.tsx
    about/
      page.tsx
    venue/
      page.tsx
    participation/
      page.tsx
    layout.tsx
    globals.css

  components/
    branding/
    navigation/
    layout/
    hero/
    countdown/
    programme/
    timeline/
    gallery/
    media/
    announcements/
    common/

  content/
    editions/
      2024/
        gallery.ts
        videos.ts
      2026/
        event.ts
        programme.ts
        timeline.ts
        announcements.ts
        gallery.ts
        videos.ts

  locales/
    en.json
    hi.json

  lib/
    content.ts
    i18n.ts
    countdown.ts
    media.ts

  styles/
    tokens.css

public/
  branding/
    tarang-logo.png
    theme-logo.png
    college-logo.png
    academy-logo.png

  backgrounds/
  illustrations/
  gallery/
  icons/
  fonts/

Adapt the structure as needed, but preserve separation between brand assets, interface components, translations and edition-specific content.

---

# 14. CONTENT MANAGEMENT

The website is manually managed.

All content should be structured and easy to modify.

Examples:

- Event date in a centralized event configuration.
- Programme entries in programme.ts.
- Announcements in announcements.ts.
- Timeline in timeline.ts.
- Gallery entries in gallery.ts.
- YouTube videos in videos.ts.
- English and Hindi copy in locale files.

Each content entity should have a stable identifier.

Avoid hardcoding the same event date, school name, social link or event label in multiple components.

Create shared constants for these values.

All external content should use validated URLs.

Use a single source of truth for event metadata.

---

# 15. SEO AND SOCIAL SHARING

Implement:

- Page titles and descriptions.
- Canonical URLs.
- Open Graph metadata.
- Twitter/X social metadata.
- Favicon and application icons.
- Appropriate robots.txt and sitemap.xml.
- Structured event information where appropriate.
- Descriptive image alt text.

The homepage should have a particularly strong WhatsApp sharing preview.

The Open Graph image should feature TARANG 2.0, the theme, event date and official visual identity.

Ensure correct metadata when the page is shared on:

- WhatsApp.
- Instagram direct messages.
- Facebook.
- Other messaging platforms.

Instagram is the primary social destination, but the website must remain independently discoverable through search engines.

---

# 16. PERFORMANCE AND ACCESSIBILITY

Treat performance as a core functional requirement.

## Performance

- Optimize all large photographs.
- Generate responsive image sizes.
- Use AVIF/WebP where supported.
- Lazy-load below-the-fold images.
- Prioritize the homepage hero.
- Use YouTube click-to-load or lazy embeds.
- Avoid heavy animation libraries.
- Avoid unnecessary client-side JavaScript.
- Avoid blocking third-party widgets.
- Minimize layout shift.
- Keep fonts optimized.

## Accessibility

- Correct heading hierarchy.
- Semantic HTML.
- Keyboard-accessible controls.
- Clear focus states.
- Suitable contrast.
- Accessible navigation labels.
- Descriptive alt attributes.
- Reduced-motion support.
- Accessible language switcher.
- Readable touch controls.

## Performance acceptance targets

- Lighthouse mobile Performance: 90+.
- Accessibility: 95+.
- Best Practices: 95+.
- SEO: 90+.

These are targets that must be tested after implementation.

---

# 17. EXPLICIT NON-GOALS

Do not implement the following in the first release:

- User registration and login.
- Online participation forms.
- Online payments.
- Ticketing.
- Admin dashboard.
- Full CMS.
- Database-backed content management.
- Student profiles.
- Live chat.
- Real-time social-media synchronization.
- Unofficial Instagram or YouTube scraping.
- Livestream functionality.
- Separate microsites for every annual edition.

Student participation information will be provided through the website, with offline registration and communication handled by the institution.

---

# 18. DEVELOPMENT PHASES

Do not attempt to develop the complete platform in one unstructured operation.

Implement in phases.

## Phase 1 — Design System and Application Shell

- Inspect repository.
- Establish project architecture.
- Implement colour and typography tokens.
- Integrate original logos and brand assets.
- Create responsive header.
- Create mobile bottom navigation.
- Implement English/Hindi language system.
- Establish reusable UI components.

**Deliverable:** A fully functional, responsive visual foundation.

## Phase 2 — Homepage

- Hero.
- Event details.
- Countdown.
- Theme introduction.
- Featured memories.
- Latest announcements.
- Social-media CTAs.

**Deliverable:** Complete homepage.

## Phase 3 — Programme and Journey

- Programme timeline.
- Performance categories.
- Expandable entries.
- Theme explanation.
- Event milestones.

**Deliverable:** Programme and Journey pages.

## Phase 4 — Gallery and Media

- Editorial collage.
- Categorized albums.
- Full-screen photo viewer.
- YouTube video integration.
- Instagram integration and external links.

**Deliverable:** Complete media experience.

## Phase 5 — Secondary Pages and PWA

- About.
- Participation.
- Venue.
- FAQ.
- Contact.
- PWA manifest.
- Service worker.
- Offline fallback.
- Caching configuration.

**Deliverable:** Complete application functionality.

## Phase 6 — Quality Assurance and Deployment

- Mobile testing.
- Tablet and desktop testing.
- Bilingual QA.
- Gallery testing.
- YouTube embed testing.
- Instagram link testing.
- PWA installation testing.
- Performance audits.
- SEO validation.
- Production deployment.

**Deliverable:** Production-ready TARANG website.

---

# 19. ACCEPTANCE CRITERIA

The work is not complete until all the following conditions are satisfied.

## Visual identity

- Both institutional logos are correctly displayed.
- TARANG logo is correctly integrated.
- The theme artwork is used consistently.
- The approved colour palette is followed.
- The website looks like one coherent cultural-event application.
- The interface is not cluttered.

## Mobile experience

- All five destinations work.
- Bottom navigation behaves correctly.
- No horizontal overflow.
- Programme and gallery are usable on small screens.
- Text is readable.
- Main actions are reachable.
- Embedded media adapts correctly.

## Bilingual functionality

- English is the first-visit default.
- Hindi switching works on all pages.
- Language choice persists.
- No important content remains untranslated.

## Media

- TARANG 2024 photographs load correctly.
- Gallery albums work.
- Full-screen viewing works on mobile.
- Selected YouTube videos play inside the website.
- Official Instagram profile link works.
- External media failures do not break the application.

## PWA

- Website can be installed.
- Custom application branding is used.
- Offline fallback works.
- Static assets can be accessed appropriately offline.
- Stale information is not shown as current information.

## Maintenance

- Event data is centrally configured.
- New announcements can be added manually.
- Programme entries can be modified without changing UI components.
- New photographs can be added through structured gallery data.
- YouTube video links can be maintained in one file.

---

# 20. IMPLEMENTATION RULES FOR AI CODING AGENTS

Follow these instructions throughout development.

1. Inspect the existing repository and report its current architecture before making major modifications.

2. Do not overwrite working functionality without a justified reason.

3. Do not replace original school logos or TARANG artwork with generated substitutes.

4. Do not invent event information, programme timings, student names or performance details.

5. Use realistic temporary placeholders only where official content has not yet been supplied, and label them clearly.

6. Build reusable components rather than copying layouts across pages.

7. Centralize content and configuration.

8. Prioritize mobile responsiveness from the first implementation.

9. Avoid installing unnecessary libraries.

10. Keep the UI accessible and performant.

11. Use actual official photographs wherever provided.

12. Never make the website dependent on third-party social-media embeds.

13. Keep Instagram as the primary social-media CTA.

14. Embed selected TARANG 2024 YouTube videos using official video IDs.

15. Test all external links and media fallbacks.

16. Do not introduce a database, authentication or admin system unless explicitly requested.

17. Do not proceed to the next development phase while the current phase has unresolved critical issues.

18. Before declaring a phase complete, provide:
    - Implemented functionality.
    - Files and components created.
    - Design and responsiveness checks.
    - Outstanding issues.
    - Testing results.

19. Keep the website visually consistent across every page.

20. Treat the TARANG design system as a formal brand system, not an optional visual suggestion.

---

# FINAL PRODUCT VISION

Build TARANG as the permanent digital home of the cultural festival.

It should be the first place students, parents, teachers and guests visit to understand the event, explore its programme, discover cultural performances, watch videos, view photographs and remain connected with its celebrations.

The identity must stay consistent:

**TARANG 2.0**

**एक भारत • अनेक रंग**

*The Rhythm of Togetherness.*

**Smt. Radhika Devi Intermediate College & Children Academy**

The website should combine India's cultural richness with the clarity, responsiveness and usability of a modern mobile application.

Build an experience that does justice to the institution, its students and the cultural legacy of TARANG.