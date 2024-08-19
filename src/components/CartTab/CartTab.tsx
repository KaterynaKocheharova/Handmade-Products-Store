import { useAppSelector } from "../../redux/hooks";
import {
  selectCartProducts,
  selectCartProductsQuantity,
} from "../../redux/cart/cartSelectors";
import Section from "../common/Section/Section";
import Container from "../common/Container/Container";
import { Typography, Button, Stack } from "@mui/material";
import CartItem from "./CartItem/CartItem";
import { type CartItems } from "../../redux/cart/cartSlice";

const CartTab = () => {
  const cartProducts: CartItems = useAppSelector(selectCartProducts);
  const totalCartProducts = useAppSelector(selectCartProductsQuantity);
  return (
    <Section type="cart">
      <Container>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap={5}
        >
          <Typography component="h2" variant="h6">
            {totalCartProducts
              ? `У ВАШІЙ КОРЗИНІ НАРАЗІ ${totalCartProducts} ТОВАРІВ `
              : "У ВАС ПОКИ НЕМАЄ ТОВАРІВ У КОРЗИНІ"}
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
          {totalCartProducts ? (
            <Button variant="outlined">ЗАМОВИТИ</Button>
          ) : null}
        </Stack>
      </Container>
    </Section>
  );
};

export default CartTab;
