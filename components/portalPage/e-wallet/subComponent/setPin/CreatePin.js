import PinInput from "react-pin-input";
import { useSetPinState } from "../../../../../store";

function CreatePin() {
  const { toggleSetPinNav } = useSetPinState();
  return (
    <div className="flex flex-col h-full">
      <h1 className="font-[Poppins] font-bold text-green-black text-lg my-4">
        Create E-wallet PIN
      </h1>
      <p className="text-green-black text-base font-[DM Sans] font-medium">
        A new PIN will be sent to the email address attached to this account,
        reset your PIN and check your mailbox.
      </p>
      <div className="mt-4 grid gap-2">
        <div className="">
          <h1
            className="
        text-sm font-[DM Sans]
        font-medium text-green-black mb-2
        "
          >
            Enter PIN
          </h1>
          <div className="flex justify-center">
            <PinInput
              length={4}
              initialValue=""
              secret
              onChange={(value, index) => {}}
              type="numeric"
              inputMode="number"
              style={{ padding: "20px" }}
              inputStyle={{ borderColor: "#828282", borderRadius: "0.4rem" }}
              inputFocusStyle={{ borderColor: "#00A69C" }}
              onComplete={(value, index) => {}}
              autoSelect={true}
              regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />
          </div>
        </div>
        <div className="">
          <h1
            className="
        text-sm font-[DM Sans]
        font-medium text-green-black mb-2
        "
          >
            Confirm PIN
          </h1>
          <div className="flex justify-center">
            <PinInput
              length={4}
              initialValue=""
              secret
              onChange={(value, index) => {}}
              type="numeric"
              inputMode="number"
              style={{ padding: "20px" }}
              inputStyle={{ borderColor: "#828282", borderRadius: "0.4rem" }}
              inputFocusStyle={{ borderColor: "#00A69C" }}
              onComplete={(value, index) => {}}
              autoSelect={true}
              regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />
          </div>
        </div>
      </div>
      <div
        onClick={() => toggleSetPinNav(false)}
        className="
        py-4 bg-green-main text-white 
        rounded-xl font-[Poppins] font-bold text-lg mx-auto
        cursor-pointer flex justify-center w-full mt-auto
        "
      >
        Create PIN
      </div>
    </div>
  );
}

export default CreatePin;
