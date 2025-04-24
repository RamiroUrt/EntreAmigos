
import './Button.css';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Button = ({ text, className, ruta }) => {
  return (
    <button className={`${className}`}>
        <Link  to={ruta}
          className='block'
    >
            {text}
        </Link>
    </button>
  );
};

export default Button;
