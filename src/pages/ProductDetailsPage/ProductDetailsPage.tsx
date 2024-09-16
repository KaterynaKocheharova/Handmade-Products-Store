import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { selectAllProducts } from "../../redux/products/selectors";
import { type Product } from "../../types";
import Section from "../../components/common/Section/Section";
import Container from "../../components/common/Container/Container";
import { Typography, Stack } from "@mui/material";
import QuantityControl from "../../components/common/QuantityControl/QuantityControl";
import css from "./ProductDetailsPage.module.css";

const ProductDetailsPage = () => {
  const { productId } = useParams();

  const allProducts = useAppSelector(selectAllProducts);

  const currentProduct = useMemo(
    () => allProducts.find((product: Product) => product.id === productId),
    [allProducts, productId]
  );

  if (!productId || !currentProduct) {
    return <p>Product not found</p>;
  }

  const { image, category, name, description, new_price, colors } =
    currentProduct;

  return (
    <Section>
      <Container>
        <div className={css["details-container"]}>
          <div className={css["image-container"]}>
            <img src={image} alt={name} />
          </div>
          <Stack
            direction="column"
            spacing={3}
            className={css["product-details"]}
          >
            <p className={css.category}>{category}</p>
            <Typography variant="h3" component="h2" className={css.productName}>
              {name}
            </Typography>
            <p className={css.description}>{description}</p>
            <p className={css.price}>{new_price}</p>
            <Stack>
              <Stack direction="row" spacing={3} justifyContent="space-between">
                {/* <AddToCartButton productData={{ productId, quantity }} /> */}
                <QuantityControl productId={productId} />
              </Stack>
            </Stack>
            <Stack direction="row" component="ul" spacing={2}>
              {colors.map((color: string) => (
                <li>{color}</li>
              ))}
            </Stack>
          </Stack>
        </div>
      </Container>
    </Section>
  );
};

export default ProductDetailsPage;
