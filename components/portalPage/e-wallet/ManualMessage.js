import Modal from "@material-ui/core/Modal";
import { usePayNoteState } from "../../../store";
import PayNote from "./subComponent/payNote/index";

function ManualMessage() {
  const { payNoteState, togglePayNoteNav } = usePayNoteState();
  return (
    <div
      className="
       w-full border-dashed border-2
       bg-[#F0FAF9] border-green-black
       px-8 py-6 mb-10 rounded-lg
       "
    >
      <h1
        className="
            text-lg text-green-black font-bold
             font-[Poppins] mb-2
            "
      >
        For Manual Transfer
      </h1>

      <p className="text-base font-normal text-gray-600 font-[DM Sans]">
        Please make payments into our dedicated bank accounts
        <span className="font-semibold">(234567891 - GT Bank)</span> and get
        your wallet credited. Please, payments made via transfer requires
        completing of the{" "}
        <span
          onClick={() => togglePayNoteNav(true)}
          className="font-bold text-green-main cursor-pointer"
        >
          {" "}
          Payments Notification Form.
        </span>
      </p>
      <Modal
        open={payNoteState}
        onClose={() => togglePayNoteNav(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <PayNote />
      </Modal>
    </div>
  );
}

export default ManualMessage;
