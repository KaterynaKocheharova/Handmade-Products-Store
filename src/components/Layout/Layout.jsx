import { Outlet } from "react-router-dom";
import { Suspense, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import BaseModal from "../common/BaseModal/BaseModal";
import NavBar from "components/NavBar/NavBar";
import CartSidebar from "../Cart/CartSidebar/CartSideBar";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const drawerWidth = "300px";

  return (
    <Box>
      <CartSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        drawerWidth={drawerWidth}
        drawerVariant={isNonMobile ? "persistent" : "temporary"}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <Box
        component="main"
        sx={{ marginRight: isSidebarOpen && isNonMobile ? drawerWidth : "0" }}
      >
        <NavBar
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
        <Suspense fallback={<p>Loading page. Please, wait.</p>}>
          <Outlet />
        </Suspense>
      </Box>
      <BaseModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </Box>
  );
};

export default Layout;
