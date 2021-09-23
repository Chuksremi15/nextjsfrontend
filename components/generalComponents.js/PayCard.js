import Image from "next/image";

function PayCard() {
  return (
    <div className="flex items-center pb-2 border-b border-gray-200">
      <div
        className="
        bg-white border-2 border-gray-200  mr-4 lg:mr-6 
        rounded-md flex items-center justify-center p-2
        "
      >
        <Image height={30} width={45} className="" src="/fidel.png" />
      </div>
      <div
        className="
        flex items-start flex-col flex-grow
        font-[DM Sans]  font-bold
        "
      >
        <h1
          className="
           text-base text-green-black
          "
        >
          Fidelity Bank
        </h1>
        <p className="text-gray-main text-sm">**** 43272</p>
      </div>
      <p className="font-[DM Sans] font-bold text-base text-green-main cursor-pointer">
        EDIT
      </p>
    </div>
  );
}

export default PayCard;
