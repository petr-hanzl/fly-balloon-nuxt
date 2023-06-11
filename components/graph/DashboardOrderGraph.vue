<template>
    <Line
        class="ma-4"
        :options="chartOptions"
        :data="chartData"
    />
</template>

<script setup lang="ts">
    import {useOrderStore} from "~/store/orderStore.ts";
    import { Line } from 'vue-chartjs'
    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        CategoryScale,
        LinearScale,
        LineElement, PointElement
    } from 'chart.js'

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    )

    const orderStore = useOrderStore()

    await orderStore.fetchAllOrders(false)


    // init the array
    let data = new Array<number>()
    for (let i = 0; i < 12; i++) {
        data.push(0)
    }


    let date: Date
    orderStore.getOrders.forEach((o) => {
        date = new Date(o.created_at)
        data[date.getMonth()] = data.at(date.getMonth()) + o.price

    })






    const chartData = {
        labels: [ 'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December' ],
        datasets: [
            {
                data: data
            }
        ]
    }
    const chartOptions = {
        type: "line",
        responsive: true
    }
</script>
