<template>
    <div class="auth-wrapper">
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
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;

    .left-collar {
        background: var(--basic-light);
        width: 630px;
        // flex: 0 0 630px;
        height: 100%;
        // padding: 131px 93px 0 93px;
        padding: 0 70px;
    }

    .right-collar {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        // padding: 142px;
        // margin-left: 106px;


        .image-container {
            // width: 100%;
            // width: 808px;
            width: 630px;
            // flex: 0 0 630px;
            // height: 751px;

            img {
                width: 100%;
                background: transparent;
            }
        }
    }
}
</style>