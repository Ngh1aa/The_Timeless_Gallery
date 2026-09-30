import { test, expect } from '@playwright/test';
import fs from 'node:fs/promises';

const baseURL = process.env.FINFLOW_BASE_URL || 'http://127.0.0.1:4173';

test('FinFlow evidence lens exposes decision pins, conceptual baseline, edge states and tour', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(`${baseURL}/design-lens.html`, { waitUntil: 'domcontentloaded' });

  const frame = page.frameLocator('#frame');
  await expect(frame.locator('.lens-pin')).toHaveCount(4);
  await expect(page.getByText('Verified direct-user sessions: 0.')).toBeVisible();

  await frame.locator('.lens-pin', { hasText: 'D-02' }).click();
  await expect(frame.locator('.lens-pop')).toContainText('Rail-state semantics');
  await expect(frame.locator('.lens-pop')).toContainText('PLANNED_VALIDATION');

  await page.getByRole('button', { name: 'CONCEPTUAL BASELINE' }).click();
  await expect(frame.locator('.lens-baseline')).toContainText('NOT A HISTORICAL SHIPPED SCREEN');

  await page.getByRole('button', { name: 'NO ELIGIBLE RAIL' }).click();
  await expect(frame.locator('.lens-note.danger')).toContainText('NO ELIGIBLE RAIL');
  await expect(frame.locator('#settlement-state')).toHaveText('NO ROUTE');

  await page.getByRole('button', { name: 'PAYOUT NOT CONFIRMED' }).click();
  await expect(frame.locator('.lens-note.danger')).toContainText('PAYOUT NOT CONFIRMED');
  await expect(frame.locator('#settlement-state')).toHaveText('UNCONFIRMED');

  await page.getByRole('button', { name: 'START 5-STEP TOUR' }).click();
  await expect(page.locator('#tour')).toBeVisible();
  await expect(page.locator('#tourIndex')).toHaveText('01 / 05');
  await expect(frame.locator('.lens-tour-focus')).toHaveCount(1);

  await fs.mkdir('qa-artifacts', { recursive: true });
  await page.screenshot({ path: 'qa-artifacts/finflow-evidence-lens.png', fullPage: true });
});

test('FinFlow Round 01 research package keeps human evidence truthful', async () => {
  const status = JSON.parse(await fs.readFile('research/validation/finflow-round-01/status.json', 'utf8'));
  expect(status.status).toBe('READY_TO_RECRUIT');
  expect(status.evidence_state).toBe('PLANNED_VALIDATION');
  expect(status.verified_direct_user_sessions).toBe(0);
  expect(status.verified_proxy_sessions).toBe(0);
  expect(status.forbidden_claims_until_verified.length).toBeGreaterThan(0);

  const ledger = await fs.readFile('research/validation/finflow-round-01/evidence-ledger.jsonl', 'utf8');
  expect(ledger).toBe('');

  const findings = await fs.readFile('research/validation/finflow-round-01/FINDINGS.md', 'utf8');
  expect(findings).toContain('NO DIRECT-USER FINDINGS YET');

  const decisionLog = await fs.readFile('research/validation/finflow-round-01/DECISION-LOG.md', 'utf8');
  for (const id of ['D-01', 'D-02', 'D-03', 'D-04']) expect(decisionLog).toContain(id);
});
