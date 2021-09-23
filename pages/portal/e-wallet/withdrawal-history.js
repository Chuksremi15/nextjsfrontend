import Head from "next/head";
import ExpressHeader from "../../../components/generalComponents.js/ExpressHeader";
import WithDrawalReport from "../../../components/portalPage/e-wallet/withdrawal-history";

function withdrawal() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Withdrawal History</title>
        <meta
          name="MidlMan"
          content="  Midl Man a Pharmaceutical distribution company in the health
            technology sector which connects suppliers to buyers of quality
            healthcare needs at the best prices and at the fastest possible
            time."
        />
        <link rel="icon" href="/MM_Logo.png" />
      </Head>
      <ExpressHeader />
      <WithDrawalReport />
    </div>
  );
}

export default withdrawal;
