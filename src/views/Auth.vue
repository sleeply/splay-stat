<template>
    <div class="auth-wrapper s-container">
        <div class="left-collar">
            <SignIn />
        </div>
        <div class="right-collar">
            <div class="image-container">
                <img :src="require('@/assets/Illustration.png')" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import SignIn from '../components/pages/SignIn.vue';

</script>

<style lang="scss" scoped>
.auth-wrapper {
    width: 100%;
    min-height: 100vh;
    display: flex;
    background: #FAFAFA;


    .left-collar {
        min-height: 100vh;
        background: var(--basic-light);
        padding: 4.375rem 3.125rem 0 3.125rem;
    }

    .right-collar {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .image-container {
            width: 26.875rem;
            height: 25.0625rem;

            img {
                width: 100%;
                height: 100%;
                background: transparent;
            }
        }
    }
}
</style>