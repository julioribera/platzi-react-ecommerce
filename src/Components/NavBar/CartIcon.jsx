import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const CartIcon = () => {
  const { shoppingCart } = useContext(ShoppingCartContext);
  const itemCount = shoppingCart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <li>
      <span>🛒</span>
      <span>{itemCount}</span>
    </li>
  );
};

export default CartIcon;
