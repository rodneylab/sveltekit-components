<script lang="ts">
	let {
		alt,
		height, // needed to reduce CLS
		src,
		sources,
		placeholder,
		width, // needed to reduce CLS
		maxWidth = '1280px',
		sizes = `(max-width: ${maxWidth}) 100vw, ${maxWidth}}`,
		fetchpriority = undefined,
		loading = 'lazy',
		style = '',
	}: {
		alt: string;
		height: number; // needed to reduce CLS
		src: string;
		sources: { srcset: string; type: string }[];
		placeholder: string;
		width: number; // needed to reduce CLS
		maxWidth: string;
		sizes: string;
		fetchpriority: 'auto' | 'high' | 'low' | undefined;
		loading: 'lazy' | 'eager';
		style: string;
	} = $props();
</script>

<picture>
	{#each sources as source}
		<source data-sizes={sizes} data-srcset={source.srcset} type={source.type} {width} {height} />
	{/each}
	<img
		class="lazy"
		{alt}
		{fetchpriority}
		{loading}
		decoding="async"
		{width}
		{height}
		data-src={src}
		src={placeholder}
		style="max-width:{maxWidth};{style}"
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
