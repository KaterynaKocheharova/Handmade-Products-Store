import { useState } from "react";
import { IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

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
    <div style={{ display: "flex", alignItems: "center" }}>
      <IconButton onClick={handleDecrease} color="primary">
        <RemoveIcon />
      </IconButton>
      <Typography variant="h6" style={{ margin: "0 10px" }}>
        {quantity}
      </Typography>
      <IconButton onClick={handleIncrease} color="primary">
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default QuantityControl;
