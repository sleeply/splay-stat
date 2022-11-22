<template>
    <div class="container s-container">
        <div class="chart-container">
            <canvas ref="myChart"></canvas>
        </div>
    </div>
</template>

<script setup>

import { ref, onMounted } from "vue";

const myChart = ref(null)

const data = {
    labels: ['10am', '11am', '12am', '01am', '02am', '03am', '04am', '05am', '06am', '07am'],
    datasets: [{
        label: 'test',
        data: [65, 59, 80, 81, 56, 55, 20, 80, 78, 100],
        borderColor: 'rgba(255, 91, 239, 1)',
        pointRadius: 8,
        pointHoverRadius: 8,
        pointBackgroundColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.1

    }]
}


const plugins = {
    tooltip: {
        callbacks: {
            title: (event) => {
                console.log(event)

            },

        },
        backgroundColor: "rgba(3, 2, 41, 1)",
        padding: 15,
    }
    // tooltip: {
    //     callbacks: {
    //         // labelColor: function (context) {
    //         //     console.log(context)
    //         //     return {
    //         //         borderColor: 'rgb(0, 0, 255)',
    //         //         backgroundColor: 'rgb(255, 0, 0)',
    //         //         borderWidth: 2,
    //         //         borderDash: [2, 2],
    //         //         borderRadius: 2,
    //         //     };
    //         // },
    //     }
    // }
}

const options = {
    plugins: plugins,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    // stepped: false,
}

const loadChart = () => {
    /* eslint-disable */
    new Chart(myChart.value, {
        type: 'line',
        data: data,
        options: options,
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
    // width: 55.81rem;
    // height: 20.75rem;
    // margin: auto;
}
</style>