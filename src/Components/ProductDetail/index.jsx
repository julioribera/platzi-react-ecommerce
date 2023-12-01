import {useAddToCart} from "../../Context/addToCart";

export const ProductDetail = ({product, onClose}) => {
  const addToCart = useAddToCart();
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <aside
        className="relative flex flex-col bg-white border border-gray-300 rounded-lg text-lg"
        style={{width: "500px", height: "fit-content"}}>
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-lg font-semibold p-2 z-30">
          X
        </button>
        <img
          src={product.images[0]}
          alt={product.title}
          className="rounded-t-lg w-full h-96 object-cover"
        />
        <div className="p-6">
          <h1 className="font-semibold mb-2">{product.title}</h1>
          <h2 className="text-xl font-bold text-gray-800 mb-3">
            {product.price}€
          </h2>
          <p className="text-gray-600">{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition">
            Añadir al carrito
          </button>
        </div>
      </aside>
    </div>
  );
};
