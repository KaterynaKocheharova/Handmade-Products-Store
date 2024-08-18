import ProductItem from "../ProductItem/ProductItem";
import css from "./ProductList.module.css";

const ProductList = ({ products }) => {
  return (
    <ul className={css["product-list"]}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;


