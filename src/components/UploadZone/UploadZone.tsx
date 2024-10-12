import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { StyledUploadZoneContainer } from "./UploadZone.styled";

const UploadZone = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <StyledUploadZoneContainer>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </StyledUploadZoneContainer>
  );
};

export default UploadZone;
