import { ChevronLeftIcon } from "@heroicons/react/outline";
import Button from "../../../generalComponents.js/Button";

function ViewHead({ handleClose, status }) {
  const btnData = [
    {
      process: "PENDING",
      className: "text-[#F2994A] bg-[#F3EEDE]",
    },
    {
      process: "PROCESSING",
      className: "text-[#1B75BB] bg-[#E5EDF3]",
    },
    {
      process: "CANCELED",
      className: "text-red-600 bg-red-100",
    },
    {
      process: "COMPLETED",
      className: "text-green-main bg-[#F0FAF9]",
    },
  ];

  return (
    <div
      className="
      flex items-center justify-between
      "
    >
      <div
        onClick={handleClose}
        className="
        flex items-center
        text-gray-main
        "
      >
        <ChevronLeftIcon
          className="
          h-6 cursor-pointer
          mr-1
          "
        />
        <p
          className="
           text-sm lg:text-base font-[Poppins] 
           font-medium cursor-pointer
          "
        >
          Back to Orders
        </p>
      </div>
      {btnData.map(
        ({ process, className }) =>
          process === status && <Button className={className} text={process} />
      )}
    </div>
  );
}

export default ViewHead;
