import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/main/navbar";
import Footer from "../components/main/footer";

const metadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "The BlockCapitol — Coworking, AI & Startup Hub",
    description:
      "A coworking space, cohort hub, incubation centre, and startup support community in Kaduna. Work, learn, and build across AI, blockchain, and Web3.",
  },
  "/events": {
    title: "Events — The BlockCapitol Build Series, Kaduna",
    description:
      "Join the BlockCapitol Build Series in Kaduna on November 9, 10 and 12, 2026. Three days of AI, blockchain, mentorship and building. Beginners welcome.",
  },
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
