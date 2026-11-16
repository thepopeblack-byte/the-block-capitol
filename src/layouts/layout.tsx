import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/main/navbar";
import Footer from "../components/main/footer";
import { articles } from "../data/articles";

const metadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "The BlockCapitol — Coworking, AI & Startup Hub",
    description:
      "A coworking space, cohort hub, incubation centre, and startup support community in Kaduna. Work, learn, and build across AI, blockchain, and Web3.",
  },
  "/events": {
    title: "Events & Past Gatherings — The BlockCapitol",
    description:
      "Explore the BlockCapitol Build Series, Edge Wallet meetups, and past community events in Kaduna.",
  },
  "/articles": {
    title: "Articles — Stories & Ideas from The BlockCapitol",
    description: "Stories from The BlockCapitol community in Kaduna. Explore event recaps, emerging builders, and ideas across AI, blockchain, and entrepreneurship.",
  },
  ...Object.fromEntries(articles.map((article) => [article.path, {
    title: `${article.title} — The BlockCapitol`, description: article.description,
  }])),
};
export default function RootLayout() {
  const { pathname, hash, key: navigationKey } = useLocation();
  const previousPath = useRef(pathname);
  useEffect(() => {
    const pageChanged = previousPath.current !== pathname;
    previousPath.current = pathname;
    const meta = metadata[pathname] ?? {
      title: "Page not found — The BlockCapitol",
      description:
        "Find your way back to The BlockCapitol coworking space, cohorts, startup support, community, and events.",
    };
    document.title = meta.title;
    const article = articles.find((entry) => entry.path === pathname);
    const social = {
      "og:title": meta.title,
      "og:description": meta.description,
      "og:url": `https://theblockcapitol.com${pathname}`,
      "og:type": article ? "article" : "website",
      "og:image": `https://theblockcapitol.com${article?.cover ?? "/blockcapitol-community.jpg"}`,
      "og:image:alt": article?.coverAlt ?? "Community members together at The BlockCapitol in Kaduna",
    };
    for (const [property, content] of Object.entries(social)) {
      document.querySelector(`meta[property="${property}"]`)?.setAttribute("content", content);
    }
    document.getElementById("article-schema")?.remove();
    if (article) {
      const schema = document.createElement("script");
      schema.id = "article-schema";
      schema.type = "application/ld+json";
      schema.textContent = JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: article.title, description: article.description,
        datePublished: article.published,
        author: { "@type": "Organization", name: article.author, url: "https://theblockcapitol.com/" },
        image: `https://theblockcapitol.com${article.cover}`,
        mainEntityOfPage: `https://theblockcapitol.com${article.path}`,
      });
      document.head.appendChild(schema);
    }
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", `https://theblockcapitol.com${pathname}`);
    document
      .querySelector('meta[name="robots"]')
      ?.setAttribute(
        "content",
        metadata[pathname] ? "index,follow" : "noindex,follow",
      );
    const frame = requestAnimationFrame(() => {
      if (pageChanged)
        document.getElementById("main-content")?.focus({ preventScroll: true });
      if (hash)
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView({ behavior: "instant" });
      else window.scrollTo({ top: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, navigationKey]);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
