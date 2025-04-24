import Card from "../Card/Card";

// eslint-disable-next-line react/prop-types
const ProductList = ({ firstIndex, lastIndex, filteredProducts }) => {

  return (
    <div className="products">
      {filteredProducts.length === 0 ? (
        <p>No hay productos en esta categoría</p>
      ) : (
        filteredProducts.slice(firstIndex, lastIndex).map((product) => (
          <Card
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            currentPrice={product.currentPrice}
            oldPrice={product.oldPrice}
            ruta={`/productos/producto/${encodeURIComponent(product.title.replace(/\s+/g, '-').toLowerCase())}`}
          />
        ))
      )}
    </div>
  );
};

export default ProductList;