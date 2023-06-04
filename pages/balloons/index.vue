<template>
    <BalloonList/>
</template>

<script setup lang="ts">
    import BalloonList from "~/components/BalloonList.vue";
    definePageMeta({
        middleware: ["auth"]
    })

</script>

<style scoped>

</style>
