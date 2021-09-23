import Image from "next/image";

function ChatHead() {
  return (
    <div className="flex items-center py-6 sticky top-24 lg:top-10 bg-white">
      <Image
        height={40}
        width={40}
        src="/designer.jpg"
        alt=""
        className="rounded-full"
      />
      <div className="ml-4">
        <h1 className="text-green-black font-bold text-lg font-[Poppins] ">
          Emmanuel C
        </h1>
        <p className="text-gray-main font-semibold text-base font-[Poppins]">
          Customer Support
        </p>
      </div>
    </div>
  );
}

export default ChatHead;
