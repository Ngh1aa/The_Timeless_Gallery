# FinFlow — Project Context

## Project identity
- **Project:** FinFlow
- **Type:** B2B FinTech campaign landing page + paid social creative
- **Audience:** Money Transfer Operators (MTOs) and Payment Service Providers (PSPs)
- **Primary proposition:** Multi-Rail Settlement orchestration across bank, wallet, card, stablecoin and cash payout rails
- **Current milestone:** Recruitment test prototype — Rail System V3 redesign

## Problem frame
MTO/PSP teams need to understand how a transaction moves from payout instruction to settlement without turning the orchestration layer into another operational black box.

The experience prioritizes:
1. **Comprehension** — explain the mechanism in seconds.
2. **Control** — keep route state, selected rail and settlement stage visible.
3. **Trust** — avoid unsupported compliance/performance claims and show an inspectable concept instead.
4. **Conversion** — connect operational clarity to a workflow-specific demo request.
5. **Distinctiveness** — avoid the generic dark-fintech-template language common to AI-generated landing pages.

## Critical journey
Landing entry → understand the switch-track mental model → switch payout scenarios → inspect the six-step mechanism → understand operational outcomes → review trust/control → request a workflow demo.

## Deliverables
- Desktop-first responsive landing page.
- Four narrative sections:
  1. Hero + interactive Multi-Rail routing object.
  2. Interactive transaction mechanism / route inspector.
  3. Outcomes.
  4. Trust & Control + settlement trace + conversion.
- Facebook / Instagram 1:1 ad creative at 1080 × 1080.
- Editable SVG export for the ad.

## Evidence policy
The recruitment brief does not provide production performance, compliance certifications, customer logos, uptime, conversion metrics, pricing or exact routing criteria.

Therefore the prototype does not invent those claims. Routing inputs, semantic rail availability and settlement trace are explicitly presented as simulation / illustrative concept UI.

## Art direction
**Engineered · Legible · Distinct**

### Signature
A **switch-track rail system**: one payout instruction enters FinFlow, then branches through angular rail switches. Each route is drawn as a physical track language with a rail bed, repeated cross-ties and a core line.

This rail geometry — not generic cards, gradients or eyebrow labels — is the primary FinFlow visual signature.

### Grid system
- 12 columns desktop.
- Shared max width: 1440px.
- Shared page padding and responsive gutter across all sections.
- Hero copy: 5 columns / routing object: 7 columns.
- Section label: 3 columns / main heading: 6 columns / intro: 3 columns.
- Mechanism list: 3 columns / inspector: 9 columns.
- Trust trace: 8 columns / conversion: 4 columns.

### Semantic state system
- Selected / routed: muted cobalt `#7EA8FF`
- Available: subdued green `#64866F`
- Unavailable: muted red-brown `#8C6761`
- Primary text uses three neutral contrast levels rather than extra decorative hues.

### Typography
- Display/UI: Inter Tight.
- Operational data: IBM Plex Mono.
- Large data values use tabular numerals.
- Educational copy uses relaxed 1.6–1.68 line-height.
- Uppercase eyebrow labels are intentionally minimized.

### Anti-template rules
- No full-page dark/neon fintech treatment.
- No glassmorphism-heavy component language.
- No bento-card-everything layout.
- No generic globe, token or coin illustration.
- No fake dashboard KPIs.
- No testimonial/logo wall without source material.
- No section identity that depends only on uppercase monospace labels.
- Motion must explain routing/state; it is not decorative filler.

## Reference synthesis
- **Modern Treasury:** operational proof, orchestration language, rail/payment framing.
- **Increase:** disciplined infrastructure typography and data density.
- **Column:** restrained banking-infrastructure composition and sparse color.
- **Airwallex Business:** buyer-oriented payment value framing.
- **Linear:** spacing/motion discipline, not visual copying.
- **21st.dev:** animated diagram patterns.
- **Flux UI:** token-driven components, reduced-motion aware motion.
- **Animata:** border/route motion and keyboard-safe tabs.
- **HuggingPT / UIAI / Bmob / Kyla prompt libraries:** broad pattern calibration only; no finished visual system is copied.

## Motion contract
Motion is used only to **ORIENT**, **CONNECT**, **REVEAL** or **RESPOND**.

Route interaction specifically:
- semantic rail states update first;
- the selected switch-track draws outward from FinFlow;
- a transaction packet travels only on the selected path;
- settlement trace updates to the same route;
- reduced-motion mode removes continuous packet motion and collapses transition timing.

## Responsive strategy
- Desktop keeps the 12-column network routing canvas.
- Mobile converts the rail network into a vertical operational stack while keeping all five rail states visible.
- Route inspector becomes horizontally scrollable step navigation with a stable reading panel.
- Outcomes/trust ledgers collapse into vertical rows rather than card grids.
- Form controls remain keyboard accessible with visible focus.

## Submission assets
- `index.html`
- `finflow.css`
- `finflow.js`
- `ad-banner.html`
- `assets/finflow-ad-1080.svg`
- `PROJECT-CONTEXT.md`
- `REDESIGN-RESEARCH.md`
