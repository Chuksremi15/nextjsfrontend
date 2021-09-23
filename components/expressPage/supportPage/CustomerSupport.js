import ChatScreen from "./ChatScreen";

function CustomerSupport() {
  return (
    <div className="container lg:flex justify-between mt-6 p-4 xl:justify-evenly">
      <div className="mb-8">
        <h1 className="text-green-black font-bold text-xl font-[Poppins] mb-4">
          Recent Chats
        </h1>
        <div
          className="
            max-w-sm  w-full justify-between bg-white flex items-center
            rounded-lg shadow-lg p-4  flex-shrink-0
            "
        >
          <div className="flex items-center">
            <img src="/caller.png" alt="" className="lg:h-8 h-6" />
            <h1 className=" text-lg font-bold text-[#9B51E0] ml-4 ">
              Customer Support
            </h1>
          </div>
          <p
            className="
          px-2 text-white bg-green-main 
          text-base font-semibold rounded-full
          ml-6
          "
          >
            2
          </p>
        </div>
      </div>
      <ChatScreen />
    </div>
  );
}

export default CustomerSupport;
