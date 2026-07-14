import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-[1180px] mx-auto px-8 py-32 text-center">
      <div className="font-mono text-red text-sm mb-4">▼ NOT REGISTERED</div>
      <h1 className="font-display text-3xl font-semibold mb-4">
        This name hasn&apos;t been claimed yet.
      </h1>
      <Link
        href="/"
        className="inline-block mt-4 text-sm font-semibold px-6 py-3 rounded-full bg-green text-[#04140A]"
      >
        Search names
      </Link>
    </main>
  );
}
