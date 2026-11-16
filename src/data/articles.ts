import markdown from "../content/build-series-kaduna.md?raw";
import { buildSeriesArticle } from "./article-metadata";
import { renderArticleBody } from "../lib/article-markdown";

export const articles = [{
  ...buildSeriesArticle,
  path: `/articles/${buildSeriesArticle.slug}`,
  readingMinutes: Math.ceil(markdown.split(/\s+/).length / 220),
  body: renderArticleBody(markdown),
}];
