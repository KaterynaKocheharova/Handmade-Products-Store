import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useOpen } from "../../../hooks/useOpen";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import css from "./MobileNavigation.module.css";

const CustomMenuItem = styled(MenuItem)({
  "&:hover": {
    backgroundColor: "transparent",
    transition: "none",
  },
});

const categories = [
  { category: "wallets", label: "ГАМАНЦІ" },
  { category: "bags", label: "СУМКИ" },
  { category: "belts", label: "РЕМЕНІ" },
  { category: "backpacks", label: "РЮКЗАКИ" },
  { category: "home", label: "ГОЛОВНА" },
];

const MobileNavigation = () => {
  const { isElementOpen, openElement, closeElement } = useOpen();
  const buttonRef = useRef(null);

  const buildActiveClass = ({ isActive }) =>
    `${css["mobile-nav-link"]} ${isActive ? css["mobile-active-link"] : ""}`;

  const handleMenuButtonClick = () => {
    if (isElementOpen) {
      closeElement();
    } else {
      openElement();
    }
  };

  const handleClose = () => {
    closeElement();
  };

  return (
    <div className={css["menu-container"]}>
      <Button
        ref={buttonRef}
        id="basic-button"
        aria-controls={isElementOpen ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isElementOpen ? "true" : undefined}
        onClick={handleMenuButtonClick}
        sx={{ fontSize: "20px", padding: "4px" }}
      >
        Категорії
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={buttonRef.current}
        open={isElementOpen}
        onClose={handleClose}
      >
        {categories.map(({ category, label }) => (
          <CustomMenuItem key={category} onClick={handleClose}>
            <NavLink
              to={label === "ГОЛОВНА" ? "/" : `/products/${category}`}
              className={buildActiveClass}
            >
              {label}
            </NavLink>
          </CustomMenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MobileNavigation;
