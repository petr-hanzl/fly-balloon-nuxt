<template>
    <v-card class="pa-10 ma-10 align-content-center">
    <h1 style="margin: 30px">
        {{title}}
    </h1>
<!--  todo search-->
    <VDataTable
        :headers="headers"
        :items-length="numberOfItems"
        :items="items"
        :loading="loading"
        class=" ma-7 rounded-xl"
        item-value="name"
        @update:options="loadItems"
    ></VDataTable>
    <v-btn size="x-large" class="mb-5 ml-7 rounded-xl" @click.prevent="navigateTo({path: createPath})">
        New
    </v-btn>
    </v-card>


</template>

<script setup lang="ts">
  // todo Dita basic styling header + table aligning + button

  import { VDataTable } from 'vuetify/labs/VDataTable'

  interface Props {
      items: any[],
      headers,
      fetchCallback: Function,
      createPath: string,
      title: string
  }

  const props = defineProps<Props>()

  let numberOfItems: number
  let loading: boolean

  const loadItems = async () => {
      // loading = true todo how with async?

      await props.fetchCallback()
      numberOfItems = props.items.length // todo dunno

      // loading = false todo this is not being called
  }



</script>

<style scoped>

</style>
