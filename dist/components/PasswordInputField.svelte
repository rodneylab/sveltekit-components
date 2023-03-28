<script>
	import InputField from './InputField.svelte';
	import { createEventDispatcher } from 'svelte';
	export let name = undefined;
	export let value;
	export let required = false;
	export let placeholder = 'P@$sw0rd!';
	export let id;
	export let title = 'Password';
	export let error = null;
	export let style = '';
	const dispatch = createEventDispatcher();
</script>

<div {style}>
	<InputField {id} {title} {error}>
		<input
			bind:value
			on:change={() => {
				dispatch('update', value);
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
