import { useSelector } from "react-redux";
import { selectProductsByCategory } from "../../redux/products/selectors";
import Section from "components/common/Section/Section";
import Container from "components/common/Container/Container";
import ProductList from "components/Products/ProductList/ProductList";
import FiltersSidebar from "../../components/FiltersSidebar/FiltersSidebar";
import { Button, Box } from "@mui/material";

const ProductCategoryPage = ({ category }) => {
  const products = useSelector(selectProductsByCategory(category));

  return (
    <Section>
      <Container>
        <FiltersSidebar />
        <Box sx={{ marginBottom: "2rem", width: "120px", marginLeft: "auto" }}>
          <Button variant="outlined">Фільтрація</Button>
        </Box>
        <ProductList products={products} />
      </Container>
    </Section>
  );
};

export default ProductCategoryPage;
