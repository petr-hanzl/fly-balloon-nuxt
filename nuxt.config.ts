


export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/supabase',
        // '@nuxt/image',
        'nuxt-icon' // https://icones.js.org/
    ],
    devServerHandlers: [],
    supabase: {

    },
    css: [
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css',
    ],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': true,
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
