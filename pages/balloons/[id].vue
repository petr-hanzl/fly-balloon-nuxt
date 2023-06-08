<template>
  <div> {{ balloon }}</div>
</template>

<script setup lang="ts">

import { useBalloonStore } from '~/store/balloonStore'

definePageMeta({
  middleware: ['auth'],
  excludeFromMenu: true
})

const balloonStore = useBalloonStore()

await balloonStore.fetchAllBalloons(false)

const route = useRoute()

const balloon = balloonStore.getBalloonByID(+route.params.id)

</script>

<style scoped>

</style>
