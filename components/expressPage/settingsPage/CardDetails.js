import PayCard from "../../generalComponents.js/PayCard";
import AddDetail from "../../generalComponents.js/AddDetail";

function CardDetails() {
  return (
    <div className="container">
      <div className="max-w-screen-sm full m-auto px-6 mt-4 ">
        <AddDetail name="Card Details" choice="Add New Card" />
        <div className="space-y-4 mb-6">
          <PayCard />
          <PayCard />
        </div>

        <AddDetail name="Bank Details" choice="Add New Bank" />
        <div className="space-y-4">
          <PayCard />
          <PayCard />
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
