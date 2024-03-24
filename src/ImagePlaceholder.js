import ContentLoader from "react-content-loader";

const ImagePlaceholder = () => (
<ContentLoader
    speed={2}
    width={200}
    height={200}
    viewBox="0 0 200 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="8" ry="8" width="200" height="200" />
  </ContentLoader>
);
export default ImagePlaceholder;
