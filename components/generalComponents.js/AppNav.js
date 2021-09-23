import Link from "next/link";
import { connect } from "react-redux";
import { toggleNav } from "../../redux/pageflow/page-action";
import { XIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/outline";
import { CogIcon } from "@heroicons/react/outline";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { ArchiveIcon } from "@heroicons/react/outline";
import { PhoneIcon } from "@heroicons/react/outline";
import { InformationCircleIcon } from "@heroicons/react/solid";

function AppNav({ navState, toggleNav }) {
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
      className={`lg:h-[90vh] h-[85vh] w-[95%] md:w-[50%] 
        xl:w-[20%] lg:w-[30%] fixed top-24 md:top-28 lg:top-[3.2rem] ${
          navState ? "-left-0" : "left-[-110%] "
        } py-6 px-4 bg-green-main flex flex-col z-50 relative
            `}
    >
      <div
        className="
     flex flex-col 
    "
      >
        <div
          className="
        flex items-center cursor-pointer p-2 
        hover:bg-[#ffffff25] rounded-lg
        "
          onClick={() => toggleNav(false)}
        >
          <XIcon className="h-6 text-white mr-6" />
          <img src="/whiteLogo.png" alt="" className="h-6" />
        </div>
        <h1
          className="
        text-white text-lg font-[Poppins] font-bold ml-12
         cursor-pointer
        "
        >
          express
        </h1>
      </div>
      <div
        className="
      flex flex-col w-full divide-y-[2px]  
      divide-gray-300  h-[50vh] flex-grow
      overflow-y-scroll scrollbar-hide
      "
      >
        {appLinks.map(({ name, Icon, href }) => (
          <Link href={`/express${href}`} key={href}>
            <div
              onClick={() => toggleNav(false)}
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

      <Link href={`/express/help`}>
        <div
          onClick={() => toggleNav(false)}
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

const mapStateToProps = (state) => {
  return {
    navState: state.page.navState,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    toggleNav: (newState) => dispatch(toggleNav(newState)),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(AppNav);
