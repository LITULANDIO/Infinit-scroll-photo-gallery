<template>
<div class="pt-16">
  <div class="flex justify-center items-center flex-wrap">
      <Photo :photo="photo" v-for="photo in photos" :key="photo.id"/>
  </div>
</div>
</template>

<script>
import usePhotos from '@/modules/photos/composable/usePhotos.js';
import Photo from '@/components/photo/Photo.vue';
import { onMounted, onUnmounted, ref } from 'vue';

export default {
    name: 'Home',
    components:{
        Photo  
    },
    setup(){
    const { limitScreenPhotos } = usePhotos();
    const photos = ref();
    let num = 66;
       
    const loadPhotos = async() =>{
        photos.value = await limitScreenPhotos(num);
    }      
    const moreLoadPhotos = async() =>{
         photos.value = await limitScreenPhotos(num+= 66);
    }
  
    onMounted(() =>{
        loadPhotos();
        window.addEventListener('scroll', handleScroll);
    });
    onUnmounted(() =>{
        window.removeEventListener('scorll', handleScroll);
    })

    const handleScroll = (event) =>{
        if(document.body.scrollHeight - window.innerHeight === window.scrollY){
            moreLoadPhotos()
        }
    }
   

        return{
            photos,
            moreLoadPhotos,
        }
    }

}
</script>

<style lang="scss" scoped></style>