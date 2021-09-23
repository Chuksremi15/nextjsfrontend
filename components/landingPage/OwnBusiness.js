import HeroBtn from "./HeroBtn";
import CheckRange from "./SubComponents/CheckRange";

function OwnBusiness({
  title,
  name,
  href,
  btn,
  subTitle,
  catlogs,
  img1,
  img2,
}) {
  return (
    <div
      className="
        flex flex-col px-6 py-8 items-center
    max-w-screen-xl w-full m-auto mb-4 lg:py-16
        "
    >
      <h1
        className="
      font-[Poppins] text-2xl lg:text-4xl max-w-md 
      font-bold text-[#001F1D] text-center mb-8"
      >
        {title}
      </h1>
      <div
        className="
      flex flex-col items-center 
      justify-between w-full max-w-screen-lg 
       lg:flex-row-reverse m-auto 
       "
      >
        <div
          className="
        relative items-center justify-center 
        flex mb-28 mt-14 lg:mt-0 lg:mb-0
        "
        >
          <img
            src={img1}
            alt=""
            className="
            transform h-60 translate-x-12 lg:translate-x-0 
            lg:h-80 lg:-translate-y-16 -translate-y-8
            "
          />
          <img
            src={img2}
            alt=""
            className="
            absolute transform -translate-x-12 
            lg:-translate-x-32 lg:translate-y-16 
            h-60 lg:h-80 translate-y-10
            "
          />
        </div>
        <div className="flex flex-col items-start">
          <h1
            className="
          font-[DM Sans] font-semibold text-base lg:text-lg 
          text-[#00A69C] mb-1"
          >
            MIDLMAN {name}
          </h1>
          <h1
            className="
          font-[Poppins] font-bold text-[#001F1D] 
          text-xl mb-8 max-w-xl lg:text-2xl
          "
          >
            {subTitle}
          </h1>
          <div className=" grid gap-4 mb-8 lg:mb-20">
            {catlogs?.map(({ text }) => (
              <CheckRange caption={text} />
            ))}
          </div>
          <div>
            <HeroBtn name={btn} href={href} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnBusiness;
