<template>
    <v-card class="pa-10 ma-10">
        <h1>
            Create New Flight
        </h1>

        <v-sheet width="300" class="mx-auto">
            <v-form fast-fail @submit.prevent="create">
                <v-select
                        v-model="flightTypeRef"
                        :items="flightStore.getFlightTypes"
                        item-title="type"
                        item-value="id"
                        :rules="rules"
                        label="Type"
                        required
                />
                <v-select
                    v-model="flightStatusRef"
                    :items="flightStore.getFlightStatus"
                    item-title="status"
                    return-object
                    :rules="rules"
                    label="Status"
                    required
                />
                <v-select
                    v-model="balloonRef"
                    :items="balloonStore.getBalloons"
                    item-title="registration_number"
                    item-value="id"
                    :rules="rules"
                    label="Balloon"
                    required
                />
                <v-select
                    v-model="carRef"
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
                    v-model="pilotRef"
                    :items="pilotStore.getPilots"
                    item-title="extended_users.last_name"
                    return-object
                    :rules="rules"
                    label="Pilot"
                    required
                />
                <v-select
                    v-model="driverRef"
                    :items="driverStore.getDrivers"
                    item-title="extended_users.last_name"
                    return-object
                    :rules="rules"
                    label="Driver"
                    required
                />

                <v-text-field
                    v-model="startRef"
                    type="datetime-local"
                    :rules="rules"
                    label="Start"/>


                <v-textarea
                    v-model="additionalInformationRef"
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
  import {
      Balloon,
      Car,
      Driver,
      Expense,
      Flight,
      FlightStatus,
      FlightType,
      LocationType,
      Pilot, Salary
  } from "~/types/collection";
  import {useBalloonStore} from "~/store/balloonStore";
  import {useLocationTypeStore} from "~/store/locationTypeStore";
  import {usePilotStore} from "~/store/pilotStore";
  import {useDriverStore} from "~/store/driverStore";
  import {useCarStore} from "~/store/carsStore";
  import {f} from "ofetch/dist/error-04138797";
  import {useExpenseStore} from "~/store/expenseStore";
  import {useSalaryStore} from "~/store/salaryStore";
  import supabase from "~/supabase/client";

  // todo move this to db
  const driversFlySalaryValue = 800
  const pilotsFlySalaryValue = 7500
  const driversCanceledSalaryValue = 200
  const pilotsCanceledSalaryValue = 1000

  const czkID = 1
  const salaryExpenseType = 5


  const flightStore = useFlightStore()
  const balloonStore = useBalloonStore()
  const locationStore = useLocationTypeStore()
  const pilotStore = usePilotStore()
  const driverStore = useDriverStore()
  const carStore = useCarStore()
  const expenseStore = useExpenseStore()
  const salaryStore = useSalaryStore()

  await flightStore.fetchAllFlightTypes(false)
  await flightStore.fetchALlFlightStatus(false)
  await balloonStore.fetchAllBalloons(false)
  await locationStore.fetchAllLocationTypes(false)
  await pilotStore.fetchAllPilots(false)
  await driverStore.fetchAllDrivers(false)
  await carStore.fetchAllCars(false)

  const rules = [v => !!v || 'Item is required']

  const flightTypeRef = ref<FlightType>()
  const flightStatusRef = ref<FlightStatus>()
  const balloonRef = ref<Balloon>()
  const carRef = ref<Car>()
  const additionalInformationRef = ref('')
  const locationRef = ref<LocationType>() // todo fix location
  const pilotRef = ref<Pilot>()
  const driverRef = ref<Driver>()
  const startRef = ref<Date>()


  const create = async () => {


      const flight = {
          flight_type_id: flightTypeRef.value,
          flight_status_id: flightStatusRef.value?.id,
          balloon_id: balloonRef.value,
          pilot_id: pilotRef.value?.id,
          driver_id: driverRef.value?.id,
          car_id: carRef.value,
          location_id: 1,
          additional_information: additionalInformationRef.value,
          current_capacity: 0,
          start_time: startRef.value

      } as Flight

      // for speed reason, first push flight to local store and push new page
      // flightStore.flights.push(flight)
      const data = await flightStore.createFlight(flight)
      navigateTo({path:"/flights"})


      // decide whether create salary depending on the status of the flight
      switch (flightStatusRef.value?.status) {
          case "Done":
              await salaryStore.createSalary({
                  flight_id: data.at(0).id,
                  extended_user_id: pilotRef.value?.extended_user_id,
                  salary: pilotsFlySalaryValue,
                  currency_type_id: czkID
              } as Salary)

              await salaryStore.createSalary({
                  flight_id: data.at(0).id,
                  extended_user_id: driverRef.value?.extended_user_id,
                  salary: driversFlySalaryValue,
                  currency_type_id: czkID
              } as Salary)

              // save expense last
              await expenseStore.createExpense({
                  price: pilotsFlySalaryValue + driversFlySalaryValue,
                  expense_type_id: salaryExpenseType,
                  currency_type_id: czkID,
                  additional_information: "Normal flight salaries for both pilot and driver"
              } as Expense)
              break;
          case "Canceled_on_spot":
              await salaryStore.createSalary({
                  flight_id: data.at(0).id,
                  extended_user_id: pilotRef.value?.extended_user_id,
                  salary: pilotsCanceledSalaryValue,
                  currency_type_id: czkID
              } as Salary)

              await salaryStore.createSalary({
                  flight_id: data.at(0).id,
                  extended_user_id: driverRef.value?.extended_user_id,
                  salary: driversCanceledSalaryValue,
                  currency_type_id: czkID
              } as Salary)

              // save expense last
              await expenseStore.createExpense({
                  price: pilotsCanceledSalaryValue + driversCanceledSalaryValue,
                  expense_type_id: salaryExpenseType,
                  currency_type_id: czkID,
                  additional_information: "Normal flight salaries for both pilot and driver"
              } as Expense)
              break;
          default:
              break;


      }

  }

      // if (data) {
      //     data.a
      //     data.forEach((d)=> {
      //         d.
      //     })

      //
      //
      // }

  //     if (pilot.value) {
  //         // pilots salary
  //
  //     }
  //
  //
  //
  // }



      //
      // await expenseStore.createExpense({
      //
      // } as Expense)

      // drivers salary





</script>

<style scoped>


</style>




