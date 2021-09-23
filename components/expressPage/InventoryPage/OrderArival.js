import Image from "next/image";

function OrderArival({ setModal }) {
  return (
    <div
      className="
                h-[60vh] md:w-full px-6 py-10
                bg-gray-50 max-w-md mx-auto
                flex flex-col items-center w-[90vw]
                "
    >
      <div
        className="
      bg-[#F0FAF9] rounded-full
       p-4 flex justify-center my-6
       "
      >
        <Image height={50} width={50} className="" src="/Ambulance.png" />
      </div>
      <h1
        className="
            text-base lg:text-lg text-green-black font-bold
             font-[DM Sans] mb-4
            "
      >
        Your order will be arriving soon.
      </h1>
      <h1
        className="
      lg:text-sm text-xs font-normal 
      text-gray-main font-[DM Sans]
      p-2 rounded-md bg-gray-200
      "
      >
        Track ID: 6037c9df4d{" "}
        <span className="text-green-black ml-2 font-bold cursor-pointer">
          Copy
        </span>
      </h1>
      <div
        onClick={() => setModal(false)}
        className="
        py-4 bg-green-main text-white 
        rounded-xl font-[Poppins] font-bold text-lg mx-auto
        cursor-pointer flex justify-center w-full mt-auto
        "
      >
        Okay
      </div>
    </div>
  );
}

export default OrderArival;
