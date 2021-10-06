<template>
<!-- <transition name="fade">
    <div v-if="show" class="w-full h-screen | mt-20 | fixed | bg-gray-600 opacity-100"></div>
</transition> -->
<div class="pt-32 h-screen">
  <div class="flex justify-center items-center flex-wrap h-full">
      <Photo :photo="photo" v-for="photo in photos" :key="photo.id" @onClicked="onDelete"/>
  </div>
</div>
      <Spinner :show="show" :load="countPhotos"/>
</template>

<script>
import usePhotos from '@/modules/photos/composable/usePhotos.js';
import Photo from '@/components/photo/Photo.vue';
import Spinner from '@/components/spinner/Spinner.vue';
import { onBeforeMount, onMounted, onBeforeUpdate, onUnmounted, ref } from 'vue';

export default {
    name: 'Home',
    components:{
        Photo,
        Spinner
    },
    setup(){
    const { limitScreenPhotos, deletePhoto, photos } = usePhotos();
    let numPhotos = 0;
    let width = 0;
    let height = 0;
    const show = ref(false);
    const countPhotos = ref(0);
       
    const loadPhotos = async() =>{
        photos.value = await limitScreenPhotos(numPhotos);
    }      
    const moreLoadPhotos = async() =>{
         photos.value = await limitScreenPhotos(numPhotos+= numPhotos);
    }

    const reportWindow = () =>{
        height = Math.floor(window.innerHeight / 150);
        width = Math.floor(window.innerWidth / 150);
        return numPhotos = height * width;
    }

    onBeforeMount(() =>{
        reportWindow()
    })
  
    onMounted(() =>{
        loadPhotos();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('touchend', handleScroll);

    });

    onBeforeUpdate(() =>{
        if(show.value){
        setTimeout(() => show.value = false, 500)
        }
        if(photos.value){
            countPhotos.value = photos.value.length
        }
    });

    onUnmounted(() =>{
        window.removeEventListener('scorll', handleScroll);
        window.addEventListener('touchend', handleScroll);

    });

  
    const handleScroll = (event) =>{
        if(document.body.scrollHeight - window.innerHeight === window.scrollY){
            show.value = true;
            moreLoadPhotos()
        }
    }
    const onDelete = (photo) =>{
        deletePhoto(photo);
    }


        return{
            photos,
            moreLoadPhotos,
            show,
            onDelete,
            countPhotos
        }
    }

}
</script>

<style lang="scss" scoped>
.fade-enter-from{
    opacity: 0;
}
.fade-enter-to{
    opacity: 1;
}
.fade-enter-active{
    transition: all 1s ease;
}
.fade-leave-from{
    opacity: 1;
}
.fade-leave-to{
    opacity: 0;
}
.fade-leave-active{
    transition: all 1s ease;
}
.content{
    height: calc(100vh - 100px)
}

</style>