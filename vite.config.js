import { sveltekit } from '@sveltejs/kit/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { defineConfig } from 'vite';

/** @type {import('vite').UserConfig} */
export default defineConfig({
	plugins: [basicSsl(), sveltekit()],
});
