/* eslint-disable no-unused-vars */
import './Card.css';
import Button from '../Button/Button';

// eslint-disable-next-line react/prop-types
const Card = ({ image, title, description, currentPrice, oldPrice, ruta}) => {

  const formattedCurrentPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  }).format(currentPrice);

  const formattedOldPrice = oldPrice
    ? new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
      }).format(oldPrice)
    : null;

  return (
    <div className="card">
      <div className="card-imagen">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h1 className="">{title}</h1>
        <div className="line w-[60%]"></div>
        {/* <h2 className="text-primary">{description}</h2> */}
        <p className="text-secondary"></p>
        <div className="price">
          <span className="current-price">{formattedCurrentPrice}</span>
          {formattedOldPrice && (
            <span className="old-price">{formattedOldPrice}</span>
          )}
        </div>
        <div className="line w-[60%]"></div>
        <div className="button-card-contain">
        <Button className="button-card" text={'VER MÁS'} 
           ruta={`/productos/producto/${encodeURIComponent(title)}`}
        />
        </div>
      </div>
    </div>
  );
};

export default Card;
