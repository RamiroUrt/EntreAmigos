import { useParams } from "react-router-dom";
import Footer from "../../components/layout/Footer/Footer";
import Nav from "../../components/layout/Nav/Nav";
import Error404 from "../Error404";
import { useProducts } from "../../assets/global/context/ProductContex";
import Hero from "../../components/layout/ViewsOfProducts/Hero/Hero";
import SilderText from "../../components/SliderText/SliderText";

const ViewsOfProducts = () => {
  const { title } = useParams();
  const products = useProducts();

  const normalizedTitle = decodeURIComponent(title).toLowerCase().replace(/\s+/g, "-");

  const product = products.find((h1) =>
    h1.title.toLowerCase().replace(/\s+/g, "-") === normalizedTitle
  );

  if (!product) {
    console.warn("Producto no encontrado:", normalizedTitle);
    return (
      <>
        <Nav />
        <Error404 />
      </>
    );
  }

  return (
    <>
      <Nav />
      <SilderText className={''}/>
      <Hero product={product} />
      <Footer />
    </>
  );
};

export default ViewsOfProducts;
