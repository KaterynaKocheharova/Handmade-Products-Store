import { Outlet } from "react-router-dom";
import { Suspense, useState } from "react";
import { Box } from "@mui/material";
import NavBar from "components/NavBar/NavBar";
import CartSidebar from "../Cart/CartSidebar/CartSideBar";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const drawerWidth = "300px";

  return (
    <Box>
      <CartSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        drawerWidth={drawerWidth}
      />
      <Box
        component="main"
        sx={{ marginRight: isSidebarOpen ? drawerWidth : "0" }}
        isSidebarOpen={isSidebarOpen}
      >
        <NavBar
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
        <Suspense fallback={<p>Loading page. Please, wait.</p>}>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
};

export default Layout;
