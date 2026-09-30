# FinFlow Round 01 — Participant Tracker

Status: `RECRUITING / 0 COMPLETED / 0 VERIFIED`

Do not put names, emails, phone numbers, employer-sensitive information, credentials or real transaction data in this file.

| Slot | Recruitment | Screened | Evidence class | Consent | Build captured | Tasks run | Session artifact | Integrity | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FF-R01-P01 | OPEN | NOT_SCREENED | NOT_CLASSIFIED | NOT_CAPTURED | NOT_CAPTURED | — | — | — | — |
| FF-R01-P02 | OPEN | NOT_SCREENED | NOT_CLASSIFIED | NOT_CAPTURED | NOT_CAPTURED | — | — | — | — |
| FF-R01-P03 | OPEN | NOT_SCREENED | NOT_CLASSIFIED | NOT_CAPTURED | NOT_CAPTURED | — | — | — | — |
| FF-R01-P04 | OPEN | NOT_SCREENED | NOT_CLASSIFIED | NOT_CAPTURED | NOT_CAPTURED | — | — | — | — |
| FF-R01-P05 | OPEN | NOT_SCREENED | NOT_CLASSIFIED | NOT_CAPTURED | NOT_CAPTURED | — | — | — | — |

## State rules

### Recruitment
`OPEN → INTERESTED → SCHEDULED → COMPLETED`

A public “interested” comment is recruitment only. It is not a completed or verified research record.

### Evidence class
Use only:
- `DIRECT_USER` — recent hands-on MTO/PSP/settlement/payout/treasury/reconciliation responsibility relevant to the tested decisions;
- `PROXY` — adjacent domain experience that informs but does not replace the target user;
- `NOT_CLASSIFIED` — insufficient screening information.

### Verified record
A session can be marked `VERIFIED_RECORD` only when:
- eligibility/classification is supported;
- consent to participate + anonymized notes is YES;
- exact tested URL/build is captured;
- at least priority Tasks 2 and 3 were run;
- session artifact is anonymized;
- observation/self-report boundaries are preserved;
- no PII or confidential financial data is stored.

Do not increment `verified_direct_user_sessions` in `status.json` until this contract is met.
