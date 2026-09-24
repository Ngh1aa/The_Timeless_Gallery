# FinFlow — Multi-Rail Settlement Landing Page

Recruitment-test concept for a B2B FinTech product serving **Money Transfer Operators (MTOs)** and **Payment Service Providers (PSPs)**.

## Deliverables
- Responsive desktop-first landing page
- Three conversion-critical sections
- Interactive multi-rail **Control Plane**
- Interactive six-step route inspector
- Settlement trace + demo conversion surface
- Facebook / Instagram 1:1 ad creative
- Editable 1080×1080 SVG ad asset

## Live preview
GitHub Pages deploys from `main` through `.github/workflows/pages.yml`.

## Design direction
**Precise · Operational · Assured**

The signature visual is a **Control Plane**: one payout instruction enters FinFlow, all five settlement rails remain visible, and only the selected path becomes high contrast.

Research inputs include UIUX Factory operating rules plus pattern research from 21st.dev, Flux UI, Animata, HuggingPT UI prompts, UIAI, Bmob and Kyla prompt libraries. See [REDESIGN-RESEARCH.md](./REDESIGN-RESEARCH.md).

## Implementation
No framework build step is required.

```text
index.html
finflow.css
finflow.js
ad-banner.html
assets/finflow-ad-1080.svg
PROJECT-CONTEXT.md
REDESIGN-RESEARCH.md
```

The project intentionally avoids fake performance numbers, customer logos, certifications or testimonials that are not present in the recruitment brief.
