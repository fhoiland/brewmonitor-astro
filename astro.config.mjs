import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://fhoiland.github.io",
  base: "/brewmonitor-astro",
  integrations: [mdx(), sitemap()],
});
