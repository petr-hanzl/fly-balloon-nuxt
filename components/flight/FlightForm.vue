<template>
    <v-card class="pa-10 ma-10">
        <h1>
            Create New Flight
        </h1>

        <v-sheet width="300" class="mx-auto">
            <v-form fast-fail @submit.prevent="create">
                <v-select
                        v-model="flightType"
                        :items="flightStore.getFlightTypes"
                        item-title="type"
                        item-value="id"
                        :rules="rules"
                        label="Type"
                        required
                />
                <v-select
                    v-model="flightStatus"
                    :items="flightStore.getFlightStatus"
                    item-title="status"
                    item-value="id"
                    :rules="rules"
                    label="Status"
                    required
                />
                <v-select
                    v-model="balloon"
                    :items="balloonStore.getBalloons"
                    item-title="registration_number"
                    item-value="id"
                    :rules="rules"
                    label="Balloon"
                    required
                />
                <v-select
                    v-model="car"
                    :items="carStore.getCars"
                    item-title="name"
                    item-value="id"
                    :rules="rules"
                    label="Car"
                    required
                />
<!--                <v-select-->
<!--                    v-model="location"-->
<!--                    :items="locationStore.getLocationTypes"-->
<!--                    item-title="location"-->
<!--                    item-value="id"-->
<!--                    :rules="rules"-->
<!--                    label="Location"-->
<!--                    required-->
<!--                />-->
                <v-select
                    v-model="pilot"
                    :items="pilotStore.getPilots"
                    item-title="extended_users.last_name"
                    item-value="id"
                    :rules="rules"
                    label="Pilot"
                    required
                />
                <v-select
                    v-model="driver"
                    :items="driverStore.getDrivers"
                    item-title="extended_users.last_name"
                    item-value="id"
                    :rules="rules"
                    label="Driver"
                    required
                />

                <v-text-field
                    v-model="start"
                    type="datetime-local"
                    :rules="rules"
                    label="Start"/>


                <v-textarea
                    v-model="additionalInformation"
                    class="form-field "
                    label="Additional Information"
                />

                <v-btn type="submit" block class="mt-2">
                    Submit
                </v-btn>
            </v-form>
        </v-sheet>
    </v-card>
</template>

<script setup lang="ts">
  import {useFlightStore} from "~/store/flightStore";
  import {Balloon, Car, Driver, Flight, FlightStatus, FlightType, LocationType, Pilot} from "~/types/collection";
  import {useBalloonStore} from "~/store/balloonStore";
  import {useLocationTypeStore} from "~/store/locationTypeStore";
  import {usePilotStore} from "~/store/pilotStore";
  import {useDriverStore} from "~/store/driverStore";
  import {useCarStore} from "~/store/carsStore";
  import {f} from "ofetch/dist/error-04138797";

  const flightStore = useFlightStore()
  const balloonStore = useBalloonStore()
  const locationStore = useLocationTypeStore()
  const pilotStore = usePilotStore()
  const driverStore = useDriverStore()
  const carStore = useCarStore()

  await flightStore.fetchAllFlightTypes(false)
  await flightStore.fetchALlFlightStatus(false)
  await balloonStore.fetchAllBalloons(false)
  await locationStore.fetchAllLocationTypes(false)
  await pilotStore.fetchAllPilots(false)
  await driverStore.fetchAllDrivers(false)
  await carStore.fetchAllCars(false)

  const rules = [v => !!v || 'Item is required']

  const flightType = ref<FlightType>()
  const flightStatus = ref<FlightStatus>()
  const balloon = ref<Balloon>()
  const car = ref<Car>()
  const additionalInformation = ref('')
  const location = ref<LocationType>()
  const pilot = ref<Pilot>()
  const driver = ref<Driver>()
  const start = ref<Date>()


  const create = async () => {
      // todo create
      // const flight = {
      //     flight_type_id: flightType,
      //     flight_status_id: flightStatus,
      //     balloon_id: balloon,
      //     pilot_id: pilot,
      //     driver_id: driver,
      //     car_id: car,
      //     // location_id: location,
      //     additional_information: additionalInformation,
      //
      // } as Flight
      //
      // await flightStore.createFlight(flight)
      //
      // navigateTo({path:"/flights"})
      // flightStore.flights.push(flight)
  }

</script>

<style scoped>


</style>




