<template>
    <div class="balloon-form">
        <v-card style="padding: 4rem">

            <h1 style="padding-bottom: 3rem ">Create New Balloon</h1>

            <v-sheet width="300" class="mx-auto">
                <v-form fast-fail @submit.prevent="create">
                    <v-text-field
                            class="form-field"
                            v-model="registrationNumber"
                            :rules="rules"
                            label="Registration Number"
                            required
                    ></v-text-field>

                    <v-select
                        class="form-field"
                        v-model="maximumCapacity"
                        :items="items"
                        :rules="rules"
                        label="Maximum Capacity"
                        required
                    ></v-select>

                    <v-text-field
                            class="form-field"
                            v-model="additionalInformation"
                            label="Additional Information"
                    ></v-text-field>

                    <v-checkbox
                            class="form-field"
                            v-model="active"
                            label="Active"
                    ></v-checkbox>
                    <v-btn type="submit" block class="mt-2">Submit</v-btn>
                </v-form>
            </v-sheet>
        </v-card>
    </div>
</template>

<script setup lang="ts">
import {useBalloonStore} from "~/store/balloonStore";
import {Balloon} from "~/types/collection";

const balloonStore = useBalloonStore()

const rules = [v => !!v || 'Item is required']
const items = [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


const registrationNumber = ref("")
const maximumCapacity = ref("")
const additionalInformation = ref("")
const active = ref(false)

// const stringToBool = (str: string) => {
//     if str === "true"
// }


const create = async () => {

    const balloon = {registration_number: registrationNumber.value, maximum_capacity: +maximumCapacity.value, additional_information: additionalInformation.value, is_active: active.value} as Balloon

    await balloonStore.createBalloon(balloon)
    balloonStore.balloons.push(balloon)

    navigateTo("/balloons")

}


</script>

<style scoped>
.balloon-form {
    position: absolute;
    left: 50%; /* relative to nearest positioned ancestor or body element */
    top: 50%; /*  relative to nearest positioned ancestor or body element */
    transform: translate(-50%, -50%); /* relative to element's height & width */
}
.form-field {
    padding-bottom: 0.5rem
}

</style>
