<script setup>
</script>

<template>
    <main class="main">
        <div class="password-generator">
            <h1>Password Generator</h1>
            <div>
                <p>PTx1d93fd9Xed</p>
            </div>
            <div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
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

            h1 {
                color: var(--dark-grey);
                font-family: 'JetBrains Mono';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 21px;
                text-align: center;
            }
        }
    }
</style>
