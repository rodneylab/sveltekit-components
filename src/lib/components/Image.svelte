<script lang="ts">
	export let alt: string;
	export let height: number; // needed to reduce CLS
	export let src: string;
	export let sources: { srcset: string; type: string }[];
	export let placeholder: string;
	export let width: number; // needed to reduce CLS
	export let maxWidth: string = '1280px';
	export let sizes: string = `(max-width: ${maxWidth}) 100vw, ${maxWidth}}`;
	export let importance: 'auto' | 'high' | 'low' | undefined = undefined;
	export let loading: 'lazy' | 'eager' = 'lazy';
	export let style: string = '';
</script>

<picture>
	{#each sources as source}
		<source data-sizes={sizes} data-srcset={source.srcset} type={source.type} {width} {height} />
	{/each}
	<img
		class="lazy"
		{alt}
		{importance}
		{loading}
		decoding="async"
		{width}
		{height}
		data-src={src}
		src={placeholder}
		style={`max-width:${maxWidth};${style}`}
	/>
</picture>

<style>
	img {
		height: auto;
	}

	img:not([src]):not([srcset]) {
		visibility: hidden;
	}
</style>
