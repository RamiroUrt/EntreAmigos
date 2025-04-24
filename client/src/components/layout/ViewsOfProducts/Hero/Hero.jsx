/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import '../../../Card/Card.css';
import { useProducts } from "../../../../assets/global/context/ProductContex";
import { useCart } from '../../../../assets/global/context/CartContext';
import FreeShipping from '../../../FreeShipping/FreeShipping';
import Interest from '../../../Interest/Interest';
import LightbulbContain from '../LightbulbContain/LightbulbContain';
import Amount from '../Amount/Amount';
import CustomSwipper from '../../../CustomSwipper';
import CardProduct from '../../../Card/Card';
import { useLocation } from "react-router-dom"; // Importar useLocation
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Hero = ({ product }) => {
  const allProducts = useProducts();
  const accesorios = allProducts.filter((item) => item.category === "accesorios");
  const { addToCart } = useCart();
  const location = useLocation(); // Obtener la ubicación actual

  const [hasBulb, setHasBulb] = useState(false); // Estado para manejar si incluye bombilla
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad

  // Reiniciar el contador cuando cambie el producto o la ruta
  useEffect(() => {
    setQuantity(1); // Reiniciar la cantidad a 1
  }, [product, location.pathname]); // Dependencias: producto y ruta actual

  const handleAmountChange = (newQuantity) => {
    setQuantity(newQuantity); // Actualizar la cantidad
  };

  const handleAddToCart = () => {
    const productWithBulb = { ...product }; // Copia del producto
    if (hasBulb) {
      // Si incluye bombilla, agregamos un costo adicional
      productWithBulb.currentPrice = product.currentPrice + 500; // Ajusta el precio
    }
    productWithBulb.quantity = quantity; // Agregar la cantidad al producto
    productWithBulb.totalPrice = productWithBulb.currentPrice * quantity; // Calcular el precio total
    console.log("Producto agregado:", productWithBulb);
    addToCart(productWithBulb); // Agrega el producto al carrito
  };

  return (
    <>
      <main className={'views-hero'}>
        <section className="view-contain">
          <div className="view-contain-img">
            <Zoom>
            <img src={product.image} alt={product.title} />
            </Zoom>
          </div>
          <div className="view-product-description">
            <h1 className="tittle views-title">{product.title}</h1>
            <p className='count-sales flex mt-5 text-white text-primary'>+20 vendidos</p>
            <p className='view-description text-primary text-white'>{product.description}</p>
            <div className="view-details">
              <div className="view-product-price">
                <span className="current-price">
                  {new Intl.NumberFormat('es-AR', {
                    style: 'currency',
                    currency: 'ARS',
                  }).format(product.currentPrice)}
                </span>
                {product.oldPrice && (
                  <span className="old-price">
                    {new Intl.NumberFormat('es-AR', {
                      style: 'currency',
                      currency: 'ARS',
                    }).format(product.oldPrice)}
                  </span>
                )}
              </div>
              <FreeShipping />
              <Interest />
            </div>
            {/* Renderiza LightbulbContain solo si la categoría es "mate" */}
            {product.category === "mates" && (
              <div className="view-lightbulb-contain">
                <LightbulbContain onBulbChange={(checked) => setHasBulb(checked)} />
              </div>
            )}
            <div className="view-amount">
              <Amount onAmountChange={handleAmountChange} quantity={quantity} />
            </div>
            <div className="view-add-to-cart">
              <button className={"block"} onClick={handleAddToCart}>Comprar</button>
            </div>
          </div>
        </section>
      </main>
      <div className="container-related">
        <h1 className="tittle views-title">Relacionados</h1>
        <CustomSwipper data={accesorios} CardComponent={CardProduct} swiperConfig={{}} />
      </div>
    </>
  );
};

export default Hero;