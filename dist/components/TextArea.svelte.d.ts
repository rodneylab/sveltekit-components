import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
	props: {
		name?: string;
		value: string;
		required?: boolean;
		placeholder: string;
		id: string;
		title: string;
		error?: string | null;
		rows?: number;
		style?: string;
		spellcheck?: boolean;
	};
	events: {
		update: CustomEvent<any>;
	} & {
		[evt: string]: CustomEvent<any>;
	};
	slots: {};
};
export type TextAreaProps = typeof __propDef.props;
export type TextAreaEvents = typeof __propDef.events;
export type TextAreaSlots = typeof __propDef.slots;
export default class TextArea extends SvelteComponentTyped<
	TextAreaProps,
	TextAreaEvents,
	TextAreaSlots
> {}
export {};
