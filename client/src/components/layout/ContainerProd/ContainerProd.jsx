import { useState } from "react";
import FilterBox from "../../FilterBox/FilterBox";
import ProductList from "../../Pagination/ProductList";
import Dropdown from "../../Button/Dropdown/Dopdown";
import Button from "../../Button/Button";
import Filter from '../../../assets/svg/Filter.svg'
// eslint-disable-next-line react/prop-types
const ContainerProd = ({ firstIndex, lastIndex, setSelectedCategory, filteredProducts }) => {

  const secciones = ["Ofertas", "Envios Gratis"];

  const [sortOrder, setSortOrder] = useState("menor_precio");

  const [isFilterVisible, setIsFilterVisible] = useState(false); 
  
  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

const sortProducts = (products, order) => {
  switch (order) {
    case "menor_precio":
      return [...products].sort((a, b) => a.currentPrice - b.currentPrice);
    case "mayor_precio":
      return [...products].sort((a, b) => b.currentPrice - a.currentPrice);
    default:
      return products;
  }
};

const sortedProducts = sortProducts(filteredProducts, sortOrder);
  return (
    <section className="container-main-product">
      
      <div className="contain-buttons-views">
        <div className="filter-toggle-button text-primary " onClick={toggleFilter}>
          <img src={Filter} /> {isFilterVisible ? "Ocultar filtros" : "Mostrar filtros"}
        </div>
            <div className="button-contain-products">
              {secciones.map((seccion) => (
                <Button
                  key={seccion}
                  text={seccion}
                />
              ))}
            </div>
        <div className={`container-filter-prod ${isFilterVisible ? "visible" : ""}`}>
          <FilterBox
          onClose={toggleFilter}
          onSelectCategory={setSelectedCategory} />
        </div>
      </div>
      <div className="container-products">
          <div className="button-container-products-order text-primary">
            <div className="dropdown">
              <p>Ordenar por:</p>
              <Dropdown setSortOrder={setSortOrder} />
            </div>
          </div>

        <ProductList
          ruta={(title) => `/productos/producto/${encodeURIComponent(title.replace(/\s+/g, '-').toLowerCase())}`}
          firstIndex={firstIndex}
          lastIndex={lastIndex}
          filteredProducts={sortedProducts} 
        />
      </div>
    </section>
  );
};

export default ContainerProd;