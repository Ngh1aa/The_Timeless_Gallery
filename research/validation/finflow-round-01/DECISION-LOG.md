# FinFlow Round 01 — Decision Log

This log names product/content decisions that Round 01 is intended to challenge. Current entries are **design decisions and hypotheses**, not validated outcomes.

## D-01 — One inspectable route mental model

- **Current decision:** Keep payout intent, routing context, eligible rails, selected path and destination visible in one control-plane story.
- **Evidence state:** `PROJECT_CONTEXT + WORKING_PROTOTYPE / HYPOTHESIS`
- **Why it exists:** The concept should avoid turning orchestration into another black box.
- **Risk:** Users may see the route network as a decorative diagram rather than a trustworthy operational mental model.
- **Evidence that could change it:** Participants cannot explain input → orchestration decision → selected rail → destination without moderator teaching, or repeatedly look elsewhere for route state.
- **Next evidence:** Tasks 1 and 4.

## D-02 — Selected / Available / Unavailable rail semantics

- **Current decision:** Keep all five rail concepts visible with explicit text labels for `Selected`, `Available` and `Unavailable`.
- **Evidence state:** `WORKING_PROTOTYPE / HYPOTHESIS`
- **Why it exists:** Operators need a compact comparison of path state while retaining the selected route.
- **Risk:** “Available” can be misread as live infrastructure availability or guaranteed execution.
- **Evidence that could change it:** Participants cannot distinguish states, assume availability means production certainty, or need more precise qualifiers before acting.
- **Next evidence:** Task 2 and edge-state Task 4.

## D-03 — Six explicit mechanism stages

- **Current decision:** Keep `Receive → Analyze → FinFlow → Route → Settle → Payout` as the explanatory sequence.
- **Evidence state:** `WORKING_PROTOTYPE / HYPOTHESIS`
- **Why it exists:** The landing needs to make the mechanism inspectable within seconds without exposing implementation detail.
- **Risk:** Six stages may add conceptual overhead, blur the difference between analysis/orchestration/routing, or oversimplify real operational handoffs.
- **Evidence that could change it:** Participants merge or confuse stages, skip the inspector, or propose a materially different mental model grounded in practice.
- **Next evidence:** Task 3.

## D-04 — Explicit trust/evidence boundary

- **Current decision:** Treat routing logic, rail availability and settlement trace as illustrative concept UI; avoid unsupported compliance, customer, uptime, conversion or performance claims.
- **Evidence state:** `PROJECT_CONTEXT + CONTENT_BOUNDARY / HYPOTHESIS`
- **Why it exists:** The recruitment brief does not provide production proof.
- **Risk:** Visual polish and infrastructure language can still imply certification, measured reliability or live connectivity that does not exist.
- **Evidence that could change it:** Participants repeat unsupported claims after the walkthrough or cannot tell what is simulated versus demonstrated.
- **Next evidence:** Task 5.

## Iteration rule

A human-supported finding may lead to an `ITERATION` entry. The decision's evidence state does **not** become “validated” merely because the UI changed.

For every change record:
- finding/evidence IDs;
- exact before state;
- exact changed build;
- decision rationale;
- expected learning;
- affected retest tasks.

## Retest rule

Freeze the changed build and rerun affected tasks with compatible participants. Only post-change evidence can support an improvement claim, and only for the measured/comprehension behavior actually tested.
