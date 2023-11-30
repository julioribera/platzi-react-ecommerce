import { useContext } from "react";
import { ShoppingCartContext } from "../Context";

export const useAddToCart = () => {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);

  const addToCart = (product) => {
    const itemInCart = shoppingCart.find((item) => item.id === product.id);
    let newShoppingCart;
    if (itemInCart) {
      newShoppingCart = shoppingCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      newShoppingCart = [...shoppingCart, { ...product, quantity: 1 }];
    }
    setShoppingCart(newShoppingCart);
  };

  return addToCart;
};
