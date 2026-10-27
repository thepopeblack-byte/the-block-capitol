import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Trophy,
  Store,
  House,
  Blocks,
  ArrowRight,
} from "lucide-react";
import { buildSeries } from "../../data/site";
import "./events.css";

const rsvpUrl = buildSeries.rsvpUrl;
const tracks = [
  {
    icon: Store,
    title: "Local Business Digitisation",
    description:
      "Build smarter digital tools that help small businesses solve everyday challenges.",
  },
  {
    icon: House,
    title: "PropTech Solutions",
    description:
      "Create innovative solutions for property management and real-world housing needs.",
  },
  {
    icon: Blocks,
    title: "Blockchain & Web3",
    description:
      "Explore better transparency, verification, and trust through blockchain technology.",
  },
];

export default function EventsPage() {
  return (
    <div className="events-page">
      <main id="main-content" tabIndex={-1}>
        <header className="events-intro events-container">
          <p className="events-eyebrow">The BlockCapitol / Events</p>
          <h1>
            A place to learn.
            <br />A community to <span>build with.</span>
          </h1>
          <p>
            Meet the people, explore the ideas, and build the solutions shaping
            our community.
          </p>
        </header>

        <article
          className="events-container"
          aria-labelledby="build-series-title"
        >
          <div className="events-feature" id="build-series-kaduna">
            <div className="events-flyer">
              <a
                href="/build-series-kaduna.png"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View the full Build Series Kaduna flyer (opens in a new tab)"
              >
                <img
                  src="/build-series-kaduna.png"
                  alt="The BlockCapitol Build Series flyer: AI, Blockchain and Digital Solutions for Kaduna. November 9, 10 and 12, 2026, 10 a.m. to 1 p.m., at The BlockCapitol, Kaduna, in partnership with Africa’s Talking."
                  width="1024"
                  height="1536"
                />
              </a>
              <span>Learn | Build | Demo</span>
            </div>
            <div className="events-details">
              <p className="events-eyebrow">
                Three days. Real problems. Working solutions.
              </p>
              <h2 id="build-series-title">
                The BlockCapitol
                <br />
                <span>Build Series</span>
              </h2>
              <p className="events-subtitle">
                AI • Blockchain • Digital Solutions for Kaduna
              </p>
              <dl className="events-facts">
                <div>
                  <CalendarDays aria-hidden="true" />
                  <dt>Dates</dt>
                  <dd>{buildSeries.dates}</dd>
                </div>
                <div>
                  <Clock3 aria-hidden="true" />
                  <dt>Time</dt>
                  <dd>
                    {buildSeries.time} <small>West Africa Time (WAT)</small>
                  </dd>
                </div>
                <div>
                  <MapPin aria-hidden="true" />
                  <dt>Venue</dt>
                  <dd>{buildSeries.venue}</dd>
                </div>
              </dl>
              <a
                className="events-cta"
                href={rsvpUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                RSVP on Luma <ArrowUpRight size={20} aria-hidden="true" />
              </a>
              <p className="events-welcome">
                Beginners are welcome. Bring your ideas, creativity, and
                willingness to build.
              </p>
              <p className="events-description">
                Got an idea for solving a real-world problem with technology?
                This is your chance to turn that idea into a working solution!
              </p>
              <p className="events-description">
                Join us for three days of learning, building, mentorship, and
                innovation across PropTech, Blockchain & Web3, and Local
                Business Digitisation.
              </p>
            </div>
          </div>

          <section className="events-tracks" aria-labelledby="tracks-title">
            <div className="events-section-heading">
              <p className="events-eyebrow">The challenge tracks</p>
              <h2 id="tracks-title">What will you build?</h2>
              <p>
                Start with a real problem. Build something that makes a
                difference.
              </p>
            </div>
            <div className="events-track-grid">
              {tracks.map(({ icon: Icon, title, description }, index) => (
                <div className="events-track" key={title}>
                  <div className="events-track-top">
                    <Icon size={32} strokeWidth={1.5} aria-hidden="true" />
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="events-prizes" aria-labelledby="prizes-title">
            <div className="events-prize-icon">
              <Trophy size={36} aria-hidden="true" />
            </div>
            <div>
              <p className="events-eyebrow">
                Ideas worth building. Solutions worth celebrating.
              </p>
              <h2 id="prizes-title">Three best solutions. Cash prizes.</h2>
              <p>
                Will yours be one of them? Learn, build, and demo your solution
                with a community of innovators.
              </p>
            </div>
          </section>

          <section className="events-closing" aria-labelledby="join-title">
            <p className="events-eyebrow">Build in Kaduna</p>
            <h2 id="join-title">
              Your idea could be the next
              <br />
              real-world solution.
            </h2>
            <p>
              Open to young professionals, developers, designers, creatives, and
              aspiring entrepreneurs. Come ready to learn and build together.
            </p>
            <a
              className="events-cta"
              href={rsvpUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Save your spot <ArrowRight size={20} aria-hidden="true" />
            </a>
            <p className="events-share">
              Bring a friend. Share the RSVP link and build together.
            </p>
            <a
              className="events-share-link"
              href={rsvpUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              luma.com/wriypu2h <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <p className="events-partner">
              In partnership with <strong>Africa’s Talking</strong>
            </p>
            <p className="events-tags">
              #BlockCapitol #BuildSeries #BuildWithAT #ATdevsNG #Web3
              #BuildInKaduna #Developers #TechCommunity
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
