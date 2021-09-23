import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { LogoutIcon } from "@heroicons/react/outline";

function SettingNav({ currentId, tabData, portal }) {
  return (
    <div
      className="
    flex items-center justify-between 
    container mb-4 lg:mb-6"
    >
      <Breadcrumbs
        separator={<ChevronRightIcon className="h-6" />}
        aria-label="breadcrumb"
      >
        <Link href={`/${portal ? "portal" : "express"}/settings`}>
          <h1
            className="
          font-[Poppins] text-gray-500 text-sm lg:text-base font-medium
          cursor-pointer
          "
          >
            settings
          </h1>
        </Link>
        <div
          className="
        flex item center space-x-2
        "
        >
          {tabData?.map(
            ({ name, id }) =>
              id === currentId && (
                <h1
                  key={id}
                  className="
          font-[Poppins] text-gray-600 text-sm lg:text-base font-medium
          "
                >
                  {name}
                </h1>
              )
          )}

          <ChevronRightIcon className="h-6 text-gray-700" />
        </div>
      </Breadcrumbs>

      <div
        className="
      flex items-center space-x-4
      text-[#EB5757] font-[DM Sans]
      text-base font-semibold
      "
      >
        <LogoutIcon className="h-6 cursor-pointer" />
        <h1 className="cursor-pointer">Logout</h1>
      </div>
    </div>
  );
}

export default SettingNav;
