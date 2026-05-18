---
created: 2026-04-29T19:02:08Z
title: Prototype parity implementation plan for KMS redesign
area: ui
files:
  - /Users/taaha/Desktop/Projects/Products/KMS/src/components/layout/Header.tsx
  - /Users/taaha/Desktop/Projects/Products/KMS/src/components/layout/Footer.tsx
  - /Users/taaha/Desktop/Projects/Products/KMS/src/components/home/ServicesSection.tsx
  - /Users/taaha/Desktop/Projects/Products/KMS/src/components/shared/CountryCard.tsx
  - /Users/taaha/Desktop/Projects/Products/KMS/src/components/templates/ServicePageTemplate.tsx
  - /Users/taaha/Desktop/Projects/Products/KMS/src/components/templates/CountryPageTemplate.tsx
  - /Users/taaha/Desktop/Projects/Products/KMS/src/app/[locale]/services/[slug]/page.tsx
  - /Users/taaha/Desktop/Projects/Products/KMS/src/app/[locale]/countries/[slug]/page.tsx
  - /Users/taaha/Desktop/Projects/Products/KMS/src/app/[locale]/book/page.tsx
  - /Users/taaha/Desktop/Projects/Products/KMS/src/app/[locale]/page.tsx
---

## Problem

The current reusable service/country implementation is close to the Stitch prototype, but key parity gaps remain:
- CTA routing/behavior is not fully mapped to the intended screens.
- Home service cards differ from the prototype’s set/content.
- Service and country template outputs are not yet exact for the requested baseline pages (Skilled Immigration, Canada).
- We must preserve global shared header/footer while still matching prototype sections precisely.

## Solution

Step-by-step execution plan (before coding):

1. Lock comparison baseline
- Use fetched Stitch artifacts in `/Users/taaha/Desktop/Projects/Products/KMS/temp_stitch/fetched/` as source of truth for Home, Skilled, Canada, Booking.
- Record section-by-section parity checklist for each target page.

2. Route and CTA behavior map
- Define exact navigation targets for all CTAs/buttons on Home, Skilled, Canada, and Booking.
- Preserve shared global header/footer components while fixing internal CTA links to correct locale-aware routes.

3. Home service cards parity
- Align Home Services cards to prototype content and ordering (text/media/tags/labels), while keeping component reusability.
- Ensure links point to available service routes.

4. Reusable template constraints
- Keep dynamic reusable templates for service/country pages.
- For now, make rendered parity exact for:
  - service slug: `skilled-immigration`
  - country slug: `canada`
- Keep other slugs functional but not prioritized for visual parity in this pass.

5. Skilled service page parity pass
- Match section structure, copy hierarchy, CTA placement, spacing rhythm, and visual treatment against prototype.
- Ensure destination cards, eligibility matrix, process timeline, and final CTA behavior match expected flow.

6. Canada country page parity pass
- Match hero, why-section, pathways grid, residency requirements, citizenship timeline, and final CTA.
- Preserve template reuse and data-driven model while ensuring Canada output is exact.

7. Booking page CTA behavior alignment
- Ensure booking page actions and post-submit routing align with intended screen flow.

8. Verification
- Run `npm run build` and targeted visual/manual checks for:
  - `/en`
  - `/en/services/skilled-immigration`
  - `/en/countries/canada`
  - `/en/book`
- Confirm no regressions to shared header/footer usage.

9. Report
- Provide a concise parity report: what was matched exactly, what remains intentionally deferred.

