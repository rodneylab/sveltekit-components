<script>
  import Map from '$lib/components/Map.svelte';

  const latitude = 51.50162;
  const longitude = -0.14115;
  const zoom = 16;
  const location = { latitude, longitude };
</script>

<Map id="my-map" {location} {zoom} />
