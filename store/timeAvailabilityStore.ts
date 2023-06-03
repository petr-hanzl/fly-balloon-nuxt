import {defineStore} from "pinia";
import supabase from "~/supabase/client";
import {TimeAvailability} from "~/types/collection";


export const useTimeAvailabilityStore = defineStore("timeAvailabilityStore", {
    state: () => ({
        timeAvailabilities: [] as TimeAvailability[]

    }),
    actions: {
        async fetchAllTimeAvailabilities(force: boolean) {

            // do we need to fetch?
            if (!force && this.timeAvailabilities && this.timeAvailabilities.length > 0) {
                return
            }

            const { data, error } = await supabase
                .from("time_availability")
                .select()
            if (error) {
                console.log("error")
                console.log(error)
            }

            if (data) {
                console.log("data")
                console.log(data)
                this.timeAvailabilities = data
            }
        },

        async createTimeAvailability(timeAvailability: TimeAvailability) {
            const { error } = await supabase
                .from("time_availability")
                .insert(timeAvailability)
            if (error) {
                console.log("error")
                console.log(error)
            }
        },

        async updateTimeAvailability(timeAvailability: TimeAvailability) {
            const { error } = await supabase
                .from("time_availability")
                .update(timeAvailability)
                .eq("id", timeAvailability.id)
        },

        async deleteTimeAvailability(timeAvailabilityID: number) {
            const { error } = await supabase
                .from("time_availability")
                .delete()
                .eq("id", timeAvailabilityID)
        },

        getTimeAvailabilityByID(TimeAvailabilityID: number): TimeAvailability | null {
            if (this.timeAvailabilities && this.timeAvailabilities.length > 0) {
                this.timeAvailabilities.forEach((TimeAvailability) => {
                    if (TimeAvailability.id == TimeAvailabilityID) {
                        return TimeAvailability
                    }
                })
            }
            return null
        }
    },
    getters: {
        getTimeAvailabilities(): TimeAvailability[]{
            return this.timeAvailabilities;
        },


    }
})
