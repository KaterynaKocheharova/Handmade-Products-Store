import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavList from "./NavList";
import NavBarMenu from "./Menu";


const NavBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <NavList />
        <NavBarMenu/>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
