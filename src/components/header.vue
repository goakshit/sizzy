<style lang="less" scoped>
    .header-container {
        padding: 0.8rem 1.6rem;
        color: white;
        font-size: 1.4rem;
        font-weight: 500;
        background: #2c3e50;
        display: flex;
        justify-content: space-between;
        .name, .aboutus {
            text-decoration: none;
            color: white;
        }
    }
</style>

<template>
    <div class="header-container">
        <router-link class="name" to="/">Sizzy</router-link>
        <router-link class="aboutus" to="/about">About Us</router-link>
    </div>
</template>

<script>
export default {
    name: 'header',
}
</script>