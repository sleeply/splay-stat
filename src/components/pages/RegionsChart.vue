<template>
    <div>
        <canvas id="unique" ref="canvas"></canvas>
    </div>
</template>

<script setup>
import { onMounted, ref, defineProps } from "vue";

const canvas = ref()

const props = defineProps({
    data: {
        type: Object,
        default: () => { }
    },
    interval: {
        type: Object,
        default: () => { }
    }
})
let newCharTest;
/* eslint-disable */

const model = {
    2015: [20, 12, 5, 0, 0, 4],
    2016: [17, 26, 21, 41, 8, 23, 17, 26, 21, 41, 8, 23],
    2017: [23, 15, 8, 24, 38, 20, 23, 15, 8, 24, 38, 20]
};

const handleData = () => {
    for (const year in props.data) {
        let newDataset = {
            label: year,
            data: [],
            pointBackgroundColor: "#fff",
            pointBorderWidth: 3,
            pointRadius: 6,
            pointHoverRadius: 8,
            pointHoverBorderWidth: 5,
        };
        newDataset.label = year
        for (const value in props.data[year]) {
            newDataset.data.push(props.data[year][value]);
        }
        newCharTest.config.data.datasets.push(newDataset);
    }

    newCharTest.update();
}

const data = {
    labels: ['00:00', '00:01', '00:02', '00:003', '00:04', '03am', '04am', '05am', '06am', '07am'],
    datasets: [],
    responsive: true,
};

const plugins = {
    tooltip: {
        backgroundColor: "rgba(3, 2, 41, 1)",
        padding: 15,
        displayColors: false,
        titleFont: {
            size: 17,
            weight: "400",
            lineHeight: "1.2"
        },
        bodyFont: {
            size: 22,
            lineHeight: "1.2"
        },
        titleColor: "rgba(255, 255, 255, 0.8)",
        labelColor: "rgba(255, 255, 255, 1)",
        callbacks: {
            label: function () {
                return '2 678'
            },
            title: (event) => {
                console.log(event)
                return "Посещений"
            },
        },
    },
}

const config = {
    type: 'line',
    data,
    options: {
        animation: {
            // tension: {
            //     duration: 500,
            //     from: 0,
            //     to: 1,
            //     loop: true
            // }
        },
        scales: {
            x: {
                border: {
                    display: true
                },
                grid: {
                    display: true,
                    drawOnChartArea: false,
                    drawTicks: true,
                }
            },
            y: {
                border: {
                    display: false
                },

            },
        },
        plugins,
        elements: {
            line: {
                // backgroundColor: "#000",
                tension: 0.4
            }
        }
    }
}

onMounted(() => {
    /* eslint-disable */
    newCharTest = new Chart(canvas.value, config);

    handleData()
    // newCharTest = document.getElementById("unique")
})
</script>

<style lang="scss" scoped>

</style>