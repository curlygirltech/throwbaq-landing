import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import Problem from "@/components/sections/Problem";
import HowItWorks from "@/components/sections/HowItWorks";
import ValueProps from "@/components/sections/ValueProps";
import FAQ from "@/components/sections/FAQ";
import WaitlistCTA from "@/components/sections/WaitlistCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Problem />
        <HowItWorks />
        <ValueProps />
        <FAQ />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}
