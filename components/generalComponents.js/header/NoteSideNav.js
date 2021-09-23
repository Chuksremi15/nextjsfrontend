import { SwipeableDrawer } from "@material-ui/core";
import { useNoteNavState } from "../../../store";
import Notifications from "../../expressPage/NotificationsPage/Notifications";

function NoteSideNav() {
  const { openNoteNav, setNoteNav } = useNoteNavState();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  return (
    <SwipeableDrawer
      anchor={"right"}
      open={openNoteNav}
      onClose={() => setNoteNav(false)}
      onOpen={() => setNoteNav(true)}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      className=""
    >
      <Notifications setNoteDrawer={setNoteNav} />
    </SwipeableDrawer>
  );
}

export default NoteSideNav;
