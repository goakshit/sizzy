<style scoped>
    .header-container {
        padding: 0.8rem 1.6rem;
        color: white;
        font-size: 1.4rem;
        font-weight: 500;
        background: #2c3e50;
        display: flex;
        justify-content: space-between;
    }
    .about-us {
        text-decoration: none;
        color: white;
    }
</style>

<template>
    <div class="header-container">
        <div class="header-item">Sizzy</div>
        <a class="header-item about-us" href="#">About Us</a>
    </div>
</template>

<script>
export default {
    name: 'header',
}
</script>