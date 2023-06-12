<template>
    <v-card class="pa-10 ma-10 align-content-center">
        <p class="text-h3 pb-6">
            Flights
        </p>

        <!--  todo search-->
        <VDataTable
                :headers="headers"
                :items-length="numberOfItems"
                :items="flightStore.getFlights"
                :loading="loading"
                class=" ma-7 rounded-xl"
                item-value="name"
                @update:options="loadItems"
        >


        </VDataTable>
        <v-btn size="x-large" class="mb-5 ml-7 rounded-xl" @click.prevent="navigateTo({path: `/flights/new`})">
            New
        </v-btn>
    </v-card>


</template>

<script setup lang="ts">
// todo colors https://vuetifyjs.com/en/components/data-tables/basics/

  import { VDataTable } from 'vuetify/labs/VDataTable'
  import {useFlightStore} from "~/store/flightStore";

  const flightStore = useFlightStore()

  definePageMeta({
      middleware: ['auth'],
      icon: 'mdi-cloud',
      name: "Flights",
  })

interface Props {
    showNewBtn: boolean
}

const props = defineProps<Props>()

  let numberOfItems: number
  let loading: boolean

  const loadItems = async () => {
      // loading = true

      // force fetch all flights
      await flightStore.fetchFlights(true)
      numberOfItems = flightStore.flights.length // todo dunno

      console.log(flightStore.getFlights)

      // loading = false todo this does not work
  }

  const getColor = (status: string) => {
      switch (status) {
          case "Flying":
              return "purple"
          case "Done":
              return "green"
          case "Canceled":
              return "red"
          case "Canceled_on_spot":
              return "orange"
          default:
              return "white"

      }

  }

  // todo location
  const headers = [
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


  ]



</script>

<style scoped>

</style>
