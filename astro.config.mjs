import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

const base = "/brewmonitor-astro";

function prefixRootImageUrls() {
  return (tree) => {
    function walk(node) {
      if (!node || typeof node !== "object") {
        return;
      }

      if (node.type === "image" && typeof node.url === "string" && node.url.startsWith("/images/")) {
        node.url = `${base}${node.url}`;
      }

      if (Array.isArray(node.children)) {
        node.children.forEach(walk);
      }
    }

    walk(tree);
  };
}

export default defineConfig({
  site: "https://fhoiland.github.io",
  base,
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [prefixRootImageUrls],
  },
});
