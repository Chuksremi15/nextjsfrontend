import { PlusIcon } from "@heroicons/react/outline";

function AddDetail({ name, choice, onClick }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h1
        className="
        font-[DM Sans] font-bold text-lg text-green-black
        "
      >
        {name}
      </h1>
      <div
        onClick={onClick && onClick}
        className="flex items-center space-x-2 font-bold  text-green-main"
      >
        <PlusIcon className="h-6 cursor-pointer " />
        <h1 className="text-base cursor-pointer">{choice}</h1>
      </div>
    </div>
  );
}

export default AddDetail;
