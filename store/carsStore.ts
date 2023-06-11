import { defineStore } from 'pinia'
import supabase from '~/supabase/client'
import { Car } from '~/types/collection'

export const useCarStore = defineStore('carStore', {
  state: () => ({
    cars: [] as Car[]

  }),
  actions: {
    async fetchAllCars (force: boolean) {
      // do we need to fetch?
      if (!force && this.cars && this.cars.length > 0) {
        return
      }

      const { data, error } = await supabase
        .from('cars')
        .select()
      if (error) {
        console.log('error')
        console.log(error)
      }

      if (data) {
        this.cars = data
      }
    },

    async createCar (car: Car) {
      const { error } = await supabase
        .from('extended_users')
        .insert(car)
      if (error) {
        console.log('error')
        console.log(error)
      }
    },

    async updateCar (car: Car) {
      const { error } = await supabase
        .from('cars')
        .update(car)
        .eq('id', car.id)
    },

    async deleteCar (carID: number) {
      const { error } = await supabase
        .from('cars')
        .delete()
        .eq('id', carID)
    },

    getCarByID (carID: number): Car | null {
      if (this.cars && this.cars.length > 0) {
        this.cars.forEach((car) => {
          if (car.id == carID) {
            return car
          }
        })
      }
      return null
    }
  },
  getters: {
    getCars (): Car[] {
      return this.cars
    }

  }
})
