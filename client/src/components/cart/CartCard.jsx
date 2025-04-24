/* eslint-disable react/prop-types */
import './CardCart.css';
import { useCart } from '../../assets/global/context/CartContext';


// eslint-disable-next-line react/prop-types
const CartCard = ({ product }) => {
  const { removeFromCart } = useCart();

  const handleRemove = () => {
    removeFromCart(product.id); 
  };

  // Verificar si quantity está definido, de lo contrario usar 1
  const quantity = product.quantity || 1;

  // Calcular el precio total por producto
  const totalProductPrice = product.currentPrice * quantity;

  // Formatear el precio total para mostrarlo al usuario
  const formattedTotalPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  }).format(totalProductPrice);

  return (
    <div className="card-cart">
      <div className="img-card-cart">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="card-contain-content">
        <h1 className="text-primary">{product.title}</h1>
        <p className="text-primary">
          X{quantity} = {formattedTotalPrice}
        </p>
      </div>
      <div className="button-delete-cart-contain title" onClick={handleRemove}>X</div>
    </div>
  );
};

export default CartCard;