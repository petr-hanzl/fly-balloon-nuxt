<template>
<!--  todo search-->
    <VDataTableServer
        :headers="headers"
        :items-length="numberOfItems"
        :items="items"
        :loading="loading"
        class=" ma-7 rounded-xl"
        :hover="true"
        to="/"
        item-value="name"
        @update:options="loadItems"
        @click:row="(event, row) => showDetails(row.item.raw.id)"
    >

    </VDataTableServer>
</template>

<script setup lang="ts">
  // todo Dita basic styling header + table aligning + button

  import { VDataTableServer } from 'vuetify/labs/VDataTable'

  interface Props {
      items: any[],
      headers,
      fetchCallback: Function,
  }

  const props = defineProps<Props>()

  let numberOfItems: number
  let loading: boolean

  const loadItems = async () => {
      // loading = true todo how with async?

      // force fetch all flights
      await props.fetchCallback(true)
      numberOfItems = props.items.length // todo dunno

      // loading = false todo this is not being called
  }

  const route = useRoute()
  const showDetails = (id: number) => {
      navigateTo(`${route.path}/${id}`)
  }


</script>

<style scoped>

</style>
