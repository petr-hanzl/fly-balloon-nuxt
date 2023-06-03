import {defineStore} from "pinia";
import supabase from "~/supabase/client";
import {ExtendedUser, ExtendedUserRole} from "~/types/collection";


export const useExtendedUserStore = defineStore("extendedUserStore", {
    state: () => ({
        extendedUsers: [] as ExtendedUser[],
        extendedUserRoles: [] as ExtendedUserRole[]

    }),
    actions: {
        async fetchAllExtendedUserRoles(force: boolean) {

            // do we need to fetch?
            if (!force && this.extendedUserRoles && this.extendedUserRoles.length > 0) {
                return
            }

            const { data, error } = await supabase
                .from("extended_user_roles")
                .select()
            if (error) {
                console.log("error")
                console.log(error)
            }

            if (data) {
                console.log("data")
                console.log(data)
                this.extendedUserRoles = data
            }

        },
        async fetchAllExtendedUsers(force: boolean) {

            // do we need to fetch?
            if (!force && this.extendedUsers && this.extendedUsers.length > 0) {
                return
            }

            const { data, error } = await supabase
                .from("extended_users")
                .select()
            if (error) {
                console.log("error")
                console.log(error)
            }

            if (data) {
                console.log("data")
                console.log(data)
                this.extendedUsers = data
            }
        },

        async createExtendedUser(extendedUser: ExtendedUser) {
            const { error } = await supabase
                .from("extended_users")
                .insert(extendedUser)
            if (error) {
                console.log("error")
                console.log(error)
            }
        },

        async createExtendedUserRole(extendedUserRole: ExtendedUserRole) {
            const { error } = await supabase
                .from("extended_users")
                .insert(extendedUserRole)
            if (error) {
                console.log("error")
                console.log(error)
            }
        },

        getExtendedUserByID(extendedUserID: number): ExtendedUser | null {
            if (this.extendedUsers && this.extendedUsers.length > 0) {
                this.extendedUsers.forEach((extendedUser) => {
                    if (extendedUser.id == extendedUserID) {
                        return extendedUser
                    }
                })
            }
            return null
        },
        getExtendedUserRoleByID(extendedUserRoleID: number): ExtendedUserRole | null {
            if (this.extendedUserRoles && this.extendedUserRoles.length > 0) {
                this.extendedUserRoles.forEach((extendedUserRole) => {
                    if (extendedUserRole.id == extendedUserRoleID) {
                        return extendedUserRole
                    }
                })
            }
            return null
        }
    },
    getters: {
        getExtendedUsers(): ExtendedUser[]{
            return this.extendedUsers;
        },
        getExtendedUserRoles(): ExtendedUserRole[]{
            return this.extendedUserRoles;
        }


    }
})
