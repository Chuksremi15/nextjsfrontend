import { LocationMarkerIcon } from "@heroicons/react/solid";
import { ClockIcon } from "@heroicons/react/solid";
import { PhoneIcon } from "@heroicons/react/solid";

function Contact() {
  return (
    <div
      className="      
    flex flex-col px-4 py-8 items-center
    max-w-screen-xl w-full m-auto"
    >
      <div
        className="
      flex flex-col items-center lg:place-items-start 
      lg:flex-row mb-4 w-full justify-evenly 
      lg:-mb-60 xl:-mb-80 z-10
      "
      >
        <form
          action=""
          className="
              flex flex-col items-center max-w-lg
               w-full lg:shadow-2xl shadow-md
               rounded-[32px] bg-white mb-6 lg:mb-0
              "
        >
          <h1
            className="
          font-[Poppins] text-xl lg:text-2xl 
          stext-[#000000] font-bold 
          mt-4 mb-1"
          >
            Contact Us
          </h1>
          <h1
            className="
          font-[barrow] text-[#828282] 
          text-base font-medium mb-4
          "
          >
            Feel free to ask us anything, Anything!
          </h1>
          <div className="w-full grid gap-4 lg:gap-6 mb-6 px-6">
            <input
              type="text"
              className="
              py-4 px-6 rounded-md bg-gray-100 focus:outline-none
              placeholder-gray-200::placeholder placeholder-opacity-75
              "
              placeholder="Full Name"
            />
            <input
              type="text"
              className="
              py-4 px-6 rounded-md bg-gray-100 focus:outline-none
              placeholder-gray-200::placeholder placeholder-opacity-75
              "
              placeholder="Placeholder"
            />
            <input
              type="text"
              className="
              py-4 px-6 rounded-md bg-gray-100 focus:outline-none
              placeholder-gray-200::placeholder placeholder-opacity-75
              "
              placeholder="Email Address"
            />
            <textarea
              type="text"
              className="
              py-4 px-6 rounded-md bg-gray-100 focus:outline-none border-0 h-40
              placeholder-gray-200::placeholder placeholder-opacity-75 resize-y
              "
              placeholder="YOUR MESSAGE"
            />
          </div>
          <button
            onClick={() => e.preventDefault()}
            className="
          w-full bg-green-main py-6 text-green-sub3 
          font-bold text-base rounded-b-xl focus:outline-none
          "
          >
            Send
          </button>
        </form>
        <div className="flex flex-col space-y-2 font-[DM Sans] font-light text-base text-[#001F1D] ">
          <div className="flex items center ">
            <div className="p-1 bg-gray-100  rounded-full relative flex items-center justify-center mr-4">
              <LocationMarkerIcon className="h-5  text-green-main" />
              <span className="absolute h-3 w-3 rounded-full  bg-green-main opacity-75 animate-ping"></span>
            </div>
            <h1 className=" ">136 Ogui Road, Enugu</h1>
          </div>
          <div className="flex items center">
            <div className="p-1 bg-gray-100  rounded-full relative flex items-center justify-center mr-4">
              <ClockIcon className="h-5  text-green-main" />
              <span className="absolute h-3 w-3 rounded-full  bg-green-main opacity-75 animate-ping"></span>
            </div>
            <h1 className=" ">Weekdays (Mon-Fri): 8am - 5pm</h1>
          </div>
          <div className="flex items center">
            <div className="p-1 bg-gray-100  rounded-full relative flex items-center justify-center mr-4">
              <PhoneIcon className="h-5  text-green-main" />
              <span className="absolute h-3 w-3 rounded-full  bg-green-main opacity-75 animate-ping"></span>
            </div>
            <h1 className=" ">+234(0) 812-944-6261, +234(0) 812-944-626</h1>
          </div>
        </div>
      </div>
      <img src="/map.png" alt="" className="h-92 w-full " />
    </div>
  );
}

export default Contact;
