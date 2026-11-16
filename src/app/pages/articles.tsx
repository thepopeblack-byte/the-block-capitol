import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { articles } from "../../data/articles";
import { whatsappUrl } from "../../data/site";
import NotFound from "./not-found";
import "./articles.css";

export default function ArticlesPage() {
  return (
    <main id="main-content" className="articles-page" tabIndex={-1}>
      <header className="site-container articles-intro">
        <p className="eyebrow">The BlockCapitol / Articles</p>
        <h1>Ideas in action.<br /><span>Stories from our hub.</span></h1>
        <p>Meet the people, explore the ideas, and follow what we’re building together in Kaduna.</p>
      </header>
      <section className="site-container articles-list" aria-labelledby="latest-articles">
        <div className="articles-section-heading">
          <h2 id="latest-articles">Latest articles</h2>
          <span>From the community</span>
        </div>
        {articles.map((article) => (
          <article className="article-card" key={article.slug}>
            <Link to={article.path} className="article-card-image" aria-label={`Read ${article.title}`}>
              <img src={article.cover} alt={article.coverAlt} width="1800" height="1200" loading="eager" />
            </Link>
            <div className="article-card-copy">
              <p className="eyebrow">{article.category}</p>
              <div className="article-meta"><time dateTime={article.published}>{article.publishedLabel}</time><span>{article.readingMinutes} min read</span></div>
              <h3><Link to={article.path}>{article.title}</Link></h3>
              <p>{article.description}</p>
              <Link className="button button-primary" to={article.path}>Read the story <ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find((entry) => entry.slug === slug);
  if (!article) return <NotFound />;
  return (
    <main id="main-content" className="article-page" tabIndex={-1}>
      <article>
        <header className="site-container article-header">
          <Link className="article-back" to="/articles"><ArrowLeft size={17} aria-hidden="true" /> All articles</Link>
          <p className="eyebrow">{article.category} / Kaduna</p>
          <h1>{article.title}</h1>
          <p className="article-deck">{article.description}</p>
          <div className="article-byline"><span>By {article.author}</span><time dateTime={article.published}>{article.publishedLabel}</time><span><Clock3 size={15} aria-hidden="true" /> {article.readingMinutes} min read</span></div>
        </header>
        <figure className="site-container article-cover">
          <img src={article.cover} alt={article.coverAlt} width="1800" height="1200" loading="eager" />
          <figcaption>{article.coverCaption}</figcaption>
        </figure>
        <div className="article-prose" dangerouslySetInnerHTML={{ __html: article.body }} />
      </article>
      <aside className="article-community" aria-labelledby="article-community-title">
        <p className="eyebrow">Keep building with us</p>
        <h2 id="article-community-title">Your next idea belongs here.</h2>
        <p>Connect with our community and stay close to the next opportunity to learn, collaborate, and build.</p>
        <div><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Join our WhatsApp community <ArrowUpRight size={18} aria-hidden="true" /></a><Link className="text-link" to="/events">Explore events <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
      </aside>
    </main>
  );
}
