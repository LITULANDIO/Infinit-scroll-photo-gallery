import { useStore } from "vuex";

const usePhotos = () =>{
    const store = useStore();

    const loadingPhotos = async () =>{
        let resp = [];
        try{
            resp = await store.dispatch('photos/getPhotos');
            store.commit('photos/SET_PHOTOS', resp)

        }catch(error){
            console.error(error)
        }
        return resp;
    } 

    const getPhotos = () =>{
        return store.getters['photos/getPhotos']
    }

    return{
        loadingPhotos,
        getPhotos
    }
}

export default usePhotos;



