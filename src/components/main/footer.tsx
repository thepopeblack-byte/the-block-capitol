import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import { FaLinkedinIn, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { communityUrl } from "../../data/site";
const socials = [
  { name: "Telegram", href: communityUrl, icon: FaTelegramPlane },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/theblockcapitol",
    icon: FaLinkedinIn,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@TheBlockCapitol",
    icon: FaYoutube,
  },
];
export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="site-container">
        <div className="footer-invitation">
          <div>
            <p className="eyebrow">Your next chapter starts here</p>
            <h2>
              Bring your curiosity.
              <br />
              Find your people.
            </h2>
          </div>
          <div>
            <p>
              Have a question, an idea, or a project in mind?
              <br />
              Let’s start a conversation.
            </p>
            <a
              className="button button-primary"
              href={communityUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk to us on Telegram{" "}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="footer-grid">
          <div className="footer-about">
            <Link className="brand" to="/" aria-label="The BlockCapitol home">
              <img src="/main-logo.png" alt="" width="42" height="46" />
              <span>
                <span className="brand-small">The</span>
                <span>
                  Block<span className="brand-accent">Capitol</span>
                </span>
              </span>
            </Link>
            <p>
              A home for the people building what’s next.
              <br />
              Learn. Build. Belong.
            </p>
            <span className="footer-location">
              <MapPin size={15} aria-hidden="true" /> Kaduna, Nigeria
            </span>
          </div>
          <nav aria-label="Explore BlockCapitol">
            <h3>Explore</h3>
            <Link to="/#who-we-are">About us</Link>
            <Link to="/#blockchain-courses">Programmes</Link>
            <Link to="/events">Events</Link>
            <Link to="/#faq">FAQs</Link>
          </nav>
          <nav aria-label="Connect with BlockCapitol">
            <h3>Stay connected</h3>
            {socials.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={15} aria-hidden="true" />
                {name}
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            ))}
            <a
              href="https://x.com/theblockcapitol"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow us on X <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} The BlockCapitol. All rights reserved.
          </span>
          <span>Built around people. Powered by possibility.</span>
        </div>
      </div>
    </footer>
  );
}
