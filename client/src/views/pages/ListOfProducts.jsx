import SliderText from '../../components/SliderText/SliderText';
import SlidePic from '../../components/SliderPic/SliderPic';
import Footer from '../../components/layout/Footer/Footer';
import Nav from '../../components/layout/Nav/Nav';
import ContainerProd from '../../components/layout/ContainerProd/ContainerProd';
import Pagination from '../../components/Pagination/Pagination';
import { useProducts } from "../../assets/global/context/ProductContex";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Error404 from '../Error404';

const ListOfProducts = () => {  
  const { categoria } = useParams();
  const [productsForPage, setProductsForPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(categoria || "Todo");
  const products = useProducts();
  
  // Filtra los productos por categoría
  const filteredProducts = selectedCategory.toLowerCase() !== "todo" 
    ? products.filter(p => p.category?.toLowerCase() === selectedCategory.toLowerCase()) 
    : products;

  const totalProducts = filteredProducts.length;
  const firstIndex = (currentPage - 1) * productsForPage;
  const lastIndex = firstIndex + productsForPage;

  useEffect(() => {
    setCurrentPage(1); 
  }, [categoria, selectedCategory]); 

  useEffect(() => {
    if (categoria) {
      setSelectedCategory(categoria);
    } else {
      setSelectedCategory(categoria);
    }
  }, [categoria]);

  if (filteredProducts.length === 0) {
    return <Error404 />;
  }

  return (
    <>
        <Nav />
        <SliderText className=''/>
        <SlidePic />
        <ContainerProd 
          firstIndex={firstIndex}
          lastIndex={lastIndex}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          filteredProducts={filteredProducts}
        />
        <Pagination 
          productsForPage={productsForPage} 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          totalProducts={totalProducts}
        />
        <Footer />
    </>
  );
};

export default ListOfProducts;