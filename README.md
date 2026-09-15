# Professor Dr. Arabinda Saha — Academic Portfolio

A complete academic portfolio website built with **Next.js (App Router)**, **TypeScript**,
and **Tailwind CSS**, generated directly from the professor's official 188-page CV/résumé.
Every fact, title, date, institution, and record on this site is sourced from that document —
nothing has been invented.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # ESLint
```

No environment variables are required — this is a fully static content site with no
external APIs, databases, or secrets. (`.env` is not needed.)

## Adding the Professor's Photo & Full CV PDF

- **Portrait**: add an image at `public/images/professor.jpg` and swap it into
  `src/components/home/Hero.tsx` (a labeled placeholder card currently occupies that slot).
- **Downloadable CV**: place the source CV PDF at `public/documents/professor-cv.pdf`.
  Every "Download CV" button/link across the site already points to this path — see
  `public/documents/README.txt`. The original source PDF for this project was supplied
  inline in the build session and was not available on disk to copy automatically.

## Project Structure

```
src/
├── app/                  # Route segments (one folder per page), metadata, sitemap, robots
├── components/
│   ├── layout/           # Header, Footer, PageHeader, nav config
│   ├── ui/                # Container, Card, Badge, SectionHeading (design primitives)
│   ├── explorer/          # RecordExplorer (generic search/filter/paginate) + typed wrappers
│   ├── home/              # Hero, QuickStats, OverviewGrid, ResearchFocus
│   ├── academic/          # Timeline, SupervisionCard
│   └── search/            # GlobalSearch (⌘K command palette)
├── data/                  # One file per CV section — the single source of truth
├── lib/                   # utils, seo helpers, client-side search index
└── types/                 # Shared TypeScript interfaces for every record type
```

Content lives entirely in `src/data/*.ts` as typed arrays/objects, decoupled from the UI —
a future CMS or database could replace these files without touching any component.

## Design System

- **Palette**: deep navy + off-white + a muted academic gold accent (see CSS variables in
  `src/app/globals.css`).
- **Type**: Source Serif 4 for headings, Inter for body text (both via `next/font/google`).
- **Motion**: Framer Motion for entrance/timeline animations, wired through
  `<MotionConfig reducedMotion="user">` so `prefers-reduced-motion` is fully respected.
- **Search**: a client-side index (`src/lib/search.ts`) built from every data file, surfaced
  via the ⌘K / Ctrl+K command palette (`GlobalSearch`) and per-section filters
  (`RecordExplorer`).

## Content Completeness & Editorial Notes

The source CV is long (188 pages) and internally repetitive/inconsistent in places, being a
real-world academic résumé assembled over decades. In transcribing it into structured data,
the following editorial judgments were made — every one preserves the underlying facts
rather than silently "fixing" or omitting them:

1. **Exact duplicate entries were merged.** Several annexures (e.g., the "Submitted
   Articles" list, the "External Examiner" tables, and the "Seminars Coordinated" lists)
   repeat the identical title/record two or three times across different pages/annexures
   in the source. These were consolidated into a single record; where the source gave
   *different* submission dates for the same title, all dates are retained in that record's
   `note` field.
2. **Conflicting dates were preserved, not reconciled.** For example, the Professor
   appointment's start date is given as `23.09.2008` in Annexure 03 and `04.08.2008` in
   Annexure 04. Both are shown, with an explicit note, on the [/career](/career) page rather
   than guessing which is correct.
3. **The extensive correspondence for each thesis evaluation** (individual acceptance
   letters, detailed evaluation reports, and honorarium claim forms — roughly 90 pages of
   the source PDF) is summarized as structured records on the
   [/examinations](/examinations) page rather than reproduced as ~40 near-identical letter
   scans. The full correspondence is preserved verbatim in the downloadable source CV.
4. **One record was excluded as out-of-scope**: a single M.Phil. evaluation letter (for
   "Muhammad Haider Habib") appearing in the source document is signed by a different
   professor (Prof. Dr. Kazi Akhtar Hossain), not Professor Dr. Arabinda Saha, and appears
   to have been included in the source PDF in error. It has been left out of this site's
   supervision/examiner records rather than misattributed.
5. **Sensitive personal identifiers were withheld from the public site**: the source CV's
   national/smart-card number and blood group are *not* rendered anywhere in the UI (see
   `professor.restrictedDetails` in `src/data/professor.ts`, which documents their presence
   in the source for completeness without exposing them publicly).
6. **A few M.Phil. records** (`No. 3`, `No. 4`, `No. 5` in `src/data/supervision.ts`) list a
   thesis title and outcome but no named researcher in the source table — this is preserved
   as-is rather than inventing a name.

### Section → Source Annexure Map

| Site section | Source annexure(s) |
|---|---|
| About / Personal Information | Annexure 01 |
| Education | Annexure 02 |
| Academic Career | Annexures 03–04 |
| Interests / Computer Skills | Annexures 05–06 |
| Research Projects | Annexure 07 |
| M.Phil. Supervision | Annexure 08 |
| Ph.D. Supervision | Annexure 09 |
| External Examinations | Annexures 10, 36, and the "Evaluated Reports" table |
| Books | Annexure 12 |
| Publications (all levels) | Annexures 13–18 |
| Newspaper Features | Annexure 19 |
| National/International Seminar Papers | Annexures 20, 21, 34 |
| Seminars/Study Tours Coordinated | Annexures 22–23 |
| Departmental Chairmanship | Annexure 24 |
| Editorial Board | Annexures 09(second use)/28/49 |
| Committees, Conveners, Members | Annexures 29–33 |
| Conferences & Webinars | Annexure 35 |
| References | Annexure 38 |

## Accessibility & SEO

- Semantic landmarks, skip-to-content link, visible focus states, `aria-label`s on icon-only
  controls, and full keyboard support for the mobile menu and search palette.
- `Person` JSON-LD structured data, per-page `<title>`/description via a shared
  `buildMetadata()` helper, `sitemap.xml`, and `robots.txt`.
