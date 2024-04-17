import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
	props: {
		alt: string;
		height: number;
		src: string;
		sources: {
			srcset: string;
			type: string;
		}[];
		placeholder: string;
		width: number;
		maxWidth?: string;
		sizes?: string;
		fetchpriority?: 'auto' | 'high' | 'low' | undefined;
		loading?: 'lazy' | 'eager';
		style?: string;
	};
	events: {
		[evt: string]: CustomEvent<any>;
	};
	slots: {};
};
export type ImageProps = typeof __propDef.props;
export type ImageEvents = typeof __propDef.events;
export type ImageSlots = typeof __propDef.slots;
export default class Image extends SvelteComponentTyped<ImageProps, ImageEvents, ImageSlots> {}
export {};
