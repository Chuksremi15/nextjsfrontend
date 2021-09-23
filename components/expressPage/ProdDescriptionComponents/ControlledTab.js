import { ExclamationIcon } from "@heroicons/react/outline";
import Button from "../../generalComponents.js/Button";
import { useRef, useState } from "react";
import { XIcon } from "@heroicons/react/solid";

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 1000000;

function ControlledTab({
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
}) {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
    }
  };

  const addNewFiles = (newFiles) => {
    for (let file of newFiles) {
      if (file.size <= maxFileSizeInBytes) {
        return { file };
      }
    }
    return { ...files };
  };

  const removeFile = (fileName) => {
    delete files[fileName];
    setFiles({ ...files });
  };

  return (
    <div className="mb-2">
      <div
        className="
           flex justify-between mb-6
           "
      >
        <div className=" ">
          <div className="flex items-center">
            <ExclamationIcon className="mr-2 h-6 text-[#EB5757]" />
            <h1
              className="
             text-lg font-[Poppins]
                font-bold text-green-black
            "
            >
              Upload Prescrition image:
            </h1>
          </div>
          <p
            className="
      text-xs font-[DM Sans]
      font-normal text-[#828282]
      "
          >
            Files should be .png or .jpg <br />
            File size must not be above 10MB <br />
            Picture quality should be visually clear and readable
          </p>
        </div>
        <div className="flex space-x-4 items-start">
          {Object.keys(files).map((fileName, index) => {
            let file = files[fileName];
            let isImageFile = file.type.split("/")[0] === "image";

            return (
              <div className="relative" key={fileName}>
                {isImageFile && (
                  <img
                    className=" bg-gray-100 h-12 w-12 mb-4"
                    objectFit="contain"
                    src={URL.createObjectURL(file)}
                    alt={`file preview ${index}`}
                  />
                )}
                <XIcon
                  onClick={() => removeFile(fileName)}
                  className="
              text-red-700 absolute top-0 right-0 h-4 cursor-pointer
              bg-white rounded-full bg-opacity-70
              "
                />
              </div>
            );
          })}
          <Button
            className="text-[#00A69C] bg-[#F2F2F2] border border-[#BDBDBD] "
            text="Browse"
            onClick={handleUploadBtnClick}
          />
          <input
            type="file"
            ref={fileInputField}
            onChange={handleNewFileUpload}
            accept="image/*"
            hidden
          />
        </div>
      </div>
      <div className="flex">
        <ExclamationIcon className="mr-2 h-6 text-[#828282] flex-shrink-0" />

        <p
          className="
            text-sm font-[Poppins] font-medium text-gray-main"
        >
          This product requires a prescription, once you upload proceed to check
          out and pay, your product will be delivered to you. If however your
          prescription is invalid, then your money will be refunded.
        </p>
      </div>
    </div>
  );
}

export default ControlledTab;
