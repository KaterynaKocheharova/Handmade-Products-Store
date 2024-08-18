import { useAppSelector } from "../../../redux/hooks";
import { selectProductById } from "../../../redux/products/selectors";
import { type CartItem } from "../../../redux/cart/cartSlice";
import { Typography, Stack } from "@mui/material";
import QuantityControl from "../../common/QuantityControl/QuantityControl";
import css from "./CartItem.module.css";

type CartItemProps = {
  cartItemData: CartItem;
};
const CartItem = ({ cartItemData: { productId, quantity } }: CartItemProps) => {
  const currentProduct = useAppSelector(selectProductById(productId));

  if (!currentProduct) {
    return null; // or return a fallback UI
  }

  const { image, name, new_price } = currentProduct;

  return (
    <Stack
      component="li"
      direction="row"
      spacing={4}
      flexWrap="wrap"
      useFlexGap
      justifyContent="center"
      alignItems="center"
      className={css["cart-item"]}
    >
      <img src={image} alt={name} width="80" className={css.image} />
      <Typography component="h3" variant="h6">
        {name}
      </Typography>
      <p>{new_price * quantity} грн</p>
      <QuantityControl productId={productId} />
    </Stack>
  );
};

export default CartItem;
