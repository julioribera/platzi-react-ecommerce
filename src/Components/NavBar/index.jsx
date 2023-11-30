import CartIcon from "./CartIcon";
import NavLinkItem from "./NavLinkItem";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center max-w-5xl py-6 px-8 text-sm">
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
        <CartIcon />
      </ul>
    </nav>
  );
};

export default NavBar;
