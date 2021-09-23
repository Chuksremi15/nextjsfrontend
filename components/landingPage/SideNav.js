import Link from "next/link";
import { XIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import { NewspaperIcon } from "@heroicons/react/solid";
import { SupportIcon } from "@heroicons/react/solid";
import { PhoneOutgoingIcon } from "@heroicons/react/solid";
import { PhoneIcon } from "@heroicons/react/solid";
import { MailIcon } from "@heroicons/react/solid";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";

function SideNav({ setNavState }) {
  const navLinks = [
    {
      name: "Home",
      href: "",
      Icon: HomeIcon,
    },
    {
      name: "About Us",
      href: "about",
      Icon: QuestionMarkCircleIcon,
    },
    {
      name: "Blog",
      href: "blog",
      Icon: NewspaperIcon,
    },
    {
      name: "Support",
      href: "support",
      Icon: SupportIcon,
    },
    {
      name: "Contact Us",
      href: "contact",
      Icon: PhoneIcon,
    },
    {
      name: "Help $ FAQ",
      href: "help",
      Icon: InformationCircleIcon,
    },
  ];

  return (
    <div
      className={`h-full w-[90vw] md:w-[60vw]
      bg-gray-50 flex flex-col items-center overflow-y-scroll
            text-2xl font-semibold relative   scrollbar-hide
            `}
    >
      <div
        className="
      flex px-6 py-2 border-b-2 border-gray-400 w-full 
      bg-gray-100 
      items-center justify-center cursor-pointer 
      "
        onClick={() => setNavState(false)}
      >
        <XIcon className="h-6 text-green-main mr-6" />
        <img src="/logo.svg" alt="" className="h-6" />
      </div>
      <div className="flex flex-col justify-between flex-grow w-full">
        <div
          className="
      flex flex-col w-full divide-y-[2px]  
    divide-gray-300 bg-gray-100
       "
        >
          {navLinks.map(({ name, Icon, href }) => (
            <Link href={`/${href}`} key={href}>
              <div
                onClick={() => setNavState(false)}
                className="flex items-center px-10 py-4 bg-gray-100 cursor-pointer"
              >
                <Icon className="h-6 mr-4 text-green-main" />
                <h1 className="font-[Popppins] text-base font-semibold text-[#001F1D]">
                  {name}
                </h1>
              </div>
            </Link>
          ))}
        </div>

        <div
          className="
      py-4 px-8 bg-gray-100
        "
        >
          {/* social contact */}

          <div className="flex mb-2">
            <PhoneOutgoingIcon className="h-6 mr-4 text-green-main" />
            <div className="flex flex-col">
              <h1 className="font-[Poppins] text-xs font-normal text-[#828282] ">
                Phone
              </h1>
              <h1 className="font-[Poppins] text-sm font-normal text-[#001F1D] ">
                +234 904 808 8375
              </h1>
            </div>
          </div>
          <div className="flex  mb-2">
            <MailIcon className="h-6 mr-4 text-green-main" />
            <div className="flex flex-col">
              <h1 className="font-[Poppins] text-xs font-normal text-[#828282] ">
                Email
              </h1>
              <h1 className="font-[Poppins] text-sm font-normal text-[#001F1D] ">
                midlmanlimited@gmail.com
              </h1>
            </div>
          </div>

          {/* social media tag */}

          <div className="flex flex-col">
            <h1 className="font-[Poppins] text-base font-semibold text-[#001F1D] mb-1">
              Follow Our Social media
            </h1>
            <div className="flex space-x-2 items-center">
              <FiFacebook className="rounded-md p-1 bg-green-main text-3xl text-white cursor-pointer" />
              <FiInstagram className="rounded-md p-1 bg-green-main text-3xl text-white cursor-pointer" />
              <FiTwitter className="rounded-md p-1 bg-green-main text-3xl text-white cursor-pointer" />
              <FiYoutube className="rounded-md p-1 bg-green-main text-3xl text-white cursor-pointer" />
            </div>
          </div>
          {/* get the app section */}

          <div className="flex flex-col ">
            <h1 className="font-[Poppins] text-base font-semibold text-[#001F1D] mb-1">
              Get the App
            </h1>
            <div className="flex items-center space-x-6">
              <img src="/appstore.svg" alt="" className="h-8 " />
              <img src="/playstore.svg" alt="" className="h-6 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
