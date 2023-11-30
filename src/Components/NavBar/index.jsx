import CartIcon from "./CartIcon";
import NavLinkItem from "./NavLinkItem";

const NavBar = ({ onCartClick }) => {
  return (
    <nav className="flex justify-between items-center w-full py-6 px-8 text-sm sticky top-0 bg-white z-30">
      <ul className="flex items-center gap-3">
        <li className="font-bold">
          <a href="/">Magia&Cardistry</a>
        </li>
        <NavLinkItem to="/">Todo</NavLinkItem>
        <NavLinkItem to="/trucos">Trucos</NavLinkItem>
        <NavLinkItem to="/barajas">Barajas</NavLinkItem>
        <NavLinkItem to="/accesorios">Accesorios</NavLinkItem>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">info@magiaycardistry.com</li>
        <NavLinkItem to="/my-orders">My Orders</NavLinkItem>
        <NavLinkItem to="/my-account">My Account</NavLinkItem>
        <NavLinkItem to="/sign-in">Sign In</NavLinkItem>
        <CartIcon onClick={onCartClick} />
      </ul>
    </nav>
  );
};

export default NavBar;
