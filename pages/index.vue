<template>
    <LoginForm/>
</template>

<script setup lang="ts">

    definePageMeta({
        middleware: ["auth"],
        layout: 'auth'
    })

</script>

<style scoped>

</style>
