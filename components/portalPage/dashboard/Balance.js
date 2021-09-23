import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { ChevronDoubleRightIcon } from "@heroicons/react/outline";
import Button from "../../generalComponents.js/Button";
import { useRouter } from "next/router";
import { useState } from "react";

function Balance() {
  const [viewBalance, setViewBalance] = useState(true);
  const router = useRouter();
  const handleTopup = () => {
    router.push(`/portal/e-wallet`);
  };

  return (
    <div
      className="
        col-span-3 row-span-2 sm:col-span-1
        rounded-lg bg-green-main p-4
        flex flex-col justify-between  
       "
    >
      <div className="flex justify-between">
        <div className="">
          <p
            className="
          text-[#B4E4E1] font-semibold 
          text-base font-[DM Sans]
          "
          >
            Your Available Balance
          </p>
          <h1
            className="
          text-white font-bold 
          text-3xl lg:text-4xl font-[DM Sans]
          "
          >
            {viewBalance ? "₦54,000.00" : "XXXXXX.xx"}
          </h1>
        </div>
      </div>
      <div className="flex justify-between items-center mt-10">
        <Button
          className="
          text-white bg-[#00B8AD] border-[#B4E4E1] border
          
          "
          text="Manage"
          Icon={ChevronDoubleRightIcon}
          IconClass="text-white"
          onClick={handleTopup}
        />
        {viewBalance ? (
          <Button
            className="
          text-white bg-[#00B8AD] border-[#B4E4E1] border
          
          "
            text="Hide"
            Icon={EyeOffIcon}
            IconClass="text-white"
            onClick={() => setViewBalance(!viewBalance)}
          />
        ) : (
          <Button
            className="
          text-white bg-[#00B8AD] border-[#B4E4E1] border
          
          "
            text="View"
            Icon={EyeIcon}
            IconClass="text-white"
            onClick={() => setViewBalance(!viewBalance)}
          />
        )}
      </div>
    </div>
  );
}

export default Balance;
