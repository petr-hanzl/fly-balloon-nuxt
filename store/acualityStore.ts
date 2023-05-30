import {defineStore} from "pinia";
import supabase from "~/supabase/client";
import {Actuality, ActualityType} from "~/types/collection";


export const useActualityStore = defineStore("actualityStore", {
    state: () => ({
        actualities: [] as Actuality[],
        actualityTypes: [] as ActualityType[]

    }),
    actions: {
        async fetchAllActualityTypes(force: boolean) {
            // do we need to fetch?
            if (!force && this.actualityTypes && this.actualityTypes.length > 0) {
                return
            }

            const { data, error } = await supabase
                .from("actuality_types")
                .select()

            if (error) {
                console.log("error")
                console.log(error)
            }

            if (data) {
                console.log("data")
                console.log(data)
                this.actualityTypes = data
            }


        },

        async fetchAllActualities(force: boolean) {
            // do we need to fetch?
            if (!force && this.actualities && this.actualities.length > 0) {
                return
            }

            const { data, error } = await supabase
                .from("actualities")
                .select()
            if (error) {
                console.log("error")
                console.log(error)
            }

            if (data) {
                console.log("data")
                console.log(data)
                this.actualities = data
            }
        }
    },
    getters: {
        getActualities(): Actuality[] {
            return this.actualities
        },
        getActualityTypes(): ActualityType[] {
            return this.actualityTypes
        }

    }
})
