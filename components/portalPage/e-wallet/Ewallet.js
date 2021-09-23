import { SwipeableDrawer } from "@material-ui/core";
import { useTopUpNavState, useWithDrawalNavState } from "../../../store";
import Balance from "./Balance";
import CardDetail from "./CardDetail";
import ManualMessage from "./ManualMessage";
import Security from "./Security";
import TopUp from "./TopUp";
import Withdraw from "./Withdraw";
import Link from "next/link";

function Ewallet() {
  const { topUpNavState, toggleTopUpNav } = useTopUpNavState();
  const { WithDrawalNavState, toggleWithDrawalNav } = useWithDrawalNavState();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <div
      className="
    container px-4 py-8
    "
    >
      <div
        className="
       flex justify-end
      lg:text-base text-green-main font-[DM Sans] 
      font-bold cursor-pointer mb-4 text-sm
      "
      >
        <Link href="/portal/e-wallet/transfer-history">
          <p>Transfer History</p>
        </Link>
      </div>
      <ManualMessage />
      <div
        className="
      flex items-center justify-between
      lg:text-base text-green-main font-[DM Sans] 
      font-bold cursor-pointer mb-8 text-sm
      "
      >
        <Link href="/portal/e-wallet/deposit-history">
          <p>Top-Up History</p>
        </Link>
        <Link href="/portal/e-wallet/withdrawal-history">
          <p>Withdrawal History</p>
        </Link>
      </div>
      <div
        className="
       grid gap-4 lg:gap-8 md:grid-cols-2
       max-w-screen-lg w-full m-auto
  grid-flow-row-dense
      "
      >
        <Balance />
        <CardDetail />
        <Security />
      </div>
      <SwipeableDrawer
        anchor={"right"}
        open={topUpNavState}
        onClose={() => toggleTopUpNav(false)}
        onOpen={() => toggleTopUpNav(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        className=""
      >
        <TopUp />
      </SwipeableDrawer>
      <SwipeableDrawer
        anchor={"right"}
        open={WithDrawalNavState}
        onClose={() => toggleWithDrawalNav(false)}
        onOpen={() => toggleWithDrawalNav(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        className=""
      >
        <Withdraw />
      </SwipeableDrawer>
    </div>
  );
}

export default Ewallet;
