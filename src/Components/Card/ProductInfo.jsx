export const ProductInfo = ({ title, price }) => {
  return (
    <p>
      <span>{title}</span>
      <span>{`${price}€`}</span>
    </p>
  );
};
