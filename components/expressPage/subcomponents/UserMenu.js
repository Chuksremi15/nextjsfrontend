import { useRouter } from "next/router";
import { useExpressSetTabState } from "../../../store";
import {
  useExpressUserState,
  useLoggedInState,
} from "../../../store/user.store";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions";

const tabData = [
  {
    name: "Edit Profile",
    id: 0,
  },
  {
    name: "Change Password",
    id: 1,
  },
];

function UserMenu({ handleClose }) {
  const router = useRouter();
  const { setCurrentId } = useExpressSetTabState();

  const dispatch = useDispatch();

  const enterTab = (id) => {
    setCurrentId(id);
    handleClose();
    router.push(`/express/settings`);
  };

  const toLogout = () => {
    handleClose();
    router.push("/");
    dispatch(logout());
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
        onClick={() => toLogout()}
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

export default UserMenu;
