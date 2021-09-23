import { SearchIcon } from "@heroicons/react/outline";
import { AdjustmentsIcon } from "@heroicons/react/outline";

function HeadSearch({ className }) {
  return (
    <div
      className={`
        flex items-center justify-between max-w-screen-sm w-full 
        rounded-lg ${className}
        bg-white border border-gray-200 divide-x-2 
        divide-gray-300
        `}
    >
      <form className="flex items-center flex-grow pl-4 pr-2 py-2 ">
        <SearchIcon className="h-6 text-gray-500 mr-2" />
        <input
          type="text"
          className=" flex-grow focus:outline-none w-24 line-clamp-1"
          placeholder="Search for medicine & healthcare products"
        />
        <button className="hidden"></button>
      </form>
      <AdjustmentsIcon className="h-8 text-green-main py-2 pr-4 px-2" />
    </div>
  );
}

export default HeadSearch;
