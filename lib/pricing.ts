// Reserved names that can never be registered by a user.
export const RESERVED = [
  "hood",
  "chain",
  "robinhood",
  "stock",
  "nvda",
  "aapl",
  "googl",
];

export type NameQuote = {
  name: string;
  available: boolean;
  priceEth?: string;
};

/**
 * Quotes a .hood name the same way a real registrar would:
 * shorter names cost more (they're scarcer), longer names are cheap.
 * Denominated in ETH — Robinhood Chain's native gas + payment token.
 */
export function quoteName(raw: string): NameQuote {
  const clean = raw.trim().toLowerCase().replace(/[^a-z0-9-]/g, "");

  if (!clean) {
    return { name: "", available: false };
  }

  if (RESERVED.includes(clean)) {
    return { name: clean, available: false };
  }

  const len = clean.length;
  let min: number;
  let max: number;

  if (len <= 3) {
    min = 0.0009;
    max = 0.0015;
  } else if (len <= 5) {
    min = 0.0002;
    max = 0.0004;
  } else {
    min = 0.00008;
    max = 0.00015;
  }

  const price = min + Math.random() * (max - min);

  return {
    name: clean,
    available: true,
    priceEth: price.toFixed(5),
  };
}
