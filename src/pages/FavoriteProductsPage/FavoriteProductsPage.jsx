import { useSelector } from "react-redux";
import { selectFavoriteProducts } from "../../redux/products/selectors";
import Section from "components/common/Section/Section";
import Container from "components/common/Container/Container";
import ProductList from "components/Products/ProductList/ProductList";
import { Typography } from "@mui/material";
import { buildFavPageText } from "./buildText";

const FavoriteProductsPage = () => {
  const favoriteProducts = useSelector(selectFavoriteProducts);

  return (
    <Section>
      <Container>
        <Typography
          variant="h4"
          component="h2"
          sx={{ textAlign: "center", marginBottom: "5rem" }}
        >
          {buildFavPageText(favoriteProducts.length)}
        </Typography>
        {favoriteProducts.length > 0 && (
          <ProductList products={favoriteProducts} />
        )}
      </Container>
    </Section>
  );
};

export default FavoriteProductsPage;
