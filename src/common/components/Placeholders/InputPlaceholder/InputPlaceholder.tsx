import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const InputPlaceholder: React.FC<IContentLoaderProps> = (props) => (
  <ContentLoader
    speed={2}
    width={480}
    height={105}
    viewBox="0 0 480 105"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="12" rx="0" ry="0" width="242" height="17" />
    <rect x="0" y="58" rx="8" ry="8" width="480" height="40" />
    <rect x="0" y="38" rx="0" ry="0" width="178" height="10" />
  </ContentLoader>
);

export default InputPlaceholder;
