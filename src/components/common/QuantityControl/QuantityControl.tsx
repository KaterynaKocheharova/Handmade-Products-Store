import { useState } from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FlexRow from "../FlexRow/FlexRow.tsx";
import css from "./QuantityControl.module.css";

type QuantityControl = {
  itemId: string;
};

const QuantityControl = ({ itemId }: QuantityControl) => {
  const [quantity, setQuantity] = useState(0);

  const handlePlusQuantity = () => {
    setQuantity(quantity - 1 < 0 ? 0 : quantity - 1);
  };

  const handleMinusQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <FlexRow spacing={1}>
      <IconButton
        disableRipple
        sx={{ backgroundColor: "var(--first-color)" }}
        onClick={handlePlusQuantity}
      >
        <RemoveIcon className={css["control-icon"]} />
      </IconButton>
      <p>{quantity}</p>
      <IconButton
        disableRipple
        sx={{
          backgroundColor: "var(--first-color)",
        }}
        onClick={handleMinusQuantity}
      >
        <AddIcon className={css["control-icon"]} />
      </IconButton>
    </FlexRow>
  );
};

export default QuantityControl;
