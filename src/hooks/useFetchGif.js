import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';


export const useFetchGif = (categoria) => {
    
    const [state, setstate] = useState({
          data: [],
          loading: true
    });

    useEffect( () => {
        getGifs(categoria)
            .then(c=>{
                setTimeout(() => {
                    setstate({
                        data: c,
                        loading:false
                    })
                }, 2000); 
        })
    }, [categoria]); 

    return state;
}
