<template>
  <div ref="mapContainer" id="map" class="w-100">
  </div>
</template>

<script setup lang="ts">
import { Loader } from '@googlemaps/js-api-loader';
import { onMounted, ref } from 'vue';


const mapContainer = ref(null);


function initialiseMap() {
  if (!mapContainer.value) {
    return;
  }

  const loader = new Loader({
    // apiKey: "",
    apiKey: "",
    version: "weekly",
    libraries: ["places"]
  });

  loader
    .importLibrary('maps')
    .then(({ Map }) => {
      const map = new Map(mapContainer.value!, {
        center: { lat: -27.637, lng: 152.850 },
        zoom: 13,
        gestureHandling: 'none',
      });


      // Define the coordinates for the polygon vertices
      const polygonCoords = [
        { lat: -27.661405, lng: 152.732016 },
        { lat: -27.616087, lng: 152.720086 },
        { lat: -27.584293, lng: 152.717168 },
        { lat: -27.581744, lng: 152.754161 },
        { lat: -27.582315, lng: 152.766263 },
        { lat: -27.567409, lng: 152.979286 },
        { lat: -27.638146, lng: 152.993878 },
        { lat: -27.704734, lng: 152.907189 },
        { lat: -27.700023, lng: 152.817753 },
      ];

      // Create a new polygon object
      const polygon = new google.maps.Polygon({
        paths: polygonCoords,
        strokeColor: '#329D00',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#8ECC3C',
        fillOpacity: 0.1,
      });

      // Add the polygon to the map
      polygon.setMap(map);

    })
    .catch((e) => {
      // do something
    });

  // loader
  //   .load()
  //   .then((google) => {
  //     let map
  //     if (mapContainer.value) {
  //       map = new google.maps.Map(mapContainer.value, {
  //         center: { lat: -27.637, lng: 152.850 },
  //         zoom: 13,
  //         gestureHandling: 'none',
  //       });
  //     }

  //     // Define the coordinates for the polygon vertices
  //     const polygonCoords = [
  //       { lat: -27.661405, lng: 152.732016 },
  //       { lat: -27.616087, lng: 152.720086 },
  //       { lat: -27.584293, lng: 152.717168 },
  //       { lat: -27.581744, lng: 152.754161 },
  //       { lat: -27.582315, lng: 152.766263 },
  //       { lat: -27.567409, lng: 152.979286 },
  //       { lat: -27.638146, lng: 152.993878 },
  //       { lat: -27.704734, lng: 152.907189 },
  //       { lat: -27.700023, lng: 152.817753 },
  //     ];

  //     // Create a new polygon object
  //     const polygon = new google.maps.Polygon({
  //       paths: polygonCoords,
  //       strokeColor: '#329D00',
  //       strokeOpacity: 0.8,
  //       strokeWeight: 2,
  //       fillColor: '#8ECC3C',
  //       fillOpacity: 0.1,
  //     });

  //     // Add the polygon to the map
  //     polygon.setMap(map);
  //   })
  //   .catch(e => {
  //     // do something
  //   });
}

onMounted(() => {
  initialiseMap()
})

</script>
<style scoped>
#map {
  position: absolute;
  top: 64px;
  left: 0px;
  height: calc(100% - 64px);
}
</style>