import {useAuthStore} from "~/store/authStore";

export default defineNuxtRouteMiddleware((to) => {
    // const userStore = useAuthStore() todo uncomment
    //
    // if (!userStore.isLoggedIn && to.path != "/") {
    //     return navigateTo({path: "/"})
    // }
})
