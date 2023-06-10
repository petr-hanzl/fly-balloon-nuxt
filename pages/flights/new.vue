<template>
  <v-app>
    <NewFlight />
  </v-app>
</template>

<script setup lang="ts">
import NewFlight from "~/components/flight/NewFlight.vue";

  definePageMeta({
      middleware: ['auth'],
      icon: 'mdi-plus-thick',
      excludeFromMenu: true,

  })

</script>

<style scoped>

</style>
