"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";

export function Nav() {
  const { address, isConnected } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <nav className="flex items-center justify-between py-5 border-b border-border">
      <div className="font-display font-bold text-xl flex items-center gap-2">
        <span>.hood</span>
        <span className="font-mono text-[10.5px] text-green border border-greenDim px-2 py-0.5 rounded-full tracking-wide">
          ROBINHOOD CHAIN
        </span>
      </div>

      <div className="hidden md:flex gap-8 text-[14.5px] text-mute">
        <a href="#names" className="hover:text-text">Names</a>
        <a href="#flow" className="hover:text-text">How it works</a>
        <a href="#profiles" className="hover:text-text">Profiles</a>
        <a href="#build" className="hover:text-text">Build</a>
      </div>

      <div className="flex items-center gap-3">
        <a
          href="#"
          className="text-sm font-semibold px-5 py-2.5 rounded-full border border-border hover:border-mute transition"
        >
          Docs
        </a>
        {isConnected ? (
          <button
            onClick={() => disconnect()}
            className="text-sm font-semibold px-5 py-2.5 rounded-full bg-green text-[#04140A] hover:bg-[#12D815] transition"
          >
            {address?.slice(0, 6)}...{address?.slice(-4)}
          </button>
        ) : (
          <button
            onClick={() => connect({ connector: connectors[0] })}
            className="text-sm font-semibold px-5 py-2.5 rounded-full bg-green text-[#04140A] hover:bg-[#12D815] transition"
          >
            Connect wallet
          </button>
        )}
      </div>
    </nav>
  );
}
