<img src="https://github.com/rodneylab/sveltekit-components/raw/main/images/rodneylab-github-sveltekit-components.png" alt="Rodney Lab sveltekit-components Github banner">

<p align="center">
  <a aria-label="Open Rodney Lab site" href="https://rodneylab.com" rel="nofollow noopener noreferrer">
    <img alt="Rodney Lab logo" src="https://rodneylab.com/assets/icon.png" width="60" />
  </a>
</p>
<h1 align="center">
  Sveltekit Components
</h1>

# sveltekit-components

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/rodneylab/sveltekit-components)

Library of TypeScript friendly SvelteKit components for adding functionality to your SvelteKit apps.

## Setup

To install the package run

```shell
pnpm install -D @rodneylab/sveltekit-components
```

## Components

### Form Fields

Add accessible text, email and password inputs to your SvelteKit site forms. See <a href="https://github.com/rodneylab/sveltekit-components/blob/main/src/routes/form.svelte">full SvelteKit form examples</a> or get started with extracts below:

```svelte
<script lang="ts">
  import {
    EmailInputField,
    PasswordInputField,
    TextArea,
    TextInputField,
  } from '@rodneylab/sveltekit-components';
</script>

<form on:submit|preventDefault={handleSubmit}>
  <TextInputField
    value={name}
    id="form-name"
    placeholder="Blake Jones"
    title="Name"
    error={errors?.name ?? null}
    on:update={(event) => {
      name = event.detail;
    }}
    style="padding-bottom:1rem"
  />
  <EmailInputField
    value={email}
    id="form-email"
    placeholder="blake@example.com"
    title="Email"
    error={errors?.email ?? null}
    on:update={(event) => {
      email = event.detail;
    }}
    style="padding-bottom:1rem"
  />
  <TextArea
    value={message}
    id="form-message"
    placeholder="Enter your message here"
    title="Message"
    error={errors?.message ?? null}
    on:update={(event) => {
      message = event.detail;
    }}
    style="padding-bottom:1rem"
  />
  <button type="submit" disabled={submitting}>Submit form</button>
</form>

<form on:submit|preventDefault={handleSubmit}>
  <EmailInputField
    value={email}
    id="login-email"
    placeholder="blake@example.com"
    title="Email"
    error={errors?.email ?? null}
    on:update={(event) => {
      email = event.detail;
    }}
    style="padding-bottom:1rem"
  />
  <PasswordInputField
    value={password}
    id="login-password"
    placeholder="P@$sw0rD"
    title="Password"
    error={errors?.password ?? null}
    on:update={(event) => {
      password = event.detail;
    }}
    style="padding-bottom:1rem;border-style:none"
  />
  <button type="submit" disabled={submitting}>Submit form</button>
</form>
```

### Image

Responsive image component with lazy loading support. Requires the vanilla-lazyload package for lazy loading and vite-imagetools for responsive image support:

```shell
pnpm install -D vanilla-lazyload vite-imagetools
```

You will also need to update `svelte.config.js` configuration to use vite-imagetools:

```javascript
/** @type {import('@sveltejs/kit').Config} */
import { imagetools } from 'vite-imagetools';
...

const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    vite: {
      plugins: [imagetools({ force: true })],
    },
  },
};

export default config;
```

For lazyloading, load the vanilla-lazyload script into the document in a layout component (e.g. `src/routes/__layout.svelte`):

```svelte
  import lazyload from 'vanilla-lazyload';
  import { browser } from '$app/env';

  if (browser && !document.lazyloadInstance) {
    document.lazyloadInstance = new lazyload();
  }
```

Then use the `Image` component on a page:

```svelte
<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/env';
  import { Image } from '@rodneylab/sveltekit-components';

  import meta from '$lib/assets/your-image.jpg?w=768&metadata';
  import srcsetJpeg from '$lib/assets/your-image.jpg?w=1536;1280;768;640&jpeg&srcset';
  import srcsetWebp from '$lib/assets/your-image.jpg?w=1536;1280;768;640&webp&srcset';

  export let imageData;

  onMount(() => {
    if (browser) {
      document.lazyloadInstance.update();
    }
  });

  const { width, height, src } = meta;
  const sources = [
    { srcset: srcsetWebp, type: 'image/webp' },
    { srcset: srcsetJpeg, type: 'image/jpeg' },
  ];

  const sizes = '(max-width: 672px) calc(100vw - 32px), 672px';
</script>

<Image {alt} {width} {height} {src} {sources} {placeholder} {sizes} style={'border-radius:12px'} />
```

The code in `onMount` only needs to be called once for each page, so if, for example, you have component A, B and C all containing an image and included in page Z, add the `onMount` code only to page Z and add the `Image` component (without `onMount` code) to `A.svelte`, `B.svelte` and `C.svelte`.

If you want to load the image eagerly use the `loading` prop to specify this:

```svelte
<Image {alt} {width} loading="eager" {height} {src} {sources} {placeholder} {sizes} />
```

Best practise is to load the largest contentful paint above the fold eagerly. Typically this means eager loading for banner images.

#### Props

<dl>
<dt><code>alt: string</code></dt><dd>Text describing the image for screen reader users.</dd>
<dt><code>width: number</code></dt><dd>Nominal image width, used to help reduced cumulative layout shift.</dd>
<dt><code>height: number</code></dt><dd>Nominal image height, used to help reduced cumulative layout shift.</dd>
<dt><code>src: string</code></dt><dd>Image source. This is the fallback for older browsers.</dd>
<dt><code>sources: { srcset: string; type: string }[]</code></dt><dd>Array of source and types for responsive images.</dd>
<dt><code>placeholder: string</code></dt><dd>Can be a Base64 encoded, low resolution placeholder which is displayed while the full resolution image is loading.</dd>
<dt><code>sizes: string</code></dt><dd>Media query like string which helps the browser choose the right image size.</dd>
<dt><code>loading: string</code></dt><dd>Can be <code>eager</code> or <code>lazy</code>. Default is <code>lazy</code>.</dd>
</dl>

See <a aria-label="Open post on SvelteKit image plugin" href="https://rodneylab.com/sveltekit-image-plugin/">article on SvelteKit images which provides much more background</a> on what these props are and how you might update them.

### Map

Add a map to your SvelteKit site using <a aria-label="Learn more about Map box" href="https://www.mapbox.com/">Mapbox</a> with <a aria-label="Learn more about Open street map" href="https://www.openstreetmap.org/#map=6/54.910/-3.432">OpenStreetMap</a> and <a aria-label="Learn about leaflet j s" href="https://leafletjs.com/
">LeafletJS</a>. Requires a Mapbox access token, just add it your to the `.env` file in your project:

```plaintext
VITE_MAPBOX_ACCESS_TOKEN=your.token
```

If you don't yet have environment variables configured in your project, add the `dotenv` package:

```shell
pnpm install -D dotenv
```

And the add it in your `svelte.config.js` file:

```javascript
import 'dotenv/config';
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

<Map
  id="my-map"
  {location}
  {zoom}
  importance="high"
  markerMarkup="<p>We are <strong>here</strong>!</p>"
/>
```

## Further Info

To create your own SvelteKit component library see the video on <a aria-label="Learn how to create a Svelte Kit Component library" href="https://rodneylab.com/create-sveltekit-component-library/">creating a SvelteKit component library</a>. Drop a comment on that page if you have a question.

Feel free to jump into the [Rodney Lab matrix chat room](https://matrix.to/#/%23rodney:matrix.org).
