import { createStore } from "vuex"
import photos from '@/modules/photos/store';
import { photosState } from '../../../mocks/store.mock';

const createVuexStore = (initialState) => 
    createStore({
        modules:{
            photos:{
                ...photos,
                state: { ...initialState }
            }
        }
    })

describe('Vuex', () =>{

    //state
    test('initial state',  () =>{
        const store = createVuexStore(photosState);

        const photosList = store.state.photos;
        expect(photosList).toEqual(photosState);

    })

    //mutations
    test('mutations photos', async () =>{
        const store = createVuexStore({ photos: [] });
        const photosList = store.state.photos;

        await store.commit('photos/SET_PHOTOS', photosList)

        expect(photosState.photos.length).toBe(4)

    })

    //actions
    test('actions photos', async() =>{
        const store = createVuexStore({ photos: [] });

        await store.dispatch('photos/getPhotos')
        expect(photosState.photos.length).toBe(4)
    })
})