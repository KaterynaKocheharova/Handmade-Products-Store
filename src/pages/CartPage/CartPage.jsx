
import Section from "components/common/Section/Section";
import Container from "components/common/Container/Container";
import { Typography } from "@mui/material";
import { buildCartPageText } from "./buildText";
import CartProductList from "components/CartComponents/CartProductList/CartProductList";

const CartPage = () => {
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
       <CartProductList/>
      </Container>
    </Section>
  );
};

export default CartPage;
