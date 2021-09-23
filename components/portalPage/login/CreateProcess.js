import { useEffect, useState } from "react";
import RegisterForm from "./RegisterForm";
import BankDetails from "./BankDetails";
import UploadForm from "./UploadForm";
import { registerUser } from "../../../services/express/auth.service";
import { useRouter } from "next/router";

function CreateProcess() {
  const router = useRouter();
  const [process, setProcess] = useState(0);
  const [formData, setFormData] = useState({});
  const [regInit, setRegInit] = useState(false);
  const {
    businessName,
    email,
    username,
    cacDoc,
    password,
    phone,
    businessType,
    ePin,
    address,
    licenseDoc,
  } = formData;

  //useEffect that runs a function if regInit is true
  useEffect(() => {
    const credentials = {
      userType: "Portal",
      businessName,
      email,
      username,
      cacDoc,
      password,
      phone,
      businessType,
      ePin,
      address,
      licenseDoc,
    };
    if (regInit) {
      registerUser(credentials).then(({ error, message }) => {
        if (!error) {
          setRegInit(false);
          router.push("/portal/account/login");
        } else {
          setRegInit(false);
          alert(message);
        }
      });
    }
  }, [regInit]);

  const processDetail = [
    {
      id: 0,
      Component: RegisterForm,
    },
    {
      id: 1,
      Component: UploadForm,
    },
    {
      id: 2,
      Component: BankDetails,
    },
  ];
  return (
    <div className="">
      <div className="flex space-x-4 items-center justify-center mb-6">
        {processDetail.map(({ id }) => (
          <hr
            key={id}
            onClick={() => setProcess(id)}
            className={`
        h-2 w-20 ${id <= process ? "bg-green-main " : "bg-gray-200"} rounded-sm 
        shadow-md inline cursor-pointer
        `}
          />
        ))}
      </div>

      {processDetail.map(
        ({ id, Component }) =>
          id === process && (
            <Component
              key={id}
              setProcess={setProcess}
              setFormData={setFormData}
              formData={formData}
              setRegInit={setRegInit}
              regInit={regInit}
            />
          )
      )}
    </div>
  );
}

export default CreateProcess;
