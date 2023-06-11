<template>
    <FlightList/>

</template>

<script setup lang="ts">

    definePageMeta({
        middleware: ['auth'],
        icon: 'mdi-cloud',
        name: "Flights",
    })


</script>


<style scoped>

</style>
