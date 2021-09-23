import Image from "next/image";
import { MenuIcon } from "@heroicons/react/solid";
import Link from "next/link";
import SwipeableDrawer from "@material-ui/core/Drawer";
import { useState } from "react";
import SideNav from "./SideNav";
import onAboutPageData from "../../contents/onAboutPage";

function Header() {
  const [sideNav, setsideNav] = useState(false);
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <div className="bg-green-sub3 sticky top-0 z-50 ">
      <div
        className="
    flex items-center max-w-screen-xl 
    justify-between px-2  py-8 h-12 
    m-auto w-full 
    "
      >
        <Link href="/">
          <Image
            height={60}
            width={160}
            src="/logo.svg"
            className="cursor-pointer"
          />
        </Link>

        <div
          className="
      hidden lg:flex  items-center 
      justify-between max-w-2xl w-full
      "
        >
          <div
            className="
        flex items-center
        text-sm font-[DM Sans] font-normal 
        space-x-10
        "
          >
            {onAboutPageData?.navLinks?.map(({ name, href }) => (
              <Link href={`/${href}`} key={href}>
                <h3
                  className="
              cursor-pointer whitespace-no-wrap  
             text-[#828282]"
                >
                  {name}
                </h3>
              </Link>
            ))}
          </div>

          <h2 className="start-btn">Get The App</h2>
        </div>

        <MenuIcon
          className="h-8 cursor-pointer text-[#828282] lg:hidden"
          onClick={() => setsideNav(!sideNav)}
        />
        <SwipeableDrawer
          anchor={"left"}
          open={sideNav}
          onClose={() => setsideNav(false)}
          onOpen={() => setsideNav(true)}
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          className=""
        >
          <SideNav setNavState={setsideNav} />
        </SwipeableDrawer>
      </div>
    </div>
  );
}

export default Header;
