import { PlusIcon, XIcon } from "@heroicons/react/outline";
import CartItem from "./subComponents/CartItem";
import { useEffect, useState } from "react";
import { getCart } from "../../../services/cart.service";
import {
  useExpressUserState,
  usePortalUserState,
} from "../../../store/user.store";
import { usePortalPageState } from "../../../store";
import { CircularProgress } from "@material-ui/core";

function Cart({ handleclose, setInventory }) {
  const { portalUserData } = usePortalUserState();
  const { expressUserData } = useExpressUserState();
  const { onPortal } = usePortalPageState();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (onPortal) {
      getCart(portalUserData?.token).then(({ error, data, message }) => {
        if (error) {
          alert(message);
        } else {
          setCartItems(data.products);
          setLoading(false);
        }
      });
    } else {
      getCart(expressUserData?.token).then(({ error, data, message }) => {
        if (error) {
          alert(message);
        } else {
          setCartItems(data);
          setLoading(false);
        }
      });
    }
  }, []);
  return (
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <XIcon
          onClick={() => handleclose()}
          className="h-6 text-gray-main mb-6 cursor-pointer"
        />
        <h1
          className="
            text-xl text-green-black font-bold
             font-[Poppins] mb-4
            "
        >
          Your Inventory
        </h1>
        <div className="flex items-center justify-between">
          <h1 className="text-[DM Sans] text-sm md:text-base lg:text-lg text-gray-main font-normal ">
            {cartItems[0]?.products?.length} item
            {cartItems[0]?.products?.length > 1 && "s"} in your cart
          </h1>
          <div
            onClick={() => handleclose()}
            className="flex item-center cursor-pointer text-green-main"
          >
            <PlusIcon className="h-6 mr-2" />
            <h1 className="font-[DM Sans] text-sm md:text-base lg:text-lg  font-semibold">
              Add More
            </h1>
          </div>
        </div>
      </div>

      <div
        className=" flex flex-col flex-grow
      h-[60vh] overflow-y-auto scrollbar-hide"
      >
        {loading ? (
          <div className="flex items-center justify-center relative">
            <CircularProgress color="#00A69C" size="3rem" />
          </div>
        ) : (
          cartItems[0]?.products?.map((item, index) => (
            <CartItem key={index} item={item} />
          ))
        )}
      </div>
      <div className="pt-2 ">
        {!loading && (
          <>
            <h1
              className="text-xl text-green-black font-bold
             font-[Poppins] mb-4 flex  justify-end
             "
            >
              Total: ₦{cartItems[0]?.total}
            </h1>

            <div
              onClick={() => setInventory(1)}
              className="
        py-4 bg-green-main text-white 
        rounded-xl font-[Poppins] font-bold text-lg mt-auto
        cursor-pointer flex justify-center w-full mx-auto
        "
            >
              Confirm
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;

// export async function getServerSideProps() {
//   const data = await getCart();

//   return {
//     props: {
//       data: data,
//     },
//   };
// }
