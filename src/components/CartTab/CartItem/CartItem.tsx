import { useAppSelector } from "../../../redux/hooks";
import { selectProductById } from "../../../redux/products/selectors";
import { type CartItem } from "../../../redux/cart/cartSlice";
import { Typography, Stack } from "@mui/material";
import QuantityControl from "../../common/QuantityControl/QuantityControl";
import css from "./CartItem.module.css";
import { useState, useCallback } from "react";

type CartItemProps = {
  cartItemData: CartItem;
};

const CartItem = ({ cartItemData }: CartItemProps) => {
  const { productId, quantity: currentQuantity } = cartItemData;

  const currentProduct = useAppSelector(selectProductById(productId));

  const { image, name, new_price } = currentProduct;

  const [quantity, setQuantity] = useState(currentQuantity);

  const handlePlusQuantity = useCallback(() => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }, []);

  const handleMinusQuantity = useCallback(() => {
    setQuantity((prevQuantity) =>
      prevQuantity - 1 < 0 ? 0 : prevQuantity - 1
    );
  }, []);

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
      <QuantityControl
        quantity={quantity}
        handleMinusQuantity={handleMinusQuantity}
        handlePlusQuantity={handlePlusQuantity}
      />
    </Stack>
  );
};

export default CartItem;
