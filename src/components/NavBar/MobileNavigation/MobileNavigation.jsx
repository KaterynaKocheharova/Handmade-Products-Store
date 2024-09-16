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
        sx={{fontSize: "20px", padding: "4px"}}
      >
        Категорії
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={buttonRef.current}
        open={isElementOpen}
        onClose={handleClose}
      >
        <CustomMenuItem onClick={handleClose}>
          <NavLink to="/wallets" className={buildActiveClass}>
            Гаманці
          </NavLink>
        </CustomMenuItem>
        <CustomMenuItem onClick={handleClose}>
          <NavLink to="/bags" className={buildActiveClass}>
            Сумки
          </NavLink>
        </CustomMenuItem>
        <CustomMenuItem onClick={handleClose}>
          <NavLink to="/belts" className={buildActiveClass}>
            Ремені
          </NavLink>
        </CustomMenuItem>
        <CustomMenuItem onClick={handleClose}>
          <NavLink to="/backpacks" className={buildActiveClass}>
            Рюкзаки
          </NavLink>
        </CustomMenuItem>
      </Menu>
    </div>
  );
};

export default MobileNavigation;
