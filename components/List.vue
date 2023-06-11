<template>
<!--  todo search-->
    <VDataTable
        :headers="headers"
        :items-length="numberOfItems"
        :items="items"
        :loading="loading"
        class=" ma-7 rounded-xl"
        item-value="name"
        @update:options="loadItems"
    >

    </VDataTable>
</template>

<script setup lang="ts">
  // todo Dita basic styling header + table aligning + button

  import { VDataTable } from 'vuetify/labs/VDataTable'

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



</script>

<style scoped>

</style>
