<style scoped>
    .home {
    }
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
    }
    .description-container {
        width: 30rem;
        align-self: center;
    }
    .github-section {
        width: 30rem;
        font-size: 2.4rem;
        align-self: center;
    }
    .github-section .image {
        margin: auto;
        height: 20%;
        width: 20%;
        background: rgba(0,0,0,0.1);
        border-radius: 0.8rem;
        cursor: pointer;
    }
    .github-section .header {
        font-size: 1.4rem;
        font-weight: 600;
    }
    .description-container .header {
        font-size: 2.4rem;
    }
    .description-container .subheader {
        font-size: 1.8rem;
    }
</style>

<template>
    <div class="home">
        <div class="login-container">
            <div class="description-container">
                <div class="header">Welcome to Sizzy.</div>
                <div class="subheader">Open Source messaging solution.</div>
            </div>
            <div class="github-section">
                <div class="header">Connect through</div>
                <img class="image" src="../assets/images/github-text-logo.png" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>