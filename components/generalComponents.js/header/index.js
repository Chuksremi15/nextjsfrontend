import Bar from "./Bar";
import InventorySideNav from "./InventorySideNav";
import NoteSideNav from "./NoteSideNav";
import OrderArriveModal from "./OrderArriveModal";
import SidePageNav from "./SidePageNav";

function Header() {
  return (
    <div>
      <Bar />
      <SidePageNav />
      <InventorySideNav />
      <NoteSideNav />
      <OrderArriveModal />
    </div>
  );
}

export default Header;
