/* import { useEffect, useState } from 'react'; */
/* import { getGif } from '../helpers/getGif'; */

import React from "react"
import { useFetchGifs } from "../hooks/useFetchGifs"

 import { GifGridItem } from './GifGridItem'; 



export const GifGrid = ( { category }) => {
    
/*     const [images, setimages] = useState([]);
    
    useEffect( () => {
         getGif( category ).then( setimages )
     }, [ category ] )
 */
const { data:images, loading } = useFetchGifs( category );


   

/*     getGif(); */
  
    return (
<>
        <h2 className="animate__animated animate__fadeInDown"> { category }</h2>
         { loading && <p className="animate__animated animate__flash loading"> CARGANDO...</p>  }   
         <div className='card-grid'>
        
          
              {
                  images.map( img  => (
                <GifGridItem
                key={ img.id }   
                    {...img } /> 
                  ))

              }
        
        </div> 
        </>)
}
