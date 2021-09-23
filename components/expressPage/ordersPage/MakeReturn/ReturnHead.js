import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Button from "../../../generalComponents.js/Button";

function ReturnHead() {
  return (
    <div
      className="
      flex items-center justify-between
      "
    >
      <Breadcrumbs
        separator={<ChevronRightIcon className="h-6" />}
        aria-label="breadcrumb"
      >
        <h1
          className="
          font-[Poppins] text-gray-500 text-sm font-medium
          cursor-pointer
          "
        >
          Orders List
        </h1>

        <div
          className="
        flex item center space-x-2
        "
        >
          <h1
            className="
          font-[Poppins] text-gray-600 text-sm font-medium
          "
          >
            Details
          </h1>
          <ChevronRightIcon className="h-6 text-gray-700" />
        </div>
      </Breadcrumbs>
      <Button className="text-green-main bg-[#F0FAF9]" text="COMPLETED" />
    </div>
  );
}

export default ReturnHead;
