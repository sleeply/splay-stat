<template>
    <div class="s-container">
        <div class="page-title">{{ $t("regions.title") }}</div>
        <div class="filters">
            <div class="left-holder flex">
                <div class="title bold text22">Фильтр:</div>

                <DropDown class="interval-days-drop" :items="interval_date" @setActive="getDay"
                    :active="activeDayInterval">
                    <template #active="{ active }">
                        <p class="text20 semi-bold">{{ $t(`interval_date.${active}`) }} </p>
                        <Icon class="drop-ico">
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" d="M0.905273 1.12866L4.94824 5.04761L8.99121 1.12866" stroke="black"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </Icon>
                    </template>
                    <template #list="{ item }">
                        <span class=" semi-bold text20"> {{ $t(`interval_date.${item}`) }}</span>
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
            </div>
            <div class="right-holder flex">
                <DropDown class="interval-days-drop" :items="interval_date" @setActive="getDay"
                    :active="activeDayInterval">
                    <template #active="{ active }">
                        <p class="text20 semi-bold">{{ $t(`interval_date.${active}`) }} </p>
                        <Icon class="drop-ico">
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" d="M0.905273 1.12866L4.94824 5.04761L8.99121 1.12866" stroke="black"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </Icon>
                    </template>
                    <template #list="{ item }">
                        <span class=" semi-bold text20"> {{ $t(`interval_date.${item}`) }}</span>
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
                <!-- <div class="date-at" style="position: relative;">
                    <Datepicker ref="picker" v-model="date" :year-picker="isYear" :month-picker="isMonth"
                        :enableTimePicker="false" autoApply locale="ru-Ru">
                    </Datepicker>
                </div>
                <div class="date-at" style="position: relative;">
                    <Datepicker ref="picker" v-model="date" :year-picker="isYear" :month-picker="isMonth"
                        :enableTimePicker="false" autoApply locale="ru-Ru">
                    </Datepicker>
                </div> -->
            </div>
        </div>
        <RegionsChart />

        <div class="regions">
            <div class="item" v-for="(item, index) in regions" :key="index">
                <div :style="{
                    background: item.color
                }"></div>
                <span class="text18 semi-bold"> {{ item[i18n.global.locale.value] }} </span>
            </div>
        </div>
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
                    <h1 class="text16">{{ $t("regions.count_visit_regions") }}</h1>
                    <span class="text25 extra-bold">122 648</span>
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
                    <h1 class="text16 ">{{ $t("regions.count_visit_selected_regions") }}</h1>
                    <span class="text25 extra-bold">122 648</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
/* eslint-disable */
import DropDown from '@/components/DropDown.vue';
import { interval_date, regions } from '@/utils/constants'
import Icon from '@/components/Icon.vue';
import { ref } from 'vue';
// import Datepicker from "@vuepic/vue-datepicker";
// import "@vuepic/vue-datepicker/dist/main.css";
import { useLanguage } from "@/utils/language"
import RegionsChart from "@/components/pages/RegionsChart.vue"

const { i18n } = useLanguage()

const activeDayInterval = ref(0)
const date = ref(new Date())
const isYear = ref()
const isMonth = ref()
const getDay  = () =>{}
</script>

<style lang="scss">
// .dp__icon {
//     display: none;
// }

// .dp__input {
//     // padding: 0 !important;
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
.filters {
    display: flex;
    justify-content: space-between;

    .title {
        color: var(--darkness-opacity-07);
    }

    .flex {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    .interval-days-drop {
        width: 182px;
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
}

.regions {
    display: flex;
    flex-wrap: wrap;
    column-gap: 135px;
    row-gap: 30px;
    margin-top: 49px;

    .item {
        display: flex;
        align-items: center;
        gap: 14px;

        div {
            width: 22px;
            height: 22px;
            border-radius: 7px;
        }

        span {
            color: var(--darkness-opacity-07);
        }
    }
}
</style>