import { Modal } from "@material-ui/core";
import { useOrderModalState } from "../../../store";
import OrderArival from "../../expressPage/InventoryPage/OrderArival";

function OrderArriveModal() {
  const { openOrderModalNav, setOrderModalNav } = useOrderModalState();
  return (
    <Modal
      open={openOrderModalNav}
      onClose={() => setOrderModalNav(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className="h-screen w-screen flex items-center justify-center"
    >
      <OrderArival setModal={setOrderModalNav} />
    </Modal>
  );
}

export default OrderArriveModal;
