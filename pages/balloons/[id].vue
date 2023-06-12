<template>
  <BalloonDetail
          :balloon="Balloon"
  />
</template>

<script setup lang="ts">

  import { useBalloonStore } from '~/store/balloonStore'
  import {Balloon} from "~/types/collection.ts";

  definePageMeta({
    middleware: ['auth'],
    excludeFromMenu: true
  })

  const route = useRoute()
  const balloonStore = useBalloonStore()

  let balloon: Balloon | null
  balloon = balloonStore.getBalloonByID(+route.params.id)

  if (!balloon) {
      balloon = await balloonStore.fetchBalloonByID(+route.params.id)
  }

  if (!balloon) {
      navigateTo("/balloons")
  }

</script>

<style scoped>

</style>
