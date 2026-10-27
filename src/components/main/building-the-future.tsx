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
            src="/group-1.png"
            alt="Developers discussing a project during a community session"
            width="520"
            height="326"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/group-2.png"
            alt="BlockCapitol members collaborating around laptops"
            width="560"
            height="361"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            Learning, building, and figuring it out together.
          </figcaption>
        </figure>
        <div className="story-copy">
          <p className="eyebrow">Progress happens together</p>
          <h2 className="section-title" id="story-title">
            Real people.
            <br />
            Shared progress.
          </h2>
          <p className="section-copy">
            Great learning leaves room for questions, experiments, and the
            occasional wrong turn. We’ve had our share of all three.
          </p>
          <p className="section-copy">
            At The BlockCapitol, we share what we learn, support one another
            through challenges, and keep building. You don’t have to figure out
            your next step alone.
          </p>
          <Link className="text-link" to="/#join-network">
            Find your community <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
