import { ChevronDoubleUpIcon } from "@heroicons/react/outline";
import { ChevronDoubleDownIcon } from "@heroicons/react/outline";
import { useTopUpNavState, useWithDrawalNavState } from "../../../store";
import Button from "../../generalComponents.js/Button";

function Balance() {
  const { toggleTopUpNav } = useTopUpNavState();
  const { toggleWithDrawalNav } = useWithDrawalNavState();
  return (
    <div
      className="
    w-full bg-white rounded-2xl
    p-8 shadow-xl
    "
    >
      <p
        className="
          text-[#828282] font-semibold 
          text-base font-[DM Sans]
          "
      >
        Your Available Balance
      </p>
      <h1
        className="
          text-green-black font-bold 
          text-3xl lg:text-3xl font-[DM Sans]
          "
      >
        ₦54,000.00
      </h1>
      <div className="flex justify-between items-center mt-20">
        <Button
          className="
          text-white bg-[#00A69C]
          
          "
          text="Top-up"
          Icon={ChevronDoubleUpIcon}
          IconClass="text-white"
          onClick={() => toggleTopUpNav(true)}
        />
        <Button
          className="
         text-white bg-[#00A69C]  
          "
          text="Withdraw"
          Icon={ChevronDoubleDownIcon}
          IconClass="text-white"
          onClick={() => toggleWithDrawalNav(true)}
        />
      </div>
    </div>
  );
}

export default Balance;
