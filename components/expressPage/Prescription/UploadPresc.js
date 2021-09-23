import { useState } from "react";
import FileUpload from "./FileUpload";

function UploadPresc() {
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: [],
  });
  const [files, setFiles] = useState({});

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewUserInfo({});
    setFiles({});
    //logic to create new user...
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-screen-sm w-full">
      <FileUpload
        accept=".jpg,.png,.jpeg"
        label="Profile Image(s)"
        files={files}
        setFiles={setFiles}
        multiple
        updateFilesCb={updateUploadedFiles}
      />

      <p
        className="
      text-base font-[DM Sans] mb-10
      font-semibold text-[#828282]
      "
      >
        Files should be .png or .jpg <br />
        File size must not be above 5MB <br />
        Picture quality should be visually clear and readable
      </p>

      <div className="space-y-2">
        <h1
          className="
        text-sm md:text-base font-[DM Sans]
        font-semibold text-green-black
        "
        >
          Additional Information:
        </h1>
        <textarea
          type="text"
          className="
              border border-gray-200 rounded-lg p-2 bg-white 
              focus:outline-none h-44 w-full flex-grow
               text-[DM Sans] resize-y mb-10
              "
        />
      </div>

      <button
        type="submit"
        className="
      max-w-md w-full py-4 rounded-lg mx-auto flex items-center justify-center mt-6
      font-[Poppins] text-white bg-green-main text-base font-bold focus:outline-none 
      mb-4
      "
      >
        Submit
      </button>
    </form>
  );
}

export default UploadPresc;
