import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { selectCartProductById } from "../../../redux/cart/cartSelectors";
import {
  increaseQuantity,
  reduceQuantity,
} from "../../../redux/cart/cartSlice";
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
    dispatch(increaseQuantity(productId));
  };

  const handleMinusQuantity = () => {
    dispatch(reduceQuantity(productId));
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      sx={{
        position: "relative",
        display: "flex",
        width: "100px",
        padding: "10px",
        bgcolor: "var(--second-color)",
        color: "var(--first-color)",
        borderRadius: "var(--button-border-radius)",
      }}
    >
      <IconButton
        className={css.button}
        disableRipple
        sx={{
          position: "absolute",
          left: "2px",
          border: "1px solid var(--first-color)",
          boxShadow: "var(--first-color-shadow)",
          marginLeft: "unset",
        }}
        onClick={handleMinusQuantity}
      >
        <RemoveIcon className={css["control-icon"]} />
      </IconButton>
      <p className={css["quantity-text"]}>
        {cartProduct ? cartProduct.quantity : 0}
      </p>
      <IconButton
        className={css.button}
        disableRipple
        sx={{
          position: "absolute",
          right: "2px",
          border: "1px solid var(--first-color)",
          boxShadow: "var(--first-color-shadow)",
        }}
        onClick={handlePlusQuantity}
      >
        <AddIcon className={css["control-icon"]} />
      </IconButton>
    </Stack>
  );
};

export default QuantityControl;
