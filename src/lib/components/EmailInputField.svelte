<script lang="ts">
	import InputField from '$lib/components/InputField.svelte';
	import { createEventDispatcher } from 'svelte';

	export let name: string = undefined;
	export let value: string;
	export let required: boolean = false;
	export let placeholder: string = 'blake@example.com';
	export let id: string;
	export let title: string = 'Email';
	export let error: string | null = null;
	export let style: string = '';

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
			type="email"
			spellcheck
		/>
	</InputField>
</div>

<style>
	input {
		width: 100%;
	}
</style>
