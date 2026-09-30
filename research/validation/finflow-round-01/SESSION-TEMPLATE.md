# FinFlow Round 01 — Session Template

## Session metadata

- Participant ID: `FF-R01-P__`
- Date:
- Classification: `DIRECT_USER / PROXY`
- Classification rationale:
- Moderator:
- Exact tested URL: `https://ngh1aa.github.io/The_Timeless_Gallery/design-lens.html`
- Frozen source build: `f4e8a6ea68f1bc09692c4469e36b087470427195`
- Consent to participate: `YES / NO`
- Consent to anonymized notes: `YES / NO`
- Quote permission: `YES / NO / NOT_REQUESTED`

> Do not continue if participation/notes consent is NO. Do not store PII or real financial/customer data.

## Moderator rules

- Read task prompts as written before probing.
- Do not explain what FinFlow is supposed to mean before the participant answers.
- Record observable behavior separately from interpretation.
- Record moderator help exactly when it happens.
- Do not convert a participant opinion into a measured operational outcome.
- Preserve confusion and contradictory evidence.

## Task 1 — Explain the routing model (`D-01`)

Prompt: **“You receive this payout instruction. Walk me through what you think happens from here until the destination.”**

### Observation
- First element participant attends to:
- Input they identify:
- What they think FinFlow does:
- Selected route they identify:
- Destination / end state they identify:
- Navigation path / clicks:
- Moderator help:
- Observable breakdowns:

### Participant interpretation
- Explanation in their own words:
- Confidence 1–5 (self-report):
- What felt unclear:

### Outcome
`SUCCESS / PARTIAL / FAILURE / NOT_SCORED`

Scoring note: success requires identifying input → orchestration/routing decision → selected rail → destination without being taught those concepts.

---

## Task 2 — Interpret rail states (`D-02`) — PRIORITY

Prompt: **“Look at the five rails. Tell me what Selected, Available and Unavailable mean to you here.”**

### Observation
- Distinguishes Selected:
- Distinguishes Available:
- Distinguishes Unavailable:
- Treats simulated state as live production data? `YES / NO / UNCLEAR`
- Moderator help:

### Probe after initial answer
- “What would you expect to be real system data versus a prototype simulation?”
- “What would you need before acting on an ‘Available’ state in production?”

### Outcome
`SUCCESS / PARTIAL / FAILURE / NOT_SCORED`

---

## Task 3 — Trace the mechanism (`D-03`) — PRIORITY

Prompt: **“Use the mechanism section to explain where routing is decided and what an operator can see before and after that decision.”**

### Observation
- Uses six-step navigation:
- Identifies routing decision stage:
- Identifies pre-route context:
- Identifies post-route/settlement context:
- Steps skipped or confused:
- Moderator help:

### Participant interpretation
- Useful stages:
- Redundant/unclear stages:
- Confidence 1–5:

### Outcome
`SUCCESS / PARTIAL / FAILURE / NOT_SCORED`

---

## Task 4 — Edge states (`D-01`, `D-02`, `D-03`)

Use the Evidence Lens state controls. Show one state at a time.

For each state ask: **“What is happening, what would you do next, and what do you believe has definitely happened versus not been confirmed?”**

### Missing routing context
- Participant explanation:
- Next action:
- Incorrect assumptions:

### No eligible rail
- Participant explanation:
- Next action:
- Incorrect assumptions:

### Settlement delayed
- Participant explanation:
- Next action:
- Incorrect assumptions:

### Payout not confirmed
- Participant explanation:
- Next action:
- Incorrect assumptions:

### Moderator help across edge states
-

---

## Task 5 — Trust boundary (`D-04`)

Prompt: **“Based only on this prototype, what claims would you feel comfortable repeating about FinFlow? What would still need proof?”**

### Record
- Claims participant treats as demonstrated:
- Claims participant treats as simulated/conceptual:
- Claims participant mistakenly thinks are measured/certified/live:
- Missing proof they ask for:
- Moderator help:

### Outcome
`SUCCESS / PARTIAL / FAILURE / NOT_SCORED`

Scoring note: success means the participant does not infer unsupported production performance, certification, customer proof or live rail availability from the prototype alone.

## Closing

1. What was clearest?
2. What was most confusing?
3. What would you need before trusting this for a real operational workflow?
4. Any missing state or exception that matters in your work?

## Atomic evidence candidates

After the session, list only evidence worth adding to `evidence-ledger.jsonl`:

- Evidence ID:
- Decision ID:
- Task:
- Evidence type: `OBSERVATION / SELF_REPORT / CONTRADICTION`
- Source location in this session:
- Neutral evidence statement:
- Severity/importance hypothesis (not yet a finding):

## Integrity check

- [ ] Participant eligibility/classification is supported.
- [ ] Consent recorded.
- [ ] Exact tested build captured.
- [ ] Observations separated from interpretation.
- [ ] Moderator help captured.
- [ ] No PII/confidential financial data committed.
- [ ] Contradictory evidence preserved.
- [ ] No improvement/validation claim made from one session.
