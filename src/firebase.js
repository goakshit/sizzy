import firebase from 'firebase/app';
import 'firebase/auth';
import store from "./store/store"

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
const app =  firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app)
export {
    auth,
}