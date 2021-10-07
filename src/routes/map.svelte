<script>
  import Map from '$lib/components/Map.svelte';

  const latitude = 51.50162;
  const longitude = -0.14115;
  const zoom = 16;
  const location = { latitude, longitude };
</script>

<svelte:head><title>Map</title></svelte:head>

<main>
  <h1>Map</h1>
  <Map id="my-map" {location} {zoom} />
</main>
