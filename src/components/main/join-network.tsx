import { MessageCircle, Network, Users } from "lucide-react";
import { Button } from "../form/button";
import { communityUrl } from "../../data/site";
const benefits = [
  {
    icon: Users,
    title: "Meet people who get it.",
    copy: "Connect with developers, designers, entrepreneurs, and people who share your curiosity.",
  },
  {
    icon: Network,
    title: "Make room for collaboration.",
    copy: "Exchange ideas, explore projects, and learn from different experiences and perspectives.",
  },
  {
    icon: MessageCircle,
    title: "Keep the conversation going.",
    copy: "Find community updates, ask questions, and hear about workshops and opportunities to build.",
  },
];
export default function JoinNetwork() {
  return (
    <section
      className="section-space community-section"
      id="join-network"
      aria-labelledby="community-title"
    >
      <div className="site-container community-grid">
        <div className="community-copy">
          <p className="eyebrow">More than a learning programme</p>
          <h2 className="section-title" id="community-title">
            Good things get
            <br />
            built together.
          </h2>
          <p className="section-copy">
            Come for the skills. Stay for the people.
            <br />
            Be part of a community of engineers, builders, and innovators
            exploring what comes next.
          </p>
          <Button text="Join us on Telegram" href={communityUrl} />
          <p className="community-note">
            A place to ask, share, connect, and grow.
          </p>
        </div>
        <div>
          {benefits.map(({ icon: Icon, title, copy }) => (
            <div className="community-benefit" key={title}>
              <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
