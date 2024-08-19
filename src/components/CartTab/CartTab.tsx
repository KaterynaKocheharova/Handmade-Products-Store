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
import css from "./CartTab.module.css";

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
          <Typography className={css.text} component="h2" variant="h6">
            {totalCartProducts ? (
              <>
                У ВАШІЙ КОРЗИНІ НАРАЗІ{" "}
                <span className={css.accent}>{totalCartProducts}</span> ТОВАРІВ
              </>
            ) : (
              "У ВАС ПОКИ НЕМАЄ ТОВАРІВ У КОРЗИНІ"
            )}
          </Typography>
          <Stack direction="column" component="ul" gap={2}>
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
