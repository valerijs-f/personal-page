<template>
    <header class="h-12 p-1 flex justify-between bg-white dark:bg-primary sticky top-0">
        <img class="rounded-lg" :src="logo"/>
        <div class="flex flex-row gap-2">
            <a href="https://github.com/valerijs-f" target="_blank">
                <GithubIcon />
            </a>
            <a href="https://linkedin.com/in/valerijs-farbtuhs" target="_blank">
                <LinkedinIcon />
            </a>
            <a href="mailto:val.codes.info+portfolio@gmail.com?subject=Portfolio%20Contact%20Request&body=Hi%20Valerijs%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ARegards%2C%0A" target="_blank">
                <EnvelopeIcon />
            </a>
        </div>
        <div>
            <button @click="toggleTheme">🌓 {{ colorModeValue === 'dark' ? 'Dark' : 'Light' }}</button>
        </div>
    </header>
</template>

<script>
import EnvelopeIcon from '../icons/EnvelopeIcon.vue';
import GithubIcon from '../icons/GithubIcon.vue';
import LinkedinIcon from '../icons/LinkedinIcon.vue';
import logo from '../../assets/img/logo.png'
export default {
    name: 'Header',
    components: {
        GithubIcon,
        LinkedinIcon,
        EnvelopeIcon,
    },
    data() {
        return {
            logo,
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
