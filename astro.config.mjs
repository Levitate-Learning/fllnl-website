import {defineConfig} from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	site: "https://fllnl.org/",
	sitemap: true,
	integrations: [
		mdx(
			{
				gfm: true,
			}
		),
		react(),
		tailwind({
			config: {
				applyBaseStyles: false
			}
		})
	],
});
