import Container from "components/common/Container/Container";
import NavList from "./NavList";
import NavBarMenu from "./Menu";
import css from "./NavBar.module.css"

const NavBar = () => {
  return (
    <header className={css.header}>
      <Container>
        <NavList />
        <NavBarMenu />
      </Container>
    </header>
  );
};

export default NavBar;
