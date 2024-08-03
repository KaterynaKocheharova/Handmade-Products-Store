import { useSelector } from "react-redux";
import { selectCartProducts } from "../../redux/products/selectors";
import Section from "components/common/Section/Section";
import Container from "components/common/Container/Container";
import { Typography } from "@mui/material";
import CartProductList from "components/CartComponents/CartProductList/CartProductList";
import { buildCartPageText } from "./buildText";
import css from "./CartPage.module.css";

const CartPage = () => {
  const cartProducts = useSelector(selectCartProducts);
  return (
    <Section>
      <Container>
        <Typography
          variant="h4"
          component="h2"
          sx={{ textAlign: "center", marginBottom: "5rem" }}
        >
          {buildCartPageText(cartProducts.length)}
        </Typography>
        {cartProducts.length > 0 && <CartProductList products={cartProducts} />}
      </Container>
    </Section>
  );
};

export default CartPage;
