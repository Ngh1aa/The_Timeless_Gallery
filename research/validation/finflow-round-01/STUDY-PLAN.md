# FinFlow Round 01 — Study Plan

Status: `PLANNED_VALIDATION / READY_TO_RECRUIT`

A completed plan is not evidence that sessions occurred.

## Research objective

Test whether likely MTO/PSP settlement and payment-operations users can understand the multi-rail routing model, distinguish rail states, follow the six-step mechanism and correctly interpret the prototype's evidence boundary without being taught the intended answer.

## Decision map

| ID | Decision to challenge | Current evidence | Primary risk | Research question |
| --- | --- | --- | --- | --- |
| D-01 | Keep payout intent, route choice and destination in one inspectable control-plane mental model. | `PROJECT_CONTEXT + WORKING_PROTOTYPE / HYPOTHESIS` | The routing visual may look decorative instead of operational. | Can participants explain what enters FinFlow, what FinFlow decides, and what leaves the system? |
| D-02 | Keep Selected / Available / Unavailable as the rail-state vocabulary. | `WORKING_PROTOTYPE / HYPOTHESIS` | Users may read simulated availability as live infrastructure status or miss the selected route. | Can participants distinguish the three states and explain what they do and do not imply? |
| D-03 | Keep the six explicit stages Receive → Analyze → FinFlow → Route → Settle → Payout. | `WORKING_PROTOTYPE / HYPOTHESIS` | The sequence may be too abstract for settlement operators. | Can participants reconstruct the route and identify where operator visibility matters? |
| D-04 | Preserve explicit simulation / no-unsupported-claim boundaries in the trust surface. | `PROJECT_CONTEXT + CONTENT_BOUNDARY / HYPOTHESIS` | Polished infrastructure language may be mistaken for production proof. | What does the participant believe is real, simulated, measured or certified after the walkthrough? |

## Participants

Preferred `DIRECT_USER` profile:
- recent hands-on work in MTO/PSP operations, settlement, payout operations, treasury, reconciliation or cross-border payment operations;
- regularly reviews or troubleshoots transaction routing / settlement states;
- comfortable discussing workflow using simulated data only.

Allowed `PROXY` profile:
- adjacent banking operations, fintech product, compliance, finance or payment-infrastructure work without direct responsibility for the target workflow.

Do not pool proxy evidence with direct-user evidence.

Target: **3–5 participants**, preferably at least 3 DIRECT_USER before synthesis. If access remains limited, report the limitation rather than widening the definition after the fact.

## Method

Moderated remote or in-person usability / comprehension sessions, approximately **20–30 minutes**.

The method can support:
- comprehension of the concept;
- observed navigation and explanation behavior;
- confusion around state semantics and evidence boundaries;
- confidence / perceived clarity as participant self-report.

The method cannot prove:
- production routing performance;
- settlement accuracy or reliability;
- conversion lift;
- compliance readiness;
- reduced operational cost/time in a live system.

## Tasks

### Task 1 — Explain the routing model
Prompt: **“You receive this payout instruction. Walk me through what you think happens from here until the destination.”**

Record:
- what the participant identifies as input;
- whether they identify FinFlow as the orchestration/switch layer;
- whether they identify the selected rail and destination;
- points where they need moderator help.

### Task 2 — Interpret rail states
Prompt: **“Look at the five rails. Tell me what Selected, Available and Unavailable mean to you here.”**

Probe only after the initial answer:
- “What would you expect to be live system data versus a prototype simulation?”
- “What would you need before acting on an ‘Available’ state in production?”

### Task 3 — Trace the mechanism
Prompt: **“Use the mechanism section to explain where routing is decided and what an operator can see before and after that decision.”**

Record whether the six-stage model helps or adds unnecessary conceptual overhead.

### Task 4 — Edge-state recovery
Use the Evidence Lens states in this order without teaching the expected answer:
1. Missing routing context;
2. No eligible rail;
3. Settlement delayed;
4. Payout not confirmed.

Ask: **“What is happening, what would you do next, and what do you believe has definitely happened versus not been confirmed?”**

### Task 5 — Trust boundary
Prompt: **“Based only on this prototype, what claims would you feel comfortable repeating about FinFlow? What would still need proof?”**

## Capture contract

For every session record:
- anonymized participant ID;
- DIRECT_USER or PROXY classification and rationale;
- date;
- exact tested URL/build;
- consent state;
- observed behavior before interpretation;
- moderator help exactly when given;
- participant wording for material evidence, paraphrased unless a short quote is explicitly consented;
- contradictory evidence;
- decision IDs affected.

No names, emails, phone numbers, company-sensitive payment data, customer data, credentials or real transaction screenshots in the repository.

## Synthesis rule

Only findings backed by traceable evidence IDs may update the Decision Log. Preserve contradictory evidence. Do not turn technical QA, AI critique, visual polish or recruitment interest into direct-user findings.

## Iteration + retest rule

After sufficient evidence:
1. synthesize findings against D-01…D-04;
2. choose the smallest evidence-supported product/content change;
3. record the change as `ITERATION`, not validation;
4. freeze the changed build;
5. rerun affected tasks with compatible participants;
6. claim improvement only if the post-change evidence supports it.
