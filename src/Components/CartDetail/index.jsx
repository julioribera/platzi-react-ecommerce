import {useContext} from "react";
import {ShoppingCartContext} from "../../Context";
import {useCheckout} from "../../Context/checkout";

export const CartDetail = ({onClose}) => {
  const {shoppingCart} = useContext(ShoppingCartContext);
  const checkout = useCheckout();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div
        className="relative flex flex-col bg-white border border-gray-300 rounded-lg text-lg"
        style={{width: "500px", height: "fit-content"}}>
        <h2 className="text-center font-bold my-4">
          {shoppingCart.length === 0
            ? "No hay productos en el carrito."
            : "Detalle del Carrito"}
        </h2>
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-lg font-semibold p-2 z-30">
          X
        </button>
        <div>
          {shoppingCart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border-b">
              <img
                src={item.images[0]}
                alt={item.name}
                style={{width: "50px", height: "50px"}}
              />
              <span>{`x${item.quantity}`}</span>
              <span>{item.title}</span>
              <span>{`${item.price}€`}</span>
            </div>
          ))}
        </div>
        {shoppingCart.length > 0 && (
          <>
            <div className="flex justify-between items-center p-4">
              <span className="font-bold">Total:</span>
              <span className="font-bold">{`${shoppingCart.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
              )}€`}</span>
            </div>
            <button
              onClick={() => {
                checkout();
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition">
              Pagar
            </button>
          </>
        )}
      </div>
    </div>
  );
};
