<template>
  {{balloon}}

</template>

<script setup lang="ts">

  import {Balloon} from "~/types/collection.ts";

  interface Props {
      balloon: Balloon
  }

  const props = defineProps<Props>()

</script>

<style scoped>

</style>
