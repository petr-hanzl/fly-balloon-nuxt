<template>
  <FlightDetail
          :flight="flight"
  />



</template>

<script setup lang="ts">
  import {useFlightStore} from "~/store/flightStore.ts";
  import {Flight} from "~/types/collection.ts";

  definePageMeta({
      middleware: ['auth'],
      excludeFromMenu: true
  })

  const route = useRoute()
  const flightStore = useFlightStore()

  let flight: Flight | null
  flight = flightStore.getFlightByID(+route.params.id)

  // fetch from db if we cannot get it from local storage
  if (!flight) {
      flight = await flightStore.fetchFlightByID(+route.params.id)
  }



  // if still no result, push flights list
  if (!flight) {
      navigateTo("/flights")
  }

  console.log(flight)



</script>

<style scoped>

</style>
