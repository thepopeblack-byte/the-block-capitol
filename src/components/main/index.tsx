import React from "react";
import BlockchainCourses from "./block-chain-courses";
import BuildingTheFuture from "./building-the-future";
import FAQ from "./faq";
import Footer from "./footer";
import HeroSection from "./hero";
import JoinNetwork from "./join-network";
import WhoWeAre from "./who-we-are";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <div id="hero">
        <HeroSection />
      </div>
      <div id="who-we-are">
        <WhoWeAre />
      </div>
      <section className="bg-[#181818] text-white px-6 md:px-16 py-12" aria-labelledby="build-series-announcement">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-[#ff9777] text-xs font-semibold uppercase tracking-widest">Learn | Build | Demo · Kaduna</p>
            <h2 id="build-series-announcement" className="text-2xl md:text-3xl font-bold mt-3">The BlockCapitol Build Series</h2>
            <p className="text-gray-300 mt-3 leading-relaxed">November 9, 10 & 12, 2026 · 10:00 AM – 1:00 PM daily</p>
            <p className="text-gray-300 mt-1">Three days to turn your idea into a working solution. Beginners welcome.</p>
          </div>
          <Link to="/events" className="inline-flex items-center justify-center gap-4 rounded bg-[#d83b13] hover:bg-[#ad2d0d] px-6 py-4 font-semibold shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4">Explore the event <ArrowRight size={20} aria-hidden="true" /></Link>
        </div>
      </section>
      <div id="blockchain-courses">
        <BlockchainCourses />
      </div>
      <div id="building-the-future">
        <BuildingTheFuture />
      </div>
      <div id="join-network">
        <JoinNetwork />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </main>
  );
}
