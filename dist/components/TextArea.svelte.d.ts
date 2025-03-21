type $$ComponentProps = {
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
	update?: (value: string) => void;
};
declare const TextArea: import('svelte').Component<$$ComponentProps, {}, ''>;
type TextArea = ReturnType<typeof TextArea>;
export default TextArea;
