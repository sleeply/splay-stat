<template>
    <div>
        <canvas id="unique" ref="canvas"></canvas>
    </div>
</template>

<script setup>
import { onMounted, ref, defineProps, computed } from "vue";

const canvas = ref()

const props = defineProps({
    data: {
        type: Array,
        default: () => { }
    },
    interval: {
        type: Object,
        default: () => {}
    }
})
const counts = computed(() => {
    let newCount = []
    for (const item of props.data) {
        newCount.push(item.counts)
    }
    return newCount
})

const data = {
    labels: props.interval.result,
    datasets: [{
        label: "ad",
        data: counts.value.reverse(),

    }],
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
            label: function (event) {
                let newLabel = event.dataset.data[event.dataIndex]
                console.log(newLabel)
                return newLabel
            },
            title: () => {
                return "Посещений"
            },
        },
    },
}

const config = {
    type: 'line',
    data,
    options: {
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
                tension: 0.3,
                borderWidth: 7.5,
                borderColor: function (context) {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart
                    if (!chartArea) {
                        return
                    }
                    return getGradient(ctx, chartArea)
                }
            },
            point: {
                borderWidth: 7,
                hoverBorderWidth: 7,
                backgroundColor: "white",
                pointRadius: 10,
                pointHoverRadius: 10,
                pointBorderColor: "rgba(174, 143, 247, 1)",
            }
        }
    }
}

let width, height, gradient;
const getGradient = (ctx, chartArea) => {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (!gradient || width !== chartWidth || height !== chartHeight) {
        width = chartWidth;
        height = chartHeight;
        gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0.4, "rgba(91, 196, 255, 1)");
        gradient.addColorStop(0.1, "rgba(255, 91, 239, 1)");
        // gradient.addColorStop(1, "rgba(255, 91, 239, 1)");
    }

    return gradient
}

onMounted(() => {
    /* eslint-disable */
    new Chart(canvas.value, config);
    // newCharTest = document.getElementById("unique")
})
</script>

<style lang="scss" scoped>

</style>