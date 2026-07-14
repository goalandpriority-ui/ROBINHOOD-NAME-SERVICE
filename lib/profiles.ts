export type Holding = {
  symbol: string;
  change: string;
  direction: "up" | "down" | "flat";
};

export type Profile = {
  name: string;
  verified: boolean;
  holdings: Holding[];
};

// Demo data. In production this would come from a database keyed by
// the registered name, populated at registration / opt-in time.
export const PROFILES: Record<string, Profile> = {
  satoshi: {
    name: "satoshi.hood",
    verified: true,
    holdings: [
      { symbol: "NVDA", change: "+2.4%", direction: "up" },
      { symbol: "AAPL", change: "+0.8%", direction: "up" },
      { symbol: "GOOGL", change: "—", direction: "flat" },
    ],
  },
};

export function getProfile(name: string): Profile | null {
  return PROFILES[name.toLowerCase()] ?? null;
}
