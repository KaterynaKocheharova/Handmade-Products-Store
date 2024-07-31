// import { useSelector, useDispatch } from "react-redux";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import { selectFilter } from "../../redux/filters/selectors";
// import { productFilters } from "../../redux/filters/constants";
// import { setFilter } from "../../redux/filters/filtersSlice";
// import { selectedButtonStyles } from "./selectedButtonStyles";

// const Filters = () => {
//   const currentFilter = useSelector(selectFilter);
//   const dispatch = useDispatch();

//   const changeFilter = (newFilter) => {
//     dispatch(setFilter(newFilter));
//   };

//   const isAllSelected = currentFilter === productFilters.ALL;
//   const isBagsSelected = currentFilter === productFilters.BAGS;
//   const isWalletsSelected = currentFilter === productFilters.WALLETS;
//   const isBeltsSelected = currentFilter === productFilters.BELTS;
//   const isBackpacksSelected = currentFilter === productFilters.BACKPACKS;

//   const buttonSizes = {
//     xs: "small",
//     sm: "medium",
//     md: "medium",
//     lg: "large",
//     xl: "large",
//   };

//   return (
//     <Stack
//       spacing={2}
//       direction="row"
//       useFlexGap
//       justifyContent="center"
//       flexWrap="wrap"
//     >
//       <Button
//         variant="outlined"
//         sx={isAllSelected ? selectedButtonStyles : {}}
//         onClick={() => changeFilter(productFilters.ALL)}
//       >
//         Усі продукти
//       </Button>
//       <Button
//         variant="outlined"
//         sx={isBagsSelected ? selectedButtonStyles : {}}
//         onClick={() => changeFilter(productFilters.BAGS)}
//       >
//         Сумки
//       </Button>
//       <Button
//         variant="outlined"
//         sx={isWalletsSelected ? selectedButtonStyles : {}}
//         onClick={() => changeFilter(productFilters.WALLETS)}
//       >
//         Гаманці
//       </Button>
//       <Button
//         variant="outlined"
//         sx={isBeltsSelected ? selectedButtonStyles : {}}
//         onClick={() => changeFilter(productFilters.BELTS)}
//       >
//         Пояси
//       </Button>
//       <Button
//         variant="outlined"
//         sx={isBackpacksSelected ? selectedButtonStyles : {}}
//         onClick={() => changeFilter(productFilters.BACKPACKS)}
//       >
//         Рюкзаки
//       </Button>
//     </Stack>
//   );
// };

// export default Filters;


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

  const buttonStyles = (isSelected) => ({
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
    },
    px: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5,
    },
    ...(isSelected && selectedButtonStyles),
  });

  return (
    <Stack
      spacing={2}
      direction="row"
      useFlexGap
      justifyContent="center"
      flexWrap="wrap"
    >
      <Button
        variant="outlined"
        sx={buttonStyles(currentFilter === productFilters.ALL)}
        onClick={() => changeFilter(productFilters.ALL)}
      >
        Усі продукти
      </Button>
      <Button
        variant="outlined"
        sx={buttonStyles(currentFilter === productFilters.BAGS)}
        onClick={() => changeFilter(productFilters.BAGS)}
      >
        Сумки
      </Button>
      <Button
        variant="outlined"
        sx={buttonStyles(currentFilter === productFilters.WALLETS)}
        onClick={() => changeFilter(productFilters.WALLETS)}
      >
        Гаманці
      </Button>
      <Button
        variant="outlined"
        sx={buttonStyles(currentFilter === productFilters.BELTS)}
        onClick={() => changeFilter(productFilters.BELTS)}
      >
        Пояси
      </Button>
      <Button
        variant="outlined"
        sx={buttonStyles(currentFilter === productFilters.BACKPACKS)}
        onClick={() => changeFilter(productFilters.BACKPACKS)}
      >
        Рюкзаки
      </Button>
    </Stack>
  );
};

export default Filters;
