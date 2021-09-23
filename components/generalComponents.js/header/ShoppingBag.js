import Icon from "react-eva-icons/dist/Icon";
import { useInventNavState, usePortalPageState } from "../../../store";
import { useLoggedInState } from "../../../store/user.store";
import { useRouter } from "next/router";

function ShoppingBag() {
  const { isloggedIn } = useLoggedInState();
  const { setOpenInventNav } = useInventNavState();
  const router = useRouter();
  const { onPortal } = usePortalPageState();

  const handleClick = () => {
    if (isloggedIn) {
      setOpenInventNav(true);
    } else {
      router.push(`/${onPortal ? "portal" : "express"}/account/login`);
    }
  };

  return (
    <div onClick={handleClick} className="relative cursor-pointer">
      <Icon name="shopping-bag-outline" fill="#828282" size="xlarge" />
      {isloggedIn && (
        <span className="flex h-3 lg:h-4 w-3 lg:w-4 absolute top-0 right-0">
          {/* <span
            className="
                animate-ping absolute inline-flex h-full 
                w-full rounded-full bg-green-main opacity-75
                "
          /> */}
          <span
            className="
                  relative inline-flex rounded-full h-3 
                   w-3   bg-green-main"
          />
        </span>
      )}
    </div>
  );
}

export default ShoppingBag;
