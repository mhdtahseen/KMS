# Roadmap: KMS Consultants Rebuild

## Overview

This roadmap tracks milestone `v1.1` focused on prototype parity while preserving reusable templates for future service/country expansion.

## Active Milestone

- **Version:** `v1.1`
- **Name:** `Prototype Parity & Reusable Templates`
- **Objective:** Match the Stitch screens for Home, Skilled Immigration, Canada, and Booking flows with correct route behavior, while keeping shared global header/footer and reusable template architecture.

## Phases

- [ ] **Phase 1: Baseline & Routing Map** - Lock visual baseline from fetched Stitch assets and map CTA behavior to locale-aware routes.
- [ ] **Phase 2: Home Service Cards Parity** - Align Home service cards content/order/labels/links to the prototype.
- [ ] **Phase 3: Skilled Service Template Parity** - Make `skilled-immigration` output match prototype exactly (template-driven).
- [ ] **Phase 4: Canada Country Template Parity** - Make `canada` output match prototype exactly (template-driven).
- [ ] **Phase 5: Verification & Report** - Build + route checks + parity report and deferred items.

## Phase Details

### Phase 1: Baseline & Routing Map
**Goal**: Confirm source-of-truth screens and finalize CTA destination mapping.
**Depends on**: Nothing
**Success Criteria**:
1. All four Stitch screens are available locally for comparison.
2. CTA behavior map is finalized for Home, Skilled, Canada, Booking.
3. Shared global header/footer constraints are explicitly preserved.

Plans:
- [ ] 01-01: Create section-by-section parity checklist from Stitch assets
- [ ] 01-02: Define and validate locale-aware CTA route map

### Phase 2: Home Service Cards Parity
**Goal**: Match Home service card content and structure to prototype.
**Depends on**: Phase 1
**Success Criteria**:
1. Home service cards match prototype order/content/labels.
2. Card links route correctly to available locale-aware service pages.
3. Reusability of Home component remains intact.

Plans:
- [ ] 02-01: Update card dataset/selection logic to prototype-aligned set
- [ ] 02-02: Tune card markup/text hierarchy/links for parity

### Phase 3: Skilled Service Template Parity
**Goal**: Achieve exact prototype parity for `skilled-immigration`.
**Depends on**: Phase 1
**Success Criteria**:
1. Hero, overview, destinations, eligibility, process, and CTA sections visually match prototype.
2. CTA behavior maps to intended routes.
3. Template remains reusable for other service slugs.

Plans:
- [ ] 03-01: Implement section-level parity for Skilled service template output
- [ ] 03-02: Validate route behavior and locale correctness for all Skilled CTAs

### Phase 4: Canada Country Template Parity
**Goal**: Achieve exact prototype parity for `canada`.
**Depends on**: Phase 1
**Success Criteria**:
1. Hero, why, pathways, requirements, citizenship, and final CTA sections match prototype.
2. CTA behavior maps to intended routes.
3. Template remains reusable for other country slugs.

Plans:
- [ ] 04-01: Implement section-level parity for Canada country template output
- [ ] 04-02: Validate route behavior and locale correctness for all Canada CTAs

### Phase 5: Verification & Report
**Goal**: Confirm parity and ship a clear progress report.
**Depends on**: Phases 2, 3, 4
**Success Criteria**:
1. `npm run build` passes.
2. Target pages verify on `/en`, `/en/services/skilled-immigration`, `/en/countries/canada`, `/en/book`.
3. Final report lists exact matches and intentional deferrals.

Plans:
- [ ] 05-01: Execute build + route verification checks
- [ ] 05-02: Publish milestone parity report

## Progress

**Execution Order:** `1 -> 2 -> 3 -> 4 -> 5`

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Baseline & Routing Map | 0/2 | Not started | - |
| 2. Home Service Cards Parity | 0/2 | Not started | - |
| 3. Skilled Service Template Parity | 0/2 | Not started | - |
| 4. Canada Country Template Parity | 0/2 | Not started | - |
| 5. Verification & Report | 0/2 | Not started | - |
