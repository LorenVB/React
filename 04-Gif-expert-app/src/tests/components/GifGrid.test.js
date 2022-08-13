import React from 'react';
import {shallow} from 'enzyme'
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Testing GifGrid component', () => { 
    const category = 'Goku';

    test('should render properly', () => { 

        useFetchGifs.mockReturnValue({
            data: [],
            loading:true
        })
        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot();
     })

     test('should return items when loading is false by useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/anything',
            title: 'Anything'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading:false
        })
         
        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
         
     })

     
 })