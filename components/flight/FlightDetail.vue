<template>
  {{flight}}
</template>

<script setup lang="ts">

  import FlightList from "~/components/flight/FlightList.vue";

  interface Props {
      flight: FlightList
  }

  const props = defineProps<Props>()


</script>

<style scoped>

</style>
