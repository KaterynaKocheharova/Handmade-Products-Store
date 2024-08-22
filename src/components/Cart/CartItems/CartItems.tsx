import { useAppSelector } from "../../../redux/hooks";
import { selectCartProducts } from "../../../redux/cart/cartSelectors";
import { Stack } from "@mui/material";
import CartItem from "../CartItem/CartItem";
import { type CartItems } from "../../../redux/cart/cartSlice";

const CartItems = () => {
  const cartProducts: CartItems = useAppSelector(selectCartProducts);

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={5}
    >
      <Stack direction="column" component="ul" gap={2}>
        {cartProducts.map((cartItem) => (
          <CartItem cartItemData={cartItem} key={cartItem.productId} />
        ))}
      </Stack>
    </Stack>
  );
};

export default CartItems;
