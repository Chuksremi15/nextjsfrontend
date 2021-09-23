import { ChevronDownIcon } from "@heroicons/react/solid";
import { useState } from "react";

function Question({ que, ans }) {
  const [openAns, setOpenAns] = useState(false);
  return (
    <div
      className="
    w-full rounded-md 
    bg-green-main px-4 py-2
    lg:bg-gradient-to-r from-[#00A69C] to-[#1B75BB]
    "
    >
      <div className="flex justify-between items-center">
        <h1 className="font-[DM Sans] text-base font-semibold text-white   ">
          {que}
        </h1>
        <ChevronDownIcon
          onClick={() => setOpenAns(!openAns)}
          className="h-10 text-white  ml-2 md:h-16 cursor-pointer"
        />
      </div>
      {openAns && (
        <h1
          className="
        font-[DM Sans] text-sm font-normal
        text-white mt-4 px-4
         "
        >
          {ans}
        </h1>
      )}
    </div>
  );
}

export default Question;
