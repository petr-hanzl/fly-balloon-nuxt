<template>
    <p class="text-h3 pb-6">
        Balloons
    </p>

    <List
        :headers="headers"
        :items="balloonStore.getBalloons"
        :fetch-callback="balloonStore.fetchAllBalloons"
        title="Balloons"
        create-path="/balloons/new"
    />

    <v-btn size="x-large" class="mb-5 ml-7 rounded-xl" @click.prevent="navigateTo({path: `/balloons/new`})">
        New
    </v-btn>
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
