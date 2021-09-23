import { ChevronDownIcon } from "@heroicons/react/outline";
import { useState } from "react";
import Button from "../../../generalComponents.js/Button";

const btnData = [
  {
    process: "PENDING",
    className: "text-[#F2994A] bg-[#F3EEDE] ",
  },
  {
    process: "FAILED",
    className: "text-red-600 bg-red-100",
  },
  {
    process: "SUCCESSFUL",
    className: "text-green-main bg-[#F0FAF9]",
  },
];
function Report({ status }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-md p-2">
      <div
        className={`
      flex items-center  text-sm font-medium 
      pb-4 ${isOpen && "pb-4"}
     py-2 font-[DM Sans] justify-between space-x-1
      `}
      >
        <h1
          className="
        lg:w-[20%] items-center flex justify-center
        text-[#828282] w-[35%]  text-xs 
        "
        >
          MM23inkn3322kn5
        </h1>
        <h1 className="lg:w-[10%] w-[20%] items-center flex justify-center text-green-black">
          ₦5,900
        </h1>
        <h1
          className="
        lg:w-[20%] items-center flex justify-center 
        text-green-black text-sm w-[25%]
        "
        >
          Date & time
        </h1>

        <div
          className="    
          lg:w-[20%]  w-[20%]
        flex justify-center"
        >
          <ChevronDownIcon
            onClick={() => setIsOpen(!isOpen)}
            className="h-6 lg:hidden text-green-black"
          />
          {btnData.map(
            ({ process, className }) =>
              process === status && (
                <Button
                  className={`hidden sm:inline ${className}`}
                  text={process}
                />
              )
          )}
        </div>
      </div>
      {isOpen && (
        <div className="pb-2 pt-4 border-t flex justify-end">
          {btnData.map(
            ({ process, className }) =>
              process === status && (
                <Button className={`${className}`} text={process} />
              )
          )}
        </div>
      )}
    </div>
  );
}

export default Report;
