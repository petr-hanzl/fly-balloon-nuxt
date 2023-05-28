export default defineNuxtConfig({
    modules: [
        '@invictus.codes/nuxt-vuetify',
        '@pinia/nuxt',
        '@nuxtjs/supabaseClient',
        'nuxt-icon',
        '@nuxt/image',
        '@nuxt/image-edge',
        '@vee-validate/nuxt',
        'nuxt-font-loader'
    ],
    // supabaseClient: {
    //  todo doesnt work
    // },
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
