<template>
    <div class="dropdown" ref="target" :class="{
        show: isDrop
    }" @click.stop="handleDropDown">
        <div class="active"
            style="cursor: pointer; display: flex; align-items: center; justify-content: space-between; width: 100%;">
            <slot name="active" :active="items[active]" :activeIndex="active"></slot>
        </div>

        <div class="choices">
            <div class="choice" :class="{
                selected: -1 === active
            }" @click="emits('setActive', -1)">
                <slot name="default"></slot>
            </div>
            <template v-for="(item, index) in items" :key="index">
                <div class="choice" :class="{
                    selected: index === active
                }" @click="emits('setActive', index)">
                    <slot name="list" :item="item" :index="index"></slot>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
/* eslint-disable */
import { defineProps, ref, defineEmits, onMounted, onBeforeUnmount } from 'vue'
import Icon from './Icon.vue'
defineProps({
    items: Array,
    active: Number
})

const emits = defineEmits(['setActive'])

const isDrop = ref(false)
const target = ref(null)

const handleDropDown = () => {
    isDrop.value = !isDrop.value
}
const close = (e) => {
    if (target.value && !target.value.contains(e.target)) {
        isDrop.value = false
    }
};
onMounted(() => {
    document.addEventListener("click", close, true);
})

onBeforeUnmount(() => {
    document.removeEventListener("click", close);
});
</script>

<style lang="scss" scoped>
.dropdown {
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 0.625rem;
    transition: all 0.4s ease-in-out;

    .active {
        font-size: 0.875rem;
        line-height: 1.1875rem;
        height: 56px;
        padding: 0 11px 0 23px;

        transition: all 0s ease-in-out 0.1s;
    }

    .choices {
        position: absolute;
        top: 100%;
        width: 100%;
        left: 0;
        background: var(--basic-light);
        border-bottom-left-radius: 0.625rem;
        border-bottom-right-radius: 0.625rem;
        transition: all 0.4s ease-in-out;
        max-height: 0;
        overflow: hidden;
        z-index: 2;

        .choice {
            padding: 4px 11px 4px 23px;
            word-break: break-word;
            vertical-align: middle;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;

            &.selected,
            &:hover {
                background: var(--highlight);
                color: var(--basic-light);
            }

            &:last-child {
                margin-bottom: 1rem;
            }

            .ico-size {
                opacity: 0;
            }

            &.selected {
                background: var(--highlight);
                color: var(--basic-light);

                .ico-size {
                    opacity: 1;
                }
            }
        }
    }

    &.show {
        border-radius: 0;
        transition: all 0.4s ease-in;

        .active {
            // padding-bottom: 0.25rem;
            transition: all 0s ease-in 0.1s;
        }

        .choices {
            max-height: 999px;
            transition: all 0.4s ease-in;
        }
    }
}
</style>