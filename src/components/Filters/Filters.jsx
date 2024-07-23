import { useSelector, useDispatch } from "react-redux";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { selectFilter } from "../../redux/filters/selectors";
import { productFilters } from "../../redux/filters/constants";
import { setFilter } from "../../redux/filters/filtersSlice";
import { selectedButtonStyles } from "./selectedButtonStyles";

const Filters = () => {
  const currentFilter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = (newFilter) => {
    dispatch(setFilter(newFilter));
  };

  const isAllSelected = currentFilter === productFilters.ALL;
  const isBagsSelected = currentFilter === productFilters.BAGS;
  const isWalletsSelected = currentFilter === productFilters.WALLETS;
  const isBeltsSelected = currentFilter === productFilters.BELTS;
  const isBackpacksSelected = currentFilter === productFilters.BACKPACKS;
  
  return (
    <Stack spacing={2} direction="row" justifyContent="center">
      <Button
        variant="outlined"
        sx={isAllSelected ? selectedButtonStyles : {}}
        onClick={() => changeFilter(productFilters.ALL)}
      >
        Усі продукти
      </Button>
      <Button
        variant="outlined"
        sx={isBagsSelected ? selectedButtonStyles : {}}
        onClick={() => changeFilter(productFilters.BAGS)}
      >
        Сумки
      </Button>
      <Button
        variant="outlined"
        sx={isWalletsSelected ? selectedButtonStyles : {}}
        onClick={() => changeFilter(productFilters.WALLETS)}
      >
        Гаманці
      </Button>
      <Button
        variant="outlined"
        sx={isBeltsSelected ? selectedButtonStyles : {}}
        onClick={() => changeFilter(productFilters.BELTS)}
      >
        Пояси
      </Button>
      <Button
        variant="outlined"
        sx={isBackpacksSelected ? selectedButtonStyles : {}}
        onClick={() => changeFilter(productFilters.BACKPACKS)}
      >
        Рюкзаки
      </Button>
    </Stack>
  );
};

export default Filters;
