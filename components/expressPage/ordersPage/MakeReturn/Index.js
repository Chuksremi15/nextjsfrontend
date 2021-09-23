import ReturnHead from "./ReturnHead";
import ItemSelect from "./ItemSelect";
import ViewDesc from "../ViewDetail/ViewDesc";

function MakeReturn() {
  return (
    <div
      className="
             lg:w-full w-[90%]  h-[95vh] p-6 mt-[2.5vh]
            bg-gray-50 max-w-md mx-auto
            flex flex-col rounded-lg 
             overflow-y-scroll scrollbar-hide
        "
    >
      <ReturnHead />
      <ViewDesc />
      <ItemSelect />
    </div>
  );
}

export default MakeReturn;
