<template>
    <div class="subs s-container">
        <div class="page-title">
            {{ $t("subs.title") }}
        </div>
        <div class="filters">
            <div class="filters-title bold text22">{{ $t("countries.filter-title") }}</div>
            <!-- <DropDown class="interval-days-drop" :items="interval_date" @setActive="getDay" :active="activeDayInterval">
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
            </DropDown> -->
            <div class="date-at" style="position: relative;">
                <Datepicker v-model="date__gte" @update:modelValue="updateModelValue" :enableTimePicker="false"
                    autoApply locale="ru-Ru" :clearable="false" :disable-month-year-select="(isDays)"
                    :month-picker="isMonth" />
            </div>
            <div class="date-at">
                <Datepicker v-model="date__lt" @update:modelValue="updateModelValue" :enableTimePicker="false" autoApply
                    locale="ru-Ru" :clearable="false" :disable-month-year-select="(isDays)" :month-picker="isMonth" />
            </div>
        </div>

        <table cellspacing="0">
            <tr>
                <th> Называние </th>
                <th> Кол-во покупок </th>
            </tr>
            <tr v-for="(sub, index) in subs.subs" :key="index">
                <td>
                    {{ sub.subscription }}
                </td>
                <td>
                    {{ sub.count }}
                </td>
            </tr>
        </table>

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
                    <h1 class="text16">{{ $t("subs.count_subs") }}</h1>
                    <span class="text25 extra-bold">{{ subs.subsTotal }}</span>
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
                    <h1 class="text16 ">{{ $t("subs.count_subs_period") }}</h1>
                    <span class="text25 extra-bold">{{ subs.count }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
/* eslint-disable */
import DropDown from '@/components/DropDown.vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { interval_date } from '@/utils/constants'
import Icon from '@/components/Icon.vue';
import { computed, ref } from 'vue';
import { hours } from '@/utils/constants';
import { useStore } from 'vuex';

const store = useStore()

const isMonth = ref(false)
const isDays = ref(false)
const isHours = ref(false)
const period = ref("hours")


const activeDayInterval = ref(0)
const date__gte = ref(new Date())
const date__lt = ref(new Date())

const getDay = (prop) => {
    isMonth.value = false
    isDays.value = false
    isHours.value = false

    if (interval_date[prop] === "month") {
        period.value = "months"
    }
    else if (interval_date[prop] === "days") {
        period.value = "days"
    }
    else if (interval_date[prop] === "hours") {
        period.value = "hours"
    }
}

const getUtcTime = (date, day) => {
    let getDay = day ? day : date.getDate()
    let dateStr = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + getDay + "T" + "00%3A00%3A00%2B05%3A00"
    return dateStr
}


const subs = computed(() => {
    let subs = store.getters["subs/subs"]
    let interval = {}
    let count = 0
    let subsTotal = store.getters["subs/subsTotal"]
    interval = {
        type: "hours",
        result: hours
    }
    for (const sub of subs) {
        count += sub?.count
    }
    return {
        subs: subs,
        interval,
        count,
        subsTotal
    }
})

const updateModelValue = () => {
    getData(getUtcTime(date__gte.value), getUtcTime(date__lt.value))
}

const getData = (start_at, end_at) => {
    store.commit("subs/flushSubs")

    store.dispatch("subs/getSubs", {
        date__gte: start_at,
        date__lte: end_at
    })
}

store.dispatch("subs/getSubsTotal", {})

getData('', getUtcTime(date__gte.value, new Date().getDate() + 1))

</script>
<style lang="scss">
.dp__icon {
    display: none;
}

.dp__input {
    // padding: 0 !important;
    border: none;
    width: 182px;
    font-size: 20px !important;
    line-height: 38px !important;
    border-radius: 7px;
    padding-left: 23px !important;
    padding-right: 11px !important;
    padding-top: 0;
    padding-bottom: 0;
}

.dp__input_icon_pad {
    height: 56px;

}
</style>


<style lang="scss" scoped>
.subs {
    width: 100%;

    .page-title {
        margin-bottom: 42px;
    }

    table {
        width: 100%;
        border: none;
        border-collapse: separate;
        border-spacing: 0 20px;

        thead {
            position: sticky;
            top: 0;
            background: var(--background);
            z-index: 20;
        }

        .header {
            display: flex;
            align-items: center;
            gap: 6px;

            .icon-size {
                width: 10px;
                height: 10px;
            }
        }

        .type {
            width: 22px;
            height: 22px;
            background-color: var(--secondary-highlight);
            border-radius: 7px;
            margin: auto;
        }

        th,
        td {
            color: var(--darkness);

            span {
                text-align: center;
            }

        }

        th {
            font-size: 20px;
            line-height: 28px;
            font-weight: 700;
            // opacity: 0.7;
            text-align: left;

            span {
                text-align: left;
            }
        }

        td {
            padding: 28px 0;
            font-size: 18px;
            line-height: 26px;
            font-weight: 600;
            vertical-align: middle;
            background: var(--basic-light);

            span {
                margin-left: 16px;
                font-size: 18px;
                line-height: 26px;
                font-weight: 600;
            }

            &:first-child {
                border-radius: 14px 0 0 14px;
                padding-left: 18px;
            }

            &:last-child {
                padding-right: 18px;
                border-radius: 0 14px 14px 0;
            }

        }

        tr {
            width: 100%;
        }

        .total {
            text-align: left;
            border-radius: 14px;

            td {
                vertical-align: middle;
                color: var(--basic-light);
                background: var(--highlight);
                font-weight: 600;

                &:first-child {
                    border-radius: 14px 0 0 14px;
                }

                &:last-child {
                    border-radius: 0 14px 14px 0;
                }

            }
        }

    }
}
</style>