import React from 'react';
import {shallow} from 'enzyme'
import { GifExpertApp } from "../../GifExpertApp"

describe('Testing GifExpertApp component', () => { 
    test('should match with the snapshot', () => { 
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot()
     })
 })