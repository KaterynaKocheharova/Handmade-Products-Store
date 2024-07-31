import { useSelector } from "react-redux";
import { getSelector } from "./ProductCategoryPage.helpers";
import ProductList from "components/Products/ProductList/ProductList";
import Section from "components/common/Section/Section";
import Container from "components/common/Container/Container";

const ProductCategoryPage = ({ category }) => {
  const selector = getSelector(category);
  const products = useSelector(selector);
  return (
    <Section>
      <Container>
        <ProductList products={products} />
      </Container>
    </Section>
  );
};

export default ProductCategoryPage;
