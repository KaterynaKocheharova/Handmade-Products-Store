import { Outlet } from "react-router-dom";
import NavBar from "components/NavBar/NavBar";
import CustomDrawer from "components/common/Drawer/Drawer";
import CartTab from "components/Cart/CartTab";
import { useOpen } from "../../hooks/useOpen";
import { styled } from "@mui/material";
import { Suspense } from "react";

const Layout = ({ children }) => {
  const { isElementOpen, openElement, closeElement } = useOpen();

  const Main = styled("main", {
    shouldForwardProp: (prop) => prop !== "isDrawerOpen",
  })(({ isDrawerOpen }) => ({
    flexGrow: 1,
    ...(isDrawerOpen && {
      marginLeft: "665px",
    }),
  }));

  return (
    <>
      <Main isDrawerOpen={isElementOpen}>
        <NavBar openDrawer={openElement} />
        <Outlet />
      </Main>
      <CustomDrawer closeDrawer={closeElement} drawerIsOpen={isElementOpen}>
        <CartTab />
      </CustomDrawer>
      <Suspense fallback={<p>Loading page. Please, wait.</p>}>
        {children}
      </Suspense>
    </>
  );
};

export default Layout;
