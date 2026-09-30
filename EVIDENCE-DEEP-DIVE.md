# FinFlow — Evidence Deep Dive

Status: `TECHNICAL_PROOF READY / DIRECT_USER ROUND 01 READY_TO_RECRUIT`

This package applies the portfolio evidence sequence:

`Decision Pins → state/edge cases → conceptual before/current → 60-second tour → direct-user test → Decision Log → iteration → retest`

UIUX Factory / workspace reference used for evidence policy: `Ngh1aa/uiux-ai-workspace@ff20abee0e5d00138412b07ff308ee3f616a90e4`.

## Inspect now

- `design-lens.html` — D-01…D-04 decision pins, conceptual baseline/current comparison, five-step tour and forced edge-state fixtures.
- `research/validation/finflow-round-01/` — runnable moderated study package, empty atomic evidence ledger, participant tracker, findings boundary and Decision Log.
- `qa/evidence-lens.spec.mjs` — browser gate for the evidence surface and research truth boundary.

## Decision map

- `D-01` — One inspectable route mental model.
- `D-02` — Selected / Available / Unavailable rail-state semantics.
- `D-03` — Six explicit stages: Receive → Analyze → FinFlow → Route → Settle → Payout.
- `D-04` — Simulation / proof boundary for trust and operating claims.

## Forced edge states

- missing routing context;
- no eligible rail;
- settlement delayed;
- payout not confirmed.

These are test fixtures and technical/product evidence. They are **not** observed user findings and do not represent production system behavior.

## Before/current boundary

The “before” state in the Evidence Lens is explicitly a **conceptual baseline**, not a historical shipped FinFlow screen. It is used only to explain the design decision: disconnected rail information versus a synchronized route-control mental model.

## Human gate

Current verified DIRECT_USER sessions: **0**.
Current verified PROXY sessions: **0**.

Do not start an evidence-driven product iteration from fictional participants, AI feedback, recruiter preference, technical QA or recruitment interest.

After 3–5 traceable sessions (preferably at least 3 DIRECT_USER):
1. append atomic evidence;
2. synthesize findings against D-01…D-04 while preserving contradictions;
3. update the Decision Log;
4. change only evidence-supported decisions;
5. record the changed UI as `ITERATION`;
6. freeze the new build;
7. rerun affected tasks as a compatible retest;
8. make improvement claims only where post-change evidence supports them.
