import Section from "components/common/Section/Section";
import Container from "components/common/Container/Container";
import ProductList from "components/Products/ProductList/ProductList";
import { Typography } from "@mui/material";
import QuantityControl from "components/common/QuantityControl/QuantityControl";
import { selectFinalCartProducts } from "../../redux/cart/cartSelectors";
import { useSelector } from "react-redux";

const CartPage = () => {
  const products = useSelector(selectFinalCartProducts);
  return (
    <Section>
      <Container>
        <Typography
          variant="h4"
          component="h2"
          sx={{ textAlign: "center", marginBottom: "5rem" }}
        >
          PRODUCT CART
        </Typography>
        <ProductList products={products} />
        <QuantityControl />
      </Container>
    </Section>
  );
};

export default CartPage;
