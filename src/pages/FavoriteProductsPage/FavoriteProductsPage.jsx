import { useSelector } from "react-redux";
import { selectFavoriteProducts } from "../../redux/products/selectors";
import Section from "components/common/Section/Section";
import Container from "components/common/Container/Container";
import ProductList from "components/Products/ProductList/ProductList";

const FavoriteProductsPage = () => {
  const favoriteProducts = useSelector(selectFavoriteProducts);
  console.log(favoriteProducts);

  return (
    <Section>
      <Container>
        FAV LIST
        {favoriteProducts.length > 0 && (
          <ProductList products={favoriteProducts} />
        )}
      </Container>
    </Section>
  );
};

export default FavoriteProductsPage;
