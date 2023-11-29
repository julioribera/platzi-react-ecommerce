const Card = () => {
  return (
    <div className="bg-white cursor-pointer w-56 h-60">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-2 left-2 bg-white/60 rounded-lg px-2 text-xs font-semibold">
          BARAJA
        </span>
        <img
          src="https://magiaycardistry.com/wp-content/uploads/Comprar-barajas-de-cartas-Bicycle-Standard-al-mejor-precio.jpg"
          alt="Bicycle Standard"
          className="w-full h-full rounded-lg object-cover"
        />
        <div className="absolute top-2 right-2 flex justify-center items-center bg-white w-6 h-6 rounded-full">
          <span style={{ transform: "translateY(-2px)" }}>+</span>
        </div>
      </figure>
      <p>
        <span>Bicycle Standard</span>
        <span>5€</span>
      </p>
    </div>
  );
};

export default Card;
