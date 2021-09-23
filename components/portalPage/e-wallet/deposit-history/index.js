import DepositHead from "./DepositHead";
import ReportBody from "./ReportBody";

function DepositReport() {
  return (
    <div className="container px-4 py-8 grid gap-6">
      <h1 className="text-green-black text-xl font-[Poppins] font-bold">
        Top-Up History
      </h1>
      <div className="max-w-screen-lg m-auto w-full grid gap-6">
        <DepositHead />
        <ReportBody />
      </div>
    </div>
  );
}

export default DepositReport;
