import { useState, ChangeEvent } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectPriceFilter } from "../../redux/productFilters/productFiltersSelectors";
import { changePriceFilter } from "../../redux/productFilters/productFiltersSlice";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import PriceRangeSelector from "./PriceRangeSelector";

const valuetext = (value: number) => {
  return `${value}грн`;
};

const marks = [
  {
    value: 700,
    label: "700 грн",
  },
  {
    value: 5000,
    label: "5000 грн",
  },
];

const PricesControl = () => {
  const pricesFilter = useAppSelector(selectPriceFilter);
  const dispatch = useAppDispatch();

  const handleChange = (event: Event, newValue: number | number[]) => {
    console.log(newValue);
    if (Array.isArray(newValue)) {
      dispatch(changePriceFilter([newValue[0], newValue[1]]));
    }
  };

  return (
    <Box
      sx={{
        marginBottom: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {/* <PriceRangeSelector
        values={value}
        handleMinChange={handleMinChange}
        handleMaxChange={handleMaxChange}
      /> */}
      <Slider
        value={pricesFilter}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        aria-label="prices
        slider"
        step={500}
        marks={marks}
        min={700}
        max={5000}
      />
    </Box>
  );
};

export default PricesControl;
