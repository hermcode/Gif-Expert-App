

// Petición a la API Giphy
export const getGifs = async(category, limitValue) => {

  const api = 'https://api.giphy.com/v1/gifs/search?'
  const apiKey = '&api_key=wryjtazKZ7YGqtjhFXJkVj1waY1OcmgM';
  const query = `q=${encodeURI (category)}`;
  const limit = `&limit=${limitValue}`;

  const url = api + query + limit + apiKey;
  const resp = await fetch ( url );
  const {data} = await resp.json();
  
  // Elimina toda la información irrelevante de data
  const gifs = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }
  });
  // console.log(gifs)

  return gifs;
  
}