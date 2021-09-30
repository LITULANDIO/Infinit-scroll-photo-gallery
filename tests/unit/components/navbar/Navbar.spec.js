import { shallowMount } from '@vue/test-utils';
import Navbar from '@/components/navbar/Navbar.vue';

describe('Navbar component', () =>{

    test('must match snapshot', () =>{
        const wrapper = shallowMount(Navbar, {
            props:{
                user: 'Carles Far'
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    })
})
