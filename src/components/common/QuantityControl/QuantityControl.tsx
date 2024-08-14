import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FlexRow from "../FlexRow/FlexRow.tsx";
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
    <FlexRow spacing={1}>
      <IconButton
        disableRipple
        sx={{ backgroundColor: "var(--first-color)" }}
        onClick={handleMinusQuantity}
      >
        <RemoveIcon className={css["control-icon"]} />
      </IconButton>
      <p className={css["quantity-text"]}>{quantity}</p>
      <IconButton
        disableRipple
        sx={{
          backgroundColor: "var(--first-color)",
        }}
        onClick={handlePlusQuantity}
      >
        <AddIcon className={css["control-icon"]} />
      </IconButton>
    </FlexRow>
  );
};

export default QuantityControl;
