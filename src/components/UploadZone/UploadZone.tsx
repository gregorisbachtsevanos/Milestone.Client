import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { StyledUploadZoneContainer } from "./UploadZone.styled";
import { Caption } from "@/theme";
import profile from "../../assets/images/default-profile.webp";

const UploadZone = () => {
  const [imagePreview, setImagePreview] = useState(profile);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <StyledUploadZoneContainer {...getRootProps()}>
      <input {...getInputProps()} />
      {imagePreview ? (
        <img src={imagePreview} alt="Selected Cover" />
      ) : (
        <Caption>
          {isDragActive
            ? "Drop the files here ..."
            : "Drag 'n' drop some files here, or click to select files"}
        </Caption>
      )}
    </StyledUploadZoneContainer>
  );
};

export default UploadZone;
