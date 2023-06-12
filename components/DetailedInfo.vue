<template>
    <v-card
        class="mx-auto ma-5">

      <v-list>
          <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :title="item.title"
              >
              <template v-slot:prepend>
                  <v-icon :icon="item.icon"/>
              </template>
              {{ item.text }}
          </v-list-item>
      </v-list>
    </v-card>

</template>

<script setup lang="ts">


  import {DetailedInfoType} from "~/types/custom.ts";

  interface Props {
      items: DetailedInfoType[]
  }

  const props = defineProps<Props>()

</script>

<style scoped>

</style>
