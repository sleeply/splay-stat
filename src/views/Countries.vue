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
                <DropDown class="interval-days-drop" :items="interval_date">
                    <p>За дни</p>
                    <Icon class="drop-ico">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M0.905273 1.12866L4.94824 5.04761L8.99121 1.12866" stroke="black"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Icon>
                </DropDown>
            </div>
        </div>

    </div>
</template>

<script setup>
import DropDown from '@/components/DropDown.vue';
import { interval_date } from '@/utils/constants'
import Icon from '@/components/Icon.vue';
</script>

<style lang="scss" scoped>
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

            .drop-ico {
                width: 10px;
                height: 10px;
            }
        }
    }
}
</style>