import { useState } from "react";
import Request from "./Request";
import Upload from "./Upload";

function Prescription() {
  const [currentTab, setCurrentTab] = useState(0);

  const tabData = [
    {
      name: "Upload a Prescription",
      id: 0,
      Component: Upload,
    },
    {
      name: "Request a Prescription",
      id: 1,
      Component: Request,
    },
  ];

  const SetTab = ({ name, id }) => (
    <h1
      onClick={() => setCurrentTab(id)}
      className={`
         lg:text-base text-sm cursor-pointer text-center
         font-[Poppins] font-semibold w-1/2 rounded-md
         flex items-center justify-center py-2
         ${id === currentTab ? "bg-white text-green-black" : "text-gray-main"}
         `}
    >
      {name}
    </h1>
  );

  return (
    <div className="container p-4">
      <h1
        className="
        font-[Poppins] font-bold text-xl 
        text-[#001F1D] mb-8"
      >
        Prescriptions
      </h1>
      <div
        className="
      max-w-screen-sm w-[80%] m-auto
         rounded-md bg-gray-200
          flex items-center mb-6
      "
      >
        {tabData.map(({ name, id }) => (
          <SetTab name={name} key={id} id={id} />
        ))}
      </div>

      {tabData.map(({ Component, id }) => id === currentTab && <Component />)}
    </div>
  );
}

export default Prescription;
