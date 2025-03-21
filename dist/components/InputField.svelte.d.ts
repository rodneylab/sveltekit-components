import type { Snippet } from 'svelte';
type $$ComponentProps = {
	id: string;
	title: string;
	error: string | null;
	children: Snippet;
};
declare const InputField: import('svelte').Component<$$ComponentProps, {}, ''>;
type InputField = ReturnType<typeof InputField>;
export default InputField;
