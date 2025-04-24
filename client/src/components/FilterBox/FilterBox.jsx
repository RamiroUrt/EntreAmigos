import Checkbox from "../Button/Checkbox/Checkbox"
import ButtonSearch from "../Button/Search/ButtonSearch"
import { useState } from "react";
// eslint-disable-next-line react/prop-types
const FilterBox = ({onSelectCategory, onClose  }) => {
  const categories = ["Todo", "Mates", "Termos", "Bombillas", "Stanley", "Yerberos", "Set", "Personalizados", "Accesorios"];

  const [selectedCategory, setSelectedCategory] = useState("Todo");
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category); 
    onSelectCategory(category);
    onClose(); 
  };
  return (
    <>
    <section className="filter-box">
        <h1 className="text-primary">Buscar productos</h1>
        <div className="line w-[80%]"></div>
        <ButtonSearch />
        <h1 className="text-primary">Categorias</h1>
        <div className="line w-[80%]"></div>
        <div className="box-categories">
        {categories.map((category) => (
          <Checkbox 
            key={category} 
            categoria={category} 
            onChange={() => handleCategoryChange(category)} 
            checked={selectedCategory === category}
          />
        ))}
        </div>
    </section>
    </>
  )
}

export default FilterBox