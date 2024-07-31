import { useSelector } from "react-redux";
import { selectProductsByCategory } from "../../redux/products/selectors";
import ProductList from "components/Products/ProductList/ProductList";
import Section from "components/common/Section/Section";
import Container from "components/common/Container/Container";

const ProductCategoryPage = ({ category }) => {
  const products = useSelector(selectProductsByCategory(category));
  return (
    <Section>
      <Container>
        <ProductList products={products} />
      </Container>
    </Section>
  );
};

export default ProductCategoryPage;
