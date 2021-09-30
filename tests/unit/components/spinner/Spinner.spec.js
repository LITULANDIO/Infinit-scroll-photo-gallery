import { shallowMount } from '@vue/test-utils';
import Spinner from '@/components/spinner/Spinner.vue';

describe('Spinner component', () =>{

    test('must match snapshot', () =>{
        const wrapper = shallowMount(Spinner, {
            props:{
                show: false
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Verify that the spinner is initially hidden', () =>{
        const wrapper = shallowMount(Spinner, {
            props:{
                show: false
            }
        })

        const div1 = wrapper.find('div');
        expect(div1.exists(false))
    })


})
