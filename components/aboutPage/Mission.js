import Image from "next/image";

function Mission({ heading, caption, url, vision }) {
  return (
    <div
      className={`
        flex flex-col items-center  max-w-screen-lg m-auto
        lg:${vision ? "flex-row-reverse" : "flex-row"} 
        justify-between mb-20 px-6
        `}
    >
      <div className="max-w-xl">
        <h1
          className="
        mb-4 text-[#001F1D] font-bold text-xl 
        font-[Poppins] lg:text-2xl
        "
        >
          {heading}
        </h1>
        <h1
          className="
        font-[DM Sans] text-base font-normal text-[#001F1D] mb-6"
        >
          {caption}
        </h1>
      </div>

      <Image height={260} width={360} src={url} className="" />
    </div>
  );
}

export default Mission;
