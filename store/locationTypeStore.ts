import {defineStore} from "pinia";
import supabase from "~/supabase/client";
import {LocationType} from "~/types/collection";


export const useLocationTypeStore = defineStore("locationTypeStore", {
    state: () => ({
        locationTypes: [] as LocationType[]

    }),
    actions: {
        async fetchAllLocationTypes(force: boolean) {
            // do we need to fetch?
            if (!force && this.locationTypes && this.locationTypes.length > 0) {
                return
            }

            const { data, error } = await supabase
                .from("location_types")
                .select()
            if (error) {
                console.log("error")
                console.log(error)
            }

            if (data) {
                console.log("data")
                console.log(data)
                this.locationTypes = data
            }
        },
        getLocationTypeByID(locationTypeID: number): LocationType | null {
            if (this.locationTypes && this.locationTypes.length > 0) {
                this.locationTypes.forEach((locationType) => {
                    if (locationType.id == locationTypeID) {
                        return locationType
                    }
                })
            }
            return null
        }
    },
    getters: {
        getLocationTypes(): LocationType[]{
            return this.locationTypes;
        },


    }
})
