import { NavLink } from "react-router-dom";
import { buildActiveClass } from "./CustomNavLinkHelper";

const CustomNavLink = ({ children, to = "/", type = "" }) => {
  return (
    <NavLink
      className={({ isActive }) => buildActiveClass({ isActive, type })}
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
