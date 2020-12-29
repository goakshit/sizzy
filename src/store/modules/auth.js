import axios from "axios"
import { mapGetters } from "vuex"

const config = mapGetters(["getConfig"])

const state = {
    accessToken: null,
    identities: {}, //Store oauth providers access token
    refreshToken: null,
    user: null,
}

const getters = {
    getAccessToken: (state) => state.accessToken,
    getRefreshToken: (state) => state.refreshToken,
    isUserLoggedIn: (state) => state.user != null
}

const actions = {
    async refreshToken({ commit }) {
        const response = await axios.post(
            'https://securetoken.googleapis.com/v1/token?key=' + config.VITE_FIREBASE_API_KEY,
            {
                "grant_type": "refresh_token",
                "refresh_token": this.getters.getRefreshToken(),
            }
        )
        // Refreshing the token
        console.log("Inside Refresh token action")
        console.log(response)
        commit("refreshToken", {
            "accessToken": response.data.id_token, 
            "refreshToken": response.refresh_token
        })
    }
}

const mutations = {
    refreshToken: (state, payload) => {
        state.accessToken = payload.accessToken
        state.refreshToken = payload.refreshToken
    },
    setFirebaseUser: (state, payload) => {
        state.user = payload.user
        state.accessToken = payload.accessToken
        state.refreshToken = payload.user.refreshToken
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}