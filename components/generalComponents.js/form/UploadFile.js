import { useRef } from "react";
import { CloudUploadIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/outline";

const UploadFile = ({ label, title, files, setFiles, ...otherProps }) => {
  const fileInputField = useRef(null);

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  //encode selected files to base 64
  const convertFileToBase64 = (file) => {
    let reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        let Base64 = reader.result;
        setFiles((files) => [...files, Base64]);
      };
      reader.onerror = (err) => {
        console.log("error", err);
      };
    }
  };

  const handleNewFileUpload = (e) => {
    const file = e.target.files[0];
    convertFileToBase64(file);
  };

  const removeFile = (fileName) => {
    const filteredFile = files.filter((file) => file !== fileName);
    setFiles(filteredFile);
  };
  return (
    <div>
      {!otherProps.noHead && (
        <div
          className="
            flex items-center justify-between
            mb-2
            "
        >
          <h1
            className="
            text-base font-[Poppins] 
            font-bold text-green-black
          "
          >
            {title}
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
      )}
      <div
        className="
      w-full flex flex-col items-center rounded-lg
      border-2 border-dashed border-gray-200 p-2
      mb-2 relative
      "
      >
        <CloudUploadIcon className="h-10 mb-4 text-gray-main" />
        <h1
          className="text-center text-sm font-[DM Sans] 
           font-medium text-[#828282]"
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
        {files?.map((fileName, index) => {
          return (
            <div className="relative" key={index}>
              <img
                className=" bg-gray-100 h-6 w-12 mb-4 object-cover"
                src={fileName}
                alt={`file preview `}
              />

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
      </div>

      <p
        className="
      text-xs font-[DM Sans]
      font-semibold text-[#828282]
      "
      >
        Files should be .png or .jpg <br />
        File size must not be above 5MB <br />
        Picture quality should be visually clear and readable
      </p>
    </div>
  );
};

export default UploadFile;
