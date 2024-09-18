import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const PricesSlider = () => {
  return (
    <Box sx={{ marginBottom: "1rem" }}>
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    </Box>
  );
};

export default PricesSlider;
