import { useState } from "react";
import Modal from "@material-ui/core/Modal";

function DocType({ title, imgSrc }) {
  const [modal, setModal] = useState(false);

  const modalClose = () => {
    setModal(false);
  };

  const handleClick = () => {
    setModal(true);
  };

  return (
    <div className="flex items-center justify-between">
      <h1
        className="
            font-[DM Sans] text-base w-[40%]
            text-green-black font-bold
            
            "
      >
        {title}
      </h1>
      <img
        src={imgSrc ? imgSrc : "/cacDoc.png"}
        alt=""
        className="w-40 lg:w-60 h-12 lg:h-14 rounded-lg lg:rounded-xl"
      />
      <p
        onClick={handleClick}
        className="
      text-sm text-green-main cursor-pointer
      font-semibold font-[DM Sans] ml-2 
      "
      >
        View
      </p>

      <Modal
        open={modal}
        onClose={modalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="h-screen w-screen flex items-center justify-center"
      >
        <img
          className="h-[60vh] w-[40vw] bg-white object-contain"
          src={imgSrc ? imgSrc : "/cacDoc.png"}
          alt={title}
        />
      </Modal>
    </div>
  );
}

export default DocType;
