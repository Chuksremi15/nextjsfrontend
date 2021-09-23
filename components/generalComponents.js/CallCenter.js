import { PhoneIcon } from "@heroicons/react/outline";
import Link from "next/link";

function CallCenter({ title, desc, btn, className, href }) {
  return (
    <div
      className={`
        flex lg:items-center p-2 bg-white rounded-md border 
      border-gray-200 ${className}
        w-full justify-between  flex-col lg:flex-row
        `}
    >
      <div
        className="
            flex items-center
            "
      >
        <PhoneIcon
          className="
        text-green-black p-1 mr-2 bg-gray-200 
        rounded-lg h-6 lg:h-8 flex-shrink-0 sm:mr-4
        hidden sm:inline
        "
        />
        <div className="flex flex-col flex-grow items-center sm:items-start">
          <h1
            className="
          text-xs md:text-sm lg:text-base  text-center 
          sm:text-left 
          font-[DM Sans] font-medium text-green-black
           "
          >
            {title}
          </h1>
          <p
            className="
          text-xs lg:text-sm font-[Poppins] font-medium hidden md:inline text-[#828282]
          "
          >
            {desc}
          </p>
        </div>
      </div>

      <Link href={`/express/${href}`}>
        <h4
          className="
        text-base rounded-md whitespace-nowrap
      font-bold cursor-pointer sm::hover:bg-[#00a69b18] 
      sm:p-2 text-green-main mx-auto mt-2 lg:m-0"
        >
          {btn}
        </h4>
      </Link>
    </div>
  );
}

export default CallCenter;
