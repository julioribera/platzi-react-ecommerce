export const ProductInfo = ({ title, price }) => {
  return (
    <p>
      <span>{title}</span>
      <span>{`${(price / 100).toFixed(2)}€`}</span>
    </p>
  );
};
