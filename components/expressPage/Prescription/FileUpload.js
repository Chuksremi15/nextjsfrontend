import { useRef } from "react";
import { CloudUploadIcon } from "@heroicons/react/solid";

const KILO_BYTES_PER_BYTE = 1000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

const convertNestedObjectToArray = (nestedObj) =>
  Object.keys(nestedObj).map((key) => nestedObj[key]);

const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);

const FileUpload = ({
  label,
  files,
  setFiles,
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) => {
  const fileInputField = useRef(null);

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  const addNewFiles = (newFiles) => {
    for (let file of newFiles) {
      if (file.size <= maxFileSizeInBytes) {
        if (!otherProps.multiple) {
          return { file };
        }
        files[file.name] = file;
      }
    }
    return { ...files };
  };

  const callUpdateFilesCb = (files) => {
    const filesAsArray = convertNestedObjectToArray(files);
    updateFilesCb(filesAsArray);
  };

  const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };

  const removeFile = (fileName) => {
    delete files[fileName];
    setFiles({ ...files });
    callUpdateFilesCb({ ...files });
  };
  return (
    <div>
      <div
        className="
            flex items-center justify-between
            mb-6
            "
      >
        <h1
          className="
                   text-lg font-[Poppins] 
            font-bold text-green-black
          "
        >
          Upload Prescrition Image
        </h1>
        <p
          className="
           text-sm font-[DM Sans] cursor-pointer
           font-medium text-green-main
          "
        >
          What’s this?
        </p>
      </div>
      <div
        className="
      w-full flex flex-col items-center rounded-lg
      border-2 border-dashed border-gray-200 p-4
      mb-4 relative
      "
      >
        <CloudUploadIcon className="h-14 mb-4 text-gray-main" />
        <h1
          className="text-center text-base font-[DM Sans] 
           font-semibold text-[#828282]"
        >
          Drag & drop files here
          <br /> or <br />
          <span
            onClick={handleUploadBtnClick}
            className="text-green-main cursor-pointer"
          >
            Click
          </span>{" "}
          to upload
        </h1>
        <input
          type="file"
          ref={fileInputField}
          onChange={handleNewFileUpload}
          title=""
          {...otherProps}
          className="
        text-base block w-full border-none
        absolute top-0 left-0 right-0 bottom-0
        opacity-0 focus::outline-none
        "
        />
      </div>
      <div
        className="
    flex flex-wrap items-center
      space-x-4
      "
      >
        {Object.keys(files).map((fileName, index) => {
          let file = files[fileName];
          let isImageFile = file.type.split("/")[0] === "image";
          return (
            <div className="" key={fileName}>
              {isImageFile && (
                <img
                  className=" bg-gray-100 h-20 w-20 mb-4"
                  objectFit="contain"
                  src={URL.createObjectURL(file)}
                  alt={`file preview ${index}`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FileUpload;
