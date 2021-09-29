<template>
  <div>
      <h1>Home</h1>
  </div>
</template>

<script>
import usePhotos from '@/modules/photos/composable/usePhotos.js';
import { onMounted } from 'vue';

export default {
    name: 'Home',
    components:{

    },
    setup(){
    const { getPhotos } = usePhotos();
    
       
     console.log(getPhotos())
           
       

        return{

        }
    }

}
</script>

<style lang="scss" scoped></style>