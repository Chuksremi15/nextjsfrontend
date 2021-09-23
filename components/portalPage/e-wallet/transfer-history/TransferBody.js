import Transfer from "./Transfer";

function TransferBody() {
  return (
    <div className="grid gap-4">
      <Transfer status="PENDING" />
      <Transfer status="CREDITED" />
      <Transfer status="DECLINED" />
    </div>
  );
}

export default TransferBody;
