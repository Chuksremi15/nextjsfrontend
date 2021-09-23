import onAboutPageData from "../../contents/onAboutPage";

function AboutUs() {
  return (
    <div
      className="
    w-full max-w-screen-xl flex flex-col py-6 
    m-auto mb-4 
    "
    >
      <h1
        className="
        text-green-black font-bold 
        lg:text-3xl mb-6 lg:mb-10 px-6
        text-2xl font-[Poppins] 
      "
      >
        About Us
      </h1>
      <div
        className="
        bg-cover bg-center bg-about-bg
        w-full  bg-no-repeat  
        "
      >
        <div
          className="
        justify-center bg-gray-700 w-full flex 
        flex-col px-6 py-8
        bg-opacity-60 md:py-10 md:px-8 
        lg:py-12 xl:py-20
        "
        >
          <h1
            className="
          font-[Poppins] text-white font-bold mb-8
          text-center text-lg md:text:xl xl:text-3xl
          "
          >
            {onAboutPageData?.bannerData?.heading}
          </h1>
          <p
            className="
          font-[DM Sans] text-sm lg:text-lg font-medium mx-auto
          text-white text-center lg:px-6 max-w-screen-lg
          "
          >
            {onAboutPageData?.bannerData?.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
