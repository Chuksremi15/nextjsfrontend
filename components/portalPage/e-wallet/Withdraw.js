import { PlusIcon, XIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import PinInput from "react-pin-input";
import { useWithDrawalNavState } from "../../../store";
import AddDetail from "../../generalComponents.js/AddDetail";
import BankOption from "./subComponent/BankOption";

function Withdraw() {
  const { toggleWithDrawalNav } = useWithDrawalNavState();
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
          onClick={() => toggleWithDrawalNav(false)}
          className="h-6 text-gray-main mb-4 cursor-pointer"
        />
        <h1
          className="
            text-lg text-green-black font-semibold
             font-[Poppins] 
            "
        >
          Withdraw Funds
        </h1>
      </div>
      <div className="flex items-center justify-between mb-4">
        <h1
          className="
        text-sm md:text-base font-[DM Sans]
        font-semibold text-green-black
        "
        >
          Amount to withdraw:(₦)
        </h1>
        <p className="text-xs font-medium text-gray-main font-[DM Sans]">
          Max: ₦54,000.00{" "}
        </p>
      </div>
      <div className="mb-6">
        <input
          type="number"
          min="100"
          max="54000"
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
        font-semibold text-green-black m-4
        "
      >
        Location to withdraw to:
      </h1>
      <BankOption />
      <div className="flex mt-4 justify-center">
        <div className="flex items-center space-x-2 font-bold  text-green-main">
          <PlusIcon className="h-6 cursor-pointer " />
          <h1 className="text-base cursor-pointer">Add New Bank Details</h1>
        </div>
      </div>

      <div className="mt-4">
        <h1
          className="
        text-sm md:text-base font-[DM Sans]
        font-semibold text-green-black mb-2
        "
        >
          E-Wallet PIN
        </h1>
        <div className="flex justify-center">
          <PinInput
            length={4}
            initialValue=""
            secret
            onChange={(value, index) => {}}
            type="numeric"
            inputMode="number"
            style={{ padding: "20px" }}
            inputStyle={{ borderColor: "#828282", borderRadius: "0.4rem" }}
            inputFocusStyle={{ borderColor: "#00A69C" }}
            onComplete={(value, index) => {}}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          />
        </div>
      </div>
      <div
        onClick={() => toggleWithDrawalNav(false)}
        className="
        py-4 bg-green-main text-white 
        rounded-xl font-[Poppins] font-bold text-lg mx-auto
        cursor-pointer flex justify-center w-full mt-auto
        "
      >
        Withdraw
      </div>
    </div>
  );
}

export default Withdraw;
