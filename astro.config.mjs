import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://fhoiland.github.io",
  base: "/brewmonitor-astro",
  integrations: [mdx()],
});
