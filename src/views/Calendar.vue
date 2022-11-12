<template>
    <div class="splay-calendar">
        <div class="splay-calendar-header" v-for="(item, index) in calendar" :key="index">
            <div class="flex">
                <div class="name">{{ item.year }}</div>
                <div class="handle-change-ico">
                    <div class="ico-size">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.2"
                                d="M0.295373 3.17879C0.340575 3.14093 0.511252 2.97902 0.670239 2.84583C1.60234 2.00821 4.0339 0.637195 5.30658 0.218709C5.49985 0.151464 5.9885 0.00914001 6.24959 -7.49289e-08C6.49976 -6.422e-08 6.73824 0.0470061 6.96581 0.142324C7.24949 0.275508 7.47706 0.485078 7.60175 0.732513C7.68203 0.904216 7.80672 1.41802 7.80672 1.42716C7.93142 1.98928 8 2.90263 8 3.91196C8 4.87363 7.93142 5.74977 7.82932 6.32037C7.81763 6.32951 7.69294 6.96802 7.55655 7.18673C7.30638 7.58628 6.81773 7.83437 6.29479 7.83437L6.24959 7.83437C5.90901 7.82457 5.19279 7.57648 5.19279 7.56734C3.9887 7.14821 1.61325 5.84444 0.658549 4.97809C0.658549 4.97809 0.389674 4.75546 0.272772 4.6164C0.0904043 4.41662 2.90743e-07 4.16919 3.01788e-07 3.92175C3.14114e-07 3.64559 0.102095 3.38836 0.295373 3.17879Z"
                                fill="#030229" />
                        </svg>
                    </div>
                    <div class="ico-size">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.2"
                                d="M7.70463 4.65556C7.65942 4.69342 7.48875 4.85533 7.32976 4.98852C6.39766 5.82614 3.9661 7.19716 2.69342 7.61564C2.50015 7.68289 2.0115 7.82521 1.75041 7.83435C1.50024 7.83435 1.26176 7.78734 1.03419 7.69203C0.750511 7.55884 0.522942 7.34927 0.398246 7.10184C0.317974 6.93013 0.193278 6.41633 0.193278 6.40719C0.0685827 5.84507 1.29561e-07 4.93172 1.74612e-07 3.92239C2.17537e-07 2.96072 0.0685828 2.08458 0.170677 1.51398C0.182368 1.50484 0.307063 0.866335 0.443449 0.647625C0.693619 0.248073 1.18227 -1.52082e-05 1.70521 -1.51858e-05L1.75041 -1.51839e-05C2.09099 0.00977811 2.80721 0.257867 2.80721 0.267007C4.0113 0.686145 6.38675 1.98991 7.34145 2.85626C7.34145 2.85626 7.61033 3.07889 7.72723 3.21795C7.9096 3.41773 8 3.66516 8 3.9126C8 4.18876 7.89791 4.44599 7.70463 4.65556Z"
                                fill="#030229" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="name">{{ $t(`months.${item.monthName}`) }}</div>
                <div class="handle-change-ico">
                    <div class="ico-size">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.2"
                                d="M0.295373 3.17879C0.340575 3.14093 0.511252 2.97902 0.670239 2.84583C1.60234 2.00821 4.0339 0.637195 5.30658 0.218709C5.49985 0.151464 5.9885 0.00914001 6.24959 -7.49289e-08C6.49976 -6.422e-08 6.73824 0.0470061 6.96581 0.142324C7.24949 0.275508 7.47706 0.485078 7.60175 0.732513C7.68203 0.904216 7.80672 1.41802 7.80672 1.42716C7.93142 1.98928 8 2.90263 8 3.91196C8 4.87363 7.93142 5.74977 7.82932 6.32037C7.81763 6.32951 7.69294 6.96802 7.55655 7.18673C7.30638 7.58628 6.81773 7.83437 6.29479 7.83437L6.24959 7.83437C5.90901 7.82457 5.19279 7.57648 5.19279 7.56734C3.9887 7.14821 1.61325 5.84444 0.658549 4.97809C0.658549 4.97809 0.389674 4.75546 0.272772 4.6164C0.0904043 4.41662 2.90743e-07 4.16919 3.01788e-07 3.92175C3.14114e-07 3.64559 0.102095 3.38836 0.295373 3.17879Z"
                                fill="#030229" />
                        </svg>
                    </div>
                    <div class="ico-size">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.2"
                                d="M7.70463 4.65556C7.65942 4.69342 7.48875 4.85533 7.32976 4.98852C6.39766 5.82614 3.9661 7.19716 2.69342 7.61564C2.50015 7.68289 2.0115 7.82521 1.75041 7.83435C1.50024 7.83435 1.26176 7.78734 1.03419 7.69203C0.750511 7.55884 0.522942 7.34927 0.398246 7.10184C0.317974 6.93013 0.193278 6.41633 0.193278 6.40719C0.0685827 5.84507 1.29561e-07 4.93172 1.74612e-07 3.92239C2.17537e-07 2.96072 0.0685828 2.08458 0.170677 1.51398C0.182368 1.50484 0.307063 0.866335 0.443449 0.647625C0.693619 0.248073 1.18227 -1.52082e-05 1.70521 -1.51858e-05L1.75041 -1.51839e-05C2.09099 0.00977811 2.80721 0.257867 2.80721 0.267007C4.0113 0.686145 6.38675 1.98991 7.34145 2.85626C7.34145 2.85626 7.61033 3.07889 7.72723 3.21795C7.9096 3.41773 8 3.66516 8 3.9126C8 4.18876 7.89791 4.44599 7.70463 4.65556Z"
                                fill="#030229" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <div class="splay-calendar-months-short">
            <span>Пн</span>
            <span>Вт</span>
            <span>Ср</span>
            <span>Чт</span>
            <span>Пт</span>
            <span>Сб</span>
            <span>Вс</span>
        </div>

        <div class="splay-calendar-days">
            <div class="splay-calendar-dayof-month">
                <span>29</span>
                <span>30</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>
            <div class="splay-calendar-dayof-month">
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
                <span>11</span>
                <span>12</span>
            </div>
            <div class="splay-calendar-dayof-month">
                <span>13</span>
                <span>14</span>
                <span>15</span>
                <span>16</span>
                <span>17</span>
                <span>18</span>
                <span>19</span>
            </div>
            <div class="splay-calendar-dayof-month">
                <span>20</span>
                <span>21</span>
                <span>22</span>
                <span>23</span>
                <span>24</span>
                <span>25</span>
                <span>26</span>
            </div>
            <div class="splay-calendar-dayof-month">
                <span>27</span>
                <span>28</span>
                <span>29</span>
                <span>30</span>
                <span>31</span>
                <span>1</span>
                <span>2</span>
            </div>
        </div>

    </div>
</template>

<script setup>
/* eslint-disable */
import { reactive, ref, watch } from "vue";

import { addDays, getMonth, startOfWeek } from 'date-fns';
const monthNames = ["january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"
];
const calendar = reactive([{
    month: new Date().getMonth(),
    monthName: monthNames[new Date().getMonth()],
    year: new Date().getFullYear()
}])

const today = ref(new Date())
const firstDate = new Date(calendar.year, calendar.month);

const firstDateInCalendar = startOfWeek(firstDate, { weekStartsOn: start });
const weeks = ref([])
let hideOffsetDates = false
const addDaysToWeek = () => {
    const days = getWeekDays(new Date(), calendar.monthNames, hideOffsetDates);
    // dates.value
    weeks.value.push({ days });
    console.log(firstDateInCalendar)
}

const getWeekDays = () => {

}
addDaysToWeek()
</script>

<style lang="scss" scoped>
.splay-calendar {
    background: #fff;
    padding: 16px 19px;
    max-width: 206px;
    border-radius: 7px;

    .splay-calendar-header {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .flex {
            display: flex;
            justify-content: space-between;
        }

        .name {
            font-size: 12px;
            line-height: 16px;
            font-weight: 600;
        }
    }

    .splay-calendar-month-full {
        margin-top: 0.6875rem;
    }

    .splay-calendar-months-short {
        display: flex;
        // gap: 10px;
        text-align: center;
        margin-top: 18px;
        margin-bottom: 12px;

        span {
            font-size: 12px;
            line-height: 16px;
            color: #030229;
            opacity: 0.7;
            font-weight: 600;
            flex-grow: 1;
            text-align: center;
            width: 24px;
            flex: 0 0 24px;
        }
    }

    .splay-calendar-days {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .splay-calendar-dayof-month {
        display: flex;
        justify-content: center;
        align-items: center;

        span {
            font-size: 12px;
            line-height: 16px;
            color: #030229;
            opacity: 0.7;
            font-weight: 600;
            flex-grow: 1;
            text-align: center;
            width: 35px;
            flex: 0 0 24px;

        }
    }


    .handle-change-ico {
        display: flex;
        align-items: center;
        gap: 10px;

        .ico-size {
            width: 0.5rem;
            height: 0.5rem;
            position: relative;
        }
    }
}
</style>