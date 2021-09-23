import { useState } from "react";
import PinInput from "react-pin-input";
import { useRouter } from "next/router";
import { CircularProgress } from "@material-ui/core";
import ErrorMessage from "../../generalComponents.js/form/ErrorMessage";

function BankDetails({ regInit, setFormData, setRegInit }) {
  const router = useRouter();
  const [activateBtn, setActivateBtn] = useState(false);
  const [pin, setPin] = useState(null);
  const [confirm_pin, setConfirm_pin] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    if (pin === null) {
      setError((err) => ({
        ...err,
        onPin: {
          active: true,
          message: "input a pin",
        },
      }));
      return;
    }
    if (confirm_pin === null) {
      setError((err) => ({
        ...err,
        onConfirm_Pin: {
          active: true,
          message: "input confirm pin",
        },
      }));
      return;
    }
    if (confirm_pin !== pin) {
      setError((err) => ({
        ...err,
        onConfirm_Pin: {
          active: true,
          message: "confirm pin should match pin",
        },
      }));
      return;
    }
    setFormData((data) => ({ ...data, ePin: confirm_pin }));
    setRegInit(true);
  };

  return (
    <div className="grid gap-2">
      <h1
        className="
            text-lg font-[DM Sans] 
            font-bold text-green-black
          "
      >
        Create e-wallet PIN
      </h1>
      <p
        className="
            text-sm font-[DM Sans] 
            font-normal text-gray-main
          "
      >
        This is to keep all your payments through midlman secure. You have to
        set up a PIN to be verified or make any purchases, You can update it
        anytime.
      </p>
      <div className="flex justify-center">
        <div>
          <PinInput
            length={4}
            initialValue=""
            secret
            onChange={(value, index) => {
              index < 3 && setPin(null);
            }}
            type="numeric"
            inputMode="number"
            style={{ padding: "20px" }}
            inputStyle={{ borderColor: "#828282", borderRadius: "0.4rem" }}
            inputFocusStyle={{ borderColor: "#00A69C" }}
            onComplete={(value, index) => {
              setPin(value);
            }}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          />
          {error?.onPin?.active && !pin && (
            <ErrorMessage message={error.onPin.message} />
          )}
        </div>
      </div>
      <h1
        className="
            text-lg font-[DM Sans] 
            font-bold text-green-black
          "
      >
        Confirm e-wallet PIN
      </h1>
      <div className="flex justify-center">
        <div>
          <PinInput
            length={4}
            initialValue=""
            secret
            onChange={(value, index) => {
              index < 3 && setConfirm_pin(null);
              index >= 3 && setError(null);
            }}
            type="numeric"
            inputMode="number"
            style={{ padding: "20px" }}
            inputStyle={{ borderColor: "#828282", borderRadius: "0.4rem" }}
            inputFocusStyle={{ borderColor: "#00A69C" }}
            onComplete={(value, index) => {
              setConfirm_pin(value);
              setActivateBtn(true);
            }}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          />
          {error?.onConfirm_Pin?.active && (
            <ErrorMessage message={error.onConfirm_Pin.message} />
          )}
        </div>
      </div>
      {/* <h1
        onClick={() => setActivateBtn(true)}
        className="
            text-base font-[DM Sans] flex justify-center
            font-bold text-green-main cursor-pointer
          "
      >
        Skip for now?
      </h1> */}
      <div className="flex flex-col space-y-3">
        <h1 className="font-[DM Sans] text-[#001F1D] text-xs font-normal ">
          By creating an account, you are agreeing to all our{" "}
          <span className=" text-green-main font-medium">
            Terms & Conditions
          </span>{" "}
          and{" "}
          <span className="text-green-main font-medium">Privacy Policy</span>
        </h1>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className={`
        w-full ${
          activateBtn ? "bg-green-main" : "bg-gray-100"
        } py-4 active:border mt-4 focus:outline-none
        text-green-sub3 font-bold text-base rounded-xl `}
        >
          {regInit ? (
            <CircularProgress color="white" size="20px" />
          ) : (
            "  Create Business Account"
          )}
        </button>
      </div>
    </div>
  );
}

export default BankDetails;
