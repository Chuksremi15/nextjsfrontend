import Link from "next/link";

function HeroBtn({ name, caption, href }) {
  return (
    <Link href={`/${href}`}>
      <div className="w-full flex flex-col space-y-3 items-center">
        <div
          className="
           w-32 rounded-lg bg-green-main 
           sm:w-44 md:w-60 lg:w-72 cursor-pointer shadow-lg
           relative flex items-center py-2 md:py-4 hover:scale-105 transform"
        >
          <h2 className="lg:text-xl text-lg font-bold text-green-sub3 m-auto">
            {name}
          </h2>
          <img
            src="/btncart.png"
            className="absolute bottom-0 right-0 h-8 md:h-12 lg:h-14"
          />
        </div>
        <h2
          className="
        text-sm font-normal font-[DM Sans] 
        text-[#828282] whitespace-no-wrap text-center 
        inline-block cursor-pointer lg:text-base
        "
        >
          {caption && caption}
        </h2>
      </div>
    </Link>
  );
}

export default HeroBtn;
