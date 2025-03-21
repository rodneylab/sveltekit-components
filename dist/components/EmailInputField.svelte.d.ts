type $$ComponentProps = {
	name?: string;
	value: string;
	required?: boolean;
	placeholder?: string;
	id: string;
	title?: string;
	error: string | null;
	style?: string;
	update?: (value: string) => void;
};
declare const EmailInputField: import('svelte').Component<$$ComponentProps, {}, ''>;
type EmailInputField = ReturnType<typeof EmailInputField>;
export default EmailInputField;
