import {
  selectWallets,
  selectBags,
  selectBelts,
  selectBackpacks,
  selectAllProducts,
} from "../../redux/products/selectors";

export const getSelector = (category) => {
  switch (category) {
    case "wallets":
      return selectWallets;
    case "bags":
      return selectBags;
    case "belts":
      return selectBelts;
    case "backpacks":
      return selectBackpacks;
    default:
      return selectAllProducts;
  }
};
