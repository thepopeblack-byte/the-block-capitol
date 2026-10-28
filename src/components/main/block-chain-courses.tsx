import {
  BrainCircuit,
  Blocks,
  Clock3,
  Layers3,
  Plus,
  ArrowDown,
} from "lucide-react";
import { Button } from "../form/button";
import { communityUrl, courses } from "../../data/site";

export default function BlockchainCourses() {
  return (
    <section
      className="section-space programmes-section"
      id="blockchain-courses"
      aria-labelledby="programmes-title"
    >
      <div className="site-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              AI, blockchain & Web3 · Cohorts and learning
            </p>
            <h2 className="section-title" id="programmes-title">
              Learn together.
              <br />
              Build what matters.
            </h2>
          </div>
          <p className="section-copy">
            Explore emerging technology with people who share your curiosity.
            Connect with our team about cohorts, workshops, and practical
            learning opportunities.
          </p>
        </div>
        <div className="learning-paths">
          <article className="learning-path">
            <BrainCircuit size={30} strokeWidth={1.5} aria-hidden="true" />
            <h3>AI & digital solutions</h3>
            <p>
              Explore how artificial intelligence can help solve practical
              problems for people, businesses, and startups. Talk to our team
              about AI learning opportunities and the ideas you want to develop.
            </p>
            <Button
              text="Ask about AI learning"
              variant="light"
              href={communityUrl}
            />
          </article>
          <article className="learning-path">
            <Blocks size={30} strokeWidth={1.5} aria-hidden="true" />
            <h3>Blockchain & Web3</h3>
            <p>
              Develop your understanding of blockchain and build practical
              skills in smart contracts, tokens, and decentralised applications
              through our blockchain programme.
            </p>
            <a className="text-link" href="#blockchain-curriculum">
              Explore the blockchain curriculum{" "}
              <ArrowDown size={15} aria-hidden="true" />
            </a>
          </article>
        </div>
        <div className="curriculum-heading" id="blockchain-curriculum">
          <p className="eyebrow">Inside the blockchain programme</p>
          <div className="programme-meta">
            <span>
              <Clock3 size={15} aria-hidden="true" />
              4-month programme
            </span>
            <span>
              <Layers3 size={15} aria-hidden="true" />8 learning areas
            </span>
          </div>
        </div>
        <div className="curriculum-grid">
          {courses.map(({ title, description }, index) => (
            <details className="course-item" key={title}>
              <summary>
                <span className="course-number">0{index + 1}</span>
                <h3>{title}</h3>
                <Plus aria-hidden="true" />
              </summary>
              <p>{description}</p>
            </details>
          ))}
        </div>
        <div className="programme-next">
          <div>
            <strong>Find the right learning opportunity for you.</strong>
            <p>
              Ask our team about cohort availability, schedules, entry
              requirements, and enrolment.
            </p>
          </div>
          <Button
            text="Talk to the cohort team"
            variant="light"
            href={communityUrl}
          />
        </div>
      </div>
    </section>
  );
}
