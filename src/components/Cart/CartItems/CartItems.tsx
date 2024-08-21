import { useAppSelector } from "../../../redux/hooks";
import {
  selectCartProducts,
  selectCartProductsQuantity,
} from "../../../redux/cart/cartSelectors";
import { Typography, Button, Stack } from "@mui/material";
import CartItem from "../CartItem/CartItem";
import { type CartItems } from "../../../redux/cart/cartSlice";
import css from "./CartItems.module.css";

type CartItemsProps = {
  setIsModalOpen: (arg: boolean) => void;
}

const CartItems = ({setIsModalOpen} : CartItemsProps) => {
  const cartProducts: CartItems = useAppSelector(selectCartProducts);
  const totalCartProducts = useAppSelector(selectCartProductsQuantity);

  return (
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
      {totalCartProducts ? <Button variant="outlined" onClick={() => setIsModalOpen(true)}>ЗАМОВИТИ</Button> : null}
    </Stack>
  );
};

export default CartItems;
