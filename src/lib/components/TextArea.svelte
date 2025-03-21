<script lang="ts">
	import InputField from '$lib/components/InputField.svelte';

	let {
		name = undefined,
		value,
		required = false,
		placeholder,
		id,
		title,
		error = null,
		rows = 5,
		style = '',
		spellcheck = false,
		update,
	}: {
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
	} = $props();
</script>

<div {style}>
	<InputField {id} {title} {error}>
		<textarea
			bind:value
			onchange={() => {
				update && update(value);
			}}
			{name}
			{required}
			{id}
			aria-invalid={error != null}
			aria-describedby={error != null ? `${id}-error` : null}
			{rows}
			{placeholder}
			{title}
			{spellcheck}
		></textarea>
	</InputField>
</div>

<style>
	textarea {
		width: 100%;
		resize: none;
	}
</style>
