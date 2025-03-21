type $$ComponentProps = {
	name?: string;
	value: string;
	required?: boolean;
	placeholder?: string;
	id: string;
	title?: string;
	error?: string | null;
	style?: string;
	update?: (value: string) => void;
};
declare const PasswordInputField: import('svelte').Component<$$ComponentProps, {}, ''>;
type PasswordInputField = ReturnType<typeof PasswordInputField>;
export default PasswordInputField;
