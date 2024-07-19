import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Header from "components/structural/Header";
import Container from "components/common/Container/Container";
import Navigation from "./Navigation/Navigation";
import MobileMenu from "./MobileMenu/MobileMenu";
import AuthNav from "components/AuthNav/AuthNav";
import UserMenu from "components/UserMenu/UserMenu";
import Stack from "@mui/material/Stack";
import logo from "../../assets/My_Assets/logo.jpg";
import css from "./NavBar.module.css";

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
          <Navigation/>
          {/* <img src={logo} alt="logo"/> */}
          <MobileMenu />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Stack>
      </Container>
    </Header>
  );
};

export default NavBar;
