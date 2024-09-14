import { useAppDispatch } from "../../redux/hooks.ts";
import { openSnackbar } from "../../redux/snackbar/slice.ts";
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

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      dispatch(addToCart(productData.productId));
      dispatch(openSnackbar({ type: "success", text: "Продукт у корзині" }));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(openSnackbar({ type: "error", text: error.message }));
      } else {
        dispatch(openSnackbar({ type: "error", text: "An error occurred" }));
      }
    }
  };

  return (
    <Button
      variant="contained"
      size="medium"
      onClick={handleButtonClick}
      sx={{
        paddingRight: "5px",
        paddingLeft: "5px",
        borderRadius: "var(--button-border-radius)",
      }}
    >
      <FlexRow spacing={2}>
        <GoPlus className={css.icon} size="30px" />
        <CiShoppingCart className={css.icon} size="30px" />
      </FlexRow>
    </Button>
  );
};

export default AddToCartButton;
