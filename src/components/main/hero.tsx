import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen, Code2, Sprout, Users } from "lucide-react";
import { Button } from "../form/button";
export default function HeroSection() {
  return (
    <section className="home-hero" id="hero" aria-labelledby="hero-title">
      <div className="site-container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">A home for builders · Kaduna, Nigeria</p>
            <h1 id="hero-title">
              Build your skills.
              <br />
              Build <span>what’s next.</span>
            </h1>
            <p>
              Turn your curiosity into real-world skills. Learn blockchain,
              build useful solutions, and grow alongside a community that moves
              you forward.
            </p>
            <div className="hero-actions">
              <Button text="Explore programmes" href="/#blockchain-courses" />
              <Link className="text-link" to="/events">
                Discover our events{" "}
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="hero-note">
              <Sprout size={17} aria-hidden="true" /> Your ideas belong here.
              Your next chapter starts here.
            </div>
          </div>
          <figure className="hero-visual">
            <img
              src="/community-learning.jpg"
              alt="Community members learning together at a BlockCapitol workshop"
              width="1000"
              height="1041"
              fetchPriority="high"
            />
            <span className="photo-index">THE BLOCKCAPITOL COMMUNITY</span>
            <figcaption className="hero-photo-label">
              <Code2 size={28} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <strong>Big ideas start with people.</strong>
                <span>Learn. Build. Belong.</span>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="hero-principles">
          <div>
            <BookOpen size={23} strokeWidth={1.5} aria-hidden="true" />
            <div>
              <strong>Learn by doing</strong>
              <p>Practical skills, real understanding.</p>
            </div>
          </div>
          <div>
            <Code2 size={23} strokeWidth={1.5} aria-hidden="true" />
            <div>
              <strong>Build with purpose</strong>
              <p>Technology for everyday challenges.</p>
            </div>
          </div>
          <div>
            <Users size={23} strokeWidth={1.5} aria-hidden="true" />
            <div>
              <strong>Grow together</strong>
              <p>Mentorship, collaboration, community.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
