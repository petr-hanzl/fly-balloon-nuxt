<template>
    <v-card class="ma-8 rounded-xl elevation-4">
        <p class="text-h4 ml-10 mt-10">
            Flights
        </p>
        <List
                :headers="flightHeaders"
                :items="flightStore.getFlights"
                :fetch-callback="flightStore.fetchFlights"
                title="Flights"
        />

    </v-card>

    <v-card class="ma-8 rounded-xl elevation-4">
        <LineGraph/>
    </v-card>
</template>

<script setup lang="ts">

  import {useFlightStore} from "~/store/flightStore.ts";
  import LineGraph from "~/components/graph/DashboardOrderGraph.vue";

  definePageMeta({
      middleware: ['auth'],
      icon: 'mdi-view-dashboard',
      name: "Dashboard"
  })


  const flightStore = useFlightStore()
  const flightHeaders = [
      {
          title: "Start",
          key: "start_time",
          align: "end"
      },
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
          title: "Current capacity",
          key: "current_capacity",
          align: "end"
      },
      {
          title: "Max capacity",
          key: "flight_types.maximum_capacity",
          align: "end"
      },


  ]

</script>

<style scoped>

</style>
