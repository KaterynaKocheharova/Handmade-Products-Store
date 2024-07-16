import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import css from "./NavBar.module.css";

export default function NavBarMenu() {
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
