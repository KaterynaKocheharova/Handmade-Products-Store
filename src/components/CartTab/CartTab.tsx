import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectCartProducts } from "../../redux/cart/cartSelectors";
import Section from "../common/Section/Section";
import Container from "../common/Container/Container";
import { Grid, styled } from "@mui/material";

// Create a styled Grid item
const StyledGridItem = styled(Grid)(({ theme }) => ({
  padding: '20px 5px 20px 5px',
  boxShadow: "var(--third-color-shadow)",
  textAlign: "left"
}));

const CartTab = () => {
  const cartProducts = useAppSelector(selectCartProducts);
  console.log(cartProducts);

  return (
    <Section>
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <StyledGridItem item xs>
            HELLO
          </StyledGridItem>
          <StyledGridItem item xs={4}>
            HELLO
          </StyledGridItem>
          <StyledGridItem item xs>
            HELLO
          </StyledGridItem>
        </Grid>
      </Container>
    </Section>
  );
};

export default CartTab;

