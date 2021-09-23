import { XIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/outline";
import { CogIcon } from "@heroicons/react/outline";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { ArchiveIcon } from "@heroicons/react/outline";
import { PhoneIcon } from "@heroicons/react/outline";
import { InformationCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";

function ExpressNav({ setRightDrawer, portal }) {
  const appLinks = [
    {
      name: "Home",
      href: "",
      Icon: HomeIcon,
    },
    {
      name: "Shop",
      href: "/shop",
      Icon: ShoppingBagIcon,
    },
    {
      name: "Orders",
      href: "/orders",
      Icon: ArchiveIcon,
    },
    {
      name: "Support",
      href: "/support",
      Icon: PhoneIcon,
    },
    {
      name: "Settings",
      href: "/settings",
      Icon: CogIcon,
    },
  ];
  return (
    <div
      className=" 
    w-[80vw] md:w-[50vw] xl:w-[20vw] py-6 px-4 
    lg:w-[30vw]   h-full bg-green-main

    "
    >
      <div
        className="
     flex flex-col  mb-8
    "
      >
        <div
          onClick={() => setRightDrawer(false)}
          className="
        flex items-center cursor-pointer p-2 
        hover:bg-[#ffffff25] rounded-lg
        "
        >
          <XIcon className="h-6 text-white mr-6" />
          <img src="/whitemanLogo.png" alt="" className="h-8" />
        </div>
        <h1
          className="
        text-white text-lg font-[Poppins] font-bold ml-14
         cursor-pointer
        "
        >
          {portal ? "portal" : "express"}
        </h1>
      </div>

      <div
        className="
      flex flex-col w-full 
       h-[50vh] flex-grow
      overflow-y-scroll scroll-hide
      "
      >
        {appLinks.map(({ name, Icon, href }) => (
          <Link href={`/${portal ? "portal" : "express"}${href}`} key={href}>
            <div
              onClick={() => setRightDrawer(false)}
              className="
        flex items-center px-10 py-4 
        cursor-pointer hover:bg-[#ffffff25] rounded-lg
        "
            >
              <Icon className="h-6 mr-4 text-white" />
              <h1 className="font-[Popppins] text-base font-semibold text-white">
                {name}
              </h1>
            </div>
          </Link>
        ))}
      </div>

      <Link href={`/${portal ? "portal" : "express"}/help`}>
        <div
          onClick={() => setRightDrawer(false)}
          className="
        flex items-center px-10 py-4 border-t-2 border-gray-300
        cursor-pointer hover:bg-[#ffffff25] rounded-lg
        "
        >
          <InformationCircleIcon className="h-6 mr-4 text-white" />
          <h1 className="font-[Popppins] text-base font-semibold text-white">
            Help
          </h1>
        </div>
      </Link>
    </div>
  );
}

export default ExpressNav;
