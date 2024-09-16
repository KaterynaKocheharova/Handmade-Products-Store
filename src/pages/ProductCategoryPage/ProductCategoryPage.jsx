import { useSelector, useDispatch } from "react-redux";
import { selectProductsByCategory } from "../../redux/products/selectors";
import { selectIsFiltrationSidebarOpen } from "../../redux/sidebar/sidebarSelectors";
import { toggleSidebar } from "../../redux/sidebar/sidebarSlice";
import Section from "components/common/Section/Section";
import Container from "components/common/Container/Container";
import ProductList from "components/Products/ProductList/ProductList";
import FiltersSidebar from "../../components/FiltersSidebar/FiltersSidebar";
import { Button, Box } from "@mui/material";

const ProductCategoryPage = ({ category }) => {
  const products = useSelector(selectProductsByCategory(category));
  const isSidebarOpen = useSelector(selectIsFiltrationSidebarOpen);
  const dispatch = useDispatch();
  const sidebarWidth = "300px";
  return (
    <Section>
      <Container>
        <FiltersSidebar sidebarWidth={sidebarWidth} />
        <Box sx={{ marginLeft: isSidebarOpen ? sidebarWidth : "0" }}>
          <Box
            sx={{ marginBottom: "2rem", width: "300px", marginLeft: "auto" }}
          >
            <Button
              variant="outlined"
              onClick={() => dispatch(toggleSidebar({ type: "filtration" }))}
            >
              {isSidebarOpen ? "Приховати фільтрацію" : "Фільтрація"}
            </Button>
          </Box>
          <ProductList products={products} />
        </Box>
      </Container>
    </Section>
  );
};

export default ProductCategoryPage;
