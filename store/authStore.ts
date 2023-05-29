import {defineStore} from "pinia";
import supabase from "~/supabase/client";


export const useAuthStore = defineStore("authStore", {
    state: () => ({
        currentUser: {} as any

    }),
    actions: {
        async login(email: string, password: string) {
            const{ data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            })

            if (error) {
                console.log("error login")
                console.log(error)
            }
            if (data) {
                console.log("data login")
                console.log(data)
                this.currentUser = data.user
            }
        }
    },
    getters: {

    }
})
