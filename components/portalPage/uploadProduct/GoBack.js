import { ChevronLeftIcon } from "@heroicons/react/solid";
import Link from "next/link";

function GoBack() {
  return (
    <div
      className="
        flex items-center space-x-2
        text-gray-main
        "
    >
      <ChevronLeftIcon className="h-8" />
      <Link href="/portal/shop">
        <p className="font-[DM Sans] text-base font-semibold cursor-pointer">
          Back to Products
        </p>
      </Link>
    </div>
  );
}

export default GoBack;
