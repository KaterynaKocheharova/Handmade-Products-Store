import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Stack } from "@mui/material";
import css from "./QuantityControl.module.css";

type QuantityControl = {
  quantity: number;
  handlePlusQuantity: () => void;
  handleMinusQuantity: () => void;
};

const QuantityControl = ({
  quantity,
  handlePlusQuantity,
  handleMinusQuantity,
}: QuantityControl) => {
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
      <p className={css["quantity-text"]}>{quantity}</p>
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
