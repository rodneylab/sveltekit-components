<script lang="ts">
  import InputField from '$lib/components/InputField.svelte';
  import { createEventDispatcher } from 'svelte';

  export let value: string;
  export let required: boolean = false;
  export let placeholder: string;
  export let id: string;
  export let title: string;
  export let error: string | null = null;
  export let rows: number = 5;
  export let style: string = '';

  const dispatch = createEventDispatcher();
</script>

<div {style}>
  <InputField {id} {title} {error}>
    <textarea
      bind:value
      on:change={() => {
        dispatch('update', value);
      }}
      {required}
      {id}
      aria-invalid={error != null}
      aria-describedby={error != null ? `${id}-error` : null}
      {rows}
      {placeholder}
      {title}
      type="text"
    />
  </InputField>
</div>

<style>
  textarea {
    width: 100%;
    resize: none;
  }
</style>
