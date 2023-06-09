import { defineStore } from 'pinia'
import supabase from '~/supabase/client'
import { ExtendedUser } from '~/types/collection'

export const useExtendedUserStore = defineStore('extendedUserStore', {
  state: () => ({
    extendedUsers: [] as ExtendedUser[],

  }),
  actions: {
    // extended users
    async fetchAllExtendedUsers (force: boolean) {
      // do we need to fetch?
      if (!force && this.extendedUsers && this.extendedUsers.length > 0) {
        return
      }

      const { data, error } = await supabase
        .from('extended_users')
        .select()
      if (error) {
        console.log('user store error')
        console.log(error)
      }

      if (data) {
        this.extendedUsers = data
      }
    },

    async createExtendedUser (extendedUser: ExtendedUser) {
      const { error } = await supabase
        .from('extended_users')
        .insert(extendedUser)
      if (error) {
        console.log('error')
        console.log(error)
      }
    },

    async updateExtendedUser (extendedUser: ExtendedUser) {
      const { error } = await supabase
        .from('extended_users')
        .update(extendedUser)
        .eq('id', extendedUser.id)
    },

    async deleteExtendedUser (extendedUserID: number) {
      const { error } = await supabase
        .from('extended_users')
        .delete()
        .eq('id', extendedUserID)
    },

    getExtendedUserByID (extendedUserID: number): ExtendedUser | null {
      if (this.extendedUsers && this.extendedUsers.length > 0) {
        this.extendedUsers.forEach((extendedUser) => {
          if (extendedUser.id == extendedUserID) {
            return extendedUser
          }
        })
      }
      return null
    },


  },
  getters: {
    getExtendedUsers (): ExtendedUser[] {
      return this.extendedUsers
    },

  }
})
