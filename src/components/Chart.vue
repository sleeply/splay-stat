<template>
    <div>
        <canvas id="unique" ref="canvas"></canvas>
    </div>
</template>

<script setup>
import { useLanguage } from "@/utils/language";
import { onMounted, ref, defineProps } from "vue";

/* eslint-disable */
const canvas = ref(null)

const { i18n } = useLanguage()
let newCharTest

const props = defineProps({
    data: {
        type: Object,
        default: () => { }
    },
    interval: {
        type: Object,
        default: () => { }
    },
    tooltipTitle: {
        type: String,
        default: ""
    }
})

const data = {
    labels: props.interval.result,
    datasets: [],
    responsive: true,
};


const handleData = () => {
    console.log(props.data)
    for (const year in props.data) {
        let newDataset = {
            label: "",
            data: [],
        };
        // newDataset.label = year
        for (const value in props.data[year]) {
            newDataset.data.push(props.data[year][value]);
        }
        newCharTest.config.data.datasets.push(newDataset);
    }

    newCharTest.update();
}

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
                console.log("POMOIOOI")
                // let newLabel = event.dataset.data[event.dataIndex]
                // return newLabel
            },
            title: () => {
                return props.tooltipTitle
            },
        },
    },
    legend: {
        display: false
    }
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
    }

    return gradient
}

onMounted(() => {
    /* eslint-disable */
    newCharTest = new Chart(document.getElementById("unique"), config);
    handleData()
})
</script>