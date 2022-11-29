import React from "react";
import { FileUploadWithPreview } from "file-upload-with-preview";
import "file-upload-with-preview/dist/file-upload-with-preview.min.css";
const Uploader = () => {
  const upload = new FileUploadWithPreview("myFirstImage");
  return (
    <div class="custom-file-container" data-upload-id="myFirstImage"></div>
  );
};

export default Uploader;
