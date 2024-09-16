import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { selectCartProductById } from "../../../redux/cart/cartSelectors";
import {
  increaseQuantity,
  reduceQuantity,
} from "../../../redux/cart/cartSlice";
import {IconButton, Typography, Box } from "@mui/material";
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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "100px",
        padding: "10px",
        bgcolor: "var(--second-color)",
        color: "var(--first-color)",
        borderRadius: "var(--button-border-radius)",
        marginLeft: "0",
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
      <Typography
        className={css["quantity-text"]}
        sx={{
          marginLeft: "0",
          textAlign: "center",
          fontSize: "14px",
          fontWeight: "500",
          color: "var(--first-color)",
        }}
      >
        {cartProduct ? cartProduct.quantity : 0}
      </Typography>
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
    </Box>
  );
};

export default QuantityControl;
