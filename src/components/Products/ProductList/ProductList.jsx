import ProductItem from "../ProductItem/ProductItem";
import all_products from "../../../assets/My_Assets/AllProducts";
import css from "./ProductList.module.css";

// should use filtered products

const ProductList = () => {
  return (
    <ul className={css["product-list"]}>
      {all_products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
