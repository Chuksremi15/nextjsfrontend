import { SwipeableDrawer } from "@material-ui/core";
import { useState } from "react";
import {
  useInventNavState,
  useOrderModalState,
  usePortalPageState,
} from "../../../store";
import Inventory from "../../expressPage/InventoryPage/Index";

function InventorySideNav() {
  const { openInventNav, setOpenInventNav } = useInventNavState();
  const { onPortal } = usePortalPageState();
  const { setOrderModalNav } = useOrderModalState();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  return (
    <SwipeableDrawer
      anchor={"right"}
      open={openInventNav}
      onClose={() => setOpenInventNav(false)}
      onOpen={() => setOpenInventNav(true)}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      className=""
    >
      <Inventory setModal={setOrderModalNav} portal={onPortal} />
    </SwipeableDrawer>
  );
}

export default InventorySideNav;
