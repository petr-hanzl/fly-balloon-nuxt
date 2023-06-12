<template>
    <v-card
            class="mx-auto ma-6"
            max-width="900"
    >
        <v-list>
            <v-list-subheader class="text-h6">Flight details</v-list-subheader>

            <v-list-item title="Car:">
                <template v-slot:prepend>
                    <v-icon icon="mdi-car"></v-icon>
                </template>

                <v-list-item-title v-text="flight.cars.name"></v-list-item-title>
            </v-list-item>
            <v-list-item title="Pilot:">
                <template v-slot:prepend>
                    <v-icon icon="mdi-account-tie-hat"></v-icon>
                </template>

                <v-list-item-title v-text="flight.pilots.extended_users.first_name + ' ' + flight.pilots.extended_users.last_name"/>
            </v-list-item>
            <v-list-item title="Driver:">
                <template v-slot:prepend>
                    <v-icon icon="mdi-steering"></v-icon>
                </template>

                <v-list-item-title v-text="flight.drivers.extended_users.first_name + ' ' + flight.drivers.extended_users.last_name"></v-list-item-title>
            </v-list-item>
            <v-list-item title="Balloon:">
                <template v-slot:prepend>
                    <v-icon icon="mdi-airballoon"></v-icon>
                </template>

                <v-list-item-title v-text="flight.balloons.registration_number"></v-list-item-title>
            </v-list-item>
            <v-list-item title="Type:">
                <template v-slot:prepend>
                    <v-icon icon="mdi-help"></v-icon>
                </template>

                <v-list-item-title v-text="flight.flight_types.type"></v-list-item-title>
            </v-list-item>
            <v-list-item title="Status:">
                <template v-slot:prepend>
                    <v-icon icon="mdi-exclamation-thick"></v-icon>
                </template>

                <v-list-item-title v-text="flight.flight_status.status"></v-list-item-title>
            </v-list-item>
            <v-list-item title="Aditional information:">
                <template v-slot:prepend>
                    <v-icon icon="mdi-information-box"></v-icon>
                </template>

                <v-list-item-title v-text="flight.additional_information"></v-list-item-title>
            </v-list-item>
            <v-list-item title="Start time:">
                <template v-slot:prepend>
                    <v-icon icon="mdi-clock-time-nine-outline"></v-icon>
                </template>

                <v-list-item-title v-text="flight.start_time"></v-list-item-title>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script setup lang="ts">
  import {FlightDetail} from "~/types/custom.ts";

  interface Props {
      flight: FlightDetail
  }

  const props = defineProps<Props>()


</script>

<style scoped>

</style>
