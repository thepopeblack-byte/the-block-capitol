// A deliberately small, HTML-escaping renderer for our local editorial content.
// Supports paragraphs, h2/h3 headings, emphasis and HTTPS links; raw HTML is text.
export function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function inline(markdown) {
  return escapeHtml(markdown)
    .replace(/\[([^\]]+)\]\((https:\/\/[^\s)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

const figures = [
  {
    before: "Behind the Build Series:",
    image: "learning",
    alt: "A facilitator discussing ideas with participants around a table at The BlockCapitol",
    caption: "Learning together, exchanging ideas, and turning discussions into practical work.",
  },
  {
    before: "Team Streak:",
    image: "proptech",
    alt: "Participants presenting a housing challenge and digital property solution beside the Africa’s Talking banner",
    caption: "The final showcase brought real housing and property challenges into the conversation.",
  },
  {
    before: "Recognising Innovation with",
    image: "demo",
    alt: "A participant presenting a technical demo on eliminating USSD timeouts with teammates beside him",
    caption: "Demo time: participants shared their solutions and the thinking behind them.",
  },
];

export function renderArticleBody(markdown) {
  return markdown.trim().split(/\r?\n\s*\r?\n/).map((block) => {
    if (/^# /.test(block)) return ""; // The page owns its single h1.
    const heading = block.match(/^(#{2,3}) (.+)$/);
    if (heading) {
      const figure = figures.find(({ before }) => heading[2].startsWith(before));
      const photo = figure ? `<figure><img src="/articles/build-series-kaduna/${figure.image}.jpg" alt="${escapeHtml(figure.alt)}" width="1800" height="1200" loading="lazy" decoding="async"><figcaption>${escapeHtml(figure.caption)}</figcaption></figure>` : "";
      return `${photo}<h${heading[1].length}>${inline(heading[2])}</h${heading[1].length}>`;
    }
    return `<p>${inline(block.replace(/\r?\n/g, " "))}</p>`;
  }).join("\n");
}
