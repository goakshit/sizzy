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

const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
}