import TransferBody from "./TransferBody";
import TransferHead from "./TransferHead";

function TransferHitory() {
  return (
    <div className="container px-4 py-8 grid gap-6">
      <h1 className="text-green-black text-xl font-[Poppins] font-bold">
        Transfer History
      </h1>
      <div className="grid gap-6">
        <TransferHead />
        <TransferBody />
      </div>
    </div>
  );
}

export default TransferHitory;
