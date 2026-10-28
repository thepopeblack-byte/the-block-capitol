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
import {
  buildSeries,
  contactEmail,
  contactEmailUrl,
  edgeWalletEvent,
} from "../../data/site";
import Partners from "../../components/main/partners";
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
            Workshops, build sprints, and gatherings for founders, teams, and
            people exploring AI, blockchain, Web3, and digital solutions.
          </p>
          <nav className="events-page-nav" aria-label="Explore events">
            <a className="text-link" href="#build-series-kaduna">
              Build Series <ArrowRight size={15} aria-hidden="true" />
            </a>
            <a className="text-link" href="#past-events">
              Past events <ArrowRight size={15} aria-hidden="true" />
            </a>
            <a className="text-link" href="#partners">
              Partners <ArrowRight size={15} aria-hidden="true" />
            </a>
          </nav>
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
            <p className="events-contact">
              Questions about this event?{" "}
              <a href={contactEmailUrl}>{contactEmail}</a>
            </p>
            <p className="events-partner">
              In partnership with <strong>Africa’s Talking</strong>
            </p>
          </section>
        </article>
        <section
          className="events-container past-events"
          id="past-events"
          aria-labelledby="past-events-title"
        >
          <p className="events-eyebrow">Previously at the hub</p>
          <h2 className="section-title" id="past-events-title">
            Past events. Shared experiences.
          </h2>
          <p className="section-copy">
            A few moments from past learning sessions and community gatherings
            at The BlockCapitol.
          </p>
          <article
            className="past-event-card"
            id="edge-wallet-community"
            aria-labelledby="edge-wallet-event-title"
          >
            <header className="past-event-header">
              <div>
                <p className="events-eyebrow">Past event</p>
                <h3 id="edge-wallet-event-title">{edgeWalletEvent.title}</h3>
                <p className="past-event-credit">
                  Organized by <strong>{edgeWalletEvent.organizer}</strong> ·{" "}
                  {edgeWalletEvent.venue}
                </p>
                <p className="section-copy">{edgeWalletEvent.description}</p>
              </div>
              <img
                className="past-event-logo"
                src={edgeWalletEvent.logo}
                alt="Edge Wallet"
                width="487"
                height="305"
                loading="lazy"
                decoding="async"
              />
            </header>
            <div className="past-events-grid edge-event-photos">
              {edgeWalletEvent.photos.map(({ src, alt, caption }) => (
                <figure key={src}>
                  <a
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View full photo: ${caption} (opens in a new tab)`}
                  >
                    <img
                      src={src}
                      alt={alt}
                      width="1080"
                      height="810"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                  <figcaption>
                    <p>{caption}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </article>
          <h3 className="past-moments-title">More moments from the hub.</h3>
          <div className="past-events-grid">
            <figure>
              <a
                href="/blockcapitol-community.jpg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View the community group photo (opens in a new tab)"
              >
                <img
                  src="/blockcapitol-community.jpg"
                  alt="A group of participants together in front of The BlockCapitol wall after a community event"
                  width="1400"
                  height="1050"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <figcaption>
                <h3>Community, in person.</h3>
                <p>Meet the people who make the hub a place to belong.</p>
              </figcaption>
            </figure>
            <figure>
              <a
                href="/blockcapitol-workshop.jpg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View the workshop audience photo (opens in a new tab)"
              >
                <img
                  src="/blockcapitol-workshop.jpg"
                  alt="Participants listening together during a workshop in The BlockCapitol space"
                  width="960"
                  height="960"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <figcaption>
                <h3>Learning, together.</h3>
                <p>
                  Space for new skills, shared ideas, and useful conversations.
                </p>
              </figcaption>
            </figure>
          </div>
        </section>
        <Partners />
      </main>
    </div>
  );
}
