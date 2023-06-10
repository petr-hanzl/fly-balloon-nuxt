<template>
    <List
            :headers="headers"
            :items="flightStore.getFlightList"
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
          key: "type",
          align: "end"
      },
      {
          title: "Status",
          key: "status",
          align: "end"
      },
      {
          title: "Balloon",
          key: "balloon",
          align: "end"
      },
      {
          title: "Pilot",
          key: "pilot",
          align: "end"
      },
      {
          title: "Driver",
          key: "driver",
          align: "end"
      },
      {
          title: "Additional information",
          key: "additionalInformation",
          align: "end"
      },
      {
          title: "Current capacity",
          key: "currentCapacity",
          align: "end"
      },
      {
          title: "Max capacity",
          key: "maxCapacity",
          align: "end"
      },
      {
          title: "Start",
          key: "start",
          align: "end"
      },

  ]


</script>


<style scoped>

</style>
