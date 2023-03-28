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
	export let dataList = null;
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
			{required}
			{id}
			aria-invalid={error != null}
			aria-describedby={error != null ? `${id}-error` : null}
			{name}
			{placeholder}
			{title}
			type="text"
			list={dataList ? `${id}-list` : null}
		/>
		{#if dataList}
			<datalist id={`${id}-list`}>
				{#each dataList as value}
					<option {value} />
				{/each}
			</datalist>
		{/if}
	</InputField>
</div>

<style>
	input {
		width: 100%;
	}
</style>
