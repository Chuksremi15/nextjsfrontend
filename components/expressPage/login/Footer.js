import Link from "next/link";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";

function Footer() {
  return (
    <div
      className="
    flex items-center justify-between w-full mt-4
    "
    >
      <h1
        className="
      font-[DM Sans] font-normal text-sm 
      text-[#828282] lg:font-medium lg:text-base
      "
      >
        © 2020 Midlman. All right reserved.
      </h1>
      <div
        className="
          flex space-x-2 items-center 
          lg:transform lg:scale-110
          "
      >
        <a href="https://facebook.com">
          <FiFacebook
            className="
          rounded-md p-1 bg-green-main lg:text-3xl 
          text-white cursor-pointer text-2xl"
          />
        </a>
        <a href="https://instagram.com/">
          <FiInstagram
            className="
          rounded-md p-1 bg-green-main lg:text-3xl text-2xl 
          text-white cursor-pointer"
          />
        </a>
        <a href="https://twitter.com/">
          <FiTwitter
            className="
          rounded-md p-1 bg-green-main lg:text-3xl text-2xl 
          text-white cursor-pointer"
          />
        </a>
        <a href="https://youtube.com/">
          <FiYoutube
            className="
          rounded-md p-1 bg-green-main lg:text-3xl text-2xl 
          text-white cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
