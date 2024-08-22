import { Outlet } from "react-router-dom";
import { Suspense, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import NavBar from "components/NavBar/NavBar";
import CartSidebar from "../Cart/CartSidebar/CartSideBar";
import Dialogue from "../common/Dialogue/Dialogue";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dialogueType, setDialogueType] = useState(null); // successful-order, fill-in-number
  const [isDialogueOpen, setIsDialogueOpen] = useState(false);

  const drawerWidth = "300px";

  return (
    <Box>
      <CartSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        drawerWidth={drawerWidth}
        drawerVariant={isNonMobile ? "persistent" : "temporary"}
        setDialogueType={setDialogueType}
        setIsDialogueOpen={setIsDialogueOpen}
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
      <Dialogue
        setDialogueType={setDialogueType}
        isDialogueOpen={isDialogueOpen}
        setIsDialogueOpen={setIsDialogueOpen}
        dialogueType={dialogueType}
      />
    </Box>
  );
};

export default Layout;
