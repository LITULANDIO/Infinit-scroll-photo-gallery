import axios from 'axios';

const photosApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/photos'
});

export default photosApi;