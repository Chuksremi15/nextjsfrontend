import { useRouter } from "next/router";
import { logoutPortal } from "../../../services/express/auth.service";
import { usePortalSetTabState } from "../../../store";
import {
  useLoggedInState,
  usePortalUserState,
} from "../../../store/user.store";

const tabData = [
  {
    name: "Edit Profile",
    id: 0,
  },
  {
    name: "Change Password",
    id: 1,
  },
  {
    name: "Legal Documents",
    id: 2,
  },
  {
    name: "Bank Details",
    id: 3,
  },
];

function UserPortalMenu({ handleClose }) {
  const router = useRouter();
  const { setCurrentId } = usePortalSetTabState();
  const { setPortalUserData } = usePortalUserState();
  const { setIsLoggedIn } = useLoggedInState();

  const enterTab = (id) => {
    setCurrentId(id);
    handleClose();
    router.push(`/portal/settings`);
  };

  const toLogout = () => {
    handleClose();
    router.push("/");
    setIsLoggedIn(false);
    setPortalUserData({});
    logoutPortal();
  };

  return (
    <div
      className="
         bg-[#ffffff] flex flex-col items-center z-50 
        flex-shrink-0 h-full 
         px-4 py-2 space-y-2
        "
    >
      {tabData.map(({ name, id }) => (
        <p
          key={id}
          onClick={() => enterTab(id)}
          className="
           text-gray-main font-[DM Sans]
           font-medium text-sm  cursor-pointer
            "
        >
          {name}
        </p>
      ))}

      <p
        onClick={toLogout}
        className="
          text-[#EB5757]  font-[DM Sans]
           font-medium text-sm cursor-pointer
            "
      >
        Logout
      </p>
    </div>
  );
}

export default UserPortalMenu;
