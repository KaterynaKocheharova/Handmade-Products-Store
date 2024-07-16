import { NavLink } from "react-router-dom";
import { buildActiveClass } from "./CustomNavLinkHelper";

const CustomNavLink = ({ children, to="/" }) => {
  return (
    <NavLink className={buildActiveClass} to={to}>
      {children}
    </NavLink>
  );
};

export default CustomNavLink;