<template>
    <div>
        <v-card>
            <v-navigation-drawer color="#1ED1B1">
                <v-list >
                    <NuxtLink :to="route.path" v-for="route in inMenuRoutes" style="text-decoration: none">
                        <v-list-item :prepend-icon="route.meta.icon" class="text-white">
                            {{ route.name }}
                        </v-list-item>
                    </NuxtLink>
                </v-list>
            </v-navigation-drawer>
        </v-card>
        <slot />
    </div>
</template>

<script setup lang="ts">
definePageMeta({})
const routes = useRouter().getRoutes()
const inMenuRoutes = routes.filter((route) => !route.meta.excludeFromMenu)

</script>

<style scoped>

</style>