import { ArrowUpRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { communityUrl } from "../../data/site";
const faqs = [
  {
    question: "Who is The BlockCapitol for?",
    answer: (
      <>
        Developers moving into Web3, curious learners, and people who want to
        build useful technology. Our community brings together different
        backgrounds and levels of experience.
      </>
    ),
  },
  {
    question: "Do I need programming experience?",
    answer: (
      <>
        Some programming knowledge is recommended for the blockchain programme.
        The <Link to="/events">Build Series</Link> welcomes beginners—bring your
        ideas, creativity, and willingness to learn.
      </>
    ),
  },
  {
    question: "How long is the blockchain programme?",
    answer: (
      <>
        The core blockchain programme runs for four months. Workshops and events
        have their own schedules, which you can find on our{" "}
        <Link to="/events">Events page</Link>.
      </>
    ),
  },
  {
    question: "How do I join the next cohort?",
    answer: (
      <>
        Speak with our team on{" "}
        <a href={communityUrl} target="_blank" rel="noopener noreferrer">
          Telegram
        </a>{" "}
        for current cohort dates, entry requirements, fees, and enrolment
        details.
      </>
    ),
  },
  {
    question: "What can I expect to build?",
    answer: (
      <>
        The curriculum covers smart contracts, tokens, dApps, testing, and
        deployment. You’ll connect your learning through practical exercises and
        a capstone project.
      </>
    ),
  },
  {
    question: "Where do I find events and updates?",
    answer: (
      <>
        Visit our <Link to="/events">Events page</Link> for the Build Series and
        follow the{" "}
        <a href={communityUrl} target="_blank" rel="noopener noreferrer">
          Telegram community
        </a>{" "}
        for updates.
      </>
    ),
  },
];
export default function FAQ() {
  return (
    <section className="section-space" id="faq" aria-labelledby="faq-title">
      <div className="site-container faq-grid">
        <div className="faq-intro">
          <p className="eyebrow">A little more clarity</p>
          <h2 className="section-title" id="faq-title">
            Good questions.
            <br />
            Clear answers.
          </h2>
          <p className="section-copy">
            A few things you might want to know before taking your next step.
          </p>
          <a
            className="text-link"
            href={communityUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Still have a question? Talk to us{" "}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="faq-list">
          {faqs.map(({ question, answer }) => (
            <details className="faq-item" key={question}>
              <summary>
                {question}
                <Plus aria-hidden="true" />
              </summary>
              <div>{answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
