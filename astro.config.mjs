import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from'@astrojs/sitemap';


export default defineConfig({
	integration: [mdx(), sitemap()],
	output: 'static'
})
