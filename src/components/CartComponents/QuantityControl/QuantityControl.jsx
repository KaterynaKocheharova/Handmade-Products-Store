import { useState } from "react";
import { IconButton, TextField, Typography, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const QuantityControl = ({ initialQuantity = 1, price }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <Box display="flex" alignItems="center">
      <IconButton onClick={handleDecrease}>
        <RemoveIcon />
      </IconButton>
      <TextField
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        type="number"
        inputProps={{ min: 1 }}
        sx={{ width: 60, textAlign: "center" }}
      />
      <IconButton onClick={handleIncrease}>
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default QuantityControl;
