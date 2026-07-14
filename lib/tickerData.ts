export type TickerItem = {
  name: string;
  price: string;
  dir: "up" | "down";
};

export const TICKER_ITEMS: TickerItem[] = [
  { name: "satoshi.hood", price: "0.00015 ETH", dir: "up" },
  { name: "nvda-fan.hood", price: "0.00011 ETH", dir: "up" },
  { name: "chain.hood", price: "reserved", dir: "down" },
  { name: "0xmiller.hood", price: "0.00013 ETH", dir: "up" },
  { name: "liquidity.hood", price: "0.00009 ETH", dir: "down" },
  { name: "apex.hood", price: "0.00142 ETH", dir: "up" },
  { name: "stockpile.hood", price: "0.00010 ETH", dir: "up" },
  { name: "sequencer.hood", price: "0.00008 ETH", dir: "down" },
];
