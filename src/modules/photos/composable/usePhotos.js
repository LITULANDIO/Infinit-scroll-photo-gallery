import { useStore } from "vuex";

const usePhotos = () =>{
    const store = useStore();

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
        const resp = await getPhotos();
         
        photos = resp.slice(0,num)
    
        return photos;
    }

    return{
        getPhotos,
        limitScreenPhotos
    }
}

export default usePhotos;



