import { PlusIcon, XCircleIcon } from "@heroicons/react/outline";
import { MinusIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchProduct } from "../../../../services/get.service";

function CartItem({ item }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const [product, setProduct] = useState({});

  console.log(product);

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };
  const minusQuantity = (params) => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    fetchProduct(item.product)
      .then((res) => {
        setProduct(res.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [item.product]);

  return (
    <div className="flex items-center py-4 border-b-2 border-gray-200 relative">
      <div className="bg-gray-200 rounded-lg mr-4">
        <Image
          className=" "
          objectFit="contain"
          src="/codine.png"
          height={80}
          width={80}
        />
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <div className="flex justify-between">
          <div className="">
            <h1 className="font-[Poppins] text-base lg:text-lg text-green-black font-semibold">
              {product?.name}
            </h1>
            <p className="lg:text-base text-xs font-medium text-gray-main font-[DM Sans]">
              bottle of 50mg
            </p>
          </div>
          <XCircleIcon className="h-6 text-gray-main cursor-pointer hover:text-red-main" />
        </div>
        <div className="flex items-center justify-between mt-2">
          <h1 className="font-[DM Sans] text-lg lg:text-xl text-green-black font-bold">
            ₦{product?.unitPrice}
          </h1>
          <div className="bg-[#F0FAF9] rounded-full flex items-center p-1">
            <MinusIcon
              //minus quantity onclick
              onClick={minusQuantity}
              className="h-6 text-green-main cursor-pointer rounded-full bg-[#D2EFED] "
            />
            <h1 className="font-[DM Sans] text-lg lg:text-xl px-2 text-green-black font-bold">
              {quantity}
            </h1>
            <PlusIcon
              //add quantity onClick
              onClick={addQuantity}
              className="h-6 text-white cursor-pointer bg-green-main rounded-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
