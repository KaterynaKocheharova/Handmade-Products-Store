import Section from "components/common/Section/Section";
import Container from "components/common/Container/Container";
import Stack from "@mui/material/Stack";
import Filters from "components/Filters/Filters";
import ProductList from "components/Products/ProductList/ProductList";

const CatalogPage = () => {
  return (
    <Section>
      <Container>
        <Stack spacing={10}>
          <Filters />
          <ProductList />
        </Stack>
      </Container>
    </Section>
  );
};

export default CatalogPage;
