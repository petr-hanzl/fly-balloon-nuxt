import { defineStore } from 'pinia'
import supabase from '~/supabase/client'
import { Pilot } from '~/types/collection'

export const usePilotStore = defineStore('pilotStore', {
    state: () => ({
        pilots: [] as Pilot[],

    }),
    actions: {
        async fetchAllPilots (force: boolean) {
            // do we need to fetch?
            if (!force && this.pilots && this.pilots.length > 0) {
                return
            }

            const { data, error } = await supabase
                .from('pilots')
                .select()
            if (error) {
                console.log('pilot store err')
                console.log(error)
            }

            if (data) {
                this.pilots = data
            }
        },

        async createPilot (pilot: Pilot) {
            const { error } = await supabase
                .from('pilots')
                .insert(pilot)
            if (error) {
                console.log('pilot store err')
                console.log(error)
            }
        },

        async updatePilot (pilot: Pilot) {
            const { error } = await supabase
                .from('pilots')
                .update(pilot)
                .eq('id', pilot.id)
        },

        async deletePilot (pilotID: number) {
            const { error } = await supabase
                .from('pilots')
                .delete()
                .eq('id', pilotID)
        },

        getPilotByID (pilotID: number): Pilot | null {
            if (this.pilots && this.pilots.length > 0) {
                this.pilots.forEach((pilot) => {
                    if (pilot.id == pilotID) {
                        return pilot
                    }
                })
            }
            return null
        },


    },
    getters: {
        getPilots (): Pilot[] {
            return this.pilots
        },

    }
})
