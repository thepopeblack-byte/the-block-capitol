import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { partners } from "../../data/site";

export default function Partners() {
  return (
    <section
      className="section-space partners-section"
      id="partners"
      aria-labelledby="partners-title"
    >
      <div className="site-container">
        <p className="eyebrow">Working with our community</p>
        <h2 className="section-title" id="partners-title">
          Our partners.
        </h2>
        <p className="section-copy partners-intro">
          Organizations we work with on events, learning, and community
          activities at The BlockCapitol.
        </p>
        <ul className="partners-list">
          {partners.map(({ name, role, logo, href, action }) => (
            <li className="partner-card" key={name}>
              <div className="partner-identity">
                {logo && (
                  <img
                    src={logo}
                    alt=""
                    width="487"
                    height="305"
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <h3>{name}</h3>
              </div>
              <p>{role}</p>
              <Link className="text-link" to={href}>
                {action} <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
