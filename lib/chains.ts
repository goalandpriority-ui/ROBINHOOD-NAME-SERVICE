import { defineChain } from "viem";

// NOTE: Placeholder values. Swap in Robinhood Chain's real chain ID,
// RPC URL, and block explorer before deploying — these aren't published
// in a way this project can verify automatically.
export const robinhoodChain = defineChain({
  id: 91_000, // placeholder — replace with the real chain ID
  name: "Robinhood Chain",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.robinhoodchain.example"], // placeholder RPC
    },
  },
  blockExplorers: {
    default: {
      name: "Robinhood Chain Explorer",
      url: "https://explorer.robinhoodchain.example", // placeholder
    },
  },
  testnet: false,
});
