import { XIcon } from "@heroicons/react/outline";
import Image from "next/image";

const Notification = ({ note, subNote, action, unRead }) => (
  <div
    className={`flex px-6 ${
      unRead && "bg-[#F0FAF9]"
    } py-2 border-b border-gray-200`}
  >
    <div className="bg-gray-200 rounded-lg mr-4 p-1 flex justify-center ">
      <Image height={25} width={45} className="" src="/Ambulance.png" />
    </div>
    <div className="flex-grow">
      <h1 className="font-[DM Sans] text-sm lg:text-base text-green-black font-bold">
        {note}
      </h1>
      <p className="lg:text-base text-xs font-medium text-gray-main font-[DM Sans]">
        {subNote}
      </p>
      <p
        className="flex justify-end text-base cursor-pointer
      font-bold font-[DM Sans] text-green-main"
      >
        {action}
      </p>
    </div>
  </div>
);

function Notifications({ setNoteDrawer }) {
  return (
    <div
      className="
        w-[90vw] md:w-[60vw] xl:w-[30vw] py-6 mb-4
        lg:w-[40vw]   h-full bg-white flex flex-col
        "
    >
      <div className="px-6">
        <XIcon
          onClick={() => setNoteDrawer(false)}
          className="h-6 text-gray-main mb-6 cursor-pointer"
        />
        <h1
          className="
            text-xl text-green-black font-bold
             font-[Poppins] mb-4
            "
        >
          Notifications
        </h1>
      </div>
      <div
        className="
      flex flex-col flex-grow
      overflow-y-auto scrollbar-hide "
      >
        <Notification
          note="Your order is arriving soon!"
          subNote="Estimated time: 2 days"
          action="Track"
          unRead={true}
        />
        <Notification
          note="Your order is arriving soon!"
          subNote="Estimated time: 2 days"
          action="Track"
          unRead={false}
        />
        <Notification
          note="Your order is arriving soon!"
          subNote="Estimated time: 2 days"
          action="Track"
          unRead={false}
        />
        <Notification
          note="Your order is arriving soon!"
          subNote="Estimated time: 2 days"
          action="Track"
          unRead={false}
        />
      </div>
    </div>
  );
}

export default Notifications;
