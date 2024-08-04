import { Suspense } from "react";
import NavBar from "components/NavBar/NavBar";
import Loader from "components/common/Loader/Loader";
import CartTab from "components/CartTab/CartTab";

const Layout = ({ children }) => {
  return (
    <>
      <main>
        <NavBar />
        <Suspense fallback={<Loader>Loading page. Please, wait.</Loader>}>
          {children}
        </Suspense>
      </main>
      <CartTab />
    </>
  );
};

export default Layout;
