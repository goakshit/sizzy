<template>
  <Header />
  <Home />
</template>

<script>
import Header from './components/header/header.vue'
import Home from './components/home/home.vue'

export default {
  name: 'Sizzy',
  components: {
    Header,
    Home
  }
}
</script>
