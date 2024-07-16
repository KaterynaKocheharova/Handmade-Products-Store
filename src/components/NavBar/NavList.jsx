import NavItem from "./NavItem";
import css from "./NavBar.module.css";


const navListTexts = ["Сумки", "Гаманці", "Пояси", "Інші аксесуари"];

export default function NavList() {
  return (
    <ul className={css["nav-list"]}>
      {navListTexts.map((text, index) => (
        <NavItem key={index}>{text}</NavItem>
      ))}
    </ul>
  );
}
