<script setup>
    import {ref, reactive} from 'vue'

    const characterLength = ref(10)
    const options = reactive({
        uppercase: true,
        lowercase: true,
        number: true,
        symbol: false
    })
</script>

<template>
    <main class="main">
        <div class="password-generator">
            <h1>Password Generator</h1>
            <div class="password box">
                <p class="text">PTx1d93fd9Xed</p>
                <img src="./assets/images/icon-copy.svg"/>
            </div>
            <div class="user-input box">
                <div class="length text">
                    <p>Character Length</p>
                    <p>{{characterLength}}</p>
                </div>
                <div class="slide">
                    <el-slider v-model="characterLength" max="24"/>
                </div>
                <div class="checkboxes">
                    <el-checkbox v-model="options.uppercase" size="large" label="Include Uppercase Letters"/>
                    <el-checkbox v-model="options.lowercase" size="large" label="Include Lowercase Letters"/>
                    <el-checkbox v-model="options.number" size="large" label="Include Numbers"/>
                    <el-checkbox v-model="options.symbol" size="large" label="Include Symbols"/>
                </div>
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
            }
        }
    }
</style>
