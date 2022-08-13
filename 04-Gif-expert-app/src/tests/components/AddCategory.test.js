import React from 'react';
import {shallow} from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

describe('Testing AddCategory Component', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach(() => {
         wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('should render correctly', () => {
       
        expect(wrapper).toMatchSnapshot();
    })

    test('should not save the information after click the submit', () => {
        
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
        
    })

    test('should call inputChange action and cleaning the textbox', () => {

        const value = "Hola Mundo";
        wrapper.find('input').simulate('change', {target: {value}});
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        
        expect(setCategories).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');

    })

})