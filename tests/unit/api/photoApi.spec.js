import photoApi from '@/api/api.js';

describe('photosApi', () =>{
    test('axios must be configured with the image api', () =>{
        expect(photoApi.defaults.baseURL).toBe('https://jsonplaceholder.typicode.com/photos');
    })
})