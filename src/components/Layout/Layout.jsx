import { Suspense } from "react";
import NavBar from "components/NavBar/NavBar";
import Loader from "components/common/Loader/Loader";
import CustomDrawer from "components/common/Drawer/Drawer";
import CartTab from "components/Cart/CartTab";
import { useOpen } from "../../hooks/useOpen";
import { styled } from "@mui/material";

const Layout = ({ children }) => {
  const { open, openElement, closeElement } = useOpen();

  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ open }) => ({
      flexGrow: 1,
      ...(open && {
        marginLeft: "665px",
      }),
    })
  );

  return (
    <>
      <CustomDrawer closeDrawer={closeElement} drawerIsOpen={open}>
        <CartTab />
      </CustomDrawer>
      <Main open={open}>
        <NavBar openDrawer={openElement} />
        <Suspense fallback={<Loader>Loading page. Please, wait.</Loader>}>
          {children}
        </Suspense>
      </Main>
    </>
  );
};

export default Layout;
