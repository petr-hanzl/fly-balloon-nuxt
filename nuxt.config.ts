


export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/supabase',
        // '@nuxt/image',
        'nuxt-icon'
    ],
    devServerHandlers: [],
    supabase: {

    },
    css: [
        'vuetify/lib/styles/main.sass',
        // '@mdi/font/css/materialdesignicons.min.css', todo this might be needed for material icons
    ],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
    // @ts-ignore
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
