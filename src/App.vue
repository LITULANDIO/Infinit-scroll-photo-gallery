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
    const { loadingPhotos } = usePhotos();

    onBeforeMount(async() =>{
      await loadingPhotos();
      console.log(await loadingPhotos())
    })

  }
}
</script>

<style lang="scss">

</style>
