import { SwipeableDrawer } from "@material-ui/core";
import { usePageNavState, usePortalPageState } from "../../../store";
import ExpressNav from "../ExpressNav";

function SidePageNav() {
  const { openPageNav, setOpenPageNav } = usePageNavState();
  const { onPortal } = usePortalPageState();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  return (
    <SwipeableDrawer
      anchor={"left"}
      open={openPageNav}
      onClose={() => setOpenPageNav(false)}
      onOpen={() => setOpenPageNav(true)}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      className=""
    >
      <ExpressNav portal={onPortal} setRightDrawer={setOpenPageNav} />
    </SwipeableDrawer>
  );
}

export default SidePageNav;
