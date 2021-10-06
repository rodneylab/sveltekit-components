<script lang="ts">
  import InputField from '$lib/components/InputField.svelte';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let value: string;
  export let required: boolean = false;
  export let placeholder: string;
  export let id: string;
  export let title: string;
  export let error: string | null = null;
  export let dataList: string[] | null = null;
  export let style: string = '';
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
