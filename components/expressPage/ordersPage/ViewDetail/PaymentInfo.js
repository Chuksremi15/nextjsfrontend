import Info from "./Info";
import Button from "../../../generalComponents.js/Button";

function PaymentInfo({ status, setReturnModal }) {
  const DetailText = ({ name, price }) => (
    <p
      className="
       text-sm 
           font-normal text-gray-main
    "
    >
      {name}: {price}
    </p>
  );

  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <h1
          className="
            text-lg font-[DM Sans]
            font-bold text-green-black
            "
        >
          Payment Info:
        </h1>
        <Info title="Payment Method:" desc="Paid on Delivery (Pay via POS)" />
      </div>
      <div className="">
        <h1
          className="
         text-base 
            font-medium text-green-black
        "
        >
          Payment Details:
        </h1>
        <DetailText name="Items:" price="₦5,900" />
        <DetailText name="Coupon Discount:" price="₦5,900" />
        <DetailText name="Shipping Fees:" price="₦5,900" />
        <h1
          className="
         text-base 
            font-bold text-green-black
        "
        >
          Total: ₦5,900
        </h1>
      </div>
      {status === "COMPLETED" && (
        <div className="flex items-center justify-between mt-auto">
          <Button
            className="text-green-main border-green-main border-2  "
            text="Make Return"
            onClick={() => setReturnModal(true)}
          />
          <Button
            className="text-green-main border-green-main border-2  "
            text="Print Invoice"
          />
        </div>
      )}
    </div>
  );
}

export default PaymentInfo;
