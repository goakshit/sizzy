import { createApp } from 'vue'
import { auth } from './firebase';
import router from './router/router.js'
import store from "./store/store"
import App from './App.vue'
import './index.css'

let app
auth.onAuthStateChanged(() => {
    if (!app) {
        // Initialize and mount app
        createApp(App).use(router).use(store).mount("#app")
    }
})