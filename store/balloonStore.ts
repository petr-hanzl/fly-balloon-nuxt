import { defineStore } from 'pinia'
import supabase from '~/supabase/client'
import {Balloon} from '~/types/collection'

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

    async fetchPagedBalloons (force: boolean, from, to: number) {
      // do we need to fetch?
      if (!force && this.balloons && this.balloons.length > 0) {
        return
      }

      const { data, error } = await supabase
          .from('balloons')
          .select("*", { count: "exact" })
          .order("id", { ascending: true })
          .range(from, to);
      if (error) {
        console.log('error balloons')
        console.log(error)
      }

      if (data) {
        this.balloons.push(data)
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

    async fetchBalloonByID(balloonID): Balloon | null {
      const {data, error} = await supabase
          .from('balloons')
          .select()
          .eq('id', balloonID)
      if (error) {
        console.log("fetch balloon by id err")
        console.log(JSON.stringify(error))

        return null
      }
      return data?.at(0)
    },


  },
  getters: {
    getBalloons (): Balloon[] {
      return this.balloons
    },



  }
})
