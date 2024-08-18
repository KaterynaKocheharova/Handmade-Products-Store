import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { selectCartProductById } from "../../../redux/cart/cartSelectors";
import { addToCart, removeFromCart } from "../../../redux/cart/cartSlice";
import { Stack, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import css from "./QuantityControl.module.css";

type QuantityControl = {
  productId: string;
};

const QuantityControl = ({ productId }: QuantityControl) => {
  const cartProduct = useAppSelector(selectCartProductById(productId));

  const dispatch = useAppDispatch();

  const handlePlusQuantity = () => {
    dispatch(addToCart(productId));
  };

  const handleMinusQuantity = () => {
    dispatch(removeFromCart(productId));
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <IconButton
        disableRipple
        sx={{
          boxShadow: "var(--second-color-shadow)",
        }}
        onClick={handleMinusQuantity}
      >
        <RemoveIcon className={css["control-icon"]} />
      </IconButton>
      <p className={css["quantity-text"]}>
        {cartProduct ? cartProduct.quantity : 0}
      </p>
      <IconButton
        disableRipple
        sx={{
          boxShadow: "var(--second-color-shadow)",
        }}
        onClick={handlePlusQuantity}
      >
        <AddIcon className={css["control-icon"]} />
      </IconButton>
    </Stack>
  );
};

export default QuantityControl;
