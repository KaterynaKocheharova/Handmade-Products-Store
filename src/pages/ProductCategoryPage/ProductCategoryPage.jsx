import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProductsByCategory } from "../../redux/products/selectors";
import { selectIsFiltrationSidebarOpen } from "../../redux/sidebar/sidebarSelectors";
import { toggleSidebar } from "../../redux/sidebar/sidebarSlice";
import Section from "components/common/Section/Section";
import Container from "components/common/Container/Container";
import ProductList from "components/Products/ProductList/ProductList";
import FiltersSidebar from "../../components/FiltersSidebar/FiltersSidebar";
import { Button, Box, useMediaQuery } from "@mui/material";

const ProductCategoryPage = () => {
  const { category } = useParams();
  const products = useSelector(selectProductsByCategory(category));
  const isSidebarOpen = useSelector(selectIsFiltrationSidebarOpen);
  const dispatch = useDispatch();
  const sidebarWidth = "300px";
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  return (
    <Section>
      <Container type="products">
        <FiltersSidebar sidebarWidth={sidebarWidth} />
        <Box
          sx={{ marginLeft: isSidebarOpen && isNonMobile ? sidebarWidth : "0" }}
        >
          <Button
            size="large"
            sx={{ marginBottom: "4rem" }}
            variant="outlined"
            onClick={() => dispatch(toggleSidebar({ type: "filtration" }))}
          >
            {isSidebarOpen ? "Приховати фільтрацію" : "Фільтрація"}
          </Button>
          <ProductList products={products} />
        </Box>
      </Container>
    </Section>
  );
};

export default ProductCategoryPage;
