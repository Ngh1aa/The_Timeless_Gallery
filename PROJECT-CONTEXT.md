# FinFlow — Project Context

## Project identity
- **Project:** FinFlow
- **Type:** B2B FinTech campaign landing page + paid social creative
- **Audience:** Money Transfer Operators (MTOs) and Payment Service Providers (PSPs)
- **Primary proposition:** Multi-Rail Settlement orchestration across bank, wallet, card, stablecoin and cash payout rails
- **Current milestone:** Recruitment test prototype

## Problem frame
MTO/PSP teams need to understand how a transaction moves from payout instruction to settlement without turning the orchestration layer into another operational black box.

The experience therefore prioritizes:
1. **Comprehension** — explain the routing mechanism quickly.
2. **Trust through visibility** — show a traceable route/state instead of vague “smart payment” claims.
3. **Conversion** — provide one clear demo request path after the mechanism is understood.

## Critical journey
Landing entry
→ understand the proposition
→ watch FinFlow analyze/select a rail
→ understand the end-to-end flow
→ inspect an illustrative settlement trace
→ request a demo

## Deliverables
- Desktop-first responsive landing page.
- Three essential conversion sections:
  1. Hero + interactive Multi-Rail Switchboard.
  2. Transaction mechanism / flow.
  3. Visibility + demo conversion.
- Facebook / Instagram 1:1 ad creative at 1080 × 1080.
- Editable SVG export for the ad.

## Evidence policy
The recruitment brief does not provide production performance, compliance certifications, customer logos, uptime, conversion metrics, pricing or exact routing criteria.

Therefore the prototype:
- does **not** invent testimonials, logos, SOC/PCI claims or numerical performance claims;
- labels routing inputs as **illustrative routing signals**;
- labels the trace as an **illustrative product concept**;
- labels the contact form as a non-transmitting prototype.

## Art direction
**Precise · Connected · Assured**

### Signature
A **Settlement Switchboard** visual: one transaction enters FinFlow, multiple rails remain visible, and the selected route becomes the single high-contrast path.

### Visual system
- Ink: #07111F
- Paper: #F2F5F2
- Surface: #FFFFFF
- Signal Mint: #65E4B8
- Muted: #65726E
- Display/UI: Manrope
- Operational metadata: IBM Plex Mono

### Anti-template rules
- No crypto/neon visual language.
- No generic globe, token or coin illustration.
- No fake dashboard metrics.
- No testimonial/logo wall without source material.
- No animation on every section.
- No rounded-card-everything composition.

## Motion contract
Motion is used only to:
- **ORIENT:** show current transaction stage.
- **CONNECT:** move the transaction from instruction to engine to rail.
- **REVEAL:** expose the selected rail.
- **RESPOND:** replay and scenario-switch feedback.

The page respects `prefers-reduced-motion`.

## Responsive strategy
The submission is desktop-first, but implementation remains usable on tablet/mobile:
- switchboard changes from horizontal routing to a vertical narrative;
- the process flow becomes a readable list;
- all form controls remain keyboard accessible;
- no critical information depends on hover.

## Submission assets
- `index.html` — landing page
- `finflow.css` — visual system and responsive states
- `finflow.js` — routing scenario prototype
- `ad-banner.html` — 1:1 campaign preview
- `assets/finflow-ad-1080.svg` — editable ad artwork
