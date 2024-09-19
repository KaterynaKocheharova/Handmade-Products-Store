import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectFilteredProducts } from "../../redux/products/selectors";
import { selectIsFiltrationSidebarOpen } from "../../redux/sidebar/sidebarSelectors";
import { toggleSidebar } from "../../redux/sidebar/sidebarSlice";
import Section from "components/common/Section/Section";
import Container from "components/common/Container/Container";
import ProductList from "components/Products/ProductList/ProductList";
import SortingSelect from "../../components/SortingSelect";
import { Button, Stack } from "@mui/material";

const ProductCategoryPage = () => {
  const { category } = useParams();
  const products = useSelector(selectFilteredProducts(category));
  const isSidebarOpen = useSelector(selectIsFiltrationSidebarOpen);
  const dispatch = useDispatch();
  return (
    <Section type="products">
      <Container type="products">
          <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <Button
              size="large"
              variant="outlined"
              onClick={() => dispatch(toggleSidebar({ type: "filtration" }))}
            >
              {isSidebarOpen ? "Приховати фільтрацію" : "Фільтрація"}
            </Button>
            <SortingSelect />
          </Stack>

          <ProductList products={products} />
      </Container>
    </Section>
  );
};

export default ProductCategoryPage;
