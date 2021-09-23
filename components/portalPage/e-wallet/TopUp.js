import { XIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { useTopUpNavState } from "../../../store";

function TopUp() {
  const { toggleTopUpNav } = useTopUpNavState();
  const [amount, setAmount] = useState(0);
  const [validAmount, setValidAmount] = useState(false);

  useEffect(() => {
    amount >= 100 ? setValidAmount(true) : setValidAmount(false);
  }, [amount]);

  return (
    <div
      className="
        w-[90vw]  md:w-[60vw] xl:w-[30vw] p-6 
        lg:w-[40vw] min-h-screen flex flex-col
        scrollbar-hide overflow-y-scroll 
        "
    >
      <div className="mb-6">
        <XIcon
          onClick={() => toggleTopUpNav(false)}
          className="h-6 text-gray-main mb-4 cursor-pointer"
        />
        <h1
          className="
            text-lg text-green-black font-semibold
             font-[Poppins]
            "
        >
          Top up your Wallet
        </h1>
      </div>
      <div className="space-y-2 mb-6">
        <h1
          className="
        text-sm md:text-base font-[DM Sans]
        font-semibold text-green-black
        "
        >
          Deposit Amout(₦)
        </h1>
        <input
          type="number"
          min="100"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className={`
    w-full flex-grow
    bg-white focus:outline-none ${
      validAmount ? "border-gray-200" : "border-red-700"
    } border  rounded-lg p-2
    `}
        />
        {!validAmount && (
          <p className="text-xs text-red-700">Minimum amount is ₦100.</p>
        )}
      </div>
      <h1
        className="
        text-sm md:text-base font-[DM Sans]
        font-medium text-green-black
        "
      >
        Instant Paystack Deposit:
      </h1>
      <p className="text-sm text-gray-main font-[DM Sans]">
        There is no fee for deposit with this payment method. If your
        transaction is authorised your account will be credited immediately.
      </p>
      <div
        onClick={() => toggleTopUpNav(false)}
        className="
        py-4 bg-green-main text-white 
        rounded-xl font-[Poppins] font-bold text-lg mx-auto
        cursor-pointer flex justify-center w-full mt-auto
        "
      >
        Continue
      </div>
    </div>
  );
}

export default TopUp;
