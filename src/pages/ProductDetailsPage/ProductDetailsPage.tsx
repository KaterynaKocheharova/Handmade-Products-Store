import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { selectAllProducts } from "../../redux/products/selectors";
import { type Product } from "../../types";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const allProducts = useAppSelector(selectAllProducts);
  const currentProduct = allProducts.find(
    (product: Product) => product.id === productId
  );
  console.log(currentProduct);

  return <div>PRODUCT DETAILS</div>;
};

export default ProductDetailsPage;
