import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Layout from "components/Layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ProductCategoryPage = lazy(() =>
  import("./pages/ProductCategoryPage/ProductCategoryPage")
);
const ProductDetailsPage = lazy(() =>
  import("./pages/ProductDetailsPage/ProductDetailsPage")
);
const FavoriteProductsPage = lazy(() =>
  import("./pages/FavoriteProductsPage/FavoriteProductsPage")
);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div id="App">
        <Suspense fallback={null}>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/bags" element={<ProductCategoryPage category="bags" />} />
              <Route path="/wallets" element={<ProductCategoryPage category="wallets" />} />
              <Route path="/belts" element={<ProductCategoryPage category="belts" />} />
              <Route path="/backpacks" element={<ProductCategoryPage category="backpacks" />} />
              <Route path="/favoriteProductsPage" element={<FavoriteProductsPage />} />
              <Route path="/:slug" element={<ProductDetailsPage />} />
            </Routes>
          </Layout>
        </Suspense>
      </div>
    </ThemeProvider>
  );
}


// maybe try adding suspense to outlet if layout will be rendered at "/"