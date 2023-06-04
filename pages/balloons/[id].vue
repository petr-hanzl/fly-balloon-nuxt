<template>
  {{balloon}}

</template>

<script setup lang="ts">
  import {Balloon} from "~/types/collection";
  import {useBalloonStore} from "~/store/balloonStore";

  definePageMeta({
      middleware: ["auth"]
  })

  const balloonStore = useBalloonStore()

  await balloonStore.fetchAllBalloons(false)

  const route = useRoute()

  const balloon = balloonStore.getBalloonByID(+route.params.id)
  console.log(balloon)
  // console.log(balloonStore.getBalloons)


</script>

<style scoped>

</style>
