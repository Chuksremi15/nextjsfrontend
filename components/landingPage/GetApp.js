function GetApp() {
  return (
    <div
      className="
     flex  lg:my-20 xl:my-32
    max-w-screen-lg w-full mx-auto 
    relative p-6 lg:p-4 my-6
    "
    >
      <img
        src="/phonesample.png"
        alt=""
        className="
        h-[32rem] w-[24rem] -top-14 left-24 hidden lg:inline-block 
        lg:absolute lg:transform lg:scale-90 xl:scale-100
        "
      />
      <div
        className="
      bg-green-main w-full flex lg:rounded-[42px]
      lg:pr-20 py-2 justify-center rounded-xl
      lg:bg-gradient-to-r from-[#00A69C] to-[#1B75BB] 
      "
      >
        <div
          className="
        flex flex-col items-left
         px-4 py-6 max-w-md lg:ml-auto
      
        "
        >
          <h1
            className=" 
          font-bold text-lg lg:text-3xl 
          font-[Poppins] text-[#FFFFFF]
           mb-4 text-center lg:text-left
           "
          >
            Download our Mobile App
          </h1>
          <h1
            className="
          font-[Barlow] text-base font-medium 
          text-[#F0FAF9] lg:mb-20 text-center 
          lg:text-left mb-6
          "
          >
            Get our mobile app to stay connected to your favorite online
            pharmacy round the clock. The MidlMan app is simple, efficient, and
            user-friendly
          </h1>
          <div className="flex items-center justify-evenly max-w-sm">
            <img src="/appstore.svg" alt="" className="h-10 lg:h-16" />
            <img src="/playstore.svg" alt="" className="h-8 lg:h-12" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetApp;
