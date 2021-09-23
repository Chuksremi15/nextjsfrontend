import dataOnLandingPage from "../../contents/onLandingPage";
import HeroBtn from "./HeroBtn";

function Hero() {
  return (
    <div
      className="
        flex flex-col items-center bg-green-sub3
        max-w-screen-xl  px-4  py-8 
        m-auto w-full relative lg:items-start
        "
    >
      <div
        className="
        rounded-[26px] lg:rounded-[36px] 
        bg-gradient-to-r from-[#E6F9F7] to-[#D2E8F9]
        w-full px-6 py-8  mb-4 md:mb-6 lg:px-12 lg:py-16
        "
      >
        <div
          className="
          flex flex-col w-full max-w-screen-md   m-auto lg:m-0
           "
        >
          <h1
            className="
          font-[DM Sans] text-xs sm:text-sm font-semibold 
          text-green-main mb-2 text-center lg:text-left
          "
          >
            {dataOnLandingPage?.heroData.subHeading}
          </h1>
          <h1
            className="
          font-[Poppins] font-bold text-4xl lg:text-5xl
          text-[#001F1D] text-center lg:text-left
          "
          >
            {dataOnLandingPage?.heroData.heading}
          </h1>
        </div>
      </div>

      <div className="w-full mb-8 md:mb-14">
        <div
          className="
        flex w-full max-w-screen-md lg:px-12
        lg:max-w-screen-sm m-auto lg:m-0
        "
        >
          <h1
            className="
          font-[DM Sans] font-medium text-lg 
          lg:text-left text-center text-[#828282]
          "
          >
            {dataOnLandingPage?.heroData.text}
          </h1>
        </div>
      </div>

      <div
        className="
      flex max-w-screen-sm w-full 
      justify-between lg:max-w-screen-md
      mb-6 lg:mb-0
      "
      >
        <HeroBtn
          name={"Express"}
          caption={"Customer Account"}
          href={"express"}
        />

        <HeroBtn
          name={"Portal"}
          caption={"Business Account"}
          href={"portal"}
        />
      </div>

      <img
        src="/banner.png"
        alt=""
        className="
           h-96  transform
          lg:absolute right-8 bottom-20  
          xl:right-20 xl:scale-125
          "
      />
    </div>
  );
}

export default Hero;
