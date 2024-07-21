import Section from "components/common/Section/Section";
import Container from "components/common/Container/Container";
import ProductList from "components/Products/ProductList/ProductList";


const CatalogPage = () => {
  return (
    <Section>
      <Container>
        <ProductList/>
      </Container>
    </Section>
  )
}

export default CatalogPage;
