import { XIcon } from "@heroicons/react/solid";

function SpeakCard({ bgClass, colorClass, textColor }) {
  return (
    <div
      className={`
         w-full  rounded-xl  ${bgClass}
         relative p-2 lg:p-4 ring-1 
        `}
    >
      <XIcon
        className="
      absolute h-6  text-[#EB5757] cursor-pointer
      
      "
      />
      <div
        className={`
       flex flex-col w-full items-end
       pt-2 pr-2 mb-2 ${textColor}
      `}
      >
        <h1
          className="
       text-xs  lg:text-sm font-normal font-[DM Sans] 
        "
        >
          In need of a
        </h1>
        <h1
          className="
         text-xs md:text-lg lg:text-base xl:text-lg font-medium text-right
         lg:font-medium xl:font-bold font-[DM Sans]
        "
        >
          Healthcare Professional?
        </h1>
      </div>
      <div className=" flex items-end justify-between">
        <img src="/globaldoc.png" alt="" className="h-24 lg:h-32" />
        <h1
          className={` 
      px-2 py-2 rounded-md text-green-sub3 whitespace-nowrap
    text-sm  font-bold cursor-pointer mb-1 mr-1 lg:mb-2 lg:mr-2 ${colorClass}
    `}
        >
          Call Now
        </h1>
      </div>
    </div>
  );
}

export default SpeakCard;
