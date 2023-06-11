<template>
  {{flight.drivers.extended_users.first_name}}
</template>

<script setup lang="ts">
  import {Flight} from "~/types/collection.ts";

  interface Props {
      flight: Flight
  }

  const props = defineProps<Props>()


</script>

<style scoped>

</style>
