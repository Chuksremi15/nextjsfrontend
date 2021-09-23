import ExpressHeader from "../../../components/generalComponents.js/ExpressHeader";
import Ewallet from "../../../components/portalPage/e-wallet/Ewallet";
import Head from "next/head";

function index() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title> E-Wallet </title>
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
      <Ewallet />
    </div>
  );
}

export default index;
