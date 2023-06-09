<template>
    <v-table theme="light" class="list">
      <thead>
        <tr>
          <th class="text-left">
            Registration Number
          </th>
          <th class="text-left">
            Maximum Capacity
          </th>
          <th class="text-left">
            Additional Information
          </th>
          <th class="text-left">
            Is Active
          </th>
          <th class="text-left">
            Actions
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="balloon in balloonStore.getBalloons"
          :key="balloon.id"
        >
          <td>{{ balloon.registration_number }}</td>
          <td>{{ balloon.maximum_capacity }}</td>
          <td>{{ balloon.additional_information }}</td>
          <td>{{ balloon.is_active }}</td>

          <td>
            <nuxt-link style="text-decoration: none; color: inherit;" :to="{path:`balloons/${balloon.id}`}">
              <v-btn size="x-small">
                <Icon name="ic:baseline-edit" class="icon" />
              </v-btn>
            </nuxt-link>
            <v-btn size="x-small" @click="balloonStore.deleteBalloon(balloon.id)">
              <Icon name="ic:baseline-delete" />
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <v-btn size="x-large" style="position: relative; margin-left: 1.5rem" @click.prevent="navigateTo({path: `/balloons/new`})">
      New
    </v-btn>
</template>

<script setup lang="ts">

import { useBalloonStore } from '~/store/balloonStore'

const balloonStore = useBalloonStore()

await balloonStore.fetchAllBalloons(false)

const isActive = (isActive: boolean | null): string => {
  if (isActive) {
    return 'Active'
  }
  return 'Not Active'
}

</script>

<style scoped>
.icon {
    position: relative;
}

.list {
    padding: 1.5rem;
}

</style>
