import React, {useState} from 'react'
import { AddCategory } from './AddCategory'
import { GifRid } from './GifRid'

export const GifApp = () => {

   const [categorias, setCategorias] = useState(['Final Fantasy'])

    return (
        <>
          <h1>GiExpertfApp</h1>  
          <AddCategory setCategorias = {setCategorias}/>
          <hr />
          <ol>
            {
              categorias.map(categoria => (
                <GifRid 
                  key={categoria}
                  categoria={categoria} 
                  />
              ))
            }
          </ol>
        </>
    )
}