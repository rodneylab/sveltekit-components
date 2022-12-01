<header>
	<nav>
		<span class="element"><a aria-label="Go to home page" href="/">Home</a></span>
		<span class="element"
			><a aria-label="Open form example" href="/form">Form Input Fields Example</a></span
		>
	</nav>
</header>

<slot />

<style>
	header {
		display: flex;
	}
	nav {
		margin-left: auto;
	}

	.element {
		padding-left: 0.5rem;
	}
</style>
