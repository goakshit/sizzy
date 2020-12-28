import axios from "axios"

const state = {
    loggedIn: false,
    user: null,
}

const getters = {
    getUser: (state) => state.user,
    isUserLoggedIn: (state) => state.loggedIn,
}

const actions = {

}

const mutations = {
    setUser: (state, user) => {
        state.user = user
        state.loggedIn = true
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}