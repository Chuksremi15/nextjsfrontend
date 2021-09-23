import { ChevronDownIcon } from "@heroicons/react/outline";

import { useState } from "react";
import Button from "../../../generalComponents.js/Button";

const btnData = [
  {
    process: "PENDING",
    className: "text-[#F2994A] bg-[#F3EEDE] ",
  },
  {
    process: "DECLINED",
    className: "text-red-600 bg-red-100",
  },
  {
    process: "CREDITED",
    className: "text-green-main bg-[#F0FAF9]",
  },
];

function Transfer({ status }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white flex flex-col rounded-md p-2">
      <div
        className={`
      flex items-center justify-between text-xs 
      lg:text-base p-2 ${isOpen && "pb-4"}
      font-[DM Sans] font-medium text-center
       text-green-black
      `}
      >
        <h1 className="w-[19%] items-center flex truncate">MM234fe3tf33tf4f</h1>
        <h1
          className="  w-[19%]
        flex lg:justify-center "
        >
          First Century Bank
        </h1>
        <h1 className="w-[15%] items-center flex justify-center">₦5,900</h1>
        <h1 className="w-[15%] items-center flex justify-center">
          Mar. 12, ..21.
        </h1>
        <h1 className="w-[15%] items-center flex text-left truncate">
          Emmanuel Chidiebere
        </h1>
        <div
          className="    
           w-[15%] 
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
                  className={`hidden lg:inline ${className}`}
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

export default Transfer;
