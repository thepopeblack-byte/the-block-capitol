import { BookOpen, Compass, Users } from "lucide-react";
const values = [
  {
    icon: BookOpen,
    title: "Knowledge you can put to work.",
    copy: "Move from concepts to code with structured learning grounded in real blockchain applications.",
  },
  {
    icon: Compass,
    title: "Guidance along the way.",
    copy: "Get support from experienced people as you work through challenges and find your direction.",
  },
  {
    icon: Users,
    title: "A community in your corner.",
    copy: "Meet fellow developers, share what you know, and make progress through collaboration.",
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
            <p className="eyebrow">Why The BlockCapitol</p>
            <h2 className="section-title" id="about-title">
              Your next chapter starts with the people around you.
            </h2>
          </div>
          <div className="section-copy">
            <p>
              We’re a launchpad for developers and curious minds ready to
              explore what technology can do. Here, practical learning meets
              mentorship and a community that builds together.
            </p>
            <p>
              From your first smart contract to a solution for a local business,
              we help you connect what you learn with what you can create.
            </p>
          </div>
        </div>
        <div className="value-grid">
          {values.map(({ icon: Icon, title, copy }, index) => (
            <div className="value-item" key={title}>
              <div>
                <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
                <span>0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
