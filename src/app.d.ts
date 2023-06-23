/// <reference types="@sveltejs/kit" />

export declare global {
	namespace svelte.JSX {
		interface HTMLProps {
			fetchpriority?: 'auto' | 'high' | 'low' | undefined;
		}
	}
}
