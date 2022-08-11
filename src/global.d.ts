/// <reference types="@sveltejs/kit" />

export declare global {
	declare namespace svelte.JSX {
		interface HTMLProps {
			importance?: 'auto' | 'high' | 'low' | undefined;
		}
	}
}
