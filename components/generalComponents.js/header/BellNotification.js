import Icon from "react-eva-icons/dist/Icon";
import { useNoteNavState } from "../../../store";
import { useLoggedInState } from "../../../store/user.store";

function BellNotification() {
  const { setNoteNav } = useNoteNavState();
  const { isloggedIn } = useLoggedInState();
  return (
    <div onClick={() => setNoteNav(true)} className="relative cursor-pointer">
      <Icon name="bell-outline" fill="#828282" size="xlarge" />
      {isloggedIn && (
        <span className="flex h-3  w-3 absolute top-0 right-0">
          {/* <span
            className="
                animate-ping absolute inline-flex h-full 
                w-full rounded-full bg-green-main opacity-75
                "
          /> */}
          <span
            className="
                  relative inline-flex rounded-full h-3 
                   w-3  bg-green-main"
          />
        </span>
      )}
    </div>
  );
}

export default BellNotification;
