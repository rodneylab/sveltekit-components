<script lang="ts">
	import InputField from './InputField.svelte';

	let {
		name = undefined,
		value,
		required = false,
		placeholder = 'P@$sw0rd!',
		id,
		title = 'Password',
		error = null,
		style = '',
		update,
	}: {
		name?: string;
		value: string;
		required?: boolean;
		placeholder?: string;
		id: string;
		title?: string;
		error?: string | null;
		style?: string;
		update?: (value: string) => void;
	} = $props();
</script>

<div {style}>
	<InputField {id} {title} {error}>
		<input
			bind:value
			onchange={() => {
				update && update(value);
			}}
			{name}
			{required}
			{id}
			{placeholder}
			{title}
			type="password"
		/>
	</InputField>
</div>

<style>
	input {
		width: 100%;
	}
</style>
