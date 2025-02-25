import {GifItem} from "./GifItem";
import { useFechGifs } from "../hooks/useFechGifs";


export const GifGrid = ({category}) => {

  const {images, isLoading} = useFechGifs(category);
 
  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && (<h3>Cargando...</h3>)
        }

        <div className="card-grid">
          { images.map((image) => (
              <GifItem key={image.id}
              {...image}
              />
            )
          )}
        </div>
    </>
  )
}

