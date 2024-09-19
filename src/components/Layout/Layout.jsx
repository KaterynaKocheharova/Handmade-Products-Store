import { useSelector, useDispatch } from "react-redux";
import { selectIsCartSidebarOpen } from "../../redux/sidebar/sidebarSelectors";
import { selectIsFiltrationSidebarOpen } from "../../redux/sidebar/sidebarSelectors";
import { toggleSidebar } from "../../redux/sidebar/sidebarSlice";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Box, useMediaQuery } from "@mui/material";
import NavBar from "components/NavBar/NavBar";
import CartSidebar from "../Cart/CartSidebar/CartSideBar";
import Dialogue from "../common/Dialogue/Dialogue";
import SuccessSnackbar from "../common/Snackbar/SuccessSnackbar";
import ErrorSnackbar from "../common/Snackbar/ErrorSnackbar";
import FiltersSidebar from "../FiltersSidebar/FiltersSidebar";

const Layout = () => {
  const isSidebarOpen = useSelector(selectIsCartSidebarOpen);
  const isFiltrationSidebarOpen = useSelector(selectIsFiltrationSidebarOpen);
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const drawerWidth = "300px";
  const dispatch = useDispatch();
  return (
    <Box>
      <CartSidebar drawerWidth={drawerWidth} />
      <FiltersSidebar sidebarWidth={drawerWidth} />
      <Box
        component="main"
        sx={{
          marginRight: isSidebarOpen && isNonMobile ? drawerWidth : "0",
          marginLeft:
            isFiltrationSidebarOpen && isNonMobile ? drawerWidth : "0",
        }}
      >
        <NavBar
          setIsSidebarOpen={() => dispatch(toggleSidebar({ type: "cart" }))}
          isSidebarOpen={isSidebarOpen}
        />
        <Suspense fallback={<p>Loading page. Please, wait.</p>}>
          <Outlet />
        </Suspense>
      </Box>
      <Dialogue />
      <SuccessSnackbar />
      <ErrorSnackbar />
    </Box>
  );
};

export default Layout;
