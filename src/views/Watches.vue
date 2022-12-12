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
                        <DropDown class="interval-days-drop" :items="list.cats" @setActive="handleCatFilter"
                            :active="activeCat">
                            <template #active="{ active }">
                                <p class="text20 semi-bold" v-if="activeCat !== -1">{{ active?.name }} </p>
                                <p class="text20 semi-bold" v-else> {{ $t("watches.all") }} </p>
                                <Icon class="drop-ico">
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" d="M0.905273 1.12866L4.94824 5.04761L8.99121 1.12866"
                                            stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Icon>
                            </template>
                            <template #default>
                                <span class=" semi-bold text20"> {{ $t("watches.all") }}</span>
                                <Icon class="ico-size">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M5.76246 10.5859L12.6311 3.71724C12.9435 3.40482 13.45 3.40482 13.7625 3.71724C14.0749 4.02966 14.0749 4.53619 13.7625 4.84861L5.76246 12.8486L1.76246 8.84861C1.45004 8.53619 1.45004 8.02966 1.76246 7.71724C2.07488 7.40482 2.58141 7.40482 2.89383 7.71724L5.76246 10.5859Z"
                                            fill="white" />
                                    </svg>
                                </Icon>
                            </template>
                            <template #list="{ item }">
                                <span class=" semi-bold text20"> {{ item?.name }}</span>
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
                        <DropDown class="interval-days-drop" :items="list.sponsors" :active="activeSponsor"
                            @set-active="handleFilterSponsors">
                            <template #active="{ active }">
                                <p class="text20 semi-bold" v-if="activeSponsor !== -1">{{ active?.name }} </p>
                                <p class="text20 semi-bold" v-else> {{ $t("watches.all") }} </p>
                                <Icon class="drop-ico">
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" d="M0.905273 1.12866L4.94824 5.04761L8.99121 1.12866"
                                            stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Icon>
                            </template>
                            <template #default>
                                <span class=" semi-bold text20"> {{ $t("watches.all") }}</span>
                                <Icon class="ico-size">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M5.76246 10.5859L12.6311 3.71724C12.9435 3.40482 13.45 3.40482 13.7625 3.71724C14.0749 4.02966 14.0749 4.53619 13.7625 4.84861L5.76246 12.8486L1.76246 8.84861C1.45004 8.53619 1.45004 8.02966 1.76246 7.71724C2.07488 7.40482 2.58141 7.40482 2.89383 7.71724L5.76246 10.5859Z"
                                            fill="white" />
                                    </svg>
                                </Icon>
                            </template>
                            <template #list="{ item }">
                                <span class=" semi-bold text20"> {{ item?.name }}</span>
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
                            <input v-model="searchQuery" @input="handleSearch" type="text" class="semi-bold text20"
                                :placeholder="$t('watches.name')">
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
                        <DropDown class="interval-days-drop" :items="interval_date" :active="activeDayInterval">
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
                            <Datepicker ref="picker" v-model="date" :month-picker="isMonth" :enableTimePicker="false"
                                autoApply locale="ru-Ru">
                            </Datepicker>
                        </div>
                        <div class="date-at" style="position: relative;">
                            <Datepicker ref="picker" v-model="date" :month-picker="isMonth" :enableTimePicker="false"
                                autoApply locale="ru-Ru">
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
                    <DropDown class="interval-days-drop" :items="list.subs" @setActive="handleFilterSubs"
                        :active="activeSub">
                        <template #active="{ active }">
                            <!-- <p class="text20 semi-bold">{{ $t(`interval_date.${active}`) }} </p> -->
                            <p class="text20 semi-bold" v-if="activeSub !== -1">{{ active?.title }} </p>
                            <p class="text20 semi-bold" v-else> {{ $t("watches.all") }} </p>
                            <Icon class="drop-ico">
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" d="M0.905273 1.12866L4.94824 5.04761L8.99121 1.12866"
                                        stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Icon>
                        </template>
                        <template #default>
                            <span class=" semi-bold text20"> {{ $t("watches.all") }}</span>
                            <Icon class="ico-size">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M5.76246 10.5859L12.6311 3.71724C12.9435 3.40482 13.45 3.40482 13.7625 3.71724C14.0749 4.02966 14.0749 4.53619 13.7625 4.84861L5.76246 12.8486L1.76246 8.84861C1.45004 8.53619 1.45004 8.02966 1.76246 7.71724C2.07488 7.40482 2.58141 7.40482 2.89383 7.71724L5.76246 10.5859Z"
                                        fill="white" />
                                </svg>
                            </Icon>
                        </template>
                        <template #list="{ item }">
                            <span class=" semi-bold text20"> {{ item?.title }}</span>
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
        <!-- <WatchesTable /> -->
        <table cellspacing="0">
            <thead>
                <th class="text18">id &nbsp;</th>
                <th class="text18">Название фильма &nbsp;</th>
                <th class="text18">Тип &nbsp;</th>
                <th class="text18">Спонсор &nbsp;</th>
                <th class="text18">
                    <div class="header">
                        <span>Сред. время просмотра</span>
                        <icon class="icon-size">
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.01385 7.25664C3.97307 7.21773 3.79869 7.07082 3.65525 6.93398C2.75314 6.13169 1.27658 4.03876 0.825879 2.94332C0.753457 2.77696 0.600176 2.35636 0.590332 2.13164C0.590332 1.91631 0.640957 1.71104 0.743613 1.51517C0.887051 1.27099 1.11275 1.07511 1.37924 0.967784C1.56416 0.898691 2.11752 0.791361 2.12736 0.791361C2.73275 0.684031 3.71643 0.625 4.80346 0.625C5.83916 0.625 6.78275 0.684031 7.39728 0.771908C7.40713 0.78197 8.09479 0.889299 8.33033 1.00669C8.76064 1.22202 9.02783 1.64262 9.02783 2.09273V2.13164C9.01729 2.42479 8.7501 3.04126 8.74025 3.04126C8.28885 4.07766 6.88471 6.1223 5.95166 6.94404C5.95166 6.94404 5.71189 7.17547 5.56213 7.27609C5.34697 7.43306 5.08049 7.51087 4.814 7.51087C4.51658 7.51087 4.23955 7.423 4.01385 7.25664Z"
                                    fill="#030229" />
                            </svg>
                        </icon>
                        &nbsp;
                    </div>
                </th>
                <th class="text18">
                    <div class="header">
                        <span>Количество просмотров</span>
                        <icon class="icon-size">
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.01385 7.25664C3.97307 7.21773 3.79869 7.07082 3.65525 6.93398C2.75314 6.13169 1.27658 4.03876 0.825879 2.94332C0.753457 2.77696 0.600176 2.35636 0.590332 2.13164C0.590332 1.91631 0.640957 1.71104 0.743613 1.51517C0.887051 1.27099 1.11275 1.07511 1.37924 0.967784C1.56416 0.898691 2.11752 0.791361 2.12736 0.791361C2.73275 0.684031 3.71643 0.625 4.80346 0.625C5.83916 0.625 6.78275 0.684031 7.39728 0.771908C7.40713 0.78197 8.09479 0.889299 8.33033 1.00669C8.76064 1.22202 9.02783 1.64262 9.02783 2.09273V2.13164C9.01729 2.42479 8.7501 3.04126 8.74025 3.04126C8.28885 4.07766 6.88471 6.1223 5.95166 6.94404C5.95166 6.94404 5.71189 7.17547 5.56213 7.27609C5.34697 7.43306 5.08049 7.51087 4.814 7.51087C4.51658 7.51087 4.23955 7.423 4.01385 7.25664Z"
                                    fill="#030229" />
                            </svg>
                        </icon>
                        &nbsp;
                    </div>
                </th>
                <th class="text18">
                    <div class="header">
                        <span>Категория</span>
                        <icon class="icon-size">
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.01385 7.25664C3.97307 7.21773 3.79869 7.07082 3.65525 6.93398C2.75314 6.13169 1.27658 4.03876 0.825879 2.94332C0.753457 2.77696 0.600176 2.35636 0.590332 2.13164C0.590332 1.91631 0.640957 1.71104 0.743613 1.51517C0.887051 1.27099 1.11275 1.07511 1.37924 0.967784C1.56416 0.898691 2.11752 0.791361 2.12736 0.791361C2.73275 0.684031 3.71643 0.625 4.80346 0.625C5.83916 0.625 6.78275 0.684031 7.39728 0.771908C7.40713 0.78197 8.09479 0.889299 8.33033 1.00669C8.76064 1.22202 9.02783 1.64262 9.02783 2.09273V2.13164C9.01729 2.42479 8.7501 3.04126 8.74025 3.04126C8.28885 4.07766 6.88471 6.1223 5.95166 6.94404C5.95166 6.94404 5.71189 7.17547 5.56213 7.27609C5.34697 7.43306 5.08049 7.51087 4.814 7.51087C4.51658 7.51087 4.23955 7.423 4.01385 7.25664Z"
                                    fill="#030229" />
                            </svg>
                        </icon>
                        &nbsp;
                    </div>
                </th>
            </thead>
            <tr class="canscroll" v-for="(item) in list.content" :key="item">
                <td> {{ item.content_id }} </td>
                <td>
                    <div style="display: flex; align-items: center;">
                        <icon class="icon-size">
                            <svg width="43" height="43" viewBox="0 0 43 43" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="21.3716" cy="21.5625" r="21.0938" fill="#605BFF" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M11.8794 14.1797H24.5356C25.7006 14.1797 26.645 15.1241 26.645 16.2891V17.7464L32.9731 14.5824V28.5423L26.645 25.3783V26.8359C26.645 28.0009 25.7006 28.9453 24.5356 28.9453H11.8794C10.7144 28.9453 9.77002 28.0009 9.77002 26.8359V16.2891C9.77002 15.1241 10.7144 14.1797 11.8794 14.1797ZM26.645 23.0199L30.8637 25.1293V17.9954L26.645 20.1048V23.0199ZM11.8794 16.2891V26.8359H24.5356V16.2891H11.8794Z"
                                    fill="white" />
                            </svg>
                        </icon>
                        <span class="text20"> {{ item?.title }} </span>
                    </div>
                </td>
                <td>
                    <div class="type"></div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <template v-for="(cat, index) in list.cats" :key="index">
                    <td v-if="cat?.id === item?.category">
                        {{ cat?.name }}
                    </td>
                </template>
            </tr>
            <!-- <tr class="total">
                <td class="text20">Суммирование:</td>
                <td class="text20"></td>
                <td class="text20">10% - 10 000 </td>
                <td class="text20">10% - 10 000 </td>
                <td class="text20">10% - 10 000 </td>
                <td class="text20">10% - 10 000 </td>
                <td class="text20">10% - 10 000 </td>
                <td class="text20">10% - 10 000 </td>
            </tr> -->
        </table>

        <v-pagination v-model="activePage" :pages="list.pageCount" :range-size="1" @update:modelValue="setPage" />
    </div>
</template>

<script setup>
/* eslint-disable */

import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

import DropDown from '@/components/DropDown.vue';
import { interval_date } from '@/utils/constants'
import Icon from '@/components/Icon.vue';
import { computed, ref } from 'vue';
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { useStore } from 'vuex';

const store = useStore()
const date__gte = ref("")
const ordering = ref("")
const searchQuery = ref("")
const filters = ref({})
const pageSize = 10
const activePage = ref(1)

const list = computed(() => {
    let content = store.getters["content/content"]
    let cats = store.getters["content/cats"]
    let sponsors = store.getters["content/sponsors"]
    let subs = store.getters["subs/subsList"]
    let contentCount = store.getters["content/contentCount"]
    let pageCount = Math.ceil(contentCount / pageSize)


    return {
        content,
        cats,
        sponsors,
        subs,
        pageCount
    }
})

const activeDayInterval = ref(0)
const activeCat = ref(-1)
const activeSponsor = ref(-1)
const activeSub = ref(-1)
const date = ref(new Date())

const isMonth = ref(false)
const isDays = ref(false)
const isHours = ref(false)

const getDay = (prop) => {
    isMonth.value = false
    isDays.value = false
    isHours.value = false
    activeCat.value = prop
}

const handleCatFilter = (prop) => {
    activeCat.value = prop
    filters.value = {
        ...filters.value,
        category: activeCat.value === -1 ? "" : list.value.cats[prop].id
    }
    refreshData()
}
const handleFilterSponsors = (prop) => {
    activeSponsor.value = prop

    filters.value = {
        ...filters.value,
        sponsors: activeSponsor.value === -1 ? "" : list.value.sponsors[activeSponsor.value].id
    }

    refreshData()
}

const handleFilterSubs = (prop) => {
    activeSub.value = prop
    console.log(list.value.subs[activeSub.value])

    filters.value = {
        ...filters.value,
        allowed_subscriptions: activeSub.value === -1 ? "" : list.value.subs[activeSub.value].id + "&"
    }
    console.log(filters.value)

    refreshData()
}

const getPage = () => { }
const setPage = (page) => {
    store.commit("content/setContentPage", page - 1)
    refreshData()
}

let searchTimer

const handleSearch = () => {
    if (searchTimer) clearTimeout(searchTimer)

    searchTimer = setTimeout(() => {
        refreshData()
    }, 500);

}

const refreshData = () => {
    store.commit("content/flushContent")
    store.dispatch("content/getContent", {
        filters: filters.value,
        date__gte: date__gte.value,
        ordering: ordering.value,
        search: searchQuery.value,
        pageSize,
    })
}

const getData = () => {
    store.dispatch("content/getContent", {
        filters: filters.value,
        date__gte: date__gte.value,
        ordering: ordering.value,
        search: searchQuery.value,
        pageSize
    })

    store.dispatch("content/getCats", {})
    store.dispatch("content/getSponsors", {})
    store.dispatch("subs/getSubsList", {})
}

getData()
</script>

<style lang="scss">
.Page {
    font-size: 14px !important;
    width: 37px;
    height: 37px;
    font-size: 16px !important;
    line-height: 24px !important;
    font-weight: 700 !important;
}

.Page-active {
    background: var(--highlight) !important;
    color: var(--basic-light);
    border: transparent;
}

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
    width: 100%;

    .ico-size {
        width: 16px;
        height: 16px;
        flex: 0 0 16px;
        // opacity: 0;
    }

    .drop-ico {
        width: 10px;
        height: 10px;
        flex: 0 0 10px;
    }

    .filters {
        display: flex;
        flex-wrap: wrap;
        gap: 74px;
        width: 100%;

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
            display: flex;
            flex-direction: column;
            width: 40%;

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
            // width: 182px;
            min-width: 182px;
            max-width: 230px;
            width: 100%;
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
            flex: 0 0 182px;
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

    table {
        width: 100%;
        border: none;
        border-collapse: separate;
        border-spacing: 0 20px;

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
            // margin: auto;
        }

        th,
        td {
            // border: 1px solid var(--darkness);
            color: var(--darkness);

            span {
                text-align: center;
            }

        }

        th {
            opacity: 0.7;
            text-align: left;

            span {
                text-align: left;
            }
        }

        td {
            // padding: 28px 18px;
            padding: 28px 0;
            vertical-align: middle;
            background: var(--basic-light);

            span {
                margin-left: 16px;
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

    .footer {
        display: flex;
        align-items: flex-start;
        gap: 17px;

        span {
            margin-top: 6px;
            display: block;
            opacity: 0.7;
        }

        .count-icon {
            width: 70px;
            height: 70px;
            flex: 0 0 70px;
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