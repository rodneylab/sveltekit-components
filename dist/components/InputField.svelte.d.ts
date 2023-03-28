import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
	props: {
		id: string;
		title: string;
		error?: string | null;
	};
	events: {
		[evt: string]: CustomEvent<any>;
	};
	slots: {
		default: {};
	};
};
export type InputFieldProps = typeof __propDef.props;
export type InputFieldEvents = typeof __propDef.events;
export type InputFieldSlots = typeof __propDef.slots;
export default class InputField extends SvelteComponentTyped<
	InputFieldProps,
	InputFieldEvents,
	InputFieldSlots
> {}
export {};
