import Report from "./Report";

function ReportBody() {
  return (
    <div className="grid gap-4">
      <Report status="SUCCESSFUL" />
      <Report status="PENDING" />
      <Report status="FAILED" />
    </div>
  );
}

export default ReportBody;
