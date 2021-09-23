import { useState } from "react";
import Button from "../../generalComponents.js/Button";
import Modal from "@material-ui/core/Modal";
import TrackOrder from "./TrackOrder";

function OrderHead() {
  const [trackModal, setTrackModal] = useState(false);

  const modalClose = () => {
    setTrackModal(false);
  };

  return (
    <div
      className="container flex flex-col space-y-4
    
    "
    >
      <div className="flex justify-end">
        <Button
          className="text-[#FFFFFF] bg-[#00A69C] border  "
          text="Track Order"
          onClick={() => setTrackModal(!trackModal)}
        />
      </div>
      <Modal
        open={trackModal}
        onClose={modalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <TrackOrder handleClose={modalClose} />
      </Modal>
      <div
        className="
      flex items-center justify-between text-xs flex-nowrap lg:text-base py-2 px-1
      font-[DM Sans] font-semibold text-green-main bg-white rounded-md
      "
      >
        <h1 className="w-[15%] items-center flex justify-center">Order ID</h1>
        <h1
          className="  sm:w-[20%] lg:w-[25%] w-[30%] 
        flex justify-center"
        >
          Items
        </h1>
        <h1 className="w-[15%] items-center flex justify-center">Type</h1>
        <h1 className="w-[10%] items-center flex justify-center">Quantity</h1>
        <h1 className="w-[15%] items-center flex justify-center">Price</h1>
        <h1
          className="    
           w-[15%] lg:w-[20%] sm:w-[25%] 
        flex justify-center"
        >
          Status
        </h1>
      </div>
    </div>
  );
}

export default OrderHead;
