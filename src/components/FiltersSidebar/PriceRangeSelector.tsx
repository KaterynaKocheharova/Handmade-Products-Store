import { ChangeEvent } from "react";
import { Input, Box, Typography } from "@mui/material";

type PriceRangeSelectorProps = {
  values: number[];
  handleMaxChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleMinChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const PriceRangeSelector = ({
  values,
  handleMaxChange,
  handleMinChange,
}: PriceRangeSelectorProps) => {
  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Input
        type="number"
        size="small"
        value={!values[0] ? "" : values[0]}
        onChange={handleMinChange}
        inputProps={{ min: 700, max: 5000, step: 500 }}
      />
      <Typography>To:</Typography>
      <Input
        type="number"
        size="small"
        value={!values[1] ? "" : values[1]}
        onChange={handleMaxChange}
        inputProps={{ min: 700, max: 5000, step: 500 }}
      />
    </Box>
  );
};

export default PriceRangeSelector;
