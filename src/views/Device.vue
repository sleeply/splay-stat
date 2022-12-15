<template>
    <div class="stats-countries s-container">
        <div class="page-title">
            {{ $t("device.title") }}
        </div>

        <div class="filters-container">
            <div class="filter-title  bold text22">
                {{ $t("countries.filter-title") }}
            </div>

            <div class="filters">
                <!-- <div class="date-at" style="position: relative;">
                    <Datepicker ref="picker" v-model="date__gte" @update:model-value="refreshData" :clearable="false"
                        :enableTimePicker="false" autoApply locale="ru-Ru"
                        :min-date="new Date(`${date__gte.getFullYear()}-${date__gte.getMonth() + 1}-4`)">
                        <template #input-icon>
                            <svg></svg>
                        </template>
                    </Datepicker>
                </div>
                <div class="date-at" style="position: relative;">
                    <Datepicker v-model="date__lt" @update:model-value="refreshData" :enableTimePicker="false" autoApply
                        :clearable="false" locale="ru-Ru"
                        :min-date="new Date(`${date__gte.getFullYear()}-${date__gte.getMonth() + 1}-${date__gte.getDate() + 1}`)">
                        <template #input-icon>
                            <svg></svg>
                        </template>
                    </Datepicker>
                </div> -->

                <div class="date-at">
                    <input v-model="date__gte" @input="refreshData" type="date" onkeydown="return false" lang="ru-Ru">
                </div>
                <div class="date-at">
                    <input v-model="date__lt" @input="refreshData" type="date" :min="date__gte" onkeydown="return false">
                </div>
            </div>
        </div>

        <table>
            <tr>
                <th> OS девайс </th>
                <th> Web </th>
                <th> Узбекистан </th>
                <th> Другие Страны </th>
                <!-- <th> Посещение </th> -->
            </tr>
            <template v-for="item in Object.keys(list.s_table)" :key="item">
                <tr>
                    <td> {{ item.split("_")[0] }} </td>
                    <td> {{ item.split("_")[1] }} </td>
                    <td> {{ list.s_table?.[item].UZ }} </td>
                    <td>{{ list.s_table?.[item]?.other }} </td>
                </tr>
            </template>

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
                    <h1 class="text16">{{ $t("device.count_of_visits") }}</h1>
                    <span class="text25 extra-bold">{{ list.total }}</span>
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
                    <h1 class="text16 ">{{ $t("device.selectedTimeVisits") }}</h1>
                    <span class="text25 extra-bold"> {{ list.count }} </span>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
/* eslint-disable */
import Icon from '@/components/Icon.vue';
import { computed, onMounted, ref } from 'vue';
// import Datepicker from '@vuepic/vue-datepicker';
// import '@vuepic/vue-datepicker/dist/main.css'
import { useStore } from 'vuex';

const date__gte = ref(new Date())
const date__lt = ref(new Date())
const picker = ref()
const store = useStore()

const list = computed(() => {
    let devices = store.getters["device/devices"]
    let total = store.getters["device/total"]
    let s_table = {}
    let count = 0
    if (devices.length > 0) {
        for (const item of devices) {
            let my_key = `${item.os_type}_${item.device_type}`
            try {
                count += item.sessions

                if (my_key in s_table) {
                    if (item.country === "UZ") {
                        s_table[my_key].UZ += item.sessions
                    }
                    else {
                        s_table[my_key].other += item.sessions
                    }
                }
                else {
                    s_table = {
                        ...s_table,
                        [my_key]: {
                            UZ: item.country === "UZ" ? item.sessions : 0,
                            other: item.country !== "UZ" ? item.sessions : 0
                        }
                    }
                }
            }
            catch (e) {
                console.log('err', e)
                count = 0
            }
        }
    }

    return {
        devices,
        s_table,
        count,
        total
    }
})

// const getUtcTime = (date, day) => {
//     let getDay = day ? day : date.getDate()
//     let dateStr = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + getDay + "T" + "00%3A00%3A00%2B05%3A00"
//     return dateStr
// }

const getUtcTime = (date, day) => {
    let my_date = new Date(date)
    let getDay = day ? day : my_date.getDate()
    let dateStr = my_date.getFullYear() + "-" + (my_date.getMonth() + 1) + "-" + getDay + "T" + "00%3A00%3A00%2B05%3A00"
    return dateStr
}

const getData = () => {
    store.dispatch("device/getDevices", {
        cb: () => { }
    })

    store.dispatch("device/getDevicesTotal", {})
}

const refreshData = () => {
    console.log("PNOI")
    store.commit("device/flushDevices")
    store.dispatch("device/getDevices", {
        created_at__gte: getUtcTime(date__gte.value),
        created_at__lt: getUtcTime(date__lt.value)
    })

}

onMounted(() => {
    getData()
})
</script>

<style lang="scss" scoped>
.ico-size {
    width: 16px;
    height: 16px;
    flex: 0 0 16px;
    // opacity: 0;
}

.count-icon {
    width: 70px;
    height: 70px;
    flex: 0 0 70px;
}

.stats-countries {

    svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .page-title {
        // margin-bottom: 39px;
        margin-bottom: 54px;
    }

    .filters-container {
        display: flex;
        flex-direction: column;

        .filter-title {
            color: var(--darkness-opacity-07);
        }

        .filters {
            margin-top: 20px;
            display: flex;
            align-items: center;
            gap: 21px;
            margin-bottom: 54px;

            P {
                color: var(--darkness-opacity-07);
            }

            span {
                color: var(--darkness-opacity-07);

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

            .interval-visits-drop {
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

            .date-at {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .drop-ico {
                width: 10px;
                height: 10px;
            }
        }
    }

    .footer {
        display: flex;
        align-items: flex-start;
        gap: 17px;

        span {
            margin-top: 6px;
            display: block;
        }

        .count {
            display: flex;
            align-items: center;
            max-width: 402px;
            height: 100%;
            background: var(--basic-light);
            // padding: 19px 10px 19px 25px;
            padding: 27px 11px 27px 35px;
            border-radius: 14px;
            margin-top: 19px;

            .content {
                margin-left: 12px;
            }
        }
    }
}
</style>