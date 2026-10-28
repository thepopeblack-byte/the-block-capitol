import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
export default function BuildingTheFuture() {
  return (
    <section
      className="section-space"
      id="building-the-future"
      aria-labelledby="story-title"
    >
      <div className="site-container story-grid">
        <figure className="story-photos">
          <img
            src="/blockcapitol-ai-session.jpg"
            alt="A facilitator discussing AI productivity with participants beside The BlockCapitol's branded wall"
            width="1200"
            height="900"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            An AI productivity session at The BlockCapitol, Kaduna.
          </figcaption>
        </figure>
        <div className="story-copy">
          <p className="eyebrow">A home for ideas and the people behind them</p>
          <h2 className="section-title" id="story-title">
            From an idea
            <br />
            to what comes next.
          </h2>
          <p className="section-copy">
            Building a startup or developing a new skill takes space to think,
            people to learn with, and support when the next step feels unclear.
          </p>
          <p className="section-copy">
            The BlockCapitol connects coworking, cohort learning, incubation,
            and startup support in one community. Bring your idea, your team, or
            your curiosity about AI and Web3—and explore your next step with us.
          </p>
          <Link className="text-link" to="/#join-network">
            Find your community <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
