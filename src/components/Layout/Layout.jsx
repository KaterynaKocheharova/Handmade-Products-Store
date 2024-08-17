import { Outlet } from "react-router-dom";
import NavBar from "components/NavBar/NavBar";
import { styled } from "@mui/material";
import { Suspense } from "react";
import { useOpen } from "../../hooks/useOpen";
import BaseDrawer from "../common/BaseDrawer/BaseDrawer";
import CartTab from "../CartTab/CartTab";

const Layout = () => {
  const { isElementOpen, openElement, closeElement } = useOpen();

  const Main = styled("main", {
    shouldForwardProp: (prop) => prop !== "isElementOpen",
  })(({ isElementOpen }) => ({
    flexGrow: 1,
    ...(isElementOpen && {
      marginRight: "300px",
    }),
  }));

  return (
    <>
      <Main isElementOpen={isElementOpen}>
        <NavBar openDrawer={openElement} />
        <Suspense fallback={<p>Loading page. Please, wait.</p>}>
          <Outlet />
        </Suspense>
      </Main>
      <BaseDrawer closeDrawer={closeElement} drawerIsOpen={isElementOpen}>
        <CartTab />
      </BaseDrawer>
    </>
  );
};

export default Layout;
