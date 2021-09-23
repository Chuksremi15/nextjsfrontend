import { ChevronDownIcon, UserCircleIcon } from "@heroicons/react/outline";
import { Popover } from "@material-ui/core";
import { useState } from "react";
import { usePortalPageState } from "../../../store";
import {
  useExpressUserState,
  useLoggedInState,
  usePortalUserState,
} from "../../../store/user.store";
import UserMenu from "../../expressPage/subcomponents/UserMenu";
import UserPortalMenu from "../../portalPage/settings/UserPortalMenu";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

function UserInfo() {
  const { expressUserData } = useExpressUserState();
  const { portalUserData } = usePortalUserState();
  const [anchor, setAnchor] = useState(null);
  const { onPortal } = usePortalPageState();
  const router = useRouter();

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const dispatch = useDispatch();

  // takes the router to login page if user is not active
  const GoLogin = () => {
    router.push(`${router.pathname}/account/login`);
  };

  const { user, isLoggedIn } = useSelector((state) => {
    const {
      success: { login: loginSuccess },
      errors: { login: loginError },
    } = state.ajaxStatuses;

    const { loginLoading } = state.loadingIndicator;
    const {
      user: { user },
      isLoggedIn,
    } = state.personalInformationData;

    return {
      user,
      isLoggedIn,
    };
  });

  const open = Boolean(anchor);
  const id = open ? "simple-popover" : undefined;
  return (
    <div
      className="
            flex items-center space-x-2 overflow-y-visible
            text-[#001F1D]  relative cursor-pointer
            "
    >
      {!isLoggedIn && (
        <UserCircleIcon
          onClick={() => GoLogin()}
          className="h-8 text-green-black font-semibold"
        />
      )}

      {/* {onPortal &&
        isloggedIn &&
        (portalUserData?.user?.documentVerified ? (
          <Icon name="person-done-outline" fill="#00A69C" size="xlarge" />
        ) : (
          <Icon name="person-delete-outline" fill="#F2994A" size="xlarge" />
        ))} */}

      <div className="">
        {isLoggedIn ? (
          <p
            className="
        text-base font-medium font-[DM Sans]
        whitespace-nowrap 
        "
          >
            {user.username}
          </p>
        ) : (
          <p
            onClick={() => GoLogin()}
            className="
        lg:text-base font-medium font-[DM Sans]
        whitespace-nowrap mr-1 text-sm
        "
          >
            Sign In
          </p>
        )}
        {onPortal && isloggedIn && (
          <p className="text-sm font-medium text-gray-main font-[DM Sans]">
            {portalUserData?.user?.businessType}
          </p>
        )}
      </div>
      {isLoggedIn && (
        <ChevronDownIcon
          aria-describedby={id}
          onClick={handleClick}
          className="h-8 p-1 rounded-full cursor-pointer hover:bg-gray-300 "
        />
      )}
      <Popover
        id={id}
        open={open}
        anchorEl={anchor}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {onPortal ? (
          <UserPortalMenu handleClose={handleClose} />
        ) : (
          <UserMenu handleClose={handleClose} />
        )}
      </Popover>
    </div>
  );
}

export default UserInfo;
