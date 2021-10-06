<script lang="ts">
  export let id: string;
  export let title: string;
  export let error: string | null = null;
</script>

<span class="screen-reader-text"><label for={id}>{title}</label></span>
<slot />
{#if error}
  <small id={`${id}-error`} class="error-text">{error}</small>
{/if}

<style>
  .screen-reader-text {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    width: 1px;
    overflow: hidden;
    position: absolute !important;
    word-wrap: normal !important;
  }
  .error-text {
    color: #c42021;
  }
</style>
