<template>
    <header class="p-3 flex justify-between bg-white dark:bg-primary sticky top-0 shadow-[0_4px_10px_theme(colors.accent/0.1)]">
        <a class="flex-1 flex flex-row items-center" href="/">
            <LogoIcon />
        </a>
        <div class="flex flex-row gap-2 flex-1 justify-center items-center">
            <a class="p-1 rounded-sm hover:bg-light-elevated dark:hover:bg-elevated" href="https://github.com/valerijs-f" target="_blank">
                <GithubIcon />
            </a>
            <a class="p-1 rounded-sm hover:bg-light-elevated dark:hover:bg-elevated" href="https://linkedin.com/in/valerijs-farbtuhs" target="_blank">
                <LinkedinIcon />
            </a>
            <a class="p-1 rounded-sm hover:bg-light-elevated dark:hover:bg-elevated" href="mailto:val.codes.info+portfolio@gmail.com?subject=Portfolio%20Contact%20Request&body=Hi%20Valerijs%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ARegards%2C%0A" target="_blank">
                <EnvelopeIcon />
            </a>
        </div>
        <div class="flex flex-row flex-1 justify-end items-center">
            <button @click="toggleTheme">🌓 {{ colorModeValue === 'dark' ? 'Dark' : 'Light' }}</button>
        </div>
    </header>
</template>

<script>
import EnvelopeIcon from '../icons/EnvelopeIcon.vue';
import GithubIcon from '../icons/GithubIcon.vue';
import LinkedinIcon from '../icons/LinkedinIcon.vue';
import LogoIcon from '../icons/LogoIcon.vue';
export default {
    name: 'Header',
    components: {
        GithubIcon,
        LinkedinIcon,
        EnvelopeIcon,
        LogoIcon,
    },
    data() {
        return {
            colorMode: null,
        }
    },
    computed: {
        colorModeValue() {
            return this.colorMode?.value
        },
    },
    mounted() {
        const colorMode = useColorMode()
        this.colorMode = colorMode
    },
    methods: {
        toggleTheme() {
            if (!this.colorMode) return
            this.colorMode.preference = this.colorMode.value === 'dark' ? 'light' : 'dark'
        },
    },
    }
</script>
