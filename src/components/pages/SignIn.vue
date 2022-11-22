<template>
    <div class="splay-auth">
        <div class="logo">
            <img :src="require('@/assets/Logo.png')" alt="">
        </div>
        <div class="auth-title text35 semi-bold">
            Вход
        </div>
        <div class="fields">
            <div class="form-input">
                <div class="input-title text22"> {{ $t("auth.login") }} </div>
                <div class="input-field">
                    <input type="text" class="text20" placeholder="example@gmail.com">
                </div>
            </div>
            <div class="form-input">
                <div class="input-title text22"> {{ $t("auth.password") }} </div>
                <div class="input-field">
                    <input :type="isPassword ? 'password' : 'text'" class="text20   " placeholder="">
                    <div class="handleshow-ico" @click="isPassword">
                        <svg v-if="isPassword" width="15" height="11" viewBox="0 0 15 11" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5" clip-path="url(#clip0_15_4106)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M6.07227 7.60439C6.47817 7.87832 6.97287 8.04395 7.49928 8.04395C8.89458 8.04395 10.0298 6.90365 10.0298 5.50218C10.0298 4.97344 9.86495 4.47655 9.59223 4.06885L8.90092 4.76322C9.01508 4.97981 9.0785 5.23462 9.0785 5.50218C9.0785 6.37491 8.36817 7.08839 7.49928 7.08839C7.2329 7.08839 6.97921 7.02469 6.76357 6.91002L6.07227 7.60439ZM11.679 1.97322C12.5987 2.8141 13.3788 3.94802 13.9623 5.31128C14.013 5.43232 14.013 5.57246 13.9623 5.68713C12.605 8.85956 10.1886 10.7579 7.49947 10.7579H7.49313C6.26907 10.7579 5.09575 10.3566 4.06196 9.62401L2.83156 10.8599C2.73642 10.9554 2.61592 11 2.49542 11C2.37491 11 2.24807 10.9554 2.15928 10.8599C2.00072 10.7006 1.97535 10.4458 2.1022 10.261L2.12122 10.2356L11.5015 0.813812L11.5015 0.813807C11.5141 0.801068 11.5268 0.788329 11.5332 0.77559L11.5332 0.775584C11.5459 0.762845 11.5585 0.750107 11.5649 0.737368L12.161 0.138555C12.3513 -0.046185 12.6494 -0.046185 12.8333 0.138555C13.0236 0.323295 13.0236 0.629072 12.8333 0.813812L11.679 1.97322ZM4.96392 5.50482C4.96392 5.67045 4.98295 5.83608 5.00832 5.98897L2.66168 8.34599C2.02745 7.60703 1.47567 6.71519 1.03805 5.68956C0.987315 5.57489 0.987315 5.43475 1.03805 5.31371C2.3953 2.14128 4.81171 0.249282 7.49449 0.249282H7.50083C8.40778 0.249282 9.28936 0.465874 10.1012 0.873576L7.98285 3.00127C7.83063 2.97579 7.66573 2.95668 7.50083 2.95668C6.09919 2.95668 4.96392 4.09697 4.96392 5.50482Z"
                                    fill="#030229" />
                            </g>
                            <defs>
                                <clipPath id="clip0_15_4106">
                                    <rect width="15" height="11" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg v-else width="15" height="10" viewBox="0 0 15 10" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.5 0.5C4.54545 0.5 2.02227 2.33773 1 4.93182C2.02227 7.52591 4.54545 9.36364 7.5 9.36364C10.4545 9.36364 12.9777 7.52591 14 4.93182C12.9777 2.33773 10.4545 0.5 7.5 0.5ZM7.5 7.88636C5.86909 7.88636 4.54545 6.56273 4.54545 4.93182C4.54545 3.30091 5.86909 1.97727 7.5 1.97727C9.13091 1.97727 10.4545 3.30091 10.4545 4.93182C10.4545 6.56273 9.13091 7.88636 7.5 7.88636ZM7.5 3.15909C6.51909 3.15909 5.72727 3.95091 5.72727 4.93182C5.72727 5.91273 6.51909 6.70455 7.5 6.70455C8.48091 6.70455 9.27273 5.91273 9.27273 4.93182C9.27273 3.95091 8.48091 3.15909 7.5 3.15909Z"
                                fill="#7C7C90" />
                        </svg>

                    </div>
                </div>
            </div>
        </div>
        <button class="save-me">
            <div class="checkbox"></div>
            <p class="normal text20"> {{ $t("auth.save") }} </p>
        </button>
        <button class="signIn text22 semi-bold"> {{ $t("auth.signIn") }} </button>
    </div>
</template>

<script setup>
import { ref } from "vue";

const isPassword = ref(true)
</script>

<style lang="scss" scoped>
.splay-auth {
    // width: 840px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .logo {
        // width: 5.75rem;
        width: 129px;
        margin: 0 auto;

        img {
            background: transparent;
            width: 100%;
        }
    }

    .fields {
        display: flex;
        flex-direction: column;
        // margin-top: 30px;
        // margin-top: 56px;
        margin-top: 42px;

        .form-input {
            .input-title {
                margin-bottom: 8px;
                color: var(--drakness);
            }

            .input-field {
                display: flex;
                align-items: center;
                background: var(--secondary-light);
                color: var(--darkness-opacity-07);
                width: 100%;
                padding: 22px 21px;
                border-radius: 15px;
                // padding: 1.875rem;
                // border-radius: 18.75px;

                input {
                    width: 100%;
                    background: transparent;
                    outline: none;

                    &::placeholder {
                        color: var(--darkness-opacity-07);
                    }
                }

                .handleshow-ico {
                    position: relative;
                    // width: 28px;
                    // height: 28px;
                    // width: 15px;
                    // height: 15px;
                    width: 21px;
                    height: 21px;
                }
            }

            &:nth-child(1) {
                // margin-bottom: 20px;
                margin-bottom: 28px;
            }
        }
    }

    .save-me {
        display: flex;
        align-items: center;
        // margin-top: 27px;
        // margin-top: 50px;
        margin-top: 38px;

        background: transparent;

        .checkbox {
            // width: 15px;
            // height: 15px;
            // width: 28px;
            // height: 28px;
            width: 21px;
            height: 21px;

            // border: 1px solid var(--darkness-opacity-05);
            // border: 2px solid var(--darkness-opacity-05);
            border: 1.5px solid var(--darkness-opacity-05);
            // border-radius: 2px;
            // border-radius: 4px;
            border-radius: 2.8px;
        }

        p {
            color: var(--darkness);
            margin-left: 10px;
        }
    }

    .auth-title {
        // margin-top: 40px;
        // margin-top: 75px;
        margin-top: 56px;
        text-align: center;
    }

    .signIn {
        // margin-top: 40px;
        margin-top: 59px;
        background: var(--highlight);
        color: var(--basic-light);
        width: 100%;
        // padding: 14px 0;
        // padding: 26px 0;
        padding: 20px 0;
        border-radius: 10px;
    }
}
</style>