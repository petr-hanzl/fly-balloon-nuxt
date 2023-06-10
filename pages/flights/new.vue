<template>
  <v-app>
    <NewFlight />
  </v-app>
</template>

<script setup lang="ts">
import NewFlight from "~/components/flight/FlightForm.vue";

  definePageMeta({
      middleware: ['auth'],
      icon: 'mdi-plus-thick',
      excludeFromMenu: true,

  })

</script>

<style scoped>

</style>
