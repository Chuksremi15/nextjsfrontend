import Image from "next/image";

function TeamCard({ src, name, title }) {
  return (
    <div
      className="
      p-4 rounded-2xl w-40 bg-white 
      min-w-max flex-shrink-0 shadow-xl
      mb-10 transform scale-75 xl:scale-90
      "
    >
      <Image height={300} width={300} src={src} className="rounded-xl mb-6" />
      <div className="py-8">
        <h1
          className=" 
        text-[#001F1D] font-bold text-lg font-[Poppins]"
        >
          {name}
        </h1>
        <h1
          className="
        font-[DM Sans] text-base font-semibold text-[#828282]  "
        >
          {title}
        </h1>
      </div>
    </div>
  );
}

export default TeamCard;
