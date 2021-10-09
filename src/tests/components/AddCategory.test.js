import React from 'react';
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"


describe('Pruebas en el componente AddCategory.js', () => {
  
  const setCategory = (inputValue) => {};
  const wrapper = shallow( <AddCategory setCategory={setCategory}/>);

  test('se debe mostrar correctamente ', () => {
    

    expect(wrapper).toMatchSnapshot();

  });

  test('debe cambiar el estado del input', () => {
    
    const input = wrapper.find('input');
    const value = 'Checo';

    input.simulate('change', { target: {value}} ); // Mandar valores al onChange del componente

    // expect( wrapper.find('p').text().trim() ).toBe(value); // Checo === Checo

  })
  
  

})
