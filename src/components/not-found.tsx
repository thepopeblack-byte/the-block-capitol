import { Button } from "./form/button";
export default function NotFoundPage() {
  return (
    <main className="site-container not-found" id="main-content" tabIndex={-1}>
      <p className="eyebrow">404 · A small detour</p>
      <h1 className="section-title">
        This page isn’t here.
        <br />
        Your next step still is.
      </h1>
      <p className="section-copy">
        The link may have changed. Explore our programmes or see what’s
        happening in the community.
      </p>
      <div className="hero-actions">
        <Button text="Back to the homepage" href="/" />
        <Button text="Explore events" variant="secondary" href="/events" />
      </div>
    </main>
  );
}
