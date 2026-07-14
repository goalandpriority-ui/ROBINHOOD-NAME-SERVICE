const STEPS = [
  {
    tag: "STEP 1 — QUOTE",
    title: "Search a name",
    body: "Check live availability and see the registration price, quoted in ETH.",
  },
  {
    tag: "STEP 2 — EXECUTE",
    title: "Confirm in wallet",
    body: "Sign once from Robinhood Wallet or any EVM wallet connected to the chain. First to arrive at the sequencer wins.",
  },
  {
    tag: "STEP 3 — SETTLE",
    title: "Name is yours",
    body: "Ownership settles onchain instantly. Renew annually or let it lapse into a grace period.",
  },
];

export function OrderFlow() {
  return (
    <section id="flow" className="py-22 border-b border-border">
      <div className="max-w-[600px] mb-13">
        <div className="font-mono text-[12.5px] text-green tracking-wide mb-4">
          ORDER FLOW
        </div>
        <h2 className="font-display font-semibold text-[28px] sm:text-4xl leading-tight">
          Registering a name works like placing an order.
        </h2>
        <p className="text-mute mt-3.5 text-[15.5px]">
          Same first-come, first-served logic Robinhood Chain uses to
          sequence every transaction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STEPS.map((s) => (
          <div
            key={s.tag}
            className="relative bg-surface border border-border rounded-2xl p-7"
          >
            <div className="absolute top-0 left-0 h-0.5 w-full bg-gradient-to-r from-green to-transparent rounded-t-2xl" />
            <div className="font-mono text-xs text-mute mb-4">{s.tag}</div>
            <h3 className="font-display text-xl font-semibold mb-2.5">
              {s.title}
            </h3>
            <p className="text-mute text-[14.5px]">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
