<img src="https://github.com/rodneylab/sveltekit-componetns/raw/main/images/rodneylab-github-sveltekit-components.png" alt="Rodney Lab sveltekit-components Github banner">

<p align="center">
  <a aria-label="Open Rodney Lab site" href="https://rodneylab.com" rel="nofollow noopener noreferrer">
    <img alt="Rodney Lab logo" src="https://rodneylab.com/assets/icon.png" width="60" />
  </a>
</p>
<h1 align="center">
  Sveltekit Components
</h1>

# sveltekit-components

[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/rodneylab/sveltekit-components)

Library of TypeScript friendly Sveltekit Components for adding functionality to your SvelteKit sites.

## Setup

To install the package run

```
pnpm install -D @rodneylab/sveltekit-components
```

## Components

### Map

Add a map to you SvelteKit site using <a aria-label="Learn more about Map box" href="https://www.mapbox.com/">Mapbox</a> with <a aria-label="Learn more about Open street map" href="https://www.openstreetmap.org/#map=6/54.910/-3.432">OpenStreetMap</a> and <a aria-label="Learn about leaflet j s" href="https://leafletjs.com/
">LeafletJS</a>. Requires a Mapbox access token, just add your to the `.env` file in your project:

```plaintext
VITE_MAPBOX_ACCESS_TOKEN=your.token
```

Add the component to a `.svelte` file in your project:

```svelte
<script>
  import { Map } from '@rodneylab/sveltekit-components';
  const latitude = 51.50162;
  const longitude = -0.14115;
  const zoom = 16;
  const location = { latitude, longitude };
</script>

<Map id="my-map" {location} {zoom} style="width:425px; height:350px" />
```

## Further Info

To create your own SvelteKit component Library see the video on <a aria-label="Learn how to create a Svelte Kit Component library" href="https://rodneylab.com/create-sveltekit-component-library/">creating a SvelteKit component library</a>. Drop a comment there if you have a question.
