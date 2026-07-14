export function Footer() {
  return (
    <footer className="py-9">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <p className="text-xs text-mute2 max-w-[640px] leading-relaxed">
          This is an independent concept site for a name service on
          Robinhood Chain and is not affiliated with, endorsed by, or a
          product of Robinhood Markets, Inc. Robinhood Chain is a trademark
          of its respective owner. Built for demonstration purposes.
        </p>
        <div className="flex gap-5 text-[13px] text-mute">
          <a href="#" className="hover:text-text">Docs</a>
          <a href="#" className="hover:text-text">GitHub</a>
          <a href="#" className="hover:text-text">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
