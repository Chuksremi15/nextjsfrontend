import { useState } from "react";
import { useInventNavState } from "../../../store";
import Cart from "./Cart";
import Checkout from "./Checkout";
import PaymentMethod from "./PaymentMethod";
import Paystack from "./Paystack";

function Inventory({ setModal, portal }) {
  const [inventory, setInventory] = useState(0);
  const { setOpenInventNav } = useInventNavState();

  const inventoryPages = [
    {
      Component: Cart,
      id: 0,
    },
    {
      Component: Checkout,
      id: 1,
    },
    {
      Component: PaymentMethod,
      id: 2,
    },
    {
      Component: Paystack,
      id: 3,
    },
  ];

  const handleclose = () => {
    setInventory(0);
    setOpenInventNav(false);
  };

  return (
    <div
      className="
        w-[90vw]  md:w-[60vw] xl:w-[30vw] p-6 
        lg:w-[40vw] min-h-screen bg-white
        scrollbar-hide overflow-y-scroll
        "
    >
      {inventoryPages.map(
        ({ Component, id }) =>
          id === inventory && (
            <Component
              key={id}
              handleclose={handleclose}
              setInventory={setInventory}
              setModal={setModal}
              portal={portal}
            />
          )
      )}
    </div>
  );
}

export default Inventory;
