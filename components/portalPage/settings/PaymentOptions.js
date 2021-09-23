import { XIcon } from "@heroicons/react/outline";
import { useEditBankState } from "../../../store";
import AddDetail from "../../generalComponents.js/AddDetail";
import PayCard from "../../generalComponents.js/PayCard";
import EditBankForm from "./EditBankForm";

function PaymentOptions() {
  const { editBankState, setEditBankState } = useEditBankState();
  return (
    <div className="max-w-screen-sm full m-auto px-4 ">
      <h1 className="font-[DM Sans] font-bold text-base text-green-black mb-4">
        Saved Banks
      </h1>
      <div className="grid gap-6 mb-6">
        <PayCard />
        <PayCard />
      </div>
      {editBankState ? (
        <XIcon
          onClick={() => setEditBankState(false)}
          className="h-8 text-red-700 ml-auto cursor-pointer"
        />
      ) : (
        <AddDetail
          onClick={() => setEditBankState(true)}
          name="Bank Details"
          choice="Add New Bank"
        />
      )}
      {editBankState && <EditBankForm />}
    </div>
  );
}

export default PaymentOptions;
