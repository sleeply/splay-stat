<template>
    <div class="stats-countries">
        <div class="page-title">
            {{ $t("countries.title") }}
        </div>

        <div class="filters-container">
            <div class="filter-title  bold">
                {{ $t("countries.filter-title") }}
            </div>

            <div class="filters">
                <DropDown class="interval-days-drop" :items="interval_date" @setActive="getDay"
                    :active="activeDayInterval">
                    <template #active="{ active }">
                        <p class="text-small semi-bold"> {{ $t(`interval_date.${active}`) }} </p>
                        <Icon class="drop-ico">
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" d="M0.905273 1.12866L4.94824 5.04761L8.99121 1.12866" stroke="black"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </Icon>
                    </template>
                    <template #list="{ item }">
                        <span class="text-small semi-bold">{{ $t(`interval_date.${item}`) }}</span>
                        <Icon class="ico-size">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M5.76246 10.5859L12.6311 3.71724C12.9435 3.40482 13.45 3.40482 13.7625 3.71724C14.0749 4.02966 14.0749 4.53619 13.7625 4.84861L5.76246 12.8486L1.76246 8.84861C1.45004 8.53619 1.45004 8.02966 1.76246 7.71724C2.07488 7.40482 2.58141 7.40482 2.89383 7.71724L5.76246 10.5859Z"
                                    fill="white" />
                            </svg>
                        </Icon>
                    </template>
                </DropDown>
                <DropDown class="interval-visits-drop" :items="interval_visits" @setActive="getVisits"
                    :active="activeVisit">
                    <template #active="{ active }">
                        <p class="text-small semi-bold"> {{ $t(`interval_visits.${active}`) }} </p>
                        <Icon class="drop-ico">
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" d="M0.905273 1.12866L4.94824 5.04761L8.99121 1.12866" stroke="black"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </Icon>
                    </template>
                    <template #list="{ item }">
                        <span class="text-small semi-bold">{{ $t(`interval_visits.${item}`) }}</span>
                        <Icon class="ico-size" :style="{
                        
                        }">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M5.76246 10.5859L12.6311 3.71724C12.9435 3.40482 13.45 3.40482 13.7625 3.71724C14.0749 4.02966 14.0749 4.53619 13.7625 4.84861L5.76246 12.8486L1.76246 8.84861C1.45004 8.53619 1.45004 8.02966 1.76246 7.71724C2.07488 7.40482 2.58141 7.40482 2.89383 7.71724L5.76246 10.5859Z"
                                    fill="white" />
                            </svg>
                        </Icon>
                    </template>
                </DropDown>

                <div class="date-at" style="position: relative;">
                    <Datepicker ref="picker" v-model="date" :year-picker="isYear" :month-picker="isMonth"
                        :enableTimePicker="false" autoApply locale="ru-Ru">
                        <!-- <template #action-select>

                            <p class="custom-select" @click="selectDate">awdawd</p>
                        </template> -->
                    </Datepicker>
                </div>
                <div class="date-at" style="position: relative;">
                    <Datepicker v-model="date" :year-picker="isYear" :month-picker="isMonth" :enableTimePicker="false"
                        autoApply locale="ru-Ru" :clearable="false" />
                </div>
            </div>
        </div>
        <table cellspacing="0" cellpadding="0">
            <tr>
                <th>Страна</th>
                <th>Регион</th>
                <th>Город</th>
                <th>Сессии</th>
                <th>Аккаунты</th>
                <th>Девайсы</th>
            </tr>
            <tr v-for="(item, index) in fakeList" :key="index">
                <td> {{ item.country }} </td>
                <td> {{ item.region }} </td>
                <td> {{ item.city }} </td>
                <td> {{ item.sessions }} </td>
                <td> {{ item.Accounts }} </td>
                <td> {{ item.devices }} </td>
            </tr>
            <tr class="total">
                <td>Суммирование:</td>
                <td>0</td>
                <td>0</td>
                <td>100 000 000</td>
                <td>100 000 000</td>
                <td>Ios</td>
            </tr>
        </table>
    </div>
</template>

<script setup>
/* eslint-disable */
import DropDown from '@/components/DropDown.vue';
import { interval_date, interval_visits } from '@/utils/constants'
import Icon from '@/components/Icon.vue';
import { ref } from 'vue';

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
// yearPicker, monthPicker, disabled ,yearRange, autoApply

const activeDayInterval = ref(0)
const activeVisit = ref(0)
const date = ref(new Date())
const isYear = ref(false)
const isMonth = ref(false)
const isDays = ref(false)
const picker = ref()

const getDay = (prop) => {
    activeDayInterval.value = prop
    console.log(prop)
    isYear.value = false
    isMonth.value = false
    if (activeDayInterval.value === 2) {
        return isYear.value = true
    }

    if (activeDayInterval.value = 3) {
        return isMonth.value = true
    }

}

const getVisits = (prop) => {
    activeVisit.value = prop
}

// Table
const fakeList = [
    {
        country: 'Узбекистан',
        region: 'Ташкентская обл.',
        city: 'Ташкент',
        sessions: '100 000 000 ',
        Accounts: '100 000 000',
        devices: 'Ios',
    },
    {
        country: 'Узбекистан',
        region: 'Ташкентская обл.',
        city: 'Ташкент',
        sessions: '100 000 000 ',
        Accounts: '100 000 000',
        devices: 'Ios',
    },
    {
        country: 'Узбекистан',
        region: 'Ташкентская обл.',
        city: 'Ташкент',
        sessions: '100 000 000 ',
        Accounts: '100 000 000',
        devices: 'Ios',
    },
    {
        country: 'Узбекистан',
        region: 'Ташкентская обл.',
        city: 'Ташкент',
        sessions: '100 000 000 ',
        Accounts: '100 000 000',
        devices: 'Ios',
    },
    {
        country: 'Узбекистан',
        region: 'Ташкентская обл.',
        city: 'Ташкент',
        sessions: '100 000 000 ',
        Accounts: '100 000 000',
        devices: 'Ios',
    },
    {
        country: 'Узбекистан',
        region: 'Ташкентская обл.',
        city: 'Ташкент',
        sessions: '100 000 000 ',
        Accounts: '100 000 000',
        devices: 'Ios',
    },
    {
        country: 'Узбекистан',
        region: 'Ташкентская обл.',
        city: 'Ташкент',
        sessions: '100 000 000 ',
        Accounts: '100 000 000',
        devices: 'Ios',
    },
]
</script>

<style lang="scss">
.dp__icon {
    display: none;
}

.dp__input {
    // padding: 0 !important;
    border: none;
    width: 8.13rem;
    padding: 0.6875rem 0.5rem 0.625rem 1.0625rem;
    border-radius: .625rem;
    font-size: 0.88rem;
    line-height: 1.19rem;
}
</style>

<style lang="scss" scoped>
.ico-size {
    width: 1rem;
    height: 1rem;
    // opacity: 0;
}

.stats-countries {
    width: 100%;
    padding-top: 1.9375rem;
    padding-bottom: 3.125rem;
    margin-left: 1.5625rem;

    svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .page-title {
        margin-bottom: 2.4375rem;
    }

    .filters-container {
        display: flex;
        flex-direction: column;

        .filter-title {
            color: var(--darkness-opacity-07);
        }

        .filters {
            margin-top: 1.25rem;
            display: flex;
            gap: 0.94rem;

            P {
                color: var(--darkness-opacity-07);
            }

            span {
                color: var(--darkness-opacity-07);

            }

            .interval-days-drop {
                width: 8.13rem;
                background: var(--basic-light);

                .choice {

                    &:hover,
                    &:focus {
                        span {
                            color: var(--basic-light);
                        }
                    }

                }
            }

            .interval-visits-drop {
                width: 12.19rem;
                background: var(--basic-light);

                .choice {

                    &:hover,
                    &:focus {
                        span {
                            color: var(--basic-light);
                        }
                    }

                }
            }

            .date-at {
                display: flex;
                align-items: center;
                justify-content: space-between;
                // padding: 0.6875rem 0.5rem 0.625rem 1.0625rem;
                // border-radius: 0.625rem;

                span {
                    // font-size: 14.08px;
                    // line-height: 19.04px;
                }
            }

            .drop-ico {
                width: 0.625rem;
                height: 0.625rem;
            }
        }
    }
}


table {
    width: 55.8125rem;
    margin: 0 auto;
    border: none;

}

th,
td {
    // border: 1px solid var(--darkness);
    color: var(--darkness);
    padding: 1.25rem 0.8125rem;

}

th {
    opacity: 0.7;
    text-align: left;
    font-size: 0.75rem;
    line-height: 1rem;
}

td {
    font-size: 0.875rem;
    line-height: 1.1875rem;
}

tr {
    width: 100%;
}

.total {
    text-align: left;
    border-radius: 0.625rem;

    td {
        vertical-align: middle;
        color: var(--basic-light);
        background: var(--highlight);
        font-weight: 600;

        &:first-child {
            border-radius: 0.625rem 0 0 0.625rem;
        }

        &:last-child {
            border-radius: 0 0.625rem 0.625rem 0;
        }

    }
}
</style>