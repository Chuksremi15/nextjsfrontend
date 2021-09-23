import { PhoneIcon } from "@heroicons/react/outline";

function Customer({ start, title, text, btnText, src }) {
  return (
    <div
      className={`
      w-full max-w-screen-xl flex flex-col 
      py-6 m-auto
      px-6 items-center  ${
        start ? "md:flex-row" : "md:flex-row-reverse"
      }  md:justify-evenly
      `}
    >
      <img
        src={src}
        alt=""
        className={`${start ? "mr-auto" : "ml-auto"} mb-2 md:mx-0`}
      />

      <div className="flex flex-col  items-start">
        <h1 className="text-green-black font-bold text-2xl font-[Poppins] mb-4">
          {title}
        </h1>
        <div className="grid gap-2 mb-8">
          <h1 className="text-[#828282] text-base font-medium font-[DM Sans] max-w-md ">
            {text}
          </h1>
        </div>

        <div className="flex items-center btn px-8 cursor-pointer">
          <PhoneIcon className="mr-2 h-6" />
          <h1> {btnText}</h1>
        </div>
      </div>
    </div>
  );
}

export default Customer;
