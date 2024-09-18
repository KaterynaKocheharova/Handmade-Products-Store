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
const WishlistPage = lazy(() => import("./pages/WishlistPage/WishlistPage"));

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div id="App">
        <ThemeProvider theme={theme}>
          <div id="App">
            <Suspense fallback={<p>Loading...</p>}>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route
                    path="products/:category"
                    element={<ProductCategoryPage />}
                  />
                  <Route
                    path="favoriteProductsPage"
                    element={<WishlistPage />}
                  />
                  <Route
                    path=":category/:productId"
                    element={<ProductDetailsPage />}
                  />
                  <Route path="*" element={<Navigate to="/" />} />
                </Route>
              </Routes>
            </Suspense>
          </div>
        </ThemeProvider>
      </div>
    </ThemeProvider>
  );
}
