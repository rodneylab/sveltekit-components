import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
	props: {
		name?: string;
		value: string;
		required?: boolean;
		placeholder?: string;
		id: string;
		title?: string;
		error?: string | null;
		style?: string;
	};
	events: {
		update: CustomEvent<any>;
	} & {
		[evt: string]: CustomEvent<any>;
	};
	slots: {};
};
export type EmailInputFieldProps = typeof __propDef.props;
export type EmailInputFieldEvents = typeof __propDef.events;
export type EmailInputFieldSlots = typeof __propDef.slots;
export default class EmailInputField extends SvelteComponentTyped<
	EmailInputFieldProps,
	EmailInputFieldEvents,
	EmailInputFieldSlots
> {}
export {};
