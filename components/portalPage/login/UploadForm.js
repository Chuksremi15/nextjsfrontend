import { useState } from "react";
import CustomDrop from "../../generalComponents.js/CustomDrop";
import ErrorMessage from "../../generalComponents.js/form/ErrorMessage";
import UploadFile from "../../generalComponents.js/form/UploadFile";

function UploadForm({ setProcess, setFormData }) {
  const [bussinessType, setBussinessType] = useState(null);
  const [cacFiles, setCacFiles] = useState([]);
  const [lisenceFiles, setLisenceFiles] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (bussinessType === null) {
      setError({ onBusiness: true });
      return;
    }
    //check if items are in cac and lisence
    if (cacFiles.length === 0) {
      setError((err) => ({ onCac: true, ...err }));
      return;
    }
    if (lisenceFiles.length === 0) {
      setError((err) => ({ onLicence: true, ...err }));
      return;
    }

    setFormData((formData) => ({
      ...formData,
      businessType: bussinessType,
      cacDoc: cacFiles[0],
      licenseDoc: lisenceFiles[0],
    }));

    setProcess(2);
  };

  return (
    <div className="">
      <div>
        <CustomDrop
          selectChoice={bussinessType}
          defaultChoice="Business Type"
          setSelectChoice={setBussinessType}
          selectOptions={[
            "Pharmacy",
            "Hospital",
            "Clinic",
            "Carton",
            "Care Homes",
          ]}
          desc
        />
        {error?.onBusiness && !bussinessType && (
          <ErrorMessage message={"Select a bussiness Type"} />
        )}
      </div>

      <div className="grid gap-6">
        <div>
          <UploadFile
            accept=".jpg,.png,.jpeg"
            label="Profile Image(s)"
            title="Attach your CAC Document(s)"
            files={cacFiles}
            setFiles={setCacFiles}
            multiple
          />

          {error?.onCac && cacFiles.length === 0 && (
            <ErrorMessage message={"Select a CaC Document"} />
          )}
        </div>

        <div>
          <UploadFile
            accept=".jpg,.png,.jpeg"
            label="Profile Image(s)"
            title="Attach your License Document(s)"
            files={lisenceFiles}
            setFiles={setLisenceFiles}
            multiple
          />
          {error?.onLicence && lisenceFiles.length === 0 && (
            <ErrorMessage message={"Select a Licence"} />
          )}
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="
        w-full bg-green-main py-4 active:border mt-4 focus:outline-none
        text-green-sub3 font-bold text-base rounded-xl "
      >
        Next
      </button>
    </div>
  );
}

export default UploadForm;
