import { defineStore } from 'pinia'
import supabase from '~/supabase/client'
import { Driver } from '~/types/collection'

export const useDriverStore = defineStore('driverStore', {
    state: () => ({
        drivers: [] as Driver[],

    }),
    actions: {
        async fetchAllDrivers (force: boolean) {
            // do we need to fetch?
            if (!force && this.drivers && this.drivers.length > 0) {
                return
            }

            const { data, error } = await supabase
                .from('drivers')
                .select('*, extended_users(*)')
            if (error) {
                console.log('driver store err')
                console.log(error)
            }

            if (data) {
                this.drivers = data
                console.log(this.drivers)
            }
        },

        async createDriver (driver: Driver) {
            const { error } = await supabase
                .from('drivers')
                .insert(driver)
            if (error) {
                console.log('error')
                console.log(error)
            }
        },

        async updateDriver (driver: Driver) {
            const { error } = await supabase
                .from('drivers')
                .update(driver)
                .eq('id', driver.id)
        },

        async deleteDriver (driverID: number) {
            const { error } = await supabase
                .from('drivers')
                .delete()
                .eq('id', driverID)
        },

        getDriverByID (driverID: number): Driver | null {
            if (this.drivers && this.drivers.length > 0) {
                this.drivers.forEach((driver) => {
                    if (driver.id == driverID) {
                        return driver
                    }
                })
            }
            return null
        },


    },
    getters: {
        getDrivers (): Driver[] {
            return this.drivers
        },

    }
})
