import { defineStore } from 'pinia'
import supabase from '~/supabase/client'
import { Actuality, ActualityType } from '~/types/collection'

export const useActualityStore = defineStore('actualityStore', {
  state: () => ({
    actualities: [] as Actuality[],
    actualityTypes: [] as ActualityType[]

  }),
  actions: {
    async fetchAllActualities (force: boolean) {
      // do we need to fetch?
      if (!force && this.actualities && this.actualities.length > 0) {
        return
      }

      const { data, error } = await supabase
        .from('actualities')
        .select()
      if (error) {
        console.log('error')
        console.log(error)
      }

      if (data) {
        console.log('data')
        console.log(data)
        this.actualities = data
      }
    },

    async createActuality (actuality: Actuality) {
      const { error } = await supabase
        .from('actualities')
        .insert(actuality)
      if (error) {
        console.log('error')
        console.log(error)
      }
    },

    async updateActuality (actuality: Actuality) {
      const { error } = await supabase
        .from('actualities')
        .update(actuality)
        .eq('id', actuality.id)
    },

    async deleteActuality (actualityID: number) {
      const { error } = await supabase
        .from('actualities')
        .delete()
        .eq('id', actualityID)
    },

    getActualityByID (actualityID: number): Actuality | null {
      if (this.actualities && this.actualities.length > 0) {
        this.actualities.forEach((actuality) => {
          if (actuality.id == actualityID) {
            return actuality
          }
        })
      }
      return null
    },

    async fetchAllActualityTypes (force: boolean) {
      // do we need to fetch?
      if (!force && this.actualityTypes && this.actualityTypes.length > 0) {
        return
      }

      const { data, error } = await supabase
        .from('actuality_types')
        .select()

      if (error) {
        console.log('error')
        console.log(error)
      }

      if (data) {
        console.log('data')
        console.log(data)
        this.actualityTypes = data
      }
    },

    async createActualityType (actualityType: ActualityType) {
      const { error } = await supabase
        .from('actuality_types')
        .insert(actualityType)
      if (error) {
        console.log('error')
        console.log(error)
      }
    },

    getActualityTypeByID (actualityTypeID: number): ActualityType | null {
      if (this.actualityTypes && this.actualityTypes.length > 0) {
        this.actualities.forEach((actualityType) => {
          if (actualityType.id == actualityTypeID) {
            return actualityType
          }
        })
      }
      return null
    }
  },

  getters: {
    getActualities (): Actuality[] {
      return this.actualities
    },
    getActualityTypes (): ActualityType[] {
      return this.actualityTypes
    }

  }
})
