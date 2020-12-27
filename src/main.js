import { createApp } from 'vue'
import { firebase } from '@firebase/app';
import router from './router/router.js'
import store from "./store/store"
import App from './App.vue'
import './index.css'

const config = store.getters.getConfig

const firebaseConfig = {
    apiKey: config.FirebaseApiKey,
    authDomain: config.FirebaseAuthDomain,
    projectId: config.FirebaseProjectId,
    storageBucket: config.FirebaseStorageBucketId,
    messagingSenderId: config.FirebaseMessagingSenderId,
    appId: config.FirebaseAppId,
    measurementId: config.FirebaseMeasurementId,
};
// Initialise firebase
firebase.initializeApp(firebaseConfig);

// Initialize and mount app
createApp(App).use(router).use(store).mount("#app")
