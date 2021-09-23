import DepositHead from "../deposit-history/DepositHead";
import ReportBody from "../deposit-history/ReportBody";

function WithDrawalReport() {
  return (
    <div className="container px-4 py-8 grid gap-6">
      <h1 className="text-green-black text-xl font-[Poppins] font-bold">
        Withdrawal History
      </h1>
      <div className="max-w-screen-lg w-full m-auto grid gap-6">
        <DepositHead />
        <ReportBody />
      </div>
    </div>
  );
}

export default WithDrawalReport;
