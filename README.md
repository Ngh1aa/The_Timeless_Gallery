# FinFlow — Multi-Rail Settlement Landing Page

Recruitment-test concept for a B2B FinTech product serving **Money Transfer Operators (MTOs)** and **Payment Service Providers (PSPs)**.

## Deliverables
- Responsive desktop-first landing page
- Exactly three conversion-critical sections
- Interactive multi-rail **Control Plane**
- Interactive six-step route inspector
- Combined trust + operating outcomes + settlement trace + demo conversion surface
- Facebook / Instagram 1:1 ad creative
- Editable 1080×1080 SVG ad asset

## Live preview
GitHub Pages deploys from `main` through `.github/workflows/pages.yml`.

- Landing: https://ngh1aa.github.io/The_Timeless_Gallery/
- Evidence Lens: https://ngh1aa.github.io/The_Timeless_Gallery/design-lens.html

## Evidence deep dive

The product-reasoning layer now follows:

`Decision Pins → state/edge cases → conceptual before/current → 60-second tour → direct-user test → Decision Log → iteration → retest`

Open `design-lens.html` to inspect D-01…D-04, forced edge-state fixtures and the guided tour. Human validation remains explicitly separate from technical/browser proof. See `EVIDENCE-DEEP-DIVE.md` and `research/validation/finflow-round-01/`.

Current research status: `READY_TO_RECRUIT / 0 VERIFIED DIRECT_USER SESSIONS`.

## Design direction
**Institutional · Precise · Inspectable**

The signature visual is a **Route Inspector / Control Plane**: one payout instruction enters FinFlow, all five settlement rails remain visible, and only the selected path becomes high contrast. The landing is intentionally limited to three conversion-critical sections.

Research inputs include UIUX Factory operating rules plus pattern research from 21st.dev, Flux UI, Animata, HuggingPT UI prompts, UIAI, Bmob and Kyla prompt libraries. See [REDESIGN-RESEARCH.md](./REDESIGN-RESEARCH.md).

## Implementation
No framework build step is required.

```text
index.html
finflow.css
finflow.js
design-lens.html
ad-banner.html
assets/finflow-ad-1080.svg
PROJECT-CONTEXT.md
REDESIGN-RESEARCH.md
EVIDENCE-DEEP-DIVE.md
research/validation/finflow-round-01/
```

The project intentionally avoids fake performance numbers, customer logos, certifications or testimonials that are not present in the recruitment brief.

## Figma conversion pack
A 19-frame static HTML handoff lives in `figma-pack/`. The pack and the main web surfaces use **Inter only** to reduce HTML → Figma text rasterization/fallback issues. Each pack frame has its own direct URL and keeps meaningful copy as HTML text.
