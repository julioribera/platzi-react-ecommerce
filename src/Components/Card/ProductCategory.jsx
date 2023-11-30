export const ProductCategory = ({ category }) => {
  return (
    <span className="absolute bottom-2 left-2 bg-white/60 rounded-lg px-2 text-xs font-semibold">
      {category.toUpperCase()}
    </span>
  );
};
