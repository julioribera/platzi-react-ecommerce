import { isValidImageUrl } from "../../utils/imageValidation";
import ImgPlaceholder from "./ImgPlaceholder";

export const ProductImage = ({ data, isHovered, onClick }) => {
  const defaultImage = isValidImageUrl(data.images[0]) ? data.images[0] : null;
  const hoverImage =
    data.images.length > 1 && isValidImageUrl(data.images[1])
      ? data.images[1]
      : defaultImage;

  return defaultImage ? (
    <img
      src={isHovered ? hoverImage : defaultImage}
      onError={(e) => (e.target.src = "")}
      alt={data.title}
      className="w-full h-full rounded-lg object-cover cursor-pointer"
      onClick={onClick}
    />
  ) : (
    <ImgPlaceholder />
  );
};
