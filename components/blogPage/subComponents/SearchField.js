import { SearchIcon } from "@heroicons/react/solid";

function SearchField() {
  return (
    <div
      className="
    border-2 border-gray-300 rounded-md bg-white
    w-40 py-1 px-2 flex items-center md:w-60 lg:w-80 lg:px-4 lg:py-2"
    >
      <SearchIcon className="h-6 mr-2 text-gray-500" />
      <input
        type="text"
        className="flex-grow focus:outline-none w-full "
        placeholder="Search"
      />
    </div>
  );
}

export default SearchField;
