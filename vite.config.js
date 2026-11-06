/* eslint-env node */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Single source of truth for the production origin (canonical, OG, sitemap, JSON-LD).
// Override per deploy with:  SITE_URL=https://example.com npm run build
const SITE_URL = (process.env.SITE_URL || "https://rahultech.in").replace(/\/$/, "");
const ROUTES = ["/", "/projects"]; // keep in sync with src/routes/CustomRoutes.jsx

function seoFiles() {
  return {
    name: "seo-files",
    // fills the __SITE_URL__ placeholders in index.html (dev + build)
    transformIndexHtml: (html) => html.replaceAll("__SITE_URL__", SITE_URL),
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10);
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
      });
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source:
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          ROUTES.map(
            (r) =>
              `  <url>\n    <loc>${SITE_URL}${r}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${r === "/" ? "1.0" : "0.8"}</priority>\n  </url>\n`
          ).join("") +
          `</urlset>\n`,
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), seoFiles()],
  define: { __SITE_URL__: JSON.stringify(SITE_URL) },
});
