import { useAppDispatch } from "../../redux/hooks.ts";
import { addToCart } from "../../redux/cart/cartSlice.ts";
import { Button } from "@mui/material";
import { CiShoppingCart } from "react-icons/ci";
import FlexRow from "../common/FlexRow/FlexRow.tsx";
import { GoPlus } from "react-icons/go";
import css from "./AddToCartButton.module.css";
// import { useEffect, useState } from "react";

type AddToCartButton = {
  productData: {
    productId: string;
    quantity: number;
  };
};

const AddToCartButton = ({ productData }: AddToCartButton) => {
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(addToCart(productData.productId));
  };

  return (
    <Button
      variant="contained"
      size="medium"
      onClick={handleButtonClick}
      sx={{ paddingRight: "5px", paddingLeft: "5px" }}
    >
      <FlexRow spacing={2}>
        <GoPlus className={css.icon} size="30px" />
        <CiShoppingCart className={css.icon} size="30px" />
      </FlexRow>
    </Button>
  );
};

export default AddToCartButton;
