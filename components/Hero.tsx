"use client";

import { useState } from "react";
import { quoteName, NameQuote } from "@/lib/pricing";

export function Hero() {
  const [input, setInput] = useState("");
  const [quote, setQuote] = useState<NameQuote | null>(null);

  function handleCheck() {
    if (!input.trim()) {
      setQuote(null);
      return;
    }
    setQuote(quoteName(input));
  }

  return (
    <section className="text-center pt-20 pb-6">
      <div className="font-mono text-[12.5px] text-green tracking-wide mb-5 flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_0_3px_rgba(0,200,5,0.18)]" />
        LIVE ON ROBINHOOD CHAIN MAINNET
      </div>

      <h1 className="font-display font-bold text-[38px] sm:text-6xl leading-[1.03] tracking-tight">
        Your address,
        <br />
        traded as a <span className="text-green">name.</span>
      </h1>

      <p className="max-w-[560px] mx-auto mt-5 text-mute text-[17px]">
        One name resolves your wallet, your Stock Tokens, and your onchain
        activity — native to Robinhood Chain.
      </p>

      <div className="max-w-[560px] mx-auto mt-11 bg-surface border border-border rounded-2xl p-2 flex gap-2 text-left">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleCheck()}
          type="text"
          placeholder="satoshi"
          autoComplete="off"
          spellCheck={false}
          className="flex-1 bg-transparent border-none outline-none text-text font-mono text-[17px] px-3.5 py-3 placeholder:text-mute2"
        />
        <div className="font-mono text-[17px] text-mute flex items-center pr-1.5">
          .hood
        </div>
        <button
          onClick={handleCheck}
          className="text-sm font-semibold px-5 py-2.5 rounded-full bg-green text-[#04140A] hover:bg-[#12D815] transition whitespace-nowrap"
        >
          Check
        </button>
      </div>

      {quote && quote.name && (
        <div
          className={`max-w-[560px] mx-auto mt-3.5 flex items-center justify-between font-mono text-[13.5px] px-4 py-3 rounded-[10px] border border-border bg-surface ${
            quote.available ? "text-green" : "text-red"
          }`}
        >
          <span className="text-text">{quote.name}.hood</span>
          <span className="flex items-center gap-1.5 font-medium">
            {quote.available ? (
              <>▲ AVAILABLE · {quote.priceEth} ETH first year</>
            ) : (
              <>▼ TAKEN</>
            )}
          </span>
        </div>
      )}

      <div className="font-mono text-[12.5px] text-mute2 mt-4">
        Reserved: hood · chain · robinhood · stock · nvda · aapl · googl
      </div>
    </section>
  );
}
