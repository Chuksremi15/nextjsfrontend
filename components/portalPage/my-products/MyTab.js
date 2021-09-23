import Button from "../../generalComponents.js/Button";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { PlusIcon } from "@heroicons/react/outline";

const BreadCrumbs = ({ title, subTitle, href }) => (
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
);

function MyTab() {
  return (
    <div
      className="
      container flex items-center justify-between
      "
    >
      <BreadCrumbs title="Shop" subTitle="My Products" href="/portal/shop" />
      <Button
        className="text-white bg-green-main"
        text="Upload Product"
        Icon={PlusIcon}
        IconClass="text-white"
      />
    </div>
  );
}

export default MyTab;
