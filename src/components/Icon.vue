<template>
    <div class="icon">
        <button>
            <slot></slot>
        </button>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.icon {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        position: relative;
        background: transparent;
        justify-content: center;
        outline: none;

        width: 100%;
        height: 100%;
    }
}
</style>