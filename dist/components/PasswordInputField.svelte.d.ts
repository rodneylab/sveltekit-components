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
export type PasswordInputFieldProps = typeof __propDef.props;
export type PasswordInputFieldEvents = typeof __propDef.events;
export type PasswordInputFieldSlots = typeof __propDef.slots;
export default class PasswordInputField extends SvelteComponentTyped<
	PasswordInputFieldProps,
	PasswordInputFieldEvents,
	PasswordInputFieldSlots
> {}
export {};
