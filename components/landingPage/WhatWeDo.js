import dataOnLandingPage from "../../contents/onLandingPage";
import WeDo from "./SubComponents/WeDo";

function WhatWeDo() {
  dataOnLandingPage;
  return (
    <div
      className="
      flex flex-col  bg-green-sub3 px-6 py-10
      lg:py-20  max-w-screen-xl w-full m-auto
      "
    >
      <div className="flex flex-col space-y items-left mb-8">
        <h1 className="text-[DM Sans] text-sm font-semibold text-green-main">
          {dataOnLandingPage?.weDoData?.title}
        </h1>
        <h1
          className="
          text-[#001F1D] font-bold font-[Poppins] 
          lg:text-4xl lg:max-w-md text-2xl
        "
        >
          {dataOnLandingPage?.weDoData?.subHeading}
        </h1>
      </div>
      <div className="flex">
        <img
          src="/drugbag.png"
          alt=""
          className="w-1/3 hidden lg:inline-block"
        />
        <div className="grid gap-4 lg:grid-cols-2 lg:w-2/3">
          {dataOnLandingPage?.weDoData?.content.map(({ title, text }, i) => (
            <WeDo title={title} text={text} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
