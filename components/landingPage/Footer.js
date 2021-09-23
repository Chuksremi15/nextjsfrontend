import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import Link from "next/link";

function Footer() {
  return (
    <div className="w-full bg-[#001F1D] ">
      <div
        className="
        flex flex-col px-6 py-8 items-center
        max-w-screen-xl w-full m-auto  
        "
      >
        <div className="grid grid-cols-3 w-full gap-4 mb-6 lg:grid-cols-4 ">
          <div className="w-full items-left flex flex-col">
            <h1 className="font-bold text-lg text-[#F4F5F7] mb-6 font-[Poppins] ">
              Company
            </h1>
            <div className="flex flex-col items-left space-y-4">
              <Link href="/about">
                <h1
                  className="
                font-[DM Sans] font-normal text-base 
                text-[#EEEFF4] cursor-pointer
                 "
                >
                  About Us
                </h1>
              </Link>
              <Link href="/blog">
                <h1
                  className="
                font-[DM Sans] font-normal text-base 
                text-[#EEEFF4] cursor-pointer "
                >
                  Blog
                </h1>
              </Link>
            </div>
          </div>
          <div className="w-full items-left flex flex-col">
            <h1 className="font-bold text-lg text-[#F4F5F7] mb-6 font-[Poppins] ">
              Support
            </h1>
            <div className="flex flex-col items-left space-y-4">
              <Link href="/contact">
                <h1
                  className="
                font-[DM Sans] font-normal text-base 
                text-[#EEEFF4] cursor-pointer "
                >
                  Contact Us
                </h1>
              </Link>
              <Link href="/help">
                <h1
                  className="
              font-[DM Sans] font-normal text-base 
              text-[#EEEFF4] cursor-pointer 
              "
                >
                  Help & FAQ
                </h1>
              </Link>
            </div>
          </div>
          <div className="w-full items-left flex flex-col">
            <h1
              className="
            font-bold text-lg text-[#F4F5F7] mb-6 
            font-[Poppins] 
            "
            >
              Legal
            </h1>
            <div className="flex flex-col items-left space-y-4">
              <Link href="/cookies">
                <h1
                  className="
              font-[DM Sans] font-normal text-base 
              text-[#EEEFF4]  cursor-pointer
              "
                >
                  Cookies Policy
                </h1>
              </Link>
              <Link href="/privacy">
                <h1
                  className="
              font-[DM Sans] font-normal text-base 
              text-[#EEEFF4]  cursor-pointer
              "
                >
                  Privacy Policy
                </h1>
              </Link>
              <Link href="/serviceTerms">
                <h1
                  className="
              font-[DM Sans] font-normal text-base 
              text-[#EEEFF4]  cursor-pointer
              "
                >
                  Terms of Service
                </h1>
              </Link>
            </div>
          </div>
          <div className="w-full justify-between flex items-center col-span-3 mt-4 lg:flex-col lg:col-span-1">
            <h1 className="font-bold text-lg text-[#F4F5F7]  font-[Poppins]  lg:mb-6">
              Get The app
            </h1>
            <div
              className="
            flex items-center space-x-6 lg:space-y-4
            lg:flex-col lg:flex-grow lg:items-center 
            lg:justify-evenly lg:w-full lg:space-x-0
            "
            >
              <img
                src="/playstoredark.svg"
                alt=""
                className="h-5 lg:h-10 cursor-pointer"
              />
              <img
                src="/appstoredark.png"
                alt=""
                className="h-5 lg:h-10 cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between w-full lg:mt-4">
          <h1 className="font-[DM Sans] font-normal text-xs text-[#EEEFF4] lg:font-medium lg:text-base ">
            © 2020 Midlman. All right reserved.
          </h1>
          <div
            className="
          flex space-x-2 items-center 
          lg:transform lg:scale-110
          "
          >
            <FiFacebook className="rounded-md p-1 cursor-pointer bg-[#ffffff36] text-3xl text-white" />
            <FiInstagram className="rounded-md p-1 cursor-pointer bg-[#ffffff36] text-3xl text-white" />
            <FiTwitter className="rounded-md p-1 cursor-pointer bg-[#ffffff36] text-3xl text-white" />
            <FiYoutube className="rounded-md p-1 cursor-pointer bg-[#ffffff36] text-3xl text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
