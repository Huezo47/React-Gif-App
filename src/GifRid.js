import React, {useEffect, useState} from 'react'
import { GifRidItem } from './GifRidItem';
import { getGifs } from './helpers/getGifs';
import { useFetchGif } from './hooks/useFetchGif';

export const GifRid = ({categoria}) => {

   const {data, loading} = useFetchGif(categoria)
    
    return (
        <>
        <h3> { categoria } </h3>
        { loading && 'Cargando...' }
        <div className='card-grid animate__fadeOutDown' >
             {
                 data.map( img => (
                 <GifRidItem 
                    key={img.id}
                    {...img} 
                 />
                 ))
             }
        </div>
        </>
    );
}