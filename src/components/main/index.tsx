import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import BlockchainCourses from "./block-chain-courses";
import BuildingTheFuture from "./building-the-future";
import FAQ from "./faq";
import HeroSection from "./hero";
import JoinNetwork from "./join-network";
import WhoWeAre from "./who-we-are";
import Partners from "./partners";
import { buildSeries } from "../../data/site";
export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <HeroSection />
      <section
        className="feature-section"
        aria-labelledby="build-series-announcement"
      >
        <div className="site-container">
          <div className="featured-event">
            <img
              src={buildSeries.flyer}
              alt="The BlockCapitol Build Series Kaduna event flyer"
              width="160"
              height="240"
              loading="lazy"
            />
            <div className="featured-event-copy">
              <p className="eyebrow">Featured event · Learn | Build | Demo</p>
              <h2 id="build-series-announcement">
                Your idea.
                <br />A real-world solution.
              </h2>
              <p>
                {buildSeries.title}. Three days of learning, mentorship, and
                building across AI, blockchain, and digital solutions for
                Kaduna. Beginners welcome.
              </p>
            </div>
            <div className="featured-event-aside">
              <p>
                <strong>{buildSeries.dates}</strong>
                {buildSeries.time}
                <br />
                Kaduna, Nigeria
              </p>
              <Link className="button button-primary" to="/events">
                Explore the event <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <WhoWeAre />
      <BlockchainCourses />
      <BuildingTheFuture />
      <JoinNetwork />
      <Partners />
      <FAQ />
    </main>
  );
}
