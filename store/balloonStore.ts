import { defineStore } from 'pinia'
import supabase from '~/supabase/client'
import { Balloon } from '~/types/collection'

export const useBalloonStore = defineStore('balloonStore', {
  state: () => ({
    balloons: [] as Balloon[]

  }),
  actions: {
    async fetchAllBalloons (force: boolean) {
      // do we need to fetch?
      if (!force && this.balloons && this.balloons.length > 0) {
        return
      }

      const { data, error } = await supabase
        .from('balloons')
        .select()
      if (error) {
        console.log('error balloons')
        console.log(error)
      }

      if (data) {
        this.balloons = data
      }
    },

    async createBalloon (balloon: Balloon) {
      const { error } = await supabase
        .from('balloons')
        .insert(balloon)
      if (error) {
        console.log('error')
        console.log(JSON.stringify(error, null, 2))
      }
    },

    async updateBalloon (balloon: Balloon) {
      const { error } = await supabase
        .from('balloons')
        .update(balloon)
        .eq('id', balloon.id)
    },

    async deleteBalloon (balloonID: number) {
      const { error } = await supabase
        .from('balloons')
        .delete()
        .eq('id', balloonID)
    },

    getBalloonByID (balloonID: number): Balloon | null {
      // if (this.balloons && this.balloons.length > 0) {
      //     this.balloons.filter((balloon) => {
      //
      //         return balloon.id === balloonID
      //     })
      // }

      if (this.balloons && this.balloons.length > 0) {
        this.balloons.forEach((balloon) => {
          if (balloon.id == balloonID) {
            console.log(balloon)
            return balloon
          }
        })
      }
      return null
    },


  },
  getters: {
    getBalloons (): Balloon[] {
      return this.balloons
    },



  }
})
