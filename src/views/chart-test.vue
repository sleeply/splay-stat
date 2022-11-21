<template>
    <div class="container">
        <div class="chart-container">
            <canvas ref="myChart"></canvas>
        </div>
    </div>
</template>

<script setup>

import { ref, onMounted } from "vue";

const myChart = ref(null)

const data = ref({
    labels: ['10am', '11am', '12am', '01am', '02am', '03am', '04am', '05am', '06am', '07am'],
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 20, 80, 78, 100],
        borderColor: 'rgb(75, 192, 192)',
        pointRadius: 8,
        pointHoverRadius: 8,
        pointBackgroundColor: "transparent",
        pointBorderWidth: 4,
        // pointBackgroundColor: "red"
        // pointBorderWidth: 20,
        // pointHoverBorderWidth: 20,
        // pointBorderColor: "red",
        // pointHoverBorderColor: "blue",
        // pointStyle:"circle",
        // pointBackgroundColor: "transparent"

    }]
})

const loadChart = () => {
    /* eslint-disable */
    new Chart(myChart.value, {
        type: 'line',
        data: data.value,
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            },
            tooltips: {
                mode: 'nearest',
                intersect: false
            },
            pointHitDetectionRadius: 1,
        },
    });
}

onMounted(() => {

    loadChart()
})
</script>

<style>
canvas {
    width: 100%;
    height: 100%;
}
</style>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.chart-container {
    width: 55.81rem;
    height: 20.75rem;
    margin: auto;
}
</style>