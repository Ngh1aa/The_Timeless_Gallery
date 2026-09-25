# FinFlow Redesign Research Notes — Rail System V3

## Goal
Move FinFlow away from the generic “AI fintech template” look while keeping the interface credible for MTO/PSP buyers.

## Research inputs

### Product / infrastructure references
- **Modern Treasury** — useful reference for explaining orchestration, payment rails and traceability with real product language and operational proof.
- **Increase** — strong reference for disciplined typography, data density and developer-facing financial infrastructure.
- **Column** — useful for restrained infrastructure storytelling, sparse color and code/product juxtaposition.
- **Airwallex Business** — reference for buyer-oriented payment value framing and developer-first infrastructure.
- **Linear** — reference for spacing discipline, motion restraint and system consistency rather than visual imitation.

### Pattern libraries
- **21st.dev** — animated diagram and route visualization ideas.
- **Flux UI** — token-driven component architecture, spring/motion vocabulary and reduced-motion patterns.
- **Animata** — route/border motion and keyboard-safe tab interactions.
- **HuggingPT / UIAI / Bmob / Kyla prompt libraries** — used for broad UI pattern calibration only, not copied as finished art direction.

## V3 art direction
**Engineered · Legible · Distinct**

### What changed from V2
1. Hero is no longer a full dark “fintech template” surface. It uses a light operational canvas with the dark routing object embedded inside it.
2. Every major section uses one 12-column grid and one gutter system.
3. Rail status now has semantic color:
   - selected / routed → muted cobalt
   - available → subdued green
   - unavailable → muted red-brown
4. The FinFlow signature graphic is a **switch-track rail**:
   - double-line track bed
   - repeated rail ties
   - hard directional switch points instead of generic Bezier curves
5. Route selection uses a path-draw animation, not only a color swap.
6. Uppercase eyebrow labels were reduced. Section labels are sentence case with circular numeric anchors.
7. Outcome/trust content is structured as ledger rows instead of rounded marketing cards.
8. Data uses tabular mono numerals; explanatory copy keeps relaxed reading line-height.

## Grid contract
Desktop:
- 12 columns
- shared max-width: 1440px
- shared page padding
- shared responsive gutter

Key spans:
- Hero copy: 5 columns
- Routing object: 7 columns
- Section label: 3 columns
- Section headline: 6 columns
- Section introduction: 3 columns
- Mechanism step list: 3 columns
- Inspector: 9 columns
- Trust trace: 8 columns
- Conversion form: 4 columns

## Motion contract
Motion must explain routing:
- selected track draws from FinFlow toward the destination rail
- transaction packet travels only along the active route
- state labels update in sync
- reduced-motion mode removes continuous packet motion and shortens state transitions

## Anti-template checks
- no neon-black cyberpunk treatment
- no glassmorphism-heavy panels
- no bento-card-everything layout
- no decorative gradients as primary identity
- no fake certifications, customer logos or performance metrics
- no section identity based only on monospace uppercase labels


## V4 refinement — removing the last template cues

### Visual audit finding
V3 solved the large structural issues (12-column grid, semantic state colors, route path drawing and custom switch-track geometry), but two patterns still felt generic:
- floating rounded navigation shell;
- circular numbered section badges that still resembled common AI/SaaS template section markers.

### V4 decisions
1. **Navigation becomes an architectural top rail** rather than a floating pill.
2. **Section identity uses the FinFlow switch-track glyph** instead of numbered eyebrow/badge treatment.
3. **Mechanism motion now progresses through the six-step rail itself**, so the educational flow visually advances instead of only changing copy.
4. **Rail-spectrum state is synchronized to the active payout scenario**, preventing the inspector from showing stale semantic state.
5. Existing muted cobalt / green / red-brown state colors remain because they are functional semantics, not decorative brand color.

### Reference takeaways
- Modern Treasury: operational payment infrastructure should expose real system state and reduce manual operational complexity.
- Column: sparse banking-infrastructure composition and strong proof hierarchy can feel technical without becoming cyberpunk.
- Mercury: warm restraint and direct product language can soften finance without weakening trust.
- Airwallex: buyer-facing value should remain explicit even when the product is infrastructure-heavy.
- 21st.dev / Flux UI / Animata: motion is used as a state explanation pattern, not as ambient decoration.


## V5 — Master Command 2026 synthesis

### Why V5
The latest brief tightens the deliverable to exactly three conversion-critical sections and makes the visual contract explicit: **Institutional · Precise · Inspectable**, using sans + mono typography and a serious dark operational field.

### Current source takeaways
- **Modern Treasury:** current Payments positioning treats orchestration, ledgering and reconciliation as first-class primitives; useful lesson: explain the system as inspectable infrastructure, not a mysterious routing promise.
- **Column:** current product language emphasizes granular control and full visibility across payment infrastructure; useful lesson: technical proof can carry buyer trust without generic enterprise decoration.
- **Increase:** API documentation is deliberately predictable and resource-oriented; useful lesson: structure and naming discipline are part of perceived trust.
- **Airwallex:** current payment/platform pages keep buyer value and contact conversion direct even when the underlying product is infrastructure-heavy.
- **Animata:** interactive tabs expose keyboard/focus behavior and motion as state feedback; useful lesson: borrow the interaction job, not the visual styling.

### V5 decisions
1. Landing narrative is now exactly:
   - Hero / Control Plane
   - Six-step Mechanism
   - Trust + Outcomes + Conversion
2. Playfair/editorial serif is removed. Display = Inter Tight, UI = Inter, data = IBM Plex Mono.
3. Gold/private-bank accent is removed. Muted cobalt is the selected route/CTA state; available/unavailable remain semantic green/red-brown.
4. Hero becomes a dark operational shell; mechanism stays light for educational contrast; final trust/conversion section returns to dark.
5. Outcomes are no longer a standalone section. They are evidence-framed operating targets inside the final buyer-decision section.
6. Ad creative uses the same control-plane composition and state colors.

### KEEP
- visible rail state;
- transaction-first storytelling;
- inspectable route selection;
- direct demo CTA;
- explicit evidence disclaimers.

### AVOID
- generic dark-neon fintech;
- editorial banking serif;
- fake dashboard KPIs;
- logo/testimonial walls without source;
- decorative motion;
- treating prompt-library style labels as art direction.

### OPPORTUNITY
Make the route inspector the unmistakable FinFlow signature: the same visual grammar should connect hero, six-step education, settlement trace and paid-social creative.
