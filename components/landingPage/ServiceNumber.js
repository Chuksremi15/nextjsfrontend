import Pentagon from "./SubComponents/Pentagon";

function ServiceNumber() {
  return (
    <div
      className="
    flex flex-col  bg-green-main py-4 lg:mb-36
    max-w-screen-xl w-full m-auto mb-4 lg:py-8 lg:px-10
    lg:bg-gradient-to-r from-[#00A69C] to-[#1B75BB]
   "
    >
      <h1
        className="
        font-[Poppins] text-lg lg:text-3xl  px-4 
        text-green-sub3 font-bold lg:mb-10 mb-6
       
        "
      >
        Some of our numbers from 1year of service
      </h1>
      <div className="lg:-mb-32">
        <div className="flex flex-col items-center lg:flex-row justify-between ">
          <div
            className="
          flex items-center justify-evenly w-full
          lg:hidden mb-4
          "
          >
            <Pentagon score={"40k+"} caption={"Healthcare Products"} />
            <Pentagon score={"120"} caption={"Customers"} />
          </div>

          <div
            className="
          flex items-center  w-full 
          transform justify-between
          max-w-screen-lg m-auto
          "
          >
            <Pentagon
              score={"40k+"}
              caption={"Healthcare Products"}
              className="hidden lg:flex"
            />
            <Pentagon
              score={"120"}
              caption={"Customers"}
              className="hidden lg:flex"
            />
            <Pentagon score={"100+"} caption={"Businesses"} />
            <Pentagon score={"2.2k+"} caption={"Delivered Products"} />
            <Pentagon score={"20+"} caption={"In-house Doctors"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceNumber;
