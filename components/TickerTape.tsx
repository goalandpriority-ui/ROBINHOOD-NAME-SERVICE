import { TICKER_ITEMS } from "@/lib/tickerData";

export function TickerTape() {
  // Duplicate the list so the scrolling loop is seamless.
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="border-b border-border bg-surface overflow-hidden whitespace-nowrap py-2">
      <div className="inline-flex animate-scroll-left">
        {items.map((item, i) => (
          <span
            key={i}
            className="font-mono text-[12.5px] text-mute px-5 inline-flex items-center gap-1.5 border-r border-border"
          >
            {item.name}{" "}
            <b
              className={
                item.dir === "up" ? "text-green font-medium" : "text-red font-medium"
              }
            >
              {item.dir === "up" ? "▲" : "▼"} {item.price}
            </b>
          </span>
        ))}
      </div>
    </div>
  );
}
