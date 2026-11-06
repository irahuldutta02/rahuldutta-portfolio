import { useEffect } from "react";

const SITE = __SITE_URL__; // injected by vite.config.js (SITE_URL)
const DEFAULT_IMAGE = `${SITE}/images/og.jpg`;

function setMeta(selector, attr, value, create) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(create.tag);
    Object.entries(create.attrs).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}
const meta = (name, content) =>
  setMeta(`meta[name="${name}"]`, "content", content, { tag: "meta", attrs: { name } });
const og = (prop, content) =>
  setMeta(`meta[property="${prop}"]`, "content", content, { tag: "meta", attrs: { property: prop } });

/**
 * Per-route head tags for the SPA (title, description, canonical, OG/Twitter, robots).
 * Google renders JS so these are indexed; link-preview bots that don't run JS
 * read the defaults in index.html.
 */
export function Seo({ title, description, path = "/", noindex = false }) {
  useEffect(() => {
    const url = `${SITE}${path}`;
    document.title = title;
    meta("description", description);
    meta("robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large");
    setMeta('link[rel="canonical"]', "href", url, { tag: "link", attrs: { rel: "canonical" } });
    og("og:title", title);
    og("og:description", description);
    og("og:url", url);
    og("og:image", DEFAULT_IMAGE);
    meta("twitter:title", title);
    meta("twitter:description", description);
    meta("twitter:image", DEFAULT_IMAGE);
  }, [title, description, path, noindex]);

  return null;
}
