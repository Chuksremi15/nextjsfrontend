import { useState } from "react";
import CustomDrop from "../../generalComponents.js/CustomDrop";
import ErrorMessage from "../../generalComponents.js/form/ErrorMessage";
import SetBtn from "../../generalComponents.js/form/SetBtn";
import UploadFile from "../../generalComponents.js/form/UploadFile";

function UpdateDocument({ setModal }) {
  const [documentType, setDocumentType] = useState(null);
  const [docImg, setDocImg] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (documentType === null) {
      setError({ onDocument: true });
      return;
    }
    //check if items are in cac and lisence
    if (docImg.length === 0) {
      setError((err) => ({ onDocImg: true, ...err }));
      return;
    }
  };

  return (
    <div>
      <div
        className="
          w-full px-6 py-6 
        bg-gray-50 max-w-lg
          flex flex-col rounded-lg
          overflow-y-scroll  h-[80vh]
           "
      >
        <h1
          className="
            font-bold text-green-black
            text-lg font-[DM Sans] mb-4
            "
        >
          Select the document you are uploading
        </h1>
        <div className="grid gap-2">
          <div>
            <CustomDrop
              selectChoice={documentType}
              setSelectChoice={setDocumentType}
              defaultChoice="Select Document Type"
              selectOptions={["CAC Document", "Liscence Document"]}
              desc
            />
            {error?.onDocument && !documentType && (
              <ErrorMessage message={"Select a Document Type"} />
            )}
          </div>
          <div>
            <UploadFile
              accept=".jpg,.png,.jpeg"
              label="upload Image(s)"
              title="Upload Image(s)"
              files={docImg}
              setFiles={setDocImg}
              multiple
            />

            {error?.onDocImg && docImg.length === 0 && (
              <ErrorMessage message={`Select a  ${documentType}`} />
            )}
          </div>
        </div>

        <div onClick={handleSubmit} className="mt-auto">
          <SetBtn text="Upload" />
        </div>
      </div>
    </div>
  );
}

export default UpdateDocument;
