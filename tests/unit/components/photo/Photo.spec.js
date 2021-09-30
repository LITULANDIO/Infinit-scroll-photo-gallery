import { shallowMount } from '@vue/test-utils';
import Photo from '@/components/photo/Photo.vue';
import photo from '../../mocks/photo.mock';

describe('Photo component', () =>{

    test('must match snapshot', () =>{
        const wrapper = shallowMount(Photo, {
            props:{
                photo
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('the image id exists', () =>{
        const wrapper = shallowMount(Photo, {
            props:{
                photo
            }
        })
        const image = wrapper.find('img');
        expect(image.attributes('src')).toBe(undefined)
        expect(image.attributes('alt')).toBe('1')

        const imgList = wrapper.findAll('img')

        // check images
        expect(imgList.length).toBe(4);

        const [ img1, img2, img3, img4 ] = imgList;

        // check event click
        img1.trigger('click');
        
        // check emmited
        expect(wrapper.emitted('onClicked'))



    })

})
