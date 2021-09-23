import Image from "next/image";

function WeDo({ title, text }) {
  return (
    <div
      className="
     flex flex-col items-left
     "
    >
      <div
        className="
      p border-2  border-green-main rounded-full 
      h-10 w-10 flex items-center justify-center mb-1
       "
      >
        <Image height={25} width={25} src="/Delivery.svg" />
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold text-green-main text-lg mb-2 font-[Poppins] line-clamp-1">
          {title}
        </h1>
        <h1 className="font-normal text-base font-[Barlow] text-[#828282] line-clamp-4">
          {text}
        </h1>
      </div>
    </div>
  );
}

export default WeDo;
