import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import Button from "../../generalComponents.js/Button";
import Image from "next/image";
import { useState } from "react";
import ViewDetail from "./ViewDetail/Index";
import MakeReturn from "./MakeReturn/Index";
import Modal from "@material-ui/core/Modal";

function Order({ status }) {
  const [openMore, setOpenMore] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [returnModal, setReturnModal] = useState(false);

  const viewClose = () => {
    setViewModal(false);
  };
  const returnClose = () => {
    setReturnModal(false);
  };

  const btnData = [
    {
      process: "PENDING",
      className: "text-[#F2994A] bg-[#F3EEDE] ",
    },
    {
      process: "PROCESSING",
      className: "text-[#1B75BB] bg-[#E5EDF3]",
    },
    {
      process: "CANCELED",
      className: "text-red-600 bg-red-100",
    },
    {
      process: "COMPLETED",
      className: "text-green-main bg-[#F0FAF9]",
    },
  ];
  return (
    <div
      className="
      max-w-screen-xl w-[95%] py-4 px-2 flex flex-col
      divide-y divide-gray-200 mx-auto
       bg-white rounded-xl
      "
    >
      <div
        className="
        py-3 space-x-1
      text-xs font-semibold
      flex items-center justify-between
      "
      >
        <div
          className="
            w-[15%] flex items-center justify-center mr-2
          "
        >
          <h1 className="text-[#828282]">#2345hfjsd</h1>
        </div>
        <div
          className="
        sm:w-[20%] lg:w-[25%] w-[30%] 
        flex items-center justify-center
        "
        >
          <div
            className="
        bg-gray-100 hidden md:inline p-2
         rounded-md mr-4 
         "
          >
            <Image height={40} width={40} src="/codine.png" alt="" />
          </div>
          <div className="">
            <h1 className="text-green-black text-sm lg:text-base">
              Piriton Syrups
            </h1>
            <p className="text-gray-main lg:text-sm">Anti-allergies</p>
          </div>
        </div>
        <div className="w-[15%] flex items-center justify-center ">
          <div className="">
            <h1 className="text-green-black">500mg </h1>
            <h1 className="text-green-black">Bottle</h1>
          </div>
        </div>
        <div className="w-[10%] flex items-center justify-center ">
          <h1 className="text-green-black">x1</h1>
        </div>
        <div className="w-[15%] flex items-center justify-center">₦5,900</div>
        <div
          className="
        w-[15%] lg:w-[20%] sm:w-[25%] 
        flex items-center justify-evenly
        "
        >
          {btnData.map(
            ({ process, className }) =>
              process === status && (
                <Button
                  className={`hidden sm:inline ${className}`}
                  text={process}
                />
              )
          )}

          {openMore ? (
            <ChevronUpIcon
              className="
    open-order
    "
              onClick={() => setOpenMore(!openMore)}
            />
          ) : (
            <ChevronDownIcon
              className="
           open-order
            "
              onClick={() => setOpenMore(!openMore)}
            />
          )}
        </div>
      </div>

      {openMore && (
        <div
          className={`
        py-3  flex space-x-2
        sm:space-x-4
        items-center justify-end
   `}
        >
          {status === "COMPLETED" && (
            <div className="flex items-center space-x-4">
              <Button
                className="text-green-main border-green-main border lg:border-2  "
                text="Make Return"
                onClick={() => setReturnModal(!returnModal)}
              />
              <Button
                className="text-green-main border-green-main border lg:border-2  "
                text="Print Invoice"
              />
            </div>
          )}

          <Button
            className="text-[#FFFFFF] bg-[#00A69C] border  "
            text="View Details"
            onClick={() => setViewModal(!viewModal)}
          />
          {btnData.map(
            ({ process, className }) =>
              process === status && (
                <Button
                  className={`sm:hidden inline ${className}`}
                  text={process}
                />
              )
          )}
        </div>
      )}
      <Modal
        open={viewModal}
        onClose={viewClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ViewDetail
          handleClose={viewClose}
          status={status}
          setReturnModal={setReturnModal}
        />
      </Modal>
      <Modal
        open={returnModal}
        onClose={returnClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <MakeReturn handleClose={returnClose} status={status} />
      </Modal>
    </div>
  );
}

export default Order;
