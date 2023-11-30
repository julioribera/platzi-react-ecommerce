export const isValidImageUrl = (url) => {
  return /\.(jpg|jpeg|png|gif|bmp|svg)$/i.test(url);
};
