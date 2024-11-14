import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const TitlePlaceholder: React.FC<IContentLoaderProps> = (props) => (
  <ContentLoader
    speed={2}
    width={450}
    height={30}
    viewBox="0 0 450 30"
    backgroundColor="#e0e0e0"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="3" ry="3" width="450" height="30" />
  </ContentLoader>
);

export default TitlePlaceholder;
