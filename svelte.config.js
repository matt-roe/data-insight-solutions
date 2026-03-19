import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	preprocess: [
		preprocess({
			scss: {
				prependData: `@use 'src/lib/assets/scss/vars';`
			}
		}),
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
		})
	],

	kit: {
		adapter: adapter({
			edge: false,
			split: false
		}),
		prerender: {
			crawl: true,
			handleUnseenRoutes: 'warn'
		}
	}
};

export default config;
