const FEATURES = [
  {
    sym: "$CORE",
    title: "Name resolution",
    body: "Register a name once and point it at your wallet, forever readable instead of 0x-truncated.",
  },
  {
    sym: "$WALLET",
    title: "Wallet-native",
    body: "Resolves automatically inside Robinhood Wallet — no manual network setup, no added extension.",
  },
  {
    sym: "$STOCK",
    title: "Portfolio profiles",
    body: "Attach an opt-in, public view of your Stock Token holdings to your name — NVDA, AAPL, GOOG, and more.",
  },
  {
    sym: "$DEFI",
    title: "Position labels",
    body: "Uniswap LPs and lending positions on Robinhood Chain show your name instead of a raw address.",
  },
];

export function Features() {
  return (
    <section id="names" className="py-22 border-b border-border">
      <div className="max-w-[600px] mb-13">
        <div className="font-mono text-[12.5px] text-green tracking-wide mb-4">
          FEATURE SHEET
        </div>
        <h2 className="font-display font-semibold text-[28px] sm:text-4xl leading-tight">
          Built on Robinhood Chain,
          <br />
          not bolted onto it.
        </h2>
        <p className="text-mute mt-3.5 text-[15.5px]">
          Every feature is designed around what actually lives on the chain:
          Stock Tokens, the Robinhood Wallet, and the DeFi primitives shipped
          at mainnet launch.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
        {FEATURES.map((f) => (
          <div key={f.sym} className="bg-surface p-7">
            <span className="font-mono text-[13px] text-green mb-4 inline-block border border-greenDim px-2.5 py-1 rounded-md">
              {f.sym}
            </span>
            <h3 className="font-display text-[19px] font-semibold mb-2.5">
              {f.title}
            </h3>
            <p className="text-mute text-sm">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
