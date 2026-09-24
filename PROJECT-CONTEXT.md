# FinFlow — Project Context

## Project identity
- **Project:** FinFlow
- **Type:** B2B FinTech campaign landing page + paid social creative
- **Audience:** Money Transfer Operators (MTOs) and Payment Service Providers (PSPs)
- **Primary proposition:** Multi-Rail Settlement orchestration across bank, wallet, card, stablecoin and cash payout rails
- **Current milestone:** Recruitment test prototype — full visual redesign

## Problem frame
MTO/PSP teams need to understand how a transaction moves from payout instruction to settlement without turning the orchestration layer into another operational black box.

The experience prioritizes:
1. **Comprehension** — explain the mechanism in seconds.
2. **Control** — keep the route, selected rail and stage visible.
3. **Trust** — avoid unsupported compliance/performance claims and show an inspectable concept instead.
4. **Conversion** — move naturally from understanding to requesting a demo.

## Critical journey
Landing entry → understand the control-plane idea → switch payout scenarios → inspect the six-step mechanism → see settlement visibility → request a demo.

## Deliverables
- Desktop-first responsive landing page.
- Three conversion-critical sections:
  1. Hero + interactive Multi-Rail Control Plane.
  2. Interactive transaction mechanism / route inspector.
  3. Settlement visibility + demo conversion.
- Facebook / Instagram 1:1 ad creative at 1080 × 1080.
- Editable SVG export for the ad.

## Evidence policy
The recruitment brief does not provide production performance, compliance certifications, customer logos, uptime, conversion metrics, pricing or exact routing criteria.

Therefore the prototype does not invent those claims. Routing inputs and the settlement trace are explicitly presented as illustrative concept UI.

## Art direction
**Precise · Operational · Assured**

### Signature
A **Control Plane** network visual: one payout instruction enters a central FinFlow routing engine, all five rails remain visible, and only the selected path becomes high contrast.

### Visual system
- Obsidian: `#07110D`
- Paper: `#F1F3EC`
- Surface: `#FBFCF8`
- Signal Lime: `#B8FF95`
- Muted operational grays/greens
- Display/UI: Manrope
- Operational metadata: IBM Plex Mono

### Anti-template rules
- No crypto-neon visual language.
- No generic globe, token or coin illustration.
- No fake dashboard KPIs.
- No testimonial/logo wall without source material.
- No rounded-card-everything bento layout.
- Motion explains routing/state; it is not decorative filler.

## Reference synthesis
- **21st.dev:** animated card-diagram / tabs / background-path patterns; used as behavior research, not visual cloning.
- **Flux UI:** token-driven component thinking, reduced-motion-aware motion, subtle animated-border/background vocabulary.
- **Animata:** border-trail, tabs and purposeful micro-interaction language; implementation stays local HTML/CSS/JS.
- **HuggingPT UI prompts:** modern enterprise + data-visualization directions helped calibrate the balance between technical density and clean whitespace.
- **UIAI / Bmob / Kyla prompt libraries:** treated as prompt/pattern references where accessible; no source code or proprietary assets are copied.

## Motion contract
Motion is used only to **ORIENT**, **CONNECT**, **REVEAL** or **RESPOND**. The page respects `prefers-reduced-motion` and does not depend on hover for critical content.

## Responsive strategy
- Desktop keeps the network routing canvas.
- Mobile turns the network into a vertical sequence while preserving all five rail labels and scenario controls.
- The route inspector becomes horizontally scrollable step tabs with a stable reading panel.
- Form controls remain keyboard accessible with visible focus.

## Submission assets
- `index.html`
- `finflow.css`
- `finflow.js`
- `ad-banner.html`
- `assets/finflow-ad-1080.svg`
- `PROJECT-CONTEXT.md`
