import { useParams } from "react-router-dom";
import AppFormControl from "./FormControl";
import FormLegend from "./FormLegend";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectColorFilters } from "../../redux/productFilters/productFiltersSelectors";
import { toggleColorFilter } from "../../redux/productFilters/productFiltersSlice";

const ColorGroup = () => {
  const dispatch = useAppDispatch();
  const { category } = useParams<{ category: string }>();
  console.log(category);
  const selectedColors = useAppSelector(selectColorFilters);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleColorFilter(event.target.value));
  };

  return (
    <>
      <AppFormControl>
        <FormLegend text="КОЛІР" />
        <FormGroup>
          {[
            "black",
            "brown",
            "blue",
            "red",
            "green",
            "gray",
            "white",
            "tan",
          ].map((color) => (
            <FormControlLabel
              checked={selectedColors.includes(color)}
              key={color}
              control={<Checkbox onChange={handleChange} value={color} />}
              label={color.charAt(0).toUpperCase() + color.slice(1)}
            />
          ))}
        </FormGroup>
      </AppFormControl>
    </>
  );
};

export default ColorGroup;
