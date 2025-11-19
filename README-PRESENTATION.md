# Enoch's Data Discovery Platform — Presentation Guide

## Title

- **Title:** Enoch's Data Discovery Platform
- **Tagline:** Receive data insights like you never would on any other platform
- **Presenter:** Enoch

---

## Slide 2 — Problem & Opportunity

- **Problem:** Many teams struggle to quickly understand CSV datasets and surface actionable insights.
- **Opportunity:** Provide an approachable, interactive UI that parses, visualizes, and explains data fast.

---

## Key Features

- Data upload: drag-and-drop or file picker, client-side parsing and validation
- Interactive table: search, sort, pagination, column typing and export
- Visualizations: automatic charts (bar/line/pie) derived from numeric columns
- Insights panel & chat: automated insights + a chat assistant for data questions
- Robustness: ErrorBoundary fallback and Skeletons for better UX

---

## Live Demo

1. Start the app: open `http://localhost:5173` in the browser.
2. Show the homepage and brand briefly.
3. Upload a dataset: `sample-data/customer-data.csv`.
   - Point out parsing progress and success messages.
4. Open Dashboard: show summary cards and auto-generated charts.
5. Open Insights and ask the chat assistant a question (example: "Summarize key customer segments.").
6. Switch to Data tab and demonstrate sorting/filtering and exporting a CSV.
7. Intentionally trigger a recoverable error (or show the global ErrorBoundary) and explain recovery.

---

## Slide 5 — QA Highlights (Week 9)

- QA guide location: `docs/weekly-exercises/week9/WEEK-09-STUDENT-GUIDE.md`
- Focus areas: upload correctness, parsing edge cases, chart rendering, accessibility, and performance for medium datasets.
- Notable additions: ErrorBoundary wrappers, Skeleton loading states, improved ARIA attributes.

---

## Local development

```bash
cd data-discovery-plug
npm install
npm run dev
# open http://localhost:5173
```

Quick pre-demo checklist:

- Ensure `server/insight.js` is running if you want live AI responses: `node server/insight.js` (optional)
- Have `sample-data/customer-data.csv` handy for a smooth demo
- Open DevTools console to capture any runtime errors if you want to debug live

---

## Files to Highlight

- `src/components/DataUpload.tsx` — file parsing and validation logic
- `src/components/Dashboard.tsx` — lazy-loaded panels with `React.Suspense` + `ErrorBoundary`
- `src/components/ErrorBoundary.tsx` — global and component-level fallbacks with retry
- `src/components/ui/Skeleton.tsx` — loading placeholders used across the dashboard
- `docs/weekly-exercises/week9/WEEK-09-STUDENT-GUIDE.md` — the QA session guide

Speaker notes: Point reviewers to these files; they show design decisions for UX, reliability, and performance.

---

## Known Limitations & Next Steps

- Performance: large CSVs can be slow; consider web workers or streaming parsing.
- AI/chat: currently mocked or locally served — consider backend integration for production.
- Tests: add unit tests for parsers and E2E tests for upload → chart → export flows.

---

## Slide 9 — QA Checklist (detailed)

- Upload
  - Accepts common CSV formats (commas, semicolons)
  - Correctly handles quoted fields and newlines
  - Provides user-friendly error messages for malformed files
- Parsing & Table
  - Detects numeric vs categorical columns
  - Supports sorting, filtering, and pagination
  - Export produces valid CSV with current filters applied
- Charts & Insights
  - Charts render for expected column types
  - Insights panel handles empty or minimal datasets gracefully
- Accessibility
  - Keyboard focus for file drop zone
  - ARIA labels for interactive controls
  - Color contrast checks for primary actions

## Contact & Credits

- Presenter: Enoch
