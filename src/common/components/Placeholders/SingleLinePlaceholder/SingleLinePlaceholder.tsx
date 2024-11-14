import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const SingleLinePlaceholder: React.FC<IContentLoaderProps> = (props) => (
  <ContentLoader
    speed={2}
    width={450}
    height={20}
    viewBox="0 0 450 20"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="10" rx="0" ry="0" width="450" height="10" />
  </ContentLoader>
);

export default SingleLinePlaceholder;
