import { useState } from "react";
import { ProductImage } from "./ProductImage";
import { AddToCartButton } from "./AddToCartButton";
import { useAddToCart } from "../../Context/addToCart";
import { ProductCategory } from "./ProductCategory";
import { ProductInfo } from "./ProductInfo";

export const Card = ({ data, onClick }) => {
  const addToCart = useAddToCart();
  const [isHovered, setIsHovered] = useState(false);
  if (!data) return null;

  return (
    <div
      className="mx-auto bg-white w-56 h-60"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <ProductCategory category={data.category.name} />
        <ProductImage
          data={data}
          isHovered={isHovered}
          onClick={() => onClick(data)}
        />
        <AddToCartButton onClick={() => addToCart(data)} />
      </figure>
      <ProductInfo title={data.title} price={data.price} />
    </div>
  );
};
