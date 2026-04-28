# Roadmap: KMS Consultants Rebuild

## Overview

Rebuilding the KMS Consultants digital presence as a bespoke, high-end Next.js application with robust English/Arabic localization. The project will progress from foundational setup and design system implementation through core pages, service details, and finally lead-generation integration.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

- [ ] **Phase 1: Foundation & Design System** - Next.js, Tailwind, i18n setup, and base styles.
- [ ] **Phase 2: Core User Experience (Home Page)** - High-fidelity hero, process timelines, and service grid.
- [ ] **Phase 3: Service & Destination Guides** - Internal page templates for services and destination countries.
- [ ] **Phase 4: Conversion & Interaction** - Private consultation form and Framer Motion polish.

## Phase Details

### Phase 1: Foundation & Design System
**Goal**: Setup robust Next.js 14 project with dual-language support and a bespoke design system.
**Depends on**: Nothing
**Requirements**: [FND-01, FND-02, FND-03, FND-04, FND-05, FND-06, FND-07]
**Success Criteria** (what must be TRUE):
  1. Next.js App Router runs without errors.
  2. Language switcher perfectly flips the layout between LTR (English) and RTL (Arabic).
  3. Base colors (#0D0D0D, gold) and typography are globally available.
**Plans**: TBD

Plans:
- [ ] 01-01: Initialize Next.js, Tailwind, and Framer Motion
- [ ] 01-02: Configure `next-intl` for routing and RTL support
- [ ] 01-03: Implement Global Header and Footer

### Phase 2: Core User Experience (Home Page)
**Goal**: Implement the high-fidelity Home Page to establish trust and exclusivity.
**Depends on**: Phase 1
**Requirements**: [HOM-01, HOM-02, HOM-03, HOM-04, HOM-05, HOM-06, HOM-07]
**Success Criteria** (what must be TRUE):
  1. The hero section renders with the dynamic map and correct typography.
  2. The process timeline correctly renders visually on desktop and mobile.
  3. The home page components adapt cleanly for Arabic localization.
**Plans**: TBD

Plans:
- [ ] 02-01: Build Hero Section and Statistics Row
- [ ] 02-02: Implement Service Grid and Global Destinations
- [ ] 02-03: Construct the Process Timeline and Testimonials
- [ ] 02-04: Finalize Home Page layout and CTA section

### Phase 3: Service & Destination Guides
**Goal**: Provide detailed, template-driven pages for specific services and destinations.
**Depends on**: Phase 2
**Requirements**: [SRV-01, SRV-02, SRV-03, SRV-04, SRV-05, SRV-06, SRV-07, SRV-08]
**Success Criteria** (what must be TRUE):
  1. "Skilled Immigration" template displays eligibility matrices clearly.
  2. "Canada Destination" template displays pathway grids correctly.
  3. Both pages maintain the premium design aesthetic and RTL compliance.
**Plans**: TBD

Plans:
- [ ] 03-01: Build Skilled Immigration Service Template
- [ ] 03-02: Build Canada Destination Guide Template

### Phase 4: Conversion & Interaction
**Goal**: Implement lead generation and refine the interactive "bespoke" feel.
**Depends on**: Phase 3
**Requirements**: [BKG-01, BKG-02, BKG-03]
**Success Criteria** (what must be TRUE):
  1. The Private Consultation form validates inputs client-side.
  2. Form submission state works correctly.
  3. Page transitions and hover effects execute smoothly without layout shifts.
**Plans**: TBD

Plans:
- [ ] 04-01: Build Private Consultation Form UI with validation
- [ ] 04-02: Implement global Framer Motion micro-interactions

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation & Design System | 0/3 | Not started | - |
| 2. Core User Experience (Home Page) | 0/4 | Not started | - |
| 3. Service & Destination Guides | 0/2 | Not started | - |
| 4. Conversion & Interaction | 0/2 | Not started | - |
