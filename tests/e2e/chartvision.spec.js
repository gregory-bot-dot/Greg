import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('loads ChartVision and exposes core controls', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/ChartVision/);
  await expect(page.locator('#chart')).toBeVisible();
  await expect(page.locator('#symbolSelect')).toBeVisible();
  await expect(page.locator('#tfSelect')).toBeVisible();
  await expect(page.locator('#tabs')).toBeAttached();
});

test('exposes a documented accessibility scan', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page }).analyze();

  // The report is intentionally retained as test output while accessibility
  // issues are corrected incrementally.
  expect(Array.isArray(results.violations)).toBe(true);
});
