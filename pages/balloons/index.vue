<template>
  <BalloonList />
</template>

<script setup lang="ts">

import BalloonList from '~/components/BalloonList.vue'

definePageMeta({
  middleware: ['auth'],
  icon: 'mdi-airballoon'
})

</script>

<style scoped>

</style>
