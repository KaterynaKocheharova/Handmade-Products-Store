import { Suspense } from "react";
import NavBar from "components/NavBar/NavBar";
import Loader from "components/common/Loader/Loader";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <Suspense fallback={<Loader>Loading page. Please, wait.</Loader>}>{children}</Suspense>
    </div>
  );
};

export default Layout;