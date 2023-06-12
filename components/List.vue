<template>
<!--  todo search-->
    <VDataTableServer
        :headers="headers"
        :items="props.items"
        :loading="loading"
        class="ma-7 rounded-xl"
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
  import {tr} from "vuetify/locale";

  interface Props {
      items: any[],
      headers,
      fetchCallback: Function,
  }

  const props = defineProps<Props>()
  let previousNumberOfItems = 0
  let numberOfItems = ref(10)
  let loading = ref(true)

  const loadItems = async () => {
      loading.value = true

      if (numberOfItems.value !== 10) {
          previousNumberOfItems = numberOfItems.value
      }

      console.log(previousNumberOfItems)
      console.log(numberOfItems.value)

      await props.fetchCallback(true, previousNumberOfItems, numberOfItems.value-1)

      console.log(props.items)


      loading.value = false
  }

  const route = useRoute()
  const showDetails = (id: number) => {
      navigateTo(`${route.path}/${id}`)
  }


</script>

<style scoped>

</style>
