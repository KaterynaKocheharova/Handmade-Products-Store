import { useAppSelector } from "../../redux/hooks";
import { selectCartProducts } from "../../redux/cart/cartSelectors";
import Section from "../common/Section/Section";
import Container from "../common/Container/Container";
import { Typography, Button, Stack } from "@mui/material";
import CartItem from "./CartItem/CartItem";
import { type CartItems } from "../../redux/cart/cartSlice";

const CartTab = () => {
  const cartProducts: CartItems = useAppSelector(selectCartProducts);

  return (
    <Section>
      <Container>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap={5}
        >
          <Typography component="h2" variant="h6">
            КОРЗИНА
          </Typography>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            component="ul"
          >
            {cartProducts.map((cartItem) => (
              <CartItem cartItemData={cartItem} key={cartItem.productId} />
            ))}
          </Stack>
          <Button variant="outlined">ЗАМОВИТИ</Button>
        </Stack>
      </Container>
    </Section>
  );
};

export default CartTab;
