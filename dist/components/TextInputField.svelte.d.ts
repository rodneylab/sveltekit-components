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
		dataList?: string[] | null;
		style?: string;
	};
	events: {
		update: CustomEvent<any>;
	} & {
		[evt: string]: CustomEvent<any>;
	};
	slots: {};
};
export type TextInputFieldProps = typeof __propDef.props;
export type TextInputFieldEvents = typeof __propDef.events;
export type TextInputFieldSlots = typeof __propDef.slots;
export default class TextInputField extends SvelteComponentTyped<
	TextInputFieldProps,
	TextInputFieldEvents,
	TextInputFieldSlots
> {}
export {};
