import { PhoneIcon } from "@heroicons/react/outline";

function Request() {
  const CallCenter = ({ title, number }) => (
    <div
      className=" 
    flex justify-between w-full items-center
    "
    >
      <div className="flex items-center">
        <PhoneIcon
          className="
        text-green-black p-1 bg-gray-200 
        rounded-lg h-6 lg:h-8 mr-4
        "
        />
        <div
          className="flex flex-col flex-grow 
        items-center sm:items-start"
        >
          <h1
            className="
         text-base lg:text-lg 
          font-[Poppins] font-bold text-green-black
           "
          >
            {title}
          </h1>
          <p
            className="
          text-sm lg:text-base 
          font-[Poppins] font-medium text-[#828282]
          "
          >
            {number}
          </p>
        </div>
      </div>
      <h1
        className="
         text-sm lg:text-base 
          font-[Poppins] font-bold text-green-main
           "
      >
        Dail
      </h1>
    </div>
  );

  return (
    <div
      className="
       max-w-screen-sm w-[80%]
       m-auto px-4 
       h-[70vh]
       "
    >
      <div className="grid gap-4">
        <CallCenter title="In-house Pharmacist" number="08032433453" />
        <CallCenter title="In-house Pharmacist" number="08032433453" />
      </div>
    </div>
  );
}

export default Request;
