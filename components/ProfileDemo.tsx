import { PROFILES } from "@/lib/profiles";

export function ProfileDemo() {
  const demo = PROFILES.satoshi;

  return (
    <section id="profiles" className="py-22 border-b border-border">
      <div className="max-w-[600px] mb-13">
        <div className="font-mono text-[12.5px] text-green tracking-wide mb-4">
          PROFILES
        </div>
        <h2 className="font-display font-semibold text-[28px] sm:text-4xl leading-tight">
          A name that shows its work.
        </h2>
        <p className="text-mute mt-3.5 text-[15.5px]">
          Public by choice — every holding shown on a profile is opted in by
          the owner, never inferred.
        </p>
      </div>

      <div className="bg-surface border border-border rounded-[20px] p-9 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="bg-surface2 border border-border rounded-2xl p-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green to-[#0A6E03] mb-3.5" />
          <div className="font-mono text-lg mb-1">{demo.name}</div>
          {demo.verified && (
            <div className="font-mono text-[11.5px] text-green flex items-center gap-1.5 mb-5">
              ● VERIFIED ROBINHOOD ACCOUNT
            </div>
          )}
          {demo.holdings.map((h) => (
            <div
              key={h.symbol}
              className="flex justify-between font-mono text-[13px] py-2.5 border-t border-border text-mute"
            >
              <span>{h.symbol}</span>
              <b
                className={
                  h.direction === "up"
                    ? "text-green font-medium"
                    : "text-text font-medium"
                }
              >
                {h.change}
              </b>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold mb-3">
            Not a wallet address. A profile.
          </h3>
          <p className="text-mute text-[15px]">
            Toggle your Stock Token holdings on or off, add a verified badge
            tied to your Robinhood account, and let dApps across the chain
            greet you by name instead of hex.
          </p>
        </div>
      </div>
    </section>
  );
}
