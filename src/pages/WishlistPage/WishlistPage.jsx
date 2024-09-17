import { useSelector } from "react-redux";
import { selectWishlistProducts } from "../../redux/wishlist/wishlistSelectors";
import Section from "components/common/Section/Section";
import Container from "components/common/Container/Container";
import ProductList from "components/Products/ProductList/ProductList";
import { Typography } from "@mui/material";
import { buildFavPageText } from "./buildText";

const FavoriteProductsPage = () => {
  const wishlist = useSelector(selectWishlistProducts);

  return (
    <Section>
      <Container type="products">
        <Typography
          variant="h4"
          component="h2"
          sx={{ textAlign: "center", marginBottom: "5rem" }}
        >
          {buildFavPageText(wishlist.length)}
        </Typography>
        {wishlist.length > 0 && (
          <ProductList products={wishlist}  />
        )}
      </Container>
    </Section>
  );
};

export default FavoriteProductsPage;
