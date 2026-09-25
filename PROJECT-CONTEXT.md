# FinFlow — Project Context

## Project identity
- **Project:** FinFlow
- **Type:** B2B FinTech campaign landing page + paid social creative
- **Audience:** Money Transfer Operators (MTOs) and Payment Service Providers (PSPs)
- **Primary proposition:** Multi-Rail Settlement orchestration across bank, wallet, card, stablecoin and cash payout rails
- **Current milestone:** Recruitment test prototype — Master Command V2 redesign

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
- Three conversion-critical sections:
  1. Hero + interactive Multi-Rail control plane.
  2. Interactive six-step mechanism / route inspector.
  3. Trust + operating outcomes + settlement trace + demo conversion.
- Facebook / Instagram 1:1 ad creative at 1080 × 1080.
- Editable SVG export for the ad.

## Evidence policy
The recruitment brief does not provide production performance, compliance certifications, customer logos, uptime, conversion metrics, pricing or exact routing criteria.

Therefore the prototype does not invent those claims. Routing inputs, semantic rail availability and settlement trace are explicitly presented as simulation / illustrative concept UI.

## Art direction
**Institutional · Precise · Inspectable**

### Signature
A **route inspector / control plane**: one payout instruction enters FinFlow, all five settlement rails remain visible, and one selected route becomes the high-contrast path.

The signature is operational rather than decorative: transaction context, rail availability, selected path and settlement trace stay visually synchronized.

### Grid system
- 12 columns desktop.
- Shared max width: 1440px.
- Shared page padding and responsive gutter across all sections.
- Hero copy: 5 columns / routing object: 7 columns.
- Section label: 3 columns / main heading: 6 columns / intro: 3 columns.
- Mechanism list: 3 columns / inspector: 9 columns.
- Trust trace: 8 columns / conversion: 4 columns.

### Semantic state system
- Dark operational shell: `#07111F` / `#0F1D31`
- Selected / routed: muted cobalt `#7EA8FF`
- Available: subdued green `#6E9A7B`
- Unavailable: muted red-brown `#A6756E`
- Primary text uses three neutral contrast levels rather than decorative gradients.

### Typography
- Display: Inter Tight.
- Body/UI: Inter.
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
- **Modern Treasury:** orchestration, ledgering and reconciliation presented as inspectable primitives rather than black-box infrastructure.
- **Increase:** disciplined API-first financial infrastructure language and predictable technical structure.
- **Column:** granular control, full visibility and direct payment-rail framing.
- **Airwallex Business:** buyer-oriented global payment value framing and direct conversion paths.
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
