<script lang="ts">
	import InputField from './InputField.svelte';

	let {
		name = undefined,
		value,
		required = false,
		placeholder,
		id,
		title,
		error = null,
		dataList = null,
		style = '',
		update,
	}: {
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
	} = $props();
</script>

<div {style}>
	<InputField {id} {title} {error}>
		<input
			bind:value
			onchange={() => {
				update && update(value);
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
					<option {value}></option>
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
