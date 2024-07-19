import { useState } from "react";
import CustomNavLink from "components/common/CustomNavLink/CustomNavLink";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import css from "./MobileMenu.module.css";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(null);
  const open = Boolean(isOpen);

  const handleClick = (event) => {
    setIsOpen(event.currentTarget);
  };

  const handleClose = () => {
    setIsOpen(null);
  };

  return (
    <div className={css["menu-container"]}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={isOpen}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <CustomNavLink to="/wallets" type="mobile-menu-nav-link">
            ГАМАНЦІ
          </CustomNavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <CustomNavLink to="/bags" type="mobile-menu-nav-link">
            СУМКИ
          </CustomNavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <CustomNavLink to="/belts" type="mobile-menu-nav-link">
            РЕМЕНІ
          </CustomNavLink>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MobileMenu;
