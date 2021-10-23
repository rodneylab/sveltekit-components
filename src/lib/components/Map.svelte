<script lang="ts">
  import { browser } from '$app/env';
  import website from '$lib/config/website';
  import type {
    LatLngExpression,
    Map,
    MapOptions,
    Marker,
    TileLayer,
    TileLayerOptions,
  } from 'leaflet';
  import { onMount } from 'svelte';

  export let id: string;
  export let location: {
    latitude: number;
    longitude: number;
  };
  export let zoom: number = 19;
  export let style: string = 'width:425px; height:350px';
  export let marker: boolean = false;
  export let markerMarkup: string = '';
  export let importance: 'auto' | 'high' | 'low' | undefined = undefined;

  const { mapboxAccessToken } = website;
  const { latitude, longitude } = location;

  let leaflet: {
    map: (element: string | HTMLElement, options?: MapOptions) => Map;
    marker: (latLong: LatLngExpression) => Marker;
    tileLayer: (urlTemplate: string, options?: TileLayerOptions) => TileLayer;
  };

  function setMap() {
    if (browser) {
      leaflet = window.L;
      const map = leaflet.map(id).setView([latitude, longitude], zoom);
      leaflet
        .tileLayer(
          'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}{r}?access_token={accessToken}',
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 19,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: mapboxAccessToken,
            detectRetina: true,
          },
        )
        .addTo(map);
      if (marker) {
        if (markerMarkup) {
          leaflet.marker([latitude, longitude]).bindPopup(markerMarkup).addTo(map);
        } else {
          leaflet.marker([latitude, longitude]).addTo(map);
        }
      }
    }
  }

  onMount(() => {
    setMap();
  });
</script>

<svelte:head>
  <link rel="preconnect" href="https://unpkg.com" />
  <link rel="dns-prefetch" href="https://unpkg.com" />
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    {importance}
    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
    crossorigin=""
  />
  <script
    src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
    integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
    {importance}
    async
    crossorigin=""></script>
</svelte:head>

<div {id} {style} />
