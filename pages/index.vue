<template>
    <LoginForm/>
</template>

<script setup lang="ts">

    definePageMeta({
        middleware: ["auth"],
        excludeFromMenu: true,
        layout: 'auth'
    })

</script>

<style scoped>

</style>
