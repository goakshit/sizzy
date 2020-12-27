const state = {
    config: {
        GithubClientId: import.meta.env.VITE_GITHUB_CLIENT_ID,
        GithubClientSecret: import.meta.env.VITE_GITHUB_CLIENT_SECRET,
        FirebaseApiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        FirebaseAuthDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        FirebaseProjectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        FirebaseStorageBucketId: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        FirebaseMessagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        FirebaseAppId: import.meta.env.VITE_FIREBASE_APP_ID,
        FirebaseMeasurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
    }
}

const getters = {
    getConfig: (state) => state.config 
}

export default {
    state,
    getters
}