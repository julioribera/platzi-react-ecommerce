import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

export const CartDetail = ({ onClose }) => {
  const { shoppingCart } = useContext(ShoppingCartContext);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div
        className="relative flex flex-col bg-white border border-gray-300 rounded-lg text-lg"
        style={{ width: "500px", height: "fit-content" }}
      >
        <h2 className="text-center font-bold my-4">
          {shoppingCart.length === 0
            ? "No hay productos en el carrito."
            : "Detalle del Carrito"}
        </h2>
        <div>
          {shoppingCart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border-b"
            >
              <img
                src={item.images[0]}
                alt={item.name}
                style={{ width: "50px", height: "50px" }}
              />
              <span>{`x${item.quantity}`}</span>
              <span>{item.title}</span>
              <span>{`${item.price}€`}</span>
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-lg font-semibold p-2 z-30"
        >
          X
        </button>
      </div>
    </div>
  );
};
