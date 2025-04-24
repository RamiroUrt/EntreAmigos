import { BrowserRouter as Router, useLocation } from "react-router-dom";
import ScrollToTop from "./hook/ScolltoTop.jsx";
import { ProductProvider } from "./assets/global/context/ProductContex";
import RoutesApp from "./routes/RoutesApp.jsx";
import { CartProvider } from "./assets/global/context/CartContext.jsx";
import { useEffect, useState } from "react";
import MateLoader from "./components/Loader/Mateloader.jsx";
import ButtonContact from "./components/Button/Contact/ButtonContact.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      setIsFirstLoad(false); // La primera carga ya pasó
    }, isFirstLoad ? 4000 : 1500); // 4s en primera carga, 1.5s después

    return () => clearTimeout(timer);
  }, [location.pathname]); // Se ejecuta en cada cambio de ruta

  return loading ? (
    <MateLoader />
  ) : (
    <ProductProvider>
      <CartProvider>
        <ScrollToTop />
        <ButtonContact />
        <RoutesApp />
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
