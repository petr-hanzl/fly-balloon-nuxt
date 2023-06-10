<template>
    <h1 style="margin: 30px">
        BALOONS
    </h1>

    <List
            :headers="headers"
            :items="balloonStore.getBalloons"
            :fetch-callback="balloonStore.fetchAllBalloons"
            create-path="/balloons/new"
    />

</template>

<script setup lang="ts">
  import {useBalloonStore} from "~/store/balloonStore";

  definePageMeta({
      middleware: ['auth'],
      icon: 'mdi-airballoon',
      name: "Balloons"
  })

  const balloonStore = useBalloonStore()


  const headers = [
      {
          title: "Registration number",
          key: "registration_number",
          align: "end"
      },
      {
          title: "Maximum capacity",
          key: "maximum_capacity",
          align: "end"
      },
      {
          title: "Additional information",
          key: "additional_information",
          align: "end"
      },
      {
          title: "Active",
          key: "isActive",
          align: "end"
      },
  ]





</script>

<style scoped>

</style>
