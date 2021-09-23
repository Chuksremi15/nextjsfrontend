import SearchField from "./subComponents/SearchField";
import Tag from "./subComponents/Tag";

function BlogHead() {
  return (
    <div
      className="
      w-full max-w-screen-xl flex flex-col py-6 m-auto
      px-6 items-center
      "
    >
      <div className="flex justify-between items-center w-full mb-4">
        <h1 className="text-green-black font-bold text-lg font-[Poppins] ">
          Blog & Articles
        </h1>
        <SearchField />
      </div>
      <div className="flex items-center space-x-4 overflow-x-scroll scrollbar-hide w-full ">
        <Tag active />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </div>
    </div>
  );
}

export default BlogHead;
