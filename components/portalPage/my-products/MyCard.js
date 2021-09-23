import Image from "next/image";

function MyCard() {
  return (
    <div
      className="
        bg- rounded-lg shadow-lg
        w-full grid gap-4 overflow-hidden
        "
    >
      <div
        className="
            p-4 w-full relative
            "
      >
        <div
          className="
          flex flex-col items-center justify-center 
          bg-gray-200 mb-4
         rounded-lg p-2  w-full
          "
        >
          <Image
            className=" "
            objectFit="contain"
            src="/panadol.png"
            height={100}
            width={100}
          />
        </div>
        <h1
          className="
            text-base text-green-black font-bold
            font-[DM Sans]
            "
        >
          Piriton Syrups
        </h1>
        <h1
          className="
            text-sm text-gray-main font-normal
            font-[DM Sans]
            "
        >
          500mg
        </h1>
        <h1
          className="
            text-base text-green-black font-bold
            font-[DM Sans]
            "
        >
          ₦1800{" "}
          <span
            className="  text-sm text-gray-main font-normal
            font-[DM Sans]"
          >
            /per bottle
          </span>
        </h1>
      </div>
      <div
        className="
 py-2 bg-green-main text-white 
       font-[Poppins] font-bold text-lg
        cursor-pointer flex justify-center w-full mx-auto
"
      >
        Edit
      </div>
    </div>
  );
}

export default MyCard;
