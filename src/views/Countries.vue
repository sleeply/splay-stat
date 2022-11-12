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
                        <p> {{ $t(`interval_date.${active}`) }} </p>
                        <Icon class="drop-ico">
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" d="M0.905273 1.12866L4.94824 5.04761L8.99121 1.12866" stroke="black"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </Icon>
                    </template>
                    <template #list="{ item }">
                        <span>{{ $t(`interval_date.${item}`) }}</span>
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
                <DropDown class="interval-visits-drop" :items="interval_visits" @setActive="getVisits" :active="activeVisit">
                    <template #active="{ active }">
                        <p> {{ $t(`interval_visits.${active}`) }} </p>
                        <Icon class="drop-ico">
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" d="M0.905273 1.12866L4.94824 5.04761L8.99121 1.12866" stroke="black"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </Icon>
                    </template>
                    <template #list="{ item }">
                        <span>{{ $t(`interval_visits.${item}`) }}</span>
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
            </div>
        </div>

    </div>
</template>

<script setup>
/* eslint-disable */
import DropDown from '@/components/DropDown.vue';
import { interval_date, interval_visits } from '@/utils/constants'
import Icon from '@/components/Icon.vue';
import { ref } from 'vue';

const activeDayInterval = ref(0)
const activeVisit = ref(0)

const getDay = (prop) => {
    activeDayInterval.value = prop
}

const getVisits = (prop) => {
    activeVisit.value = prop
}
</script>

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
            .interval-days-drop {
                width: 130px;
                background: var(--basic-light);
            }
            .interval-visits-drop{
                width: 195px;
                background: var(--basic-light);
            }

            .drop-ico {
                width: 0.625rem;
                height: 0.625rem;
            }
        }
    }
}
</style>