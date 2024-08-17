<template>
  <v-app :style="route.name == 'home' ? 'background-color: #68D798' : 'background-color:  #FFFFFF'">
    <Navbar />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { Ref, computed, onMounted, ref, watch } from 'vue';


import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()


import { Loader } from '@googlemaps/js-api-loader';

const addressInput = ref(null);

onMounted(() => {
  initialiseAddressSearch();
});






async function initialiseAddressSearch() {
  if (!addressInput.value) {
    return;

  }
  const loader = new Loader({
    // apiKey: "",
    apiKey: "",
    version: "weekly",
    libraries: ["places"]
  });
  loader
    .importLibrary('places')
    .then((google) => {
      let autocomplete;
      // google.Place.searchByText
      autocomplete = new google.Autocomplete(addressInput.value!, {});

      // Listen for place selection
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
          // Place details not found for the input
          return;
        }

        // Access the selected place details
        console.log(place.formatted_address); // Display or use the selected address
        console.log(place.geometry.location!.lat()); // Latitude
        console.log(place.geometry.location!.lng()); // Longitude

        // You can further process or store the selected address details as needed
      });

    })
    .catch(e => {
      // Handle error
      console.error("Error loading Google Maps API:", e);
    });
}




const autocompleteLocationModel = ref(null);
const locationSearchText: Ref<string | null> = ref(null);
const locationEntries = ref([]);


const GetSuggestions = async searchText => {
  let result

  try {
    const rawResult: any = await searchLocation(searchText)
    result = rawResult.map((res) => {
      return {
        id: res.place_id,
        value: res.description
      }
    })
  } catch (err) {
    console.log('An error occurred', err)
    result = null
  }
  return result
}

function onInput(val) {
  console.log(val)
}





const searchLocation = async val => {
  let promise = await new Promise((resolve, reject) => {
    var displaySuggestions = (predictions, status) => {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        reject(status)
      }
      resolve(predictions)
    }

    var service = new google.maps.places.AutocompleteService()
    service.getPlacePredictions({
      input: val,
      types: ['geocode']
    },
      displaySuggestions)
  }).catch(function (err) { throw err })

  return promise
}


const locationFoundItems = computed(() => {
  return locationEntries.value
})

watch(locationSearchText, (newVal, oldVal) => {

  console.log("HELLO")
  // If less than 3 chars typed, do not search
  if (!newVal || newVal.length <= 3) return

  // Call the method from the previous section here
  GetSuggestions(newVal)
    .then(function (res) {
      locationEntries.value = res
    })
    .catch(function (err) {
      // error handling goes here
    })
})


</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');





body {
  background-color: #68D798;
}

.navbar-info span {
  padding: 0 10px;
  font-weight: bold;
}

.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24
}

svg {
  fill: white;
}

a {
  text-decoration: none;
  color: inherit
}
</style>
