import CartCard from "./CartCard";
import Logo from '../../../public/img/LogoPng.png';
import { useCart } from "../../assets/global/context/CartContext";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'

//--------------------------------
import { useEffect, useState } from "react";
//--------------------------------
// eslint-disable-next-line react/prop-types
const CartContainer = ({ isOpen, onClose }) => {
  const { cartItems } = useCart();

  // Calcular el precio total del carrito
  const totalCartPrice = cartItems.reduce((total, item) => {
    const quantity = item.quantity || 1; // Si quantity no está definido, usar 1
    return total + (item.currentPrice * quantity);
  }, 0);
  
//-----------------------------------
const [preferenceId, setPreferenceId] = useState(null); // Estado para almacenar el ID de la preferencia de pago
  //Inicializar MercadoPago 
  initMercadoPago('TEST-4160f2b7-d66c-4b98-916d-d643582f1366', {
    locale: 'es-AR', // Configura el idioma y región
  });

    // Función para crear la preferencia de pago en el backend
    const createPreference = async () => {
      try {
        const response = await fetch('http://localhost:3000/create-preference', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            items: cartItems.map(item => ({
              title: item.title,
              unit_price: item.currentPrice,
              quantity: item.quantity || 1,
            })),
          }),
        });   
         if (!response.ok) {
          throw new Error("Error al crear la preferencia de pago");
        }
  
        const data = await response.json();
        setPreferenceId(data.id); // Guardar el ID de la preferencia
      } catch (error) {
        console.error("Error al crear la preferencia de pago:", error);
      }
    };
  
    // Crear la preferencia de pago cuando el carrito cambie
    useEffect(() => {
      if (cartItems.length > 0) {
        createPreference();
      } else {
        setPreferenceId(null); // Limpiar el preferenceId si el carrito está vacío
      }
    }, [cartItems]);
//--------------------------------
  return (
    <div className={`cart-contain ${isOpen ? 'open' : ''}`}>
      <button onClick={onClose} className="close-button tittle">
        {"▶"}
      </button>
      <div className="cart-container-hero">
        <img src={Logo} alt="" />
        <h1 className="tittle">CARRITO</h1>
        <div className="line-cart"></div>
        {cartItems.map((item) => (
          <CartCard key={item.id} product={item} />
        ))}
        <div className="line-cart"></div>
        <h2 className="text-primary total-price">
          Total: {new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
          }).format(totalCartPrice)}
        </h2>
        <div className="line-cart"></div>
         {/* Mostrar el botón de pago de MercadoPago si hay una preferencia */}
        {preferenceId && (
          <div id="wallet-container">
            <Wallet initialization={{ preferenceId }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CartContainer;