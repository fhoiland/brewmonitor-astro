import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

const base = "/";

function withBasePath(path) {
  const normalizedBase = base === "/" ? "" : base.replace(/\/$/, "");
  return `${normalizedBase}${path}`;
}

function prefixRootImageUrls() {
  return (tree) => {
    function walk(node) {
      if (!node || typeof node !== "object") {
        return;
      }

      if (node.type === "image" && typeof node.url === "string" && node.url.startsWith("/images/")) {
        node.url = withBasePath(node.url);
      }

      if (Array.isArray(node.children)) {
        node.children.forEach(walk);
      }
    }

    walk(tree);
  };
}

export default defineConfig({
  site: "https://bunkerbrew.no",
  base,
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [prefixRootImageUrls],
  },
});
