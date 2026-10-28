import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Building2,
  Code2,
  Sprout,
  GraduationCap,
  Rocket,
} from "lucide-react";
import { Button } from "../form/button";
export default function HeroSection() {
  return (
    <section className="home-hero" id="hero" aria-labelledby="hero-title">
      <div className="site-container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Coworking, cohorts & startups · Kaduna</p>
            <h1 id="hero-title">
              Space to work.
              <br />
              Support to <span>grow.</span>
            </h1>
            <p>
              A coworking space, cohort hub, and incubation centre supporting
              startups in Kaduna. Work, learn, and build with a community
              exploring AI, blockchain, and Web3.
            </p>
            <div className="hero-actions">
              <Button text="Explore our hub" href="/#who-we-are" />
              <Link className="text-link" to="/#blockchain-courses">
                Discover our cohorts{" "}
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="hero-note">
              <Sprout size={17} aria-hidden="true" /> For founders, teams,
              freelancers, and curious minds.
            </div>
          </div>
          <figure className="hero-visual">
            <img
              src="/blockcapitol-builders.jpg"
              srcSet="/blockcapitol-builders-small.jpg 640w, /blockcapitol-builders.jpg 1200w"
              sizes="(max-width: 767px) calc(100vw - 64px), (max-width: 900px) 600px, 50vw"
              alt="Participants working with laptops during a session at The BlockCapitol in Kaduna"
              width="1200"
              height="1600"
              fetchPriority="high"
            />
            <span className="photo-index">THE BLOCKCAPITOL COMMUNITY</span>
            <figcaption className="hero-photo-label">
              <Code2 size={28} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <strong>A home for your next idea.</strong>
                <span>Work. Learn. Build.</span>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="hero-principles">
          <div>
            <Building2 size={23} strokeWidth={1.5} aria-hidden="true" />
            <div>
              <strong>Work alongside others</strong>
              <p>A shared space to focus and collaborate.</p>
            </div>
          </div>
          <div>
            <GraduationCap size={23} strokeWidth={1.5} aria-hidden="true" />
            <div>
              <strong>Learn in cohorts</strong>
              <p>AI, blockchain, and practical digital skills.</p>
            </div>
          </div>
          <div>
            <Rocket size={23} strokeWidth={1.5} aria-hidden="true" />
            <div>
              <strong>Move your startup forward</strong>
              <p>Community, incubation, and support.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
