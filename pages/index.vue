<template>
  <v-app>
      <LoginForm/>
  </v-app>

</template>

<script setup lang="ts">

    definePageMeta({
        middleware: ["auth"]
    })

</script>

<style scoped>

</style>
