<template>
    <div class="authed s-container">
        <div class="page-title">
            {{ $t("authed.title") }}
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
            <div class="date-at">
                <input v-model="date__gte" @input="updateModelValue" :type="isMonth ? 'month' : 'date'"
                    onkeydown="return false"
                    :max="`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`">
            </div>
            <div class="date-at"
                v-show="interval_date[activeDayInterval] !== 'hours' && interval_date[activeDayInterval] !== 'days'">
                <input v-model="date__lt" @input="updateModelValue" :type="isMonth ? 'month' : 'date'" :min="date__gte"
                    onkeydown="return false">
            </div>
        </div>
        <template v-if="(Object.keys(users.counts[0]).length > 0)">
            <Chart :data="users.counts" :interval="interval" :tooltipTitle="$t('chart.tooltip.authed')"
                :legend="false" />
        </template>
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
                    <h1 class="text16">{{ $t("authed.authedAllTime") }}</h1>
                    <span class="text25 extra-bold">{{ users.total }}</span>
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
                    <h1 class="text16 ">{{ $t("authed.selectedTimeAuthed") }}</h1>
                    <span class="text25 extra-bold">{{ users.selecTimeCount }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
/* eslint-disable */
import { interval_date } from '@/utils/constants'
import { useFormatter } from '@/utils/formatter'
import Icon from '@/components/Icon.vue';
import DropDown from '@/components/DropDown.vue';
import Chart from "@/components/Chart.vue"

import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { hours } from '@/utils/constants';

const store = useStore()
const { handleDate } = useFormatter()

const users = computed(() => {
    let users = store.getters["authed/users"]
    let total = store.getters["authed/total"]
    let counts = {
        0: []
    }
    let selecTimeCount = 0
    if (users.length > 0) {
        for (const item of users) {
            counts[0].push(item.counts)
            selecTimeCount += item.counts
        }
    }
    return {
        users,
        counts,
        selecTimeCount,
        total
    }
})

const interval = ref([])

const isMonth = ref(false)
const isDays = ref(false)
const isHours = ref(false)

const activeDayInterval = ref(0)

const pageSize = ref(25)
const period = ref('hours')
const view_period = ref("hours")

const filteredDays = ref([])

const date__gte = ref(new Date())
const date__lt = ref()
// date__gte.value = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
// date__lt.value = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`


const getUtcTime = (date, day) => {
    let my_date = new Date(date)
    let getDay = day ? day : my_date.getDate()
    let dateStr = my_date.getFullYear() + "-" + (my_date.getMonth() + 1) + "-" + getDay + "T" + "00%3A00%3A00%2B05%3A00"
    return dateStr
}

const getDay = async (prop) => {
    activeDayInterval.value = prop
    isHours.value = false
    isDays.value = false
    isMonth.value = false
    let year = new Date().getFullYear()
    let month = new Date().getMonth()
    let day
    store.commit("authed/flushUsers")
    if (interval_date[prop] === 'month') {
        period.value = "months"
        view_period.value = "months"
        isMonth.value = true
        day = 1
        let start_at = new Date(year, 0, day)
        let end_at = new Date()
        // date__gte.value = "2022-12-01"
        // date__gte.value = new Date(year, 0, day)
        // date__lt.value = new Date()
        getData(getUtcTime(start_at, day), getUtcTime(end_at))
    }
    else if (interval_date[prop] === 'days_period') {
        period.value = 'days'
        view_period.value = 'days_period'
        getData(getUtcTime(date__gte.value), getUtcTime(date__lt.value))
    }
    else if (interval_date[prop] === 'days') {
        pageSize.value = 32
        isMonth.value = true
        period.value = "days"
        view_period.value = "days"
        day = 1
        date__gte.value = new Date(year, month)
        // date__gte.value = new Date()
        date__lt.value = new Date(year, month + 1, 0)
        console.log(date__gte.value)
        getData(getUtcTime(date__gte.value, day), getUtcTime(date__lt.value))
    }
    else if (interval_date[prop] === 'hours') {
        period.value = "hours"
        view_period.value = "hours"
        date__gte.value = new Date()
        date__lt.value = new Date()
        getData(getUtcTime(date__gte.value), getUtcTime(date__lt.value, new Date().getDate() + 1))
    }
}

const getData = (start_at, end_at) => {
    store.commit("authed/flushUsers")
    store.dispatch("authed/getUsers", {
        date__gte: start_at,
        date__lt: end_at,
        period: period.value,
        pageSize: pageSize.value,
        cb: () => {
            filteredDays.value = []
            if (period.value === "hours") {
                interval.value = {
                    type: "hours",
                    result: hours
                }
                return
            }
            if (period.value === "days") {
                for (const item of users.value.users) {
                    let date = handleDate(item.date, 'm d y')
                    filteredDays.value.push(date)
                }
                interval.value = {
                    type: "days",
                    result: filteredDays.value.reverse()
                }
                return
            }

            for (const item of users.value.users) {
                let date = handleDate(item.date, 'm y')
                filteredDays.value.push(date)
            }
            interval.value = {
                type: "days",
                result: filteredDays.value.reverse()
            }
        }
    })
}

const updateModelValue = (date) => {
    let month = new Date(date__gte.value).getMonth()
    let year = new Date(date__gte.value).getFullYear()
    let day = 1
    if (view_period.value === "days") {
        date__lt.value = new Date(year, month + 1, 0)
    }
    else if (view_period.value === 'days_period') {
        pageSize.value = 1000
        let newDay = new Date(date__lt.value).getDate() + 1
        getData(getUtcTime(date__gte.value), getUtcTime(date__lt.value, newDay))
        return
    }
    else if (view_period.value === 'months') {
        let endMonth = new Date(date__lt.value).getMonth() + 1
        let newDate = new Date(year, endMonth, 0)
        getData(getUtcTime(date__gte.value), getUtcTime(newDate))
    }
    else if (view_period.value === "hours") {
        date__lt.value = ''
        getData(getUtcTime(date__gte.value), getUtcTime(date__gte.value, new Date(date__gte.value).getDate() + 1))
        return
    }
    getData(getUtcTime(date__gte.value), getUtcTime(date__lt.value))
}

onMounted(() => {
    store.dispatch("authed/getAuthTotal", {})
    getData(getUtcTime(date__gte.value, new Date().getDate() - 1), getUtcTime(date__gte.value, new Date().getDate() + 1))
})

</script>

<style lang="scss">
// .dp__icon {
//     display: none;
// }

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
.authed {
    .page-title {
        margin-bottom: 42px;
    }
}
</style>