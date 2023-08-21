import { defineConfig } from "astro/config";
import { settings } from "./src/data/settings";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://msbn21.github.io",
  base: "/sample-astro-landing-page",
  integrations: [sitemap(), react()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});