import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://club-site-nine.vercel.app',  // or your real Vercel URL
  integrations: [mdx(), sitemap()],
});

export const SITE_TITLE = "Club Name";
export const SITE_DESCRIPTION = "Rocetry and Space Exploration Club Website";

