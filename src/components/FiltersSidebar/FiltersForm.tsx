import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectColorFilters } from "../../redux/productFilters/productFiltersSelectors";
import { toggleColorFilter } from "../../redux/productFilters/productFiltersSlice";

const ColorGroup = () => {
  const dispatch = useAppDispatch();
  const selectedColors = useAppSelector(selectColorFilters);
  console.log(selectedColors);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleColorFilter(event.target.value));
  };

  return (
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
      <FormLabel
        component="legend"
        sx={{ fontWeight: "bold", fontSize: "20px", marginBottom: "1rem" }}
      >
        КОЛІР
      </FormLabel>
      <FormGroup>
        {["black", "brown", "blue", "red", "green", "gray", "white", "tan"].map(
          (color) => (
            <FormControlLabel
              checked={selectedColors.includes(color)}
              key={color}
              control={<Checkbox onChange={handleChange} value={color} />}
              label={color.charAt(0).toUpperCase() + color.slice(1)}
            />
          )
        )}
      </FormGroup>
    </FormControl>
  );
};

export default ColorGroup;
