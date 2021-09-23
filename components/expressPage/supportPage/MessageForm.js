import { useRef, useState } from "react";
import Icon from "react-eva-icons";
import { XIcon } from "@heroicons/react/solid";

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

function MessageForm({ maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES }) {
  const [input, setInput] = useState("");
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
        files[file.name] = file;
      }
    }
    return { ...files };
  };

  const removeFile = (fileName) => {
    delete files[fileName];
    setFiles({ ...files });
  };

  const MessageSubmit = (e) => {
    e.preventDefault();
    setInput("");
    setFiles({});
  };

  return (
    <form className=" pt-4 border-t">
      <div className="flex space-x-4 flex-wrap">
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
      </div>
      <div className="flex items-center">
        <div onClick={handleUploadBtnClick} className="mr-4 cursor-pointer">
          <input
            type="file"
            ref={fileInputField}
            onChange={handleNewFileUpload}
            accept="image/*"
            hidden
          />
          <Icon name="attach-2" fill="#00A69C" size="xlarge" />
        </div>
        <input
          type="text"
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="
        w-full flex-grow focus:outline-none bg-white
        border border-gray-300 rounded-lg p-2
        "
        />
        <div
          onClick={MessageSubmit}
          className="bg-green-main rounded-full  ml-6 p-2 cursor-pointer"
        >
          <img src="/kite.png" alt="" className=" " />
        </div>
        <button
          hidden
          disabled={!input || !files}
          type="submit"
          onClick={MessageSubmit}
        >
          Send message
        </button>
      </div>
    </form>
  );
}

export default MessageForm;
