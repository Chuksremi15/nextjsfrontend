import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/solid";

function handleClick(event) {
  event.preventDefault();
}

function BreadCrumbs({ title, subTitle, href }) {
  return (
    <div
      className="
      container
      "
    >
      <Breadcrumbs
        separator={<ChevronRightIcon className="h-6" />}
        aria-label="breadcrumb"
      >
        <Link href={href}>
          <h1
            className="
          font-[Poppins] text-gray-500 text-sm lg:text-base font-medium
          cursor-pointer
          "
          >
            {title}
          </h1>
        </Link>
        <div
          className="
        flex item center space-x-2
        "
        >
          <h1
            className="
          font-[Poppins] text-gray-600 text-sm lg:text-base font-medium
          "
          >
            {subTitle}
          </h1>
          <ChevronRightIcon className="h-6 text-gray-700" />
        </div>
      </Breadcrumbs>
    </div>
  );
}

export default BreadCrumbs;
