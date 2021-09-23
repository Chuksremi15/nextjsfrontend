import { PlusIcon, XIcon } from "@heroicons/react/outline";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import AdressForm from "./AdressForm";

const CouponForm = () => (
  <form action="" className="space-y-2 mb-4">
    <h1
      className="
        text-sm md:text-base font-[DM Sans]
        font-semibold text-green-black
        "
    >
      ENTER COUPON CODE:
    </h1>
    <input
      type="text"
      className="
    w-full flex-grow focus:outline-none bg-white
    border border-gray-200 rounded-lg p-2
    "
    />
  </form>
);

const PaymentSummary = () => (
  <div className="mb-10">
    <h1
      className="
            text-lg text-green-black font-bold
             font-[Poppins]
            "
    >
      Payment Summary
    </h1>
    <div className="py-4 border-b border-gray-200 mb-4">
      <div className="flex items-center justify-between">
        <p
          className="
        text-sm lg:text-base font-medium text-gray-main font-[DM Sans]
        "
        >
          Order Total
        </p>
        <h1
          className="
           text-base md:text-lg text-green-black font-bold
             font-[DM Sans] 
            "
        >
          ₦5,400
        </h1>
      </div>

      <div className="flex items-center justify-between">
        <p
          className="
        text-sm lg:text-base font-medium text-gray-main font-[DM Sans]
        "
        >
          Coupon Discount
        </p>
        <h1
          className="
           text-sm md:text-base text-green-black font-medium
             font-[DM Sans] 
            "
        >
          None
        </h1>
      </div>

      <div className="flex items-center justify-between">
        <p
          className="
         text-sm lg:text-base font-medium text-gray-main font-[DM Sans]
        "
        >
          Shipping fee
        </p>
        <h1
          className="
           text-base md:text-lg text-green-black 
           font-semibold font-[DM Sans] 
            "
        >
          ₦365
        </h1>
      </div>
    </div>
    <div className="flex items-center justify-between">
      <h1
        className="
           text-base md:text-lg text-green-black 
            font-medium font-[DM Sans] 
            "
      >
        Total
      </h1>
      <h1
        className="
            text-lg text-green-black font-bold
             font-[DM Sans] 
            "
      >
        ₦5,900
      </h1>
    </div>
  </div>
);

function Checkout({ handleclose, setInventory }) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <XIcon
            onClick={() => handleclose()}
            className="h-6 text-gray-main mb-4 cursor-pointer"
          />
          <div onClick={() => setInventory(0)} className="flex items-center">
            <ArrowNarrowLeftIcon
              className="
          h-6 text-gray-main cursor-pointer
          "
            />
            <h1
              className="
            text-xs lg:text-sm text-green-black font-bold
             font-[Poppins] ml-2 cursor-pointer
            "
            >
              back
            </h1>
          </div>
        </div>
        <h1
          className="
            text-xl text-green-black font-bold
             font-[Poppins] mb-2
            "
        >
          Checkout
        </h1>
        <div className="flex items-center justify-between">
          <h1 className="text-[DM Sans] text-lg text-gray-main font-normal ">
            2 items in your cart
          </h1>

          <h1 className="font-[DM Sans] text-lg font-bold text-green-main">
            ₦5,800
          </h1>
        </div>
      </div>

      <div className="">
        <div
          className="h-[25vh] lg:h-[30vh] flex  justify-center 
        overflow-y-scroll scrollbar-hide mb-4"
        >
          <AdressForm />
        </div>
        <div
          className="flex item-center justify-end space-x-2 
      cursor-pointer text-green-main mb-4"
        >
          <PlusIcon className="h-6" />
          <h1 className="font-[DM Sans] text-lg font-semibold">Add Address</h1>
        </div>
      </div>
      <CouponForm />

      <PaymentSummary />
      <div
        onClick={() => setInventory(2)}
        className="
        py-4 bg-green-main text-white 
        rounded-xl font-[Poppins] font-bold text-lg mx-auto
        cursor-pointer flex justify-center w-full mt-auto
        "
      >
        Pay Now @ ₦5,900
      </div>
    </div>
  );
}

export default Checkout;
