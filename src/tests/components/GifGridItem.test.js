import React from 'react';
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en el archivo GifGridItem.js', () => {
  
  const title = 'Un titulo';
  const url = 'https://localhost/algo.jpg';
  const wrapper = shallow ( <GifGridItem title={title} url={url} /> );
  
  test('Debe mostrar el componente correctamente', () => {

    expect( wrapper ).toMatchSnapshot();

  });

  test('debe mostrar la imagen con el src y alt correctamente', () => {

    const img = wrapper.find('img');

    /*  Formas de extraer propiedades

      img.props().src
      img.props('src')

    */
    
    expect(img.props().src).toBe(url);
    expect(img.props().alt).toBe(title);


  })
  
  test('Debe de tener la clase animate__faster', () => {
    
    const div = wrapper.find('div').prop('className').includes('animate__faster');

    expect(div).toBe(true);

  })
  

});

