import DocType from "./DocType";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import SetBtn from "../../generalComponents.js/form/SetBtn";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import UpdateDocument from "./UpdateDocument";
import { usePortalUserState } from "../../../store/user.store";

function Legals() {
  const { portalUserData } = usePortalUserState();
  const [modal, setModal] = useState(false);

  const modalClose = () => {
    setModal(false);
  };
  const handleClick = () => {
    setModal(true);
  };
  return (
    <div
      className="
    max-w-screen-sm w-full 
    m-auto px-4
    "
    >
      <div className="grid gap-10">
        <div className="grid gap-4">
          <DocType
            title="CAC Document:"
            imgSrc={portalUserData?.user?.cacDoc}
          />
          <DocType
            title="Liscence Document:"
            imgSrc={portalUserData?.user?.licenseDoc}
          />
        </div>
        <div
          onClick={handleClick}
          className="
        flex text-green-main justify-end
        items-center space-x-1
        "
        >
          <ChevronLeftIcon className="h-6 cursor-pointer" />
          <p className="font-bold text-sm font-[DM Sans] cursor-pointer">
            Update Document
          </p>
        </div>
      </div>
      <SetBtn text="Submit" className="mt-80" />
      <Modal
        open={modal}
        onClose={modalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="h-screen w-screen flex items-center justify-center"
      >
        <UpdateDocument setModal={setModal} />
      </Modal>
    </div>
  );
}

export default Legals;
