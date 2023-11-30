export const AddToCartButton = ({ onClick }) => {
  return (
    <div
      className="absolute top-2 right-2 flex justify-center items-center bg-white w-6 h-6 rounded-full"
      onClick={onClick}
    >
      <span style={{ transform: "translateY(-2px)" }}>+</span>
    </div>
  );
};
