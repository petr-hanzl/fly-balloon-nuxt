<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
<script setup lang="ts">
  import {useBalloonStore} from "~/store/balloonStore";

  const balloonStore = useBalloonStore()

  await balloonStore.fetchAllBalloons(false)

  console.log(balloonStore.getBalloons)
</script>

