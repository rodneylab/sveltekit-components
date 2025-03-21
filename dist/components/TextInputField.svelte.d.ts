type $$ComponentProps = {
	name?: string;
	value: string;
	required?: boolean;
	placeholder: string;
	id: string;
	title: string;
	error?: string | null;
	dataList?: string[] | null;
	style?: string;
	update?: (value: string) => void;
};
declare const TextInputField: import('svelte').Component<$$ComponentProps, {}, ''>;
type TextInputField = ReturnType<typeof TextInputField>;
export default TextInputField;
