import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const html = readFileSync(new URL('../../index.html', import.meta.url), 'utf8');

describe('ChartVision public structure', () => {
  it('includes the four supported instruments', () => {
    for (const symbol of ['XAUUSD', 'BTCUSD', 'EURUSD', 'US500']) {
      expect(html).toContain(`value="${symbol}"`);
    }
  });

  it('includes the chart and the strategy panel', () => {
    expect(html).toContain('id="chart"');
    expect(html).toContain('id="tabs"');
    expect(html).toContain('id="btBox"');
  });

  it('loads Lightweight Charts explicitly', () => {
    expect(html).toContain('lightweight-charts');
  });
});
