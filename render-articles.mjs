import { readFile, writeFile, mkdir } from "node:fs/promises";
import { URL } from "node:url";
import { buildSeriesArticle as article } from "./src/data/article-metadata.js";
import { escapeHtml, renderArticleBody } from "./src/lib/article-markdown.js";

// Produce real HTML documents for direct visits, search and link previews.
// The existing React app takes over navigation after loading.
const template = await readFile(new URL("./dist/index.html", import.meta.url), "utf8");
const markdown = await readFile(new URL("./src/content/build-series-kaduna.md", import.meta.url), "utf8");
const origin = "https://theblockcapitol.com";
const path = `/articles/${article.slug}`;
const articleContent = `<article class="article-page"><header class="site-container article-header"><a href="/articles">All articles</a><p>${escapeHtml(article.category)}</p><h1>${escapeHtml(article.title)}</h1><p>${escapeHtml(article.description)}</p><p>By ${escapeHtml(article.author)} · <time datetime="${article.published}">${article.publishedLabel}</time></p></header><figure class="site-container article-cover"><img src="${article.cover}" alt="${escapeHtml(article.coverAlt)}" width="1800" height="1200"><figcaption>${escapeHtml(article.coverCaption)}</figcaption></figure><div class="article-prose">${renderArticleBody(markdown)}</div></article>`;
const pages = [
  { path: "/articles", title: "Articles — Stories & Ideas from The BlockCapitol", description: "Stories from The BlockCapitol community in Kaduna. Explore event recaps, emerging builders, and ideas across AI, blockchain, and entrepreneurship.", content: `<main class="site-container articles-page"><h1>Articles</h1><article><img src="${article.cover}" alt="${escapeHtml(article.coverAlt)}" width="1800" height="1200"><h2><a href="${path}">${escapeHtml(article.title)}</a></h2><p>${escapeHtml(article.description)}</p><time datetime="${article.published}">${article.publishedLabel}</time></article></main>` },
  { path, title: `${article.title} — The BlockCapitol`, description: article.description, content: articleContent },
];
for (const page of pages) {
  let html = template.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`);
  html = html.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeHtml(page.description)}" />`);
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${origin}${page.path}" />`);
  const social = { "og:title": page.title, "og:description": page.description, "og:type": page.path === path ? "article" : "website", "og:url": `${origin}${page.path}`, "og:image": `${origin}${article.cover}`, "og:image:alt": article.coverAlt };
  for (const [property, content] of Object.entries(social)) {
    const expression = new RegExp(`<meta\\s+property="${property}"\\s+content="[^"]*"\\s*\\/>`);
    html = html.replace(expression, `<meta property="${property}" content="${escapeHtml(content)}" />`);
  }
  if (page.path === path) {
    const schema = { "@context": "https://schema.org", "@type": "BlogPosting", headline: article.title, description: article.description, datePublished: article.published, author: { "@type": "Organization", name: article.author, url: `${origin}/` }, image: `${origin}${article.cover}`, mainEntityOfPage: `${origin}${path}` };
    html = html.replace("</head>", `<script id="article-schema" type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script></head>`);
  }
  html = html.replace('<div id="root"></div>', `<div id="root">${page.content}</div>`).replace(/<noscript[\s\S]*?<\/noscript\s*>/, "");
  const directory = new URL(`./dist${page.path}/`, import.meta.url);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL("index.html", directory), html);
}
