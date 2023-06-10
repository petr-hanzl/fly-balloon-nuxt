<template>
  <v-app>
    <NewBalloon />
  </v-app>
</template>

<script setup lang="ts">
import NewBalloon from '~/components/NewBalloon.vue'

  definePageMeta({
      middleware: ['auth'],
      icon: 'mdi-plus-thick',
      excludeFromMenu: true,

  })

</script>

<style scoped>

</style>
