import BigText from "../../common/BigText";
import ProductItem from "../ProductItem/ProductItem";
import css from "./ProductList.module.css";

const ProductList = ({ products }) => {
  return (
    <div>
      {!products.length ? (
        <BigText>ЗА ЗАДАНИМ ФІЛЬТРОМ ТОВАРІВ НЕ ЗНАЙДЕНО</BigText>
      ) : (
        <ul className={css["product-list"]}>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
