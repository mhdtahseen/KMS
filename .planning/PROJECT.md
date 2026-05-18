# KMS Consultants Rebuild

## What This Is

A bespoke, premium dual-language (English and Arabic) Next.js website for an immigration consultancy firm based in Qatar. It serves as a digital headquarters for the firm, highlighting their elite global reach and providing a seamless path to booking private consultations.

## Core Value

Project a high-end, bespoke aesthetic that instantly communicates trust, exclusivity, and professionalism to high-net-worth and skilled immigration clients in Qatar.

## Current Milestone: v1.1 Prototype Parity & Reusable Templates

**Goal:** Make the reusable KMS templates match Stitch prototypes exactly for the current target pages while preserving shared global layout components.

**Target features:**
- Keep shared global `Header` and `Footer`, but align page internals to prototype parity.
- Fix CTA behaviors so page actions map to the right locale-aware routes/screens.
- Align Home service cards to the prototype content/order.
- Deliver exact prototype parity for:
  - Service: `skilled-immigration`
  - Country: `canada`
- Keep service/country pages template-driven for future expansion.

## Requirements

### Validated

<!-- Shipped and confirmed valuable. -->

(None yet — ship to validate)

### Active

<!-- Current scope. Building toward these. -->

- [ ] Preserve global shared `Header` + `Footer` across pages.
- [ ] Fix CTA route behavior for Home, Skilled service, Canada country, and Booking pages.
- [ ] Match Home service cards to prototype content and hierarchy.
- [ ] Make `skilled-immigration` service output exactly match prototype while staying template-driven.
- [ ] Make `canada` country output exactly match prototype while staying template-driven.
- [ ] Keep other service/country slugs functional as reusable template outputs.

### Out of Scope

<!-- Explicit boundaries. Includes reasoning to prevent re-adding. -->

- Content Management System (CMS) — Content will be kept static in code/JSON for now to simplify initial build.
- Backend database for consultation forms — Initially handled via Nodemailer.

## Context

- The design is based on high-end Stitch prototypes tailored for a bespoke immigration firm in Doha, Qatar.
- Target audience expects a premium, frictionless experience.
- Images from the prototype should be used as assets for the time being.
- Fonts will be defined in the Tailwind theme (`Playfair Display` or similar for headings, `Inter` for body) to allow future updates.

## Constraints

- **Tech Stack**: Next.js, Tailwind CSS, Framer Motion — To achieve the required performance and smooth animations.
- **Localization**: Must support perfect RTL flipping for the Arabic version.
- **Aesthetics**: The design must strictly adhere to a premium, dark-mode-first look with gold accents. Generic layouts are unacceptable.

## Key Decisions

<!-- Decisions that constrain future work. Add throughout project lifecycle. -->

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next-intl for i18n | Robust app router support for en/ar translations | — Pending |
| Static Content | Simplifies initial build, defers CMS complexity until later | — Pending |
| Prototype Assets | Fast-tracks the build without waiting for finalized copy/images | — Pending |

---
*Last updated: 2026-04-30 for milestone v1.1 setup*

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state
