<script lang="ts">
  import InputField from '$lib/components/InputField.svelte';
  import { createEventDispatcher } from 'svelte';

  export let value: string;
  export let required: boolean = false;
  export let placeholder: string = 'P@$sw0rd!';
  export let id: string;
  export let title: string = 'Password';
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
