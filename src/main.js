import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import Vue3Lottie from 'vue3-lottie'

import "./style.css";

import { gsap } from "gsap";

import "@/assets/Intro.otf";

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
    },
})

createApp(App).use(vuetify).use(Vue3Lottie).use(gsap).mount('#app')
