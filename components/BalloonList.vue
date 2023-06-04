<template>
    <v-card style="margin: 4rem; padding: 1rem">
      <v-table theme="light">
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
                      <nuxt-link style="text-decoration: none; color: inherit;" :to="{path:`balloons/${balloon.id}`, params:{balloon: balloon}}">
                        <Icon name="ic:baseline-edit" class="icon"/>
                      </nuxt-link>
                      <Icon name="ic:baseline-delete" />

                  </td>
            </tr>
            </tbody>

      </v-table>
        <v-btn size ="large" style="position: relative" @click.prevent="create">New</v-btn>
    </v-card>
</template>

<script setup lang="ts">


  import {Balloon} from "~/types/collection";
  import {useBalloonStore} from "~/store/balloonStore";

  const balloonStore = useBalloonStore()

  await balloonStore.fetchAllBalloons(false)




  const isActive = (isActive: boolean | null): string => {
      if (isActive) {
          return "Active"
      }

      return "Not Active"
  }


  const showBalloonInfo = (balloonID: number) => {
      console.log("asd")
      navigateTo(`balloons/${balloonID}`)
  }

  const create = () => {

      navigateTo({ path: "/balloons/new" })
  }



</script>

<style scoped>
.icon{
    position: relative;
}

.list {
padding: 3rem;
}

</style>
