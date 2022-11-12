<template>
    <div class="dropdown" ref="target" :class="{
        show: isDrop
    }" @click.stop="handleDropDown">
        <div class="active"
            style="cursor: pointer; display: flex; align-items: center; justify-content: space-between; width: 100%;">
            <slot></slot>
        </div>

        <div class="choices">
            <div class="choice" v-for="(item, index) in items" :key="index">
                {{ $t(`interval_date.${item}`) }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
defineProps({
    items: Array
})
const isDrop = ref(false)

const handleDropDown = () => {
    isDrop.value = !isDrop.value

}
</script>

<style lang="scss" scoped>
.dropdown {
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 10px;
    transition: all 0.4s ease-in-out;

    .active {
        font-size: 14px;
        line-height: 19px;
        padding: 11px 8px 10px 17px;
        transition: all 0s ease-in-out 0.1s;
    }

    .choices {
        position: absolute;
        top: 100%;
        width: 100%;
        left: 0;
        background: var(--basic-light);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        // 
        transition: all 0.4s ease-in-out;
        max-height: 0;
        overflow: hidden;

        .choice {
            padding-left: 17px;
            padding-right: 8px;
            // padding-top: 2px;
            // padding-bottom: 2px;
            padding-bottom: 4px;
            padding-top: 4px;
            vertical-align: middle;
            font-size: 14px;
            line-height: 19px;
            cursor: pointer;


            &:hover {
                background: var(--highlight);
                color: var(--basic-light);
            }

            &:last-child {
                margin-bottom: 16px;
            }


        }
    }

    &.show {
        border-radius: 0;
        transition: all 0.4s ease-in;

        .active {
            padding-bottom: 4px;
            transition: all 0s ease-in 0.1s;
        }

        .choices {
            max-height: 999px;

            transition: all 0.4s ease-in;
        }
    }
}
</style>