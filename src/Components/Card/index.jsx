import ImgPlaceholder from "./ImgPlaceholder";

const Card = ({ data }) => {
  if (!data) return null;

  const isValidImageUrl = (url) => {
    return /\.(jpg|jpeg|png|gif|bmp|svg)$/i.test(url);
  };

  const imageSrc = isValidImageUrl(data.images[0]) ? data.images[0] : null;

  return (
    <div className="mx-auto bg-white cursor-pointer w-56 h-60">
      <figure className="relative mb-2 w-full h-4/5">
        {imageSrc ? (
          <img
            src={imageSrc}
            onError={(e) => (e.target.src = "")}
            alt={data.title}
            className="w-full h-full rounded-lg object-cover"
          />
        ) : (
          <ImgPlaceholder />
        )}
        <div className="absolute top-2 right-2 flex justify-center items-center bg-white w-6 h-6 rounded-full">
          <span style={{ transform: "translateY(-2px)" }}>+</span>
        </div>
      </figure>
      <p>
        <span>{data.title}</span>
        <span>{`${(data.price / 100).toFixed(2)}€`}</span>
      </p>
    </div>
  );
};

export default Card;
