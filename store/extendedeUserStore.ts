import {defineStore} from "pinia";
import supabase from "~/supabase/client";
import {ExtendedUser, ExtendedUserRole} from "~/types/collection";


export const useExtendedUserStore = defineStore("extendedUserStore", {
    state: () => ({
        extendedUsers: [] as ExtendedUser[],
        extendedUserRoles: [] as ExtendedUserRole[]

    }),
    actions: {
        async fetchAllExtendedUsers(force: boolean) {

            // do we need to fetch?
            if (!force && this.extendedUserRoles && this.extendedUserRoles.length > 0) {
                return
            }

            const { data, error } = await supabase
                .from("extended_user_roles")
                .select("role, id, extended_users(*)")
            if (error) {
                console.log("error")
                console.log(error)
            }

            if (data) {
                console.log("data")
                // console.log(data)
                data.filter((element, index, array) => {
                    this.extendedUsers = element.extended_users
                    this.extendedUserRoles.push({id: element.id, role: element.role} as ExtendedUserRole)
                })
            }

        },
    },
    getters: {
        getExtendedUsers(): ExtendedUser[]{
            return this.extendedUsers;
        },


    }
})
