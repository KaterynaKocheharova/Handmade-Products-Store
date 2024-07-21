import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { refreshUser } from "./redux/auth/operations";
// import { selectIsAuthLoading } from "./redux/auth/selectors";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Layout from "components/Layout/Layout";

// import Loader from "./components/common/Loader/Loader";
// import RestrictedRoute from "components/routes/RestrictedRoute";
// import PrivateRoute from "components/routes/PrivateRoute";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const LoginSignUpPage = lazy(() =>
  import("./pages/LoginSignUpPage/LoginSignUpPage")
);

const ProductCategoryPage = lazy(() =>
  import("./pages/ProductCategoryPage/ProductCategoryPage")
);

const ProductDetailsPage = lazy(() =>
  import("./pages/ProductDetailsPage/ProductDetailsPage")
);
const CartPage = lazy(() => import("./pages/CartPage/CartPage"));

export default function App() {
  // const isLoading = useSelector(selectIsAuthLoading);
  // const isRefreshing = isLoading === "refreshing";
  // const isLoggingOut = isLoading === "logging-out";
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <div id="App">
        {/* {isRefreshing ? (
          <Loader>Refreshing your info. Please, wait.</Loader>
        ) : isLoggingOut ? (
          <Loader>Logging out. Please, wait.</Loader>
        ) : ( */}
        <Suspense fallback={null}>
          <Layout>
            <Routes>
              {/* ADD RESTRICTED AND PRIVATE ROUTES LATER */}
              <Route path="/" element={<HomePage />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/login-signup" element={<LoginSignUpPage />} />
              <Route path="*" element={<Navigate to="/" />} />
               <Route path="/bags" element={<ProductCategoryPage />} />
              <Route path="/wallets" element={<ProductCategoryPage />} />
              <Route path="/belts" element={<ProductCategoryPage />} />
              <Route path="/product/:id" element={<ProductDetailsPage />} />
              <Route path="/cart" element={<CartPage />} /> 
            </Routes>
          </Layout>
        </Suspense>
        {/* )} */}
      </div>
    </ThemeProvider>
  );
}
