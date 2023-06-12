<template>
    <DetailedInfo
            :items="items"
    />
</template>

<script setup lang="ts">
  import {useFlightStore} from "~/store/flightStore.ts";
  import {DetailedInfoType, FlightDetail} from "~/types/custom.ts";

  definePageMeta({
      middleware: ['auth'],
      excludeFromMenu: true
  })

  const route = useRoute()
  const flightStore = useFlightStore()

  let flight: FlightDetail | null
  flight = flightStore.getFlightByID(+route.params.id)

  // fetch from db if we cannot get it from local storage
  if (!flight) {
      flight = await flightStore.fetchFlightByID(+route.params.id)
  }

  let items: DetailedInfoType[]

  // if still no result, push flights list
  if (!flight) {
      navigateTo("/flights")
  } else {
      items = [
          {
              title: "Car:",
              text: flight.cars.name!,
              icon: "mdi-car"
          },
          {
              title: "Pilot:",
              text: flight.pilots.extended_users.first_name + " " + flight.pilots.extended_users.last_name,
              icon: "mdi-account-tie-hat"
          },
          {
              title: "Driver:",
              text: flight.drivers.extended_users.first_name + " " + flight.drivers.extended_users.last_name,
              icon: "mdi-steering"
          },
          {
              title: "Balloon:",
              text: flight.balloons.registration_number,
              icon: "mdi-airballoon"
          },
          {
              title: "Type:",
              text: flight.flight_types.type,
              icon: "mdi-help"
          },
          {
              title: "Status:",
              text: flight.flight_status.status,
              icon: "mdi-exclamation-thick"
          },
          {
              title: "Additional information:",
              text: flight.additional_information,
              icon: "mdi-information-box"
          },
      ]
  }







</script>

<style scoped>

</style>
