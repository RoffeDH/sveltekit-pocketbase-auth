import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	preprocess: vitePreprocess(),
	compilerOptions: {
		runes: true,
	},
	kit: {
		adapter: adapter(),
	},
}

export default config
