<template>
    <List
            :headers="headers"
            :items="flightStore.getFlights"
            :fetch-callback="flightStore.fetchFlights"
            title="Flights"
            create-path="/flights/new"
    />

</template>

<script setup lang="ts">
  import {useFlightStore} from "~/store/flightStore";

  definePageMeta({
      middleware: ['auth'],
      icon: 'mdi-cloud',
      name: "Flights",
  })

  const flightStore = useFlightStore()

  // todo location
  const headers = [
      {
          title: "Type",
          key: "flight_types.type",
          align: "end"
      },
      {
          title: "Status",
          key: "flight_status.status",
          align: "end"
      },
      {
          title: "Balloon",
          key: "balloons.registration_number",
          align: "end"
      },
      {
          title: "Pilot",
          key: "pilots.extended_users.first_name",
          align: "end"
      },
      {
          title: "Driver",
          key: "drivers.extended_users.first_name",
          align: "end"
      },
      {
          title: "Additional information",
          key: "additional_information",
          align: "end"
      },
      {
          title: "Current capacity",
          key: "current_capacity",
          align: "end"
      },
      {
          title: "Max capacity",
          key: "flight_types.maximum_capacity",
          align: "end"
      },
      {
          title: "Start",
          key: "start_time",
          align: "end"
      },

  ]


</script>


<style scoped>

</style>
