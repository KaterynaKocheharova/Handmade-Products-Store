import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import NavList from "./NavList";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.customColors.mainBgColor,
  color: theme.palette.customColors.mainFontColor,
}));

const NavBar = () => {
  return (
    <StyledAppBar>
      <Toolbar>
        <NavList />
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavBar;
