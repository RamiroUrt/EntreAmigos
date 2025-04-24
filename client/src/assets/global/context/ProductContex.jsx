import { createContext, useContext, useState } from "react";
//importar los Josn de lso productos
import Mates from '../../json/mates.json';
import Bombillas from '../../json/lightbulb.json'
import Stanley from '../../json/stanley.json'
import Yerba from '../../json/yerbera.json'
import Termos from '../../json/thermos.json'
//importar los Json de los accesorios
import Accesorios from '../../json/sections/mate_acessory.json'
import Ofertas from '../../json/sections/ofert.json'
import Personalizados from '../../json/sections/personalized.json'
import SetMatero from '../../json/sections/set-matero.json'



const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
    const allProducts = [
        ...Mates,
        ...Bombillas,
        ...Stanley,
        ...Yerba,
        ...Termos,
        ...Accesorios,
        ...Ofertas,
        ...Personalizados,
        ...SetMatero,
      ];


  const [products] = useState(allProducts);

  return (
    <ProductContext.Provider value={products}>{children}</ProductContext.Provider>
  )
};

export const useProducts = () => useContext(ProductContext);
