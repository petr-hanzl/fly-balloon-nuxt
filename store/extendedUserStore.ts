import {defineStore} from "pinia";
import supabase from "~/supabase/client";
import {ExtendedUser, ExtendedUserRole} from "~/types/collection";


export const useExtendedUserStore = defineStore("extendedUserStore", {
    state: () => ({
        extendedUsers: [] as ExtendedUser[],
        extendedUserRoles: [] as ExtendedUserRole[]

    }),
    actions: {
        // extended users
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

        async updateExtendedUser(extendedUser: ExtendedUser) {
            const { error } = await supabase
                .from("extended_users")
                .update(extendedUser)
                .eq("id", extendedUser.id)
        },

        async deleteExtendedUser(extendedUserID: number) {
            const { error } = await supabase
                .from("extended_users")
                .delete()
                .eq("id", extendedUserID)
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

        // extended user roles
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

        async createExtendedUserRole(extendedUserRole: ExtendedUserRole) {
            const { error } = await supabase
                .from("extended_user_roles")
                .insert(extendedUserRole)
            if (error) {
                console.log("error")
                console.log(error)
            }
        },

        async updateExtendedUserRole(extendedUserRole: ExtendedUserRole) {
            const { error } = await supabase
                .from("extended_user_roles")
                .update(extendedUserRole)
                .eq("id", extendedUserRole.id)
        },

        async deleteExtendedUserRole(extendedUserRoleID: number) {
            const { error } = await supabase
                .from("extended_user_roles")
                .delete()
                .eq("id", extendedUserRoleID)
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
