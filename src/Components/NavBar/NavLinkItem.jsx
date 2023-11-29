import { NavLink } from "react-router-dom";

const NavLinkItem = ({ to, children }) => {
  const activeStyle = "underline";
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? activeStyle : "")}
    >
      {children}
    </NavLink>
  );
};

export default NavLinkItem;
