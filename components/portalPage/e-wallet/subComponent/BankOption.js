import CustomRadio from "./CustomRadio";

function BankOption() {
  return (
    <div
      className="
      flex items-center justify-between border-2
      border-gray-200 px-4 py-2 rounded-lg
      "
    >
      <div className="flex items-center">
        <img
          src="/fidel.png"
          alt=""
          className="border border-gray-200 rounded-md p-1 h-12 w-12 mr-4"
        />
        <div className="font-bold font-[DM Sans]">
          <h1
            className="
            text-sm text-green-black 
            "
          >
            Fidelity Bank
          </h1>
          <p className="text-gray-main text-sm">**** 43272</p>
        </div>
      </div>
      <CustomRadio selected />
    </div>
  );
}

export default BankOption;
