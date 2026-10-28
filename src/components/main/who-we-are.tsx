import {
  Building2,
  GraduationCap,
  Lightbulb,
  Rocket,
  Mail,
} from "lucide-react";
import { contactEmailUrl } from "../../data/site";

const services = [
  {
    icon: Building2,
    title: "Coworking space",
    copy: "A shared environment for focused work, collaboration, and connecting with other people building ideas into something real.",
    action: "Enquire about the space",
  },
  {
    icon: GraduationCap,
    title: "Cohort hub",
    copy: "Learn alongside others through cohorts and workshops exploring AI, blockchain, Web3, and practical digital skills.",
    action: "Ask about cohorts",
  },
  {
    icon: Lightbulb,
    title: "Incubation centre",
    copy: "A home for early ideas. Connect with our team to explore support as you shape your concept and work through your next steps.",
    action: "Explore incubation support",
  },
  {
    icon: Rocket,
    title: "Startup support",
    copy: "Find guidance, collaborators, and a community to support your journey from an early idea to a growing venture.",
    action: "Talk about your startup",
  },
];

export default function WhoWeAre() {
  return (
    <section
      className="section-space"
      id="who-we-are"
      aria-labelledby="about-title"
    >
      <div className="site-container">
        <div className="about-intro">
          <div>
            <p className="eyebrow">One hub. Many ways forward.</p>
            <h2 className="section-title" id="about-title">
              Your space.
              <br />
              Your next chapter.
            </h2>
          </div>
          <div className="section-copy">
            <p>
              The BlockCapitol is a coworking space, cohort hub, and incubation
              centre supporting startups in Kaduna. We bring together the space
              to work, opportunities to learn, and people who can help you move
              forward.
            </p>
            <p>
              Our focus spans AI, blockchain, and Web3. Whether you’re a
              founder, freelancer, team, or curious learner, there’s room to
              explore what you can build here.
            </p>
          </div>
        </div>
        <div className="value-grid">
          {services.map(({ icon: Icon, title, copy, action }, index) => (
            <div className="value-item" key={title}>
              <div>
                <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
                <span>0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <a className="text-link service-link" href={contactEmailUrl}>
                {action}
                <Mail size={15} aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
