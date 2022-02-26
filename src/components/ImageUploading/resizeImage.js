import Resizer from "react-image-file-resizer";
const resizeImage = (file) => {
  let quality = 100;
//4MB image file
  if (file.size > 4000000) {
    quality = 90;
  }
//8MB image file
  if (file.size > 8000000) {
    quality = 85;
  }
  return new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      1400,
      1000,
      "PNG",
      quality,
      0,
      (uri) => {
        resolve(uri);
      },
      "blob"
    );
  });
};
export { resizeImage };