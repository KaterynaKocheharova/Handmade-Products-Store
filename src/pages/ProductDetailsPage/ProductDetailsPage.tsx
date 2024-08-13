import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { selectAllProducts } from "../../redux/products/selectors";
import { type Product } from "../../types";
import Section from "../../components/common/Section/Section";
import Container from "../../components/common/Container/Container";
import { Typography, Stack } from "@mui/material";
import QuantityControl from "../../components/common/QuantityControl/QuantityControl";
import ToggleCartProductButton from "../../components/Cart/ToggleCartProductButton/ToggleCartProductButton";
import FlexRow from "../../components/common/FlexRow/FlexRow";
import css from "./ProductDetailsPage.module.css";


const ProductDetailsPage = () => {
  const { productId } = useParams();
  const allProducts = useAppSelector(selectAllProducts);
  const currentProduct = allProducts.find(
    (product: Product) => product.id === productId
  );

  if (!productId || !currentProduct) {
    return <p>Product not found</p>;
  }

  const { category, description, image, name, new_price } = currentProduct;

  return (
    <Section>
      <Container>
        <Stack direction="column" spacing={10} justifyContent="center">
          <img src={image} alt={name} className={css.productImage} />
          <Stack direction="column" spacing={5} className={css.productDetails}>
            <p className={css.category}>{category}</p>
            <Typography variant="h3" component="h2" className={css.productName}>
              {name}
            </Typography>
            <p className={css.description}>{description}</p>
            <p className={css.price}>{new_price}</p>
            <Stack>
              <FlexRow>
                <ToggleCartProductButton productId={productId} />
                <QuantityControl itemId={productId} />
              </FlexRow>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Section>
  );
};

export default ProductDetailsPage;
