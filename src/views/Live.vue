<template>
    <div class="live s-container">
        <div class="page-title">
            {{ $t("live.title") }}
        </div>
        <div class="filters">
            <div class="filters-title bold text22">{{ $t("countries.filter-title") }}</div>
            <DropDown class="interval-days-drop" :items="interval_date" @setActive="getDay" :active="activeDayInterval">
                <template #active="{ active }">
                    <p class="text20 semi-bold">{{ $t(`interval_date.${active}`) }} </p>
                    <Icon class="drop-ico">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M0.905273 1.12866L4.94824 5.04761L8.99121 1.12866" stroke="black"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Icon>
                </template>
                <template #list="{ item }">
                    <span class="text20 semi-bold"> {{ $t(`interval_date.${item}`) }}</span>
                    <Icon class="ico-size">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M5.76246 10.5859L12.6311 3.71724C12.9435 3.40482 13.45 3.40482 13.7625 3.71724C14.0749 4.02966 14.0749 4.53619 13.7625 4.84861L5.76246 12.8486L1.76246 8.84861C1.45004 8.53619 1.45004 8.02966 1.76246 7.71724C2.07488 7.40482 2.58141 7.40482 2.89383 7.71724L5.76246 10.5859Z"
                                fill="white" />
                        </svg>
                    </Icon>
                </template>
            </DropDown>
            <!-- <div class="date-at" style="position: relative;">
                <Datepicker v-model="date__gte" @update:modelValue="updateModelValue" :enableTimePicker="false"
                    autoApply locale="ru-Ru" :clearable="false" :disable-month-year-select="(isDays)"
                    :month-picker="isMonth" :month-change-on-arrows="false" :min-date="new Date('2022-12-4')">
                    <template #input-icon>
                        <svg></svg>
                    </template>
                </Datepicker>
            </div>
            <div class="date-at">
                <Datepicker v-model="date__lt" @update:modelValue="updateModelValue" :enableTimePicker="false" autoApply
                    locale="ru-Ru" :clearable="false" :month-picker="isMonth" :disable-month-year-select="(isDays)"
                    @invalidSelect="handleInvalidSelect" :min-date="new Date('2022-12-4') && new Date(`${date__gte.getFullYear()}-${date__gte.getMonth() + 1}-${date__gte.getDate() + 1}`)">
                    <template #input-icon>
                        <svg></svg>
                    </template>
                </Datepicker>
            </div> -->

            <div class="live-type">
                <span>
                    <div class="square tv"></div>
                    Sevimli Tv
                </span>
                <span>
                    <div class="square music"></div>
                    S Music
                </span>
                <span>
                    <div class="square kids"></div>
                    S Kids
                </span>
                <span>
                    <div class="square cinema"></div>
                    S Cinema
                </span>
            </div>
        </div>

        <Chart :data="list.model" :interval="list.interval" :colors="list.colors" />
        <div class="footer">
            <div class="count">
                <Icon class="count-icon">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="50" rx="25" fill="#EFF5FF" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M16 16H34C35.1046 16 36 16.8954 36 18V32C36 33.1046 35.1046 34 34 34H16C14.8954 34 14 33.1046 14 32V18C14 16.8954 14.8954 16 16 16ZM16 18V32H34V18H16ZM20 30H22V24H20V30ZM26 30H24V20H26V30ZM28 30H30V23H28V30Z"
                            fill="#5B93FF" />
                    </svg>
                </Icon>
                <div class="content">
                    <h1 class="text16">{{ $t("live.count_all") }}</h1>
                    <span class="text25 extra-bold">1000</span>
                </div>
            </div>
            <div class="count">
                <Icon class="count-icon">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="50" rx="25" fill="#FFF7E1" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M21 19H19V18H17V21H33V18H31V19H29V18H21V19ZM33 23H17V33H33V23ZM29 16H21V15H19V16H17C15.8954 16 15 16.8954 15 18V33C15 34.1046 15.8954 35 17 35H33C34.1046 35 35 34.1046 35 33V18C35 16.8954 34.1046 16 33 16H31V15H29V16ZM20 27V25H22V27H20ZM24 27H26V25H24V27ZM28 27V25H30V27H28ZM20 29V31H22V29H20ZM26 31H24V29H26V31Z"
                            fill="#FFC327" />
                    </svg>
                </Icon>
                <div class="content">
                    <h1 class="text16 ">{{ $t("live.count_period") }}</h1>
                    <span class="text25 extra-bold">10000</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
/* eslint-disable */
import { interval_date, hours } from '@/utils/constants'
import DropDown from '@/components/DropDown.vue';
// import Datepicker from '@vuepic/vue-datepicker';
// import '@vuepic/vue-datepicker/dist/main.css'
import Icon from '@/components/Icon.vue';
import { computed, ref } from 'vue';
import Chart from '@/components/Chart.vue';

const date__gte = ref(new Date())
const date__lt = ref(new Date())
const activeDayInterval = ref(0)
const isMonth = ref(false)
const isDays = ref(false)
const isHours = ref(false)


const list = computed(() => {
    let interval = {
        type: "hours",
        result: hours
    }

    let model = {
        s_music: [20, 12, 5, 0, 0, 4, 23, 50, 10 /* 10 */, 50, 70, 10, 100, 20, 15, 12, 30, 25, 1 /* 20 */, 12, 22, 33, 66, 80],
        s_Tv: [100, 22, 15, 20, 10, 14, 13, 20, 20 /* 10 */, 50, 80, 50, 90, 10, 159, 22, 50, 35, 2 /* 20 */, 22, 12, 63, 96, 10],
        s_Cinema: [300, 32, 25, 20, 30, 24, 323, 150, 20 /* 10 */, 70, 90, 100, 200, 30, 25, 52, 20, 75, 3 /* 20 */, 42, 32, 233, 6, 0],
        s_Kids: [0, 52, 65, 30, 40, 34, 23, 50, 20 /* 10 */, 10, 20, 30, 200, 30, 5, 2, 0, 2, 5 /* 20 */, 2, 3, 3, 6, 20],
    }
    let colors = {
        s_music: "#a04204",
        s_Tv: "#ffc400",
        s_Cinema: "#f58637",
        s_Kids: "#5d9ed6",
    }

    return {
        interval,
        model,
        colors
    }

})

const handleInvalidSelect = (date) => {
    console.log(date)
}

const updateModelValue = () => {
    console.log(date__gte.value)
}
const getDay = () => {
    isHours.value = false
    isMonth.value = false
    isDays.value = false

}
</script>


<style lang="scss">
.dp__icon {
    // display: none;
}

// .dp__input {
//     border: none;
//     width: 182px;
//     font-size: 20px !important;
//     line-height: 38px !important;
//     border-radius: 7px;
//     padding-left: 23px !important;
//     padding-right: 11px !important;
//     padding-top: 0;
//     padding-bottom: 0;
// }

// .dp__input_icon_pad {
//     height: 56px;

// }
</style>


<style lang="scss" scoped>
.live {
    .page-title {
        margin-bottom: 42px;
    }

    .filters {

        .live-type {
            display: flex;
            align-items: center;
            gap: 10px;

            span {
                display: flex;
                align-items: center;
                font-weight: 600;
                font-size: 18px;
                line-height: 26px;
                gap: 10px;

                .square {
                    width: 20px;
                    height: 20px;
                    background: var(--yellow);
                    border-radius: 5px;

                    &.music {
                        background: var(--brown);
                    }

                    &.kids {
                        background: var(--dark-grey);
                    }

                    &.kids {
                        background: var(--cornflowerblue);
                    }

                    &.cinema {
                        background: var(--orange);
                    }
                }
            }
        }
    }
}
</style>