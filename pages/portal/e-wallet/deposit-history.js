import Head from "next/head";
import ExpressHeader from "../../../components/generalComponents.js/ExpressHeader";
import DepositReport from "../../../components/portalPage/e-wallet/deposit-history";

function DeReport() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Deposit History </title>
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
      <DepositReport />
    </div>
  );
}

export default DeReport;
