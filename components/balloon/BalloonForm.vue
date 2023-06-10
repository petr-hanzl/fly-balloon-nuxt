<template>
    <v-card class="pa-10 ma-10">
      <h1>
        Create New Balloon
      </h1>

      <v-sheet width="300" class="mx-auto">
        <v-form fast-fail @submit.prevent="create">
          <v-text-field
            v-model="registrationNumber"
            class="form-field"
            :rules="rules"
            label="Registration Number"
            required
          />

          <v-select
            v-model="maximumCapacity"
            class="form-field"
            :items="items"
            :rules="rules"
            label="Maximum Capacity"
            required
          />

          <v-text-field
            v-model="additionalInformation"
            class="form-field"
            label="Additional Information"
          />

          <v-checkbox
            v-model="active"
            class="form-field"
            label="Active"
          />
          <v-btn type="submit" block class="mt-2">
            Submit
          </v-btn>
        </v-form>
      </v-sheet>
    </v-card>
</template>

<script setup lang="ts">
  import { useBalloonStore } from '~/store/balloonStore'
  import { Balloon } from '~/types/collection'

  const balloonStore = useBalloonStore()

  const rules = [v => !!v || 'Item is required']
  const items = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  const registrationNumber = ref('')
  const maximumCapacity = ref('')
  const additionalInformation = ref('')
  const active = ref(false)

  // const stringToBool = (str: string) => {
  //     if str === "true"
  // }

  const create = async () => {
    const balloon = {
      registration_number: registrationNumber.value,
      maximum_capacity: +maximumCapacity.value,
      additional_information: additionalInformation.value,
      is_active: active.value
    } as Balloon

    await balloonStore.createBalloon(balloon)
    balloonStore.balloons.push(balloon)

    navigateTo('/balloons')
  }

</script>

<style scoped>


</style>
