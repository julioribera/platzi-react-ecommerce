import NavBar from "../NavBar";
import React, { useState } from "react";
import { CartDetail } from "../CartDetail";

const Layout = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="max-w-5xl mx-auto">
      <NavBar onCartClick={toggleCart} />
      {isCartOpen && <CartDetail onClose={toggleCart} />}
      <main className="px-8 py-2">{children}</main>
    </div>
  );
};

export default Layout;
