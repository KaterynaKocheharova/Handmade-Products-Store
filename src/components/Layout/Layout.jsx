import { Suspense } from "react";
import NavBar from "components/NavBar/NavBar";
import Loader from "components/common/Loader/Loader";
import CustomDrawer from "components/common/Drawer/Drawer";
import CartTab from "components/Cart/CartTab";
import { useOpen } from "../../hooks/useOpen";

const Layout = ({ children }) => {
  const { open, openElement, closeElement } = useOpen();

  return (
    <>
      <main>
        <NavBar openDrawer={openElement} />
        <Suspense fallback={<Loader>Loading page. Please, wait.</Loader>}>
          {children}
        </Suspense>
      </main>
      <CustomDrawer closeDrawer={closeElement} drawerIsOpen={open}>
        <CartTab />
      </CustomDrawer>
    </>
  );
};

export default Layout;
