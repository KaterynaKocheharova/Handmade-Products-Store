import { useState } from "react";
import { ChangeEvent } from "react";
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
  const [value, setValue] = useState<number[]>([700, 700]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleMinChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((prevValue) => [Number(event.target.value), prevValue[1]]);
  };

  const handleMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((prevValue) => [prevValue[0], Number(event.target.value)]);
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
      <PriceRangeSelector
        values={value}
        handleMinChange={handleMinChange}
        handleMaxChange={handleMaxChange}
      />
      <Slider
        value={value}
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
