import { ArrowUpRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { communityUrl } from "../../data/site";

const faqs = [
  {
    question: "Who is The BlockCapitol for?",
    answer: (
      <>
        Founders, startups, freelancers, teams, developers, designers, and
        curious learners. Our hub brings together coworking, cohorts,
        incubation, and startup support in Kaduna.
      </>
    ),
  },
  {
    question: "How can I use the coworking space?",
    answer: (
      <>
        Contact our team on{" "}
        <a href={communityUrl} target="_blank" rel="noopener noreferrer">
          Telegram
        </a>{" "}
        to ask about current space options, availability, access arrangements,
        and costs.
      </>
    ),
  },
  {
    question: "How do I explore incubation or startup support?",
    answer: (
      <>
        Tell our team about your idea or startup, the stage you’re at, and the
        kind of support you need. We’ll discuss the available support and next
        steps with you.
      </>
    ),
  },
  {
    question: "Which technologies do you focus on?",
    answer: (
      <>
        Our focus spans AI, blockchain, and Web3, with an interest in practical
        digital solutions for people, local businesses, and startups.
      </>
    ),
  },
  {
    question: "How do I join a cohort?",
    answer: (
      <>
        Speak with our team on{" "}
        <a href={communityUrl} target="_blank" rel="noopener noreferrer">
          Telegram
        </a>{" "}
        about current AI and blockchain learning opportunities, cohort dates,
        entry requirements, fees, and enrolment.
      </>
    ),
  },
  {
    question: "How long do cohorts run?",
    answer: (
      <>
        Schedules depend on the programme. Our blockchain programme runs for
        four months. Ask our team for the confirmed schedule of any other cohort
        or workshop you’re interested in.
      </>
    ),
  },
  {
    question: "Do I need programming experience?",
    answer: (
      <>
        Requirements depend on the opportunity. Some programming knowledge is
        recommended for the blockchain programme. The{" "}
        <Link to="/events">Build Series</Link> welcomes beginners—bring your
        ideas, creativity, and willingness to learn.
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
        for hub updates.
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
            Get to know the space, learning opportunities, and support available
            through our hub.
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
