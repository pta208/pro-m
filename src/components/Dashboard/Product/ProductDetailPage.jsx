import React from "react";
import { Input, Select } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useRef } from "react";
import Uploader from "../../Common/Uploader";
const ProductDetailPage = () => {
  return (
    <div className="grid grid-cols-12 gap-4 flex-1">
      <div className="card bg-white p-4 gap-4 col-span-8">
        <DetailContent />
      </div>
      <div className="card bg-white p-4 gap-4 col-span-4">
        <DetailCategory />
      </div>
      <div className="card bg-white p-4 gap-4 col-span-6">
        <DetailGallery />
      </div>
    </div>
  );
};
const DetailContent = () => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
  return (
    <div className="">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold">Product Title</h2>
        <Input placeholder="Title" size="md" />
      </div>
      <div className="flex flex-col gap-2 ">
        <h2 className="font-semibold">Product Description</h2>
        <div className="text-editor">
          <ReactQuill theme="snow" modules={modules}></ReactQuill>
        </div>
      </div>
    </div>
  );
};
const DetailCategory = () => {
  return (
    <div>
      <h2 className="font-semibold">Product Category</h2>
      <Select placeholder="Select option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </div>
  );
};
const DetailGallery = () => {
  const [file, setFile] = useState(null);
  const fileHandler = (e) => {
    setFile(e.target.files);
  };

  return (
    <div className="">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold">Main Image</h2>

        <Input
          placeholder="Select Date and Time"
          size="md"
          type="file"
          ref={file}
          onChange={fileHandler}
        />
        <div className="flex flex-col justify-center items-center">
          {/* <img
            src={file ? URL.createObjectURL(file) : null}
            className="h-[150px] w-[150px]"
          /> */}
          {/* {file && <div>{file.name}</div>} */}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold">Others</h2>
        <div>
          <Input
            placeholder="Select Date and Time"
            size="md"
            type="file"
            ref={file}
            onChange={fileHandler}
            multiple
          />
          <div className="flex flex-col justify-center items-center">
            {/* <img
              src={file ? URL.createObjectURL(file) : null}
              className="h-[150px] w-[150px]"
            /> */}
            {file && file.map((t) => <div>{t.name}</div>)}
          </div>
        </div>
        {/* <Uploader /> */}
      </div>
    </div>
  );
};
export default ProductDetailPage;
