import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Error404 from "../views/Error404";
import Home from "../views/pages/Home";
import MateLoader from "../components/Loader/Mateloader"; 

// Importaciones con lazy loading
const LazyProduct = lazy(() => import("../views/pages/ViewsOfProducts"));
const LazyListOfProducts = lazy(() => import("../views/pages/ListOfProducts"));

const RoutesApp = () => {


  return (
    <Suspense fallback={<MateLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos/categoria/:categoria" element={<LazyListOfProducts />} />
          <Route path="/productos/producto/:title" element={<LazyProduct />} />
          {/* Página 404 */}
          <Route path="*" element={<Error404 />} />
        </Routes>
    </Suspense>
  );
};

export default RoutesApp;