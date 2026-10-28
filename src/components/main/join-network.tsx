import { MessageCircle, Network, Users } from "lucide-react";
import { Button } from "../form/button";
import { whatsappUrl } from "../../data/site";
const benefits = [
  {
    icon: Users,
    title: "Meet people who get it.",
    copy: "Connect with founders, freelancers, teams, developers, designers, and people exploring AI, blockchain, and Web3.",
  },
  {
    icon: Network,
    title: "Make room for your next idea.",
    copy: "Share a workspace, exchange ideas, explore projects, and find collaborators with different skills and perspectives.",
  },
  {
    icon: MessageCircle,
    title: "Keep the conversation going.",
    copy: "Stay up to date with workshops, community gatherings, and opportunities to build.",
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
          <p className="eyebrow">A community for work, learning & growth</p>
          <h2 className="section-title" id="community-title">
            Good things get
            <br />
            built together.
          </h2>
          <p className="section-copy">
            Come to work, learn, or develop an idea. Stay for the people.
            <br />
            Join founders, teams, freelancers, and innovators building across
            AI, blockchain, Web3, and digital solutions.
          </p>
          <Button text="Join our WhatsApp group" href={whatsappUrl} />
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
