import { createApp } from "vue"

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import "./style.css"
import App from "./App.vue"
import router from "./router"
import store from "./store"

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
})

app.use(vuetify)
app.use(router)
app.use(store)
app.mount("#app")