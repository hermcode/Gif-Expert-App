
// Custom Hook

import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category, limitValue) => {

  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect( () => {

    getGifs(category, limitValue)
      .then( imgs => {

        setState({
          data: imgs,
          dataLength: imgs.length,
          loading: false
        })

      })
  }, [category, limitValue])

  return state;

}

