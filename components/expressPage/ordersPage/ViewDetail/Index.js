import ViewHead from "./ViewHead";
import ViewDesc from "./ViewDesc";
import DeliveryInfo from "./DeliveryInfo";
import PaymentInfo from "./PaymentInfo";

function ViewDetial({ handleClose, status, setReturnModal }) {
  return (
    <div
      className="
                h-[95vh] lg:w-full p-6 w-[90%]
                bg-gray-50 max-w-md mx-auto
                flex flex-col rounded-lg scrollbar-hide
                mt-[2.5vh] overflow-y-scroll
        "
    >
      <ViewHead handleClose={handleClose} status={status} />
      <ViewDesc />
      <DeliveryInfo />
      <PaymentInfo status={status} setReturnModal={setReturnModal} />
    </div>
  );
}

export default ViewDetial;
