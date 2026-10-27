import { Clock3, Layers3, Plus } from "lucide-react";
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
            <p className="eyebrow">The blockchain programme</p>
            <h2 className="section-title" id="programmes-title">
              Learn the foundations.
              <br />
              Build with confidence.
            </h2>
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
          <p className="section-copy">
            A practical path into Web3. Explore the curriculum, develop your
            skills, and put them to work on projects of your own.
          </p>
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
            <strong>The next step is a conversation.</strong>
            <p>
              Ask our team about the next cohort, entry requirements, and
              enrolment.
            </p>
          </div>
          <Button
            text="Ask about the next cohort"
            variant="light"
            href={communityUrl}
          />
        </div>
      </div>
    </section>
  );
}
