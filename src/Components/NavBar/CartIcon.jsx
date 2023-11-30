import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const CartIcon = ({ onClick }) => {
  const { shoppingCart } = useContext(ShoppingCartContext);
  const itemCount = shoppingCart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <li onClick={onClick} className="cursor-pointer">
      <span>🛒</span>
      <span>{itemCount}</span>
    </li>
  );
};

export default CartIcon;
