<template>
  <Navbar name="Carles Far"/>
  <Home />
</template>

<script>
import { onBeforeMount } from 'vue';
import Home from '@/views/Home.vue';
import Navbar from '@/components/navbar/Navbar.vue';
import usePhotos from '@/modules/photos/composable/usePhotos.js';

export default {
  name: 'App',
  components: {
    Home,
    Navbar
  },
  setup(){
    const { getPhotos } = usePhotos();

    onBeforeMount(async() =>{
      await getPhotos();
    })

  }
}
</script>

<style lang="scss">
body{
  padding: 0px !important;
  margin: 0px !important;
}
</style>
