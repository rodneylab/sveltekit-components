<script lang="ts">
  import { browser } from '$app/env';
  import website from '$lib/config/website';
  import markerIconRetinaURL from 'leaflet/dist/images/marker-icon-2x.png';
  import markerIconURL from 'leaflet/dist/images/marker-icon.png';
  import markerShadowURL from 'leaflet/dist/images/marker-shadow.png';
  import { onMount } from 'svelte';

  export let id: string;
  export let location: {
    latitude: number;
    longitude: number;
  };
  export let zoom: number = 19;
  export let style: string = 'width:425px; height:350px';
  export let markerMarkup: string = '';
  export let marker: boolean = markerMarkup !== '';
  export let importance: 'auto' | 'high' | 'low' | undefined = undefined;

  const { mapboxAccessToken } = website;
  const { latitude, longitude } = location;

  let mapElement: HTMLElement;

  async function setMap() {
    if (browser) {
      const {
        icon: leafletIcon,
        map: leafletMap,
        marker: leafletMarker,
        tileLayer,
      } = await import('leaflet');

      const markerIcon = leafletIcon({
        iconSize: [25, 41],
        iconAnchor: [10, 41],
        popupAnchor: [2, -40],
        iconUrl: markerIconURL,
        iconRetinaUrl: markerIconRetinaURL,
        shadowUrl: markerShadowURL,
      });

      const map = leafletMap(mapElement).setView([latitude, longitude], zoom);
      tileLayer(
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
      ).addTo(map);
      if (marker) {
        if (markerMarkup) {
          leafletMarker([latitude, longitude], { icon: markerIcon })
            .bindPopup(markerMarkup)
            .addTo(map);
        } else {
          leafletMarker([latitude, longitude], { icon: markerIcon }).addTo(map);
        }
      }
    }
  }

  onMount(async () => {
    await setMap();
  });
</script>

<svelte:head>
  <link rel="preconnect" href="https://unpkg.com" />
  <link rel="dns-prefetch" href="https://unpkg.com" />
  <link rel="preload" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" />
  <link rel="preconnect" href="https://api.mapbox.com" />
  <link rel="dns-prefetch" href="https://api.mapbox.com" />
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

<figure bind:this={mapElement} {id} {style} />
