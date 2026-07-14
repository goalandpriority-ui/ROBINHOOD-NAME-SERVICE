import { TickerTape } from "@/components/TickerTape";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { OrderFlow } from "@/components/OrderFlow";
import { ProfileDemo } from "@/components/ProfileDemo";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <TickerTape />
      <div className="max-w-[1180px] mx-auto px-8">
        <Nav />
        <Hero />
      </div>
      <div className="max-w-[1180px] mx-auto px-8">
        <Features />
        <OrderFlow />
        <ProfileDemo />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
