import { useSelector } from "react-redux";
import { selectFilteredProducts } from "../../../redux/products/selectors";
import ProductItem from "../ProductItem/ProductItem";
import css from "./ProductList.module.css";

const ProductList = () => {
  const filteredProducts = useSelector(selectFilteredProducts);
  return (
    <ul className={css["product-list"]}>
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
