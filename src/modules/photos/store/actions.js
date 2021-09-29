import axios from 'axios';
import photosApi from '@/api/api.js';

export const getPhotos = async () =>{
    let resp = [];
    try{
        const { data } = await photosApi.get();
        resp = data;
    }catch(error){
        console.error(error)
    }
    return resp
}