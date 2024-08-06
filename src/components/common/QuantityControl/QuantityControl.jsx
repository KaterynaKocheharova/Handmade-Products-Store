import { useState } from "react";
import { IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import css from "./QuantityControl.module.css";
import FlexRow from "../FlexRow/FlexRow";

const QuantityControl = () => {
  // add it later while dispatching adding to cart action
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <FlexRow spacing={0.5}>
      <IconButton onClick={handleDecrease}>
        <RemoveIcon className={css["control-icon"]} />
      </IconButton>
      <Typography sx={{ fontSize: "14px" }}>{quantity}</Typography>
      <IconButton onClick={handleIncrease}>
        <AddIcon className={css["control-icon"]} />
      </IconButton>
    </FlexRow>
  );
};

export default QuantityControl;
