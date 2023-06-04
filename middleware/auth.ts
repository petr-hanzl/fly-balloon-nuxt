export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser()

    console.log("asd")
    console.log(user)

    if (!user.value) {

        navigateTo("/")
    } else if(to.path==="/"){
        navigateTo("/dashboard")
    }
})
