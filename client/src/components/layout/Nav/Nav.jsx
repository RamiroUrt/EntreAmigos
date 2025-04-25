import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import LogoPNG from "../../../assets/img/logo.png";
import Cart from '../../../assets/svg/cart.svg';
import CartContainer from "../../Cart/CartContainer";
import "./Nav.css";

const Nav = ({ opacity }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showMatesDropdown, setShowMatesDropdown] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      gsap.from(".button-nav", {
        opacity: 1,
        stagger: 0.2,
        ease: "power3.out",
        fontSize: 15,
      });
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMatesDropdown = () => {
    setShowMatesDropdown(!showMatesDropdown);
    console.log("toggle");
  };

  return (
    <nav className="nav-bar" style={{ opacity: opacity }}>
      <div className="nav-section">
        <div className="nav-logo-nav">
          <Link to="/">
            <img src={LogoPNG} alt="Logo" />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
          <li className="nav-item dropdown-container">
            <button 
              className="button-nav dropdown-trigger"
              onClick={toggleMatesDropdown}
            >
              CATEGORIAS
              <span className="dropdown-arrow">▼</span>
            </button>
            {showMatesDropdown && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/productos/categoria/mates" className="dropdown-item">
                    Mates
                  </Link>
                </li>
                <li>
                  <Link to="/productos/categoria/bombillas" className="dropdown-item">
                  Bombillas
                  </Link>
                </li>
                <li>
                  <Link to="/productos/categoria/stanley" className="dropdown-item">
                  Staley
                  </Link>
                </li>
                <li>
                  <Link to="/productos/categoria/yerberos" className="dropdown-item">
                  Yerberos
                  </Link>
                </li>
                <li>
                  <Link to="/productos/categoria/termos" className="dropdown-item">
                  Termos
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item">
              <button className="button-nav">CONOCENOS</button>
          </li>
          <li className="nav-item">
              <button className="button-nav">CONTACTANOS</button>
          </li>
        </ul>
        
        {/* Cart Button */}
        <div className="cart-button-contain" onClick={toggleCart}>
          <img src={Cart} alt="Carrito" />
          <span className="cart-count">0</span>{/*agregar funcionalidad*/}
        </div>

        {/* Hamburger Menu */}
        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown
      {isMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-menu-list">
            <li className="mobile-menu-item">
              <button 
                className="hero-button-nav button-nav mobile-dropdown-trigger"
                onClick={toggleMatesDropdown}
              >
                NUESTROS MATES
                <span className="dropdown-arrow">▼</span>
              </button>
              {showMatesDropdown && (
                <ul className="mobile-dropdown-menu">
                  <li>
                    <Link to="/mates/imperiales" className="mobile-dropdown-item">
                      Imperiales
                    </Link>
                  </li>
                  <li>
                    <Link to="/mates/camioneros" className="mobile-dropdown-item">
                      Camioneros
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )} */}

      {/* Cart Container */}
      <CartContainer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
      />
    </nav>
  );
};

export default Nav;
