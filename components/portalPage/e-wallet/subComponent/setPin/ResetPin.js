import { useSetPinState } from "../../../../../store";
import FormInput from "../../../../generalComponents.js/form/FormInput";

function ResetPin() {
  const { toggleSetPinNav } = useSetPinState();
  return (
    <div className="flex flex-col h-full">
      <h1 className="font-[Poppins] font-bold text-green-black text-lg my-4">
        Reset PIN
      </h1>
      <p className="text-green-black text-base font-[DM Sans] font-medium">
        A new PIN will be sent to the email address attached to this account,
        reset your PIN and check your mailbox.
      </p>
      <div className="grid gap-2 mt-4">
        <FormInput name="EMAIL ADDRESS OR USERNAME" type="text" />
        <FormInput name="CONFIRM PASSWORD" type="text" />
      </div>
      <div
        onClick={() => toggleSetPinNav(false)}
        className="
        py-4 bg-green-main text-white 
        rounded-xl font-[Poppins] font-bold text-lg mx-auto
        cursor-pointer flex justify-center w-full mt-auto
        "
      >
        Reset PIN
      </div>
    </div>
  );
}

export default ResetPin;
