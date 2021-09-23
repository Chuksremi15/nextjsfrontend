import ReactPlayer from "react-player";
import dataOnLandingPage from "../../contents/onLandingPage";

function HealthSector() {
  return (
    <div
      className="
        flex flex-col bg-[#F0FAF9] px-6 py-8 
        bg-contain lg:flex-row lg:px-10 lg:py-20
        max-w-screen-xl w-full m-auto items-center 
        lg:items-start bg-side-angle bg-no-repeat justify-evenly
        "
    >
      <div
        className="
      lg:max-w-[32rem] max-w-screen-sm h-48
      sm:h-60 w-full md:h-72 lg:h-64 rounded-3xl
      overflow-hidden"
      >
        <ReactPlayer
          url={dataOnLandingPage?.healthSectorData.videoUrl}
          height="100%"
          width="100%"
          className=""
        />
      </div>

      <div
        className="
      flex flex-col items-left max-w-screen-md
      lg:max-w-screen-sm w-full lg:px-6 py-6
      lg:py-0 box-border
      "
      >
        <h1
          className="
         font-[Poppins] text-xl text-[#001F1D] 
         font-bold mb-4 lg:text-2xl xl:text-3xl
        "
        >
          {dataOnLandingPage?.healthSectorData.title}
        </h1>
        <h1
          className="font-[DM Sans] text-[#828282]  
        text-lg font-normal mb-4 line-clamp-4 lg:line-clamp-5  "
        >
          {dataOnLandingPage?.healthSectorData.text}
        </h1>

        <h1
          className="
        px-8 py-2 border-2 border-green-main 
        rounded-md w-max font-semibold text-base 
        cursor-pointer text-green-main
        "
        >
          Read more
        </h1>
      </div>
    </div>
  );
}

export default HealthSector;
