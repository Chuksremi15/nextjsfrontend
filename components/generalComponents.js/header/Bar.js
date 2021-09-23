import { usePageNavState } from "../../../store";
import {
  useLoggedInState,
  useExpressUserState,
} from "../../../store/user.store";
import BellNotification from "./BellNotification";
import ShoppingBag from "./ShoppingBag";
import UserInfo from "./UserInfo";
import { MenuIcon } from "@heroicons/react/solid";
import HeadSearch from "../HeadSearch";
import Link from "next/link";
import { useSelector } from "react-redux";

function Bar() {
  const { user, isLoggedIn } = useSelector((state) => {
    const {
      user: { user },
      isLoggedIn,
    } = state.personalInformationData;

    return {
      user,
      isLoggedIn,
    };
  });

  const { setOpenPageNav } = usePageNavState();
  return (
    <div
      className="
        w-full sticky top-0 z-50 bg-gray-50 py-2
        border-b border-gray-200 flex items-center
    "
    >
      <div
        className="
        flex flex-col max-w-screen-xl 
        px-2   items-center justify-between
        m-auto w-full overflow-y-visible
     "
      >
        <div
          className="
        flex items-center justify-between w-full
        "
        >
          {isLoggedIn ? (
            <MenuIcon
              onClick={() => setOpenPageNav(true)}
              className="h-8 cursor-pointer text-[#828282] flex-shrink-0 lg:mr-6 "
            />
          ) : (
            <Link href="/">
              <img
                src="/mainman.png"
                alt=""
                className="
             h-10 cursor-pointer 
            w-40 lg:w-48 "
              />
            </Link>
          )}
          <HeadSearch className="hidden lg:flex" />
          <div className="flex items-center space-x-6 ml-4">
            <ShoppingBag />
            <BellNotification />
            <UserInfo />
          </div>
        </div>
        <div className="w-full px-4 lg:hidden mt-2 flex justify-center">
          <HeadSearch className="lg:hidden " />
        </div>
      </div>
    </div>
  );
}

export default Bar;
