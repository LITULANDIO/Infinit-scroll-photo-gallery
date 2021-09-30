import { useStore } from "vuex";
import { ref } from 'vue';

const usePhotos = () =>{
    const store = useStore();
    const photos = ref();

    const getPhotos = async () =>{
        let resp = [];
        try{
            resp = await store.dispatch('photos/getPhotos');
            store.commit('photos/SET_PHOTOS', resp)

        }catch(error){
            console.error(error)
        }
        return resp;
    } 
    const limitScreenPhotos = async (num) =>{
        let photos = [];
        await getPhotos();
        photos = store.getters['photos/getPhotos'].slice(0, num)
        return photos;
    }
    const deletePhoto = (photo) =>{
        let index = photos.value.indexOf(photo);
        index !== -1 && photos.value.splice(index, 1);
    }

    return{
        getPhotos,
        limitScreenPhotos,
        deletePhoto,
        photos
    }
}

export default usePhotos;



