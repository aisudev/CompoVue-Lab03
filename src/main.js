import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

let x = "Hi"
console.log(x)

createApp(App).use(store).use(router).mount("#app")
