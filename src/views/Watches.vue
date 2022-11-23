<template>
    <div class="s-container watches">
        <div class="page-title">
            {{ $t("watches.title") }}
        </div>

        <div class="filters">
            <div class="left-holder">
                <div class="title bold text22 ">
                    {{ $t("countries.filter-title") }}
                </div>
                <div class="container">
                    <div class="flex">
                        <DropDown class="interval-days-drop" :items="interval_date" @setActive="getDay"
                            :active="activeDayInterval">
                            <template #active="{ active }">
                                <p class="text20 semi-bold">{{ $t(`interval_date.${active}`) }} </p>
                                <Icon class="drop-ico">
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" d="M0.905273 1.12866L4.94824 5.04761L8.99121 1.12866"
                                            stroke="black" stroke-linecap="round" stroke-linejoin="round" />
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
                        <DropDown class="interval-days-drop" :items="interval_date" @setActive="getDay"
                            :active="activeDayInterval">
                            <template #active="{ active }">
                                <p class="text20 semi-bold">{{ $t(`interval_date.${active}`) }} </p>
                                <Icon class="drop-ico">
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" d="M0.905273 1.12866L4.94824 5.04761L8.99121 1.12866"
                                            stroke="black" stroke-linecap="round" stroke-linejoin="round" />
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
                        <div class="area-name">
                            <input type="text" class="semi-bold text20" :placeholder="$t('watches.name')">
                            <Icon class="ico-size">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.5">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M2.07422 10.9427C2.07422 7.09339 5.2245 3.9729 9.11056 3.9729C10.9767 3.9729 12.7664 4.70722 14.086 6.01431C15.4056 7.3214 16.1469 9.0942 16.1469 10.9427C16.1469 14.792 12.9966 17.9125 9.11056 17.9125C5.2245 17.9125 2.07422 14.792 2.07422 10.9427ZM16.0305 16.5575L18.1261 18.2153H18.1625C18.5865 18.6352 18.5865 19.3161 18.1625 19.7361C17.7385 20.1561 17.0511 20.1561 16.6272 19.7361L14.8881 17.7828C14.7237 17.6205 14.6313 17.4001 14.6313 17.1702C14.6313 16.9403 14.7237 16.7198 14.8881 16.5575C15.2052 16.2489 15.7134 16.2489 16.0305 16.5575Z"
                                            fill="#200E32" />
                                    </g>
                                </svg>
                            </Icon>
                        </div>
                    </div>
                    <div class="flex">
                        <DropDown class="interval-days-drop" :items="interval_date" @setActive="getDay"
                            :active="activeDayInterval">
                            <template #active="{ active }">
                                <p class="text20 semi-bold">{{ $t(`interval_date.${active}`) }} </p>
                                <Icon class="drop-ico">
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" d="M0.905273 1.12866L4.94824 5.04761L8.99121 1.12866"
                                            stroke="black" stroke-linecap="round" stroke-linejoin="round" />
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
            </div>
            <div class="right-holder">
                <div class="title bold text22">
                    {{ $t("watches.type_subs") }}
                </div>
                <div class="flex">
                    <DropDown class="interval-days-drop" :items="interval_date" @setActive="getDay"
                        :active="activeDayInterval">
                        <template #active="{ active }">
                            <p class="text20 semi-bold">{{ $t(`interval_date.${active}`) }} </p>
                            <Icon class="drop-ico">
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" d="M0.905273 1.12866L4.94824 5.04761L8.99121 1.12866"
                                        stroke="black" stroke-linecap="round" stroke-linejoin="round" />
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

                    <div class="container">
                        <div class="item premium">
                            <div class="div"></div>
                            <span class="text20 semi-bold">Премиум</span>
                        </div>
                        <div class="item all">
                            <div class="div"></div>
                            <span class="text20 semi-bold">Относится к обеим</span>
                        </div>
                        <div class="item standart">
                            <div class="div"></div>
                            <span class="text20 semi-bold">Стандарт</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import DropDown from '@/components/DropDown.vue';
import { interval_date } from '@/utils/constants'
import Icon from '@/components/Icon.vue';
import { ref } from 'vue';
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";


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
.watches {
    .ico-size {
        width: 16px;
        height: 16px;
        flex: 0 0 16px;
        // opacity: 0;
    }

    .drop-ico {
        width: 10px;
        height: 10px;
    }

    .filters {
        display: flex;
        gap: 74px;

        .title {
            color: var(--darkness-opacity-07);
            margin-bottom: 21px;
        }

        P {
            color: var(--darkness-opacity-07);
        }

        span {
            color: var(--darkness-opacity-07);

        }

        .container {
            display: flex;
            flex-direction: column;
            gap: 25px;

        }

        .right-holder {
            .flex {
                gap: 85px;
            }
        }

        .item {
            display: flex;
            align-items: center;
            gap: 14px;

            div {
                width: 22px;
                height: 22px;
                border-radius: 7px;
            }

            &.premium {
                div {
                    background: var(--secondary-highlight);
                }
            }

            &.all {
                div {
                    background: var(--yellow);
                }
            }

            &.standart {
                div {
                    background: var(--orange);
                }
            }

        }

        .flex {
            display: flex;
            align-items: flex-start;
            gap: 21px;
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

        .area-name {
            width: 182px;
            height: 56px;
            background: var(--basic-light);
            border-radius: 14px;
            display: flex;
            align-items: center;
            padding: 0 11px 0 23px;

            input {
                width: 100%;
                outline: none;

                &::placeholder {
                    color: var(--darkness-opacity-07);
                }

            }
        }
    }


}
</style>