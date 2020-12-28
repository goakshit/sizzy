import { firebase } from '@firebase/app';

firebase.auth().onAuthStateChanged(user => {
    // Update the user state
    commit('setUser', user)
})