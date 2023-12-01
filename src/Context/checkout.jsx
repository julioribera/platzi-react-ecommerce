import {useContext} from "react";
import {ShoppingCartContext} from "../Context";

export const useCheckout = () => {
  const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext);

  const checkout = () => {
    setShoppingCart([]);
  };

  return checkout;
};
