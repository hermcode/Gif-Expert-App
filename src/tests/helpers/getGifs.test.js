import { getGifs } from "../../helpers/getGifs"

describe('Pruebas en el archivo getGifs.test.js', () => {
  

  test('Nos debe mostrar 10 elementos', async() => {
    
    const gifs = await getGifs('f1', 10);
    expect(gifs.length).toBe(10);

  });


  test('Nos debe mostrar un array vacío', async() => {
    
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
  
});


