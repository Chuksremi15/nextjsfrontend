import Image from "next/image";

function BigCard() {
  return (
    <div className="flex flex-col px-4 py-6 max-w-md w-full  bg-white shadow-lg rounded-lg flex-shrink-0">
      <Image src="/blogimg.svg" height={260} width={385} className="mb-4" />
      <h1 className="text-green-black text-lg font-bold font-[DM Sans] mb-2 line-clamp-2">
        Accelerating the Pace of Oncology Clinical Trials in the Wake of
        COVID-19
      </h1>
      <h1 className="text-[#828282] text-sm font-semibold font-[DM Sans] mb-6 line-clamp-6 ">
        Midl Man a Pharmaceutical distribution company in the health technology
        sector which connects suppliers to buyers of quality healthcare needs at
        the best prices and at the fastest possible time. Midl Man a
        Pharmaceutical distribution company in the health technology sector
        which connects suppliers to buyers of quality healthcare needs at the
        best prices and at the fastest possible time.
      </h1>
      <div className="flex justify-between items-center w-full">
        <h1 className="text-base font-semibold font-[DM Sans] text-[#828282] ">
          21st June, 2021
        </h1>
        <h1 className="text-base font-semibold font-[DM Sans] text-[#00A69C] ">
          Read More....
        </h1>
      </div>
    </div>
  );
}

export default BigCard;
