import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectCartProducts } from "../../redux/cart/cartSelectors";
import Section from "../common/Section/Section";
import Container from "../common/Container/Container";
import { Grid } from "@mui/material";
import css from "./CartTab.module.css";

const CartTab = () => {
  const cartProducts = useAppSelector(selectCartProducts);
  console.log(cartProducts);

  return (
    <Section>
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid
            item
            xs
            sx={{ textAlign: "left", boxShadow: "var(--third-color-shadow)" }}
          >
            HELLO
          </Grid>
          <Grid
            item
            xs={4}
            sx={{ textAlign: "left", boxShadow: "var(--third-color-shadow)" }}
          >
            HELLO
          </Grid>
          <Grid
            item
            xs
            sx={{ textAlign: "left", boxShadow: "var(--third-color-shadow)" }}
          >
            HELLO
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default CartTab;
