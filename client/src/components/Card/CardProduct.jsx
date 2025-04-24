import './Card.css'



import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const CardProduct = ({title, img, alt, ruta}) => {
  return (
    <>
            <div className="card-product-img">
            <Link to={ruta}>
                <img src={img} alt={alt} className="card-image-product" />
                <h1 className="card-title-product">{title}</h1>
            </Link>
            </div> 
    </>
  )
}

export default CardProduct