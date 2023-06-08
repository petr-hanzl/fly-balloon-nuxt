import { defineStore } from 'pinia'
import { User } from '@supabase/gotrue-js'
import supabase from '~/supabase/client'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    currentUser: {} as User | null,
    isLoggedIn: false

  }),
  actions: {
    async login (email: string, password: string) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) {
        console.log('error login')
        console.log(error)
      }
      if (data) {
        console.log('data login')
        console.log(data)
        this.isLoggedIn = true
        this.currentUser = data.user
      }
    }
  },
  getters: {
    getCurrentLoggedUser (): User | null {
      return this.currentUser
    }

  }
})
