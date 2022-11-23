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
                <div class="date-at" style="position: relative;">
                    <Datepicker ref="picker" v-model="date" :year-picker="isYear" :month-picker="isMonth"
                        :enableTimePicker="false" autoApply locale="ru-Ru">
                    </Datepicker>
                </div>
                <div class="date-at" style="position: relative;">
                    <Datepicker ref="picker" v-model="date" :year-picker="isYear" :month-picker="isMonth"
                        :enableTimePicker="false" autoApply locale="ru-Ru">
                    </Datepicker>
                </div>
            </div>
        </div>

        <div class="regions">
            <div class="item" v-for="(item, index) in regions" :key="index">
                <div :style="{
                    background: item.color
                }"></div>
                <span class="text18 semi-bold"> {{ item[i18n.global.locale.value] }} </span>
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
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { useLanguage } from "@/utils/language"

const { i18n } = useLanguage()

const activeDayInterval = ref(0)
const date = ref(new Date())
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