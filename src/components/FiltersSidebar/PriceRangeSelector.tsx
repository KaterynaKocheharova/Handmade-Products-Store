
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectPriceFilter } from "../../redux/productFilters/productFiltersSelectors";
import { changePriceFilter } from "../../redux/productFilters/productFiltersSlice";
import { TextField, Box, Typography } from "@mui/material";

const PriceRangeSelector = () => {
  const dispatch = useAppDispatch();
  const priceFilter = useAppSelector(selectPriceFilter);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "minPrice") {
      dispatch(changePriceFilter([Number(e.target.value), priceFilter[1]]));
    } else {
      dispatch(changePriceFilter([priceFilter[0], Number(e.target.value)]));
    }
  };

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <TextField
        name="minPrice"
        type="number"
        size="small"
        value={!priceFilter[0] ? "" : priceFilter[0]}
        onChange={handlePriceChange}
        inputProps={{ min: 700, max: 5000, step: 500 }}
      />
      <Typography>To:</Typography>
      <TextField
        name="maxPrice"
        type="number"
        size="small"
        value={!priceFilter[1] ? "" : priceFilter[1]}
        onChange={handlePriceChange}
        inputProps={{ min: 700, max: 5000, step: 500 }}
      />
    </Box>
  );
};

export default PriceRangeSelector;
