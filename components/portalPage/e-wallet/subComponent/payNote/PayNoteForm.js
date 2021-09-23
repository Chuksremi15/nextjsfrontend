import { useState } from "react";
import { usePayNoteState } from "../../../../../store";
import Button from "../../../../generalComponents.js/Button";
import FormInput from "../../../../generalComponents.js/form/FormInput";
import UploadFile from "../../../../generalComponents.js/form/UploadFile";

function PayNoteForm() {
  const [paySlip, setPaySlip] = useState({});
  const { togglePayNoteNav } = usePayNoteState();
  return (
    <form action="" className="grid gap-2">
      <FormInput name="BUSINESS NAME" type="text" />
      <FormInput name="AMOUNT PAID" type="text" />
      <FormInput name="DATE OF PAYMENT" type="text" />
      <FormInput name="DEPOSITOR’S NAME" type="text" />
      <div className="grid gap-2">
        <h1
          className="
        font-[DM Sans] text-base font-bold text-green-black
        "
        >
          Upload a Screenshot of payment reciept
        </h1>
        <UploadFile
          accept=".jpg,.png,.jpeg"
          label="upload Image(s)"
          title="Upload Image(s)"
          files={paySlip}
          setFiles={setPaySlip}
          noHead
        />
      </div>
      <div
        className="
      flex justify-evenly items-center 
      mt-10 space-x-4
      "
      >
        <button
          onClick={() => togglePayNoteNav(false)}
          className="
        max-w-40 bg-green-main rounded-lg py-4 focus:outline-none 
        text-white text-base font-[DM Sans] font-bold w-full
        "
        >
          SUBMIT
        </button>
        <button
          onClick={() => togglePayNoteNav(false)}
          className="
        max-w-40 bg-[#E0E0E0] rounded-lg py-4 focus:outline-none 
        text-green-black text-base font-[DM Sans] font-bold w-full
        "
        >
          CANCEL
        </button>
      </div>
    </form>
  );
}

export default PayNoteForm;
