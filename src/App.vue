<script setup>
    import {ref, reactive, computed, watch} from 'vue'

    const password = ref("");
    const characterLength = ref(10)
    const options = reactive({
        uppercase: true,
        lowercase: true,
        number: true,
        symbol: false
    })
    const strength = computed(() => {
        let strength_of_password = [options.uppercase, options.lowercase, options.number, options.symbol].filter((item) => item == true).length
        if (strength_of_password === 0 || strength_of_password === 1) {
            return {message: 'TOO WEAK!', icon: "/src/assets/images/strength-too-weak.svg"}
        } else if (strength_of_password === 2) {
            return {message: 'WEAK', icon: "/src/assets/images/strength-weak.svg"}
        } else if (strength_of_password === 3) {
            return {message: 'MEDIUM', icon: "/src/assets/images/strength-medium.svg"}
        } else {
            return {message: 'STRONG', icon: "/src/assets/images/strength-strong.svg"}
        }
    })

    const generatePassword = () => {
        let result = "";
        let characters = "";
        const upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerLetter = upperLetter.toLowerCase();
        const number = '0123456789';
        const symbol = "!@#$%^";

        if (options.uppercase) {
            characters += upperLetter
        }
        if (options.lowercase) {
            characters += lowerLetter
        }
         if (options.number) {
            characters += number
        }
         if (options.symbol) {
            characters += symbol
        }
        for (let i = 0; i < characterLength.value; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        password.value = result ? result : "This is the way";
    }

    generatePassword();

</script>

<template>
    <main class="main">
        <div class="password-generator">
            <h1>Password Generator</h1>
            <div class="password box">
                <p class="text">{{password}}</p>
                <img src="./assets/images/icon-copy.svg"/>
            </div>
            <div class="user-input box">
                <div class="length text">
                    <p>Character Length</p>
                    <p>{{characterLength}}</p>
                </div>
                <div class="slide">
                    <el-slider max=18 v-model="characterLength"/>
                </div>
                <div class="checkboxes">
                    <el-checkbox v-model="options.uppercase" size="large" label="Include Uppercase Letters"/>
                    <el-checkbox v-model="options.lowercase" size="large" label="Include Lowercase Letters"/>
                    <el-checkbox v-model="options.number" size="large" label="Include Numbers"/>
                    <el-checkbox v-model="options.symbol" size="large" label="Include Symbols"/>
                </div>
                <div class="strength">
                    <p>STRENGTH</p>
                    <div>
                        <span>{{strength.message}}</span>
                        <img :src="strength.icon"/>
                    </div>
                </div>
                <button class="generate" @click="generatePassword">GENERATE</button>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
    @use './assets/styles/global.scss';
    .main {
        min-width: 100vw;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        .password-generator {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 12px;

            h1 {
                color: var(--grey);
                font-family: 'JetBrains Mono';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 21px;
                text-align: center;
            }
            .password {
                display: flex;
                justify-content: space-between;
                align-items: center;

                p {
                    font-family: 'JetBrains Mono';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 32px;
                }
            }

            .user-input {
                display: flex;
                flex-direction: column;
                align-items: content;
                gap: 8px;
                .length {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-family: 'JetBrains Mono';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 21px;
                }

                .slide {
                    display: flex;
                    align-items: center;

                    .el-slider__button {
                        background-color: var(--el-color-primary);
                    }
                }

                .checkboxes {
                    font-family: 'JetBrains Mono';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 24px;
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;
                    flex-direction: column;
                }

                .strength {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: var(--very-dark-grey);
                    padding: 12px 16px;

                    p {
                        font-family: 'JetBrains Mono';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 14px;
                        line-height: 20px;
                        color: var(--grey);
                    }

                    div {
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        span {
                            font-family: 'JetBrains Mono';
                            font-style: normal;
                            font-weight: 700;
                            font-size: 18px;
                            line-height: 22px;
                            color: var(--almost-white);
                        }

                        img {
                            height: 18px;
                        }
                    }
                }

                .generate {
                    width: 100%;
                    padding: 8px 0px;
                    margin-top: 12px;
                    background-color: var(--el-color-primary);
                    border: 0;
                    color: var(--dark-grey);
                    font-family: 'JetBrains Mono';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 20px;
                    cursor: pointer;
                }
            }
        }
    }
</style>
