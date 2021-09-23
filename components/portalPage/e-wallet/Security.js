import { KeyIcon } from "@heroicons/react/outline";
import Modal from "@material-ui/core/Modal";
import { useSetPinState } from "../../../store";
import SetPin from "./subComponent/setPin";

function Security() {
  const { setPinState, toggleSetPinNav } = useSetPinState();
  return (
    <div
      className="
     w-full bg-white rounded-2xl
    p-8 shadow-xl
     "
    >
      <h1
        className="
            text-lg text-green-black font-bold
             font-[DM Sans] mb-6
            "
      >
        Security
      </h1>
      <div
        onClick={() => toggleSetPinNav(true)}
        className="flex items-center space-x-4 cursor-pointer"
      >
        <KeyIcon className="bg-[#F2F2F2] rounded-md text-[#828282] h-12 p-2" />
        <div className="">
          <h1 className="font-bold text-lg text-green-black font-[DM Sans]">
            Create an E-wallet Pin
          </h1>
          <p className="text-base font-normal text-gray-main font-[DM Sans]">
            Click to create your e-wallet PIN for withdrawals
          </p>
        </div>
      </div>
      <Modal
        open={setPinState}
        onClose={() => toggleSetPinNav(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <SetPin />
      </Modal>
    </div>
  );
}

export default Security;
