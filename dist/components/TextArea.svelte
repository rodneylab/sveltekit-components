<script>
	import InputField from './InputField.svelte';
	import { createEventDispatcher } from 'svelte';
	export let name = undefined;
	export let value;
	export let required = false;
	export let placeholder;
	export let id;
	export let title;
	export let error = null;
	export let rows = 5;
	export let style = '';
	export let spellcheck = false;
	const dispatch = createEventDispatcher();
</script>

<div {style}>
	<InputField {id} {title} {error}>
		<textarea
			bind:value
			on:change={() => {
				dispatch('update', value);
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
		/>
	</InputField>
</div>

<style>
	textarea {
		width: 100%;
		resize: none;
	}
</style>
