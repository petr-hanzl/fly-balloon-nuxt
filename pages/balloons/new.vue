<template>
    <NewBalloon />
</template>

<script setup lang="ts">
import NewBalloon from '~/components/balloon/BalloonForm.vue'

  definePageMeta({
      middleware: ['auth'],
      icon: 'mdi-plus-thick',
      excludeFromMenu: true,

  })

</script>

<style scoped>

</style>
