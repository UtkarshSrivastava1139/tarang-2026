# TARANG 2.0 — Annual Cultural Festival Platform

> **"एक भारत • अनेक रंग" (The Rhythm of Togetherness)**  
> Official cultural festival platform of **Smt. Radhika Devi Intermediate College & Children Academy**, Mathauli Bazar, Kushinagar, Uttar Pradesh.

---

## 🏛️ Institutions & Event Overview

* **Institutions:**
  * **Smt. Radhika Devi Intermediate College** (श्रीमती राधिका देवी इण्टर कॉलेज)
  * **Smt. Radhika Devi Children Academy** (श्रीमती राधिका देवी चिल्ड्रेन्स एकेडमी)
  * *Campus Location:* Mathauli Bazar, Kushinagar, Uttar Pradesh, India
* **Festival Edition:** **TARANG 2.0 (2026)**
* **Target Event Date:** **Wednesday, 18 November 2026** (3:00 PM IST onwards)
* **Historic Edition:** **Monday, 18 November 2024** (TARANG 2024)

---

## ✨ Features & Architecture

* **Mobile-First Art Direction:** Designed with cultural motifs, royal navy (`#1B2B4A`), vermilion (`#AD3025`), saffron (`#E98727`), and antique gold (`#C49A4B`) palettes.
* **Bilingual Support (i18n):** Native toggle between **English** and **हिन्दी (Hindi)** with full typography support (`EB Garamond`, `Cormorant Garamond`, `Noto Serif Devanagari`, `Noto Sans Devanagari`).
* **Live Event Countdown:** Real-time synchronized countdown clock leading to 18 November 2026 at 3:00 PM IST.
* **Curated Activity Categories (7 Disciplines):**
  * *Performances:* Dance (Solo & Group), Singing (Solo & Group), Drama & Story Play (Solo & Group)
  * *On-stage Experiences:* Speeches & Addresses, Anchoring & Hosting, Interactive Activities
  * *Beyond the Stage:* Student Art & Craft Showcase
* **Historical Video Archive:** 7 full-length YouTube performance films from `@SRDICTarang2024` with in-app theater playback modal.
* **Instagram Reels Integration:** Featured reels (drone campus aerials, official teasers, post-event highlights) connecting to `@srdic_mathauli`.
* **Authentic Photograph Gallery:** 21 high-resolution DSLR photographs from TARANG 2024 with full-screen interactive lightbox and 5 filtered views.
* **Ceremonial Invitation:** In-app modal viewer and high-resolution downloadable invitation card.

---

## 🚀 Tech Stack

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Static Site Generation)
* **Core:** React 18, TypeScript
* **Styling:** Tailwind CSS 3.4
* **Icons & Ornaments:** Handcrafted SVG motifs, authentic watercolor & gouache transparent illustrations

---

## 🛠️ Getting Started

### Prerequisites
* Node.js 18.17+ or 20+
* npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/UtkarshSrivastava1139/tarang-2026.git
cd tarang-2026

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build static pages and production bundle
npm run build

# Start production server
npm start
```

---

## 📁 Repository Structure

```
├── public/
│   ├── assets/tarang/        # Decorative motifs, raster canvases, transparent illustrations
│   ├── branding/             # College, Academy, and TARANG logos
│   ├── gallery/              # Authentic TARANG 2024 photos & video thumbnails
│   │   ├── tarang-24/        # High-res DSLR event photos
│   │   └── yt-thumbnails/    # Self-hosted YouTube video thumbnails
│   └── invitation/           # Ceremonial invitation card
├── src/
│   ├── app/                  # Next.js App Router (/, /journey, /gallery, /more, /programme)
│   ├── components/           # UI components (home, gallery, journey, layout, common)
│   ├── content/              # Static content models (site, gallery, timeline, faqs)
│   ├── context/              # Bilingual LocaleContext
│   └── locales/              # en.json and hi.json localization dictionaries
├── tailwind.config.ts        # Design tokens & color system
└── tsconfig.json             # TypeScript configuration
```

---

## 📜 License & Copyright

© 2024–2026 **Smt. Radhika Devi Intermediate College & Children Academy**. All rights reserved.
