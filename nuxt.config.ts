export default defineNuxtConfig({
    modules: [
        '@invictus.codes/nuxt-vuetify',
        '@pinia/nuxt',
        '@nuxtjs/supabase',
    ],
    supabase: {

    },
    vuetify: {
        /* vuetify options */
        vuetifyOptions: {
            // @TODO: list all vuetify options
        },
        moduleOptions: {
            styles: true,
        }
    },
})
