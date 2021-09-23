import AddDetail from "../../generalComponents.js/AddDetail";
import PayCard from "../../generalComponents.js/PayCard";

function CardDetail() {
  return (
    <div
      className="
    flex flex-col row-span-2 
    bg-white gap-6 px-6 py-8
    rounded-2xl shadow-xl
    "
    >
      <div className="flex-grow grid gap-6 px-6 py-8 mb-20">
        <AddDetail name="Bank Details" choice="Add New Bank" />
        <div className="grid gap-4">
          <PayCard />
          <PayCard />
        </div>
      </div>
      <hr className="text-gray-200 w-full" />
    </div>
  );
}

export default CardDetail;
