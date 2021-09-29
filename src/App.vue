<template>
  <Navbar name="Carles Far"/>
  <Home />
</template>

<script>
import Home from '@/views/Home.vue';
import Navbar from '@/components/navbar/Navbar.vue';

export default {
  name: 'App',
  components: {
    Home,
    Navbar
  }
}
</script>

<style lang="scss">

</style>
