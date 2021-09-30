import { shallowMount } from '@vue/test-utils';
import { createStore } from "vuex"
import photos from '@/modules/photos/store';
import { photosState } from '../mocks/store.mock';
import Home from '@/views/Home.vue';

const createVuexStore = (initialState) => 
    createStore({
        modules:{
            photos:{
                ...photos,
                state: { ...initialState }
            }
        }
    })


describe('Home component', () =>{

    const store = createVuexStore(photosState);
    let wrapper;

    // beforeEach(() =>{
    //     jest.clearAllMocks()
    //     wrapper = shallowMount(Home,{
    //         plugins: [store]
    //     })
    // })

    test('must match snapshot', async () =>{
        const wrapper = shallowMount(Home)
        expect(wrapper.html()).toMatchSnapshot()

        // check loading photos
        expect(await wrapper.vm.moreLoadPhotos(66));

        //check components home
        expect(wrapper.find('spinner-stub').exists()).toBeTruthy();
        expect(wrapper.find('photo-stub').exists()).toBeTruthy();

    })

    
    
})
