<template>
  <Navbar :user="name"/>
  <Home />
</template>

<script>
import { onBeforeMount, ref } from 'vue';
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

    return{
      name: ref('Carles Far')
    }

  }
}
</script>

<style lang="scss">
body{
  padding: 0px !important;
  margin: 0px !important;
}
</style>
