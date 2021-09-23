import Image from "next/image";
import { PlusIcon } from "@heroicons/react/outline";
import { MinusIcon } from "@heroicons/react/solid";
import CustomBox from "./CustomBox";

function Items() {
  return (
    <div
      className="
        flex items-center border-gray-200
        justify-between border-2 rounded-lg
        p-2
        "
    >
      <div
        className="
            flex items-center
            "
      >
        <div className="bg-gray-200 rounded-lg mr-2">
          <Image
            className=" "
            objectFit="contain"
            src="/codine.png"
            height={60}
            width={60}
          />
        </div>
        <div className="">
          <h1 className="font-[DM Sans] text-sm text-green-black font-semibold">
            Piriton Syrup
          </h1>
          <p className="text-xs font-normal text-gray-main font-[DM Sans]">
            bottle of 50mg
          </p>
          <h1 className="font-[DM Sans] text-base text-green-black font-bold">
            ₦1,800
          </h1>
        </div>
      </div>
      <div className="bg-[#F0FAF9] rounded-full flex items-center p-1">
        <MinusIcon className="h-6 text-green-main cursor-pointer rounded-full bg-[#D2EFED] " />
        <h1 className="font-[DM Sans] text-lg lg:text-xl px-2 text-green-black font-bold">
          5
        </h1>
        <PlusIcon className="h-6 text-white cursor-pointer bg-green-main rounded-full " />
      </div>
      <CustomBox />
    </div>
  );
}

export default Items;
