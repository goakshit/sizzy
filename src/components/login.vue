<style lang="less" scoped>
    .login-container {
        display: flex;
        justify-content: space-evenly;
        width: 70%;
        margin-top: 2.4rem;
        margin-left: auto;
        margin-right: auto;
        background-image: url("../assets/images/about-bg.jpg");
        background-position: center;
        background-size: cover;
        border-radius: 0.8rem;
        min-height: 40rem;
        text-align: center;
        .description-container {
            width: 30rem;
            align-self: center;
            .header {
                font-size: 2.4rem;
            }
            .subheader {
                font-size: 1.8rem;
            }
        }
        .login-section {
            width: 30rem;
            font-size: 2.4rem;
            align-self: center;
            .image {
                margin: auto;
                height: 20%;
                width: 20%;
                background: rgba(0,0,0,0.1);
                border-radius: 0.8rem;
                cursor: pointer;
            }
            .header {
                font-size: 1.4rem;
                font-weight: 600;
            }
        }
    }
</style>

<template>
    <div class="login-wrapper">
        <div v-if="isUserLoggedIn">Logged In</div>
        <div class="login-container" v-else>
            <div class="description-container">
                <div class="header">Welcome to Sizzy.</div>
                <div class="subheader">Open Source messaging solution.</div>
            </div>
            <div class="login-section">
                <div class="header">Register</div>
                <img class="image" src="../assets/images/github-text-logo.png" @click.prevent="signInWithGithub"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
import firebase from 'firebase/app';
export default {
    methods: {
        signInWithGithub() {
            const vm = this
            var provider = new firebase.auth.GithubAuthProvider();
            provider.setCustomParameters({
                'allow_signup': 'false',
            });
            firebase.auth().signInWithPopup(provider).then(function(result) {
                
                console.log("Signed in", result)
                vm.githubToken = result.credential.accessToken;
                firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
                    vm.accessToken = idToken
                }).catch(function(error) {
                    // Handle error
                });

                vm.$store.commit('setFirebaseUser', {
                    "user": result.user,
                    "accessToken": vm.accessToken,
                })

                // Mutate and set user data
                // Check for additional info in result
                // If newUser is 'true', make api call to create
                // user in backend

            }).catch(function(error) {
                console.log("Some Error", error)
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
        },
    },
    computed: mapGetters(["isUserLoggedIn"])
}
</script>