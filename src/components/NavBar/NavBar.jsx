import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Header from "components/structural/Header";
import Container from "components/common/Container/Container";
import NavList from "./NavList";
import NavBarMenu from "./Menu";
import AuthNav from "components/AuthNav/AuthNav";
import UserMenu from "components/UserMenu/UserMenu";
import Stack from "@mui/material/Stack";
import logo from "../../assets/My_Assets/logo.jpg";


const NavBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          {/* <img src={logo} alt="logo"/> */}
          <NavList />
          <NavBarMenu />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Stack>
      </Container>
    </Header>
  );
};

export default NavBar;
