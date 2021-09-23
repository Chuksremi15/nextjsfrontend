import { PlusCircleIcon } from "@heroicons/react/outline";
import CustomDrop from "../../generalComponents.js/CustomDrop";
import { useState } from "react";
import ControlledTab from "./ControlledTab";

const PromoPack = ({ selected, price, desc }) => (
  <div
    className={`
             p-2 rounded-lg m-2
            ${
              selected
                ? "bg-[#F3EEDE] text-[#F2994A]  "
                : "bg-gray-200 text-gray-main"
            }
            `}
  >
    <h1
      className="
            text-lg font-[Poppins] font-medium "
    >
      {price}
    </h1>

    <p
      className="
            text-sm font-[Poppins] font-medium"
    >
      {desc}
    </p>
  </div>
);

function DescBody({ data }) {
  const selectedOptionsValue = data.variation.map(({ name }) => name);

  const [selectChoice, setSelectChoice] = useState("Select Package Type");
  const PromoOptions = [
    {
      price: "₦5,000",
      desc: "For 5 bottles",
      selected: false,
      pack: "pack1",
    },
    {
      price: "₦18,000",
      desc: "For 20 bottles",
      selected: false,
      pack: "pack2",
    },
    {
      price: "₦26,000",
      desc: "For 36 bottles",
      selected: false,
      pack: "pack2",
    },
    {
      price: "₦26,000",
      desc: "For 36 bottles",
      selected: false,
      pack: "pack3",
    },
    {
      price: "₦26,000",
      desc: "For 36 bottles",
      selected: false,
      pack: "pack4",
    },
    {
      price: "₦26,000",
      desc: "For 36 bottles",
      selected: false,
      pack: "pack5",
    },
  ];
  return (
    <div className="">
      <div className="p-2 space-y-6 divide-y-2 divide-gray-200">
        {selectedOptionsValue && (
          <CustomDrop
            selectChoice={selectChoice}
            setSelectChoice={setSelectChoice}
            selectOptions={selectedOptionsValue}
            desc
          />
        )}
        <div
          className="
        flex items-center rounded-lg px-2 py-1 w-full bg-gray-100 "
        >
          <input
            type="text"
            className="
              py-2 px-4 rounded-md bg-gray-100 flex-grow  focus:outline-none
              placeholder-gray-200::placeholder placeholder-opacity-75
              "
            placeholder="Username"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1
              className=" 
              mt-4
             text-lg font-[Poppins] 
                font-bold text-green-black
            
            "
            >
              ${data.unitPrice}
              <span
                className="
               text-sm font-[Poppins] font-medium text-gray-main
              "
              >
                /per bottle
              </span>
            </h1>

            <p
              className="
             text-sm font-[Poppins] font-medium text-gray-main
            "
            >
              Brand{" "}
              <span
                className="
              text-green-main
              "
              >
                {": "}
                {data.brand}
              </span>
            </p>
          </div>
          <div
            className="
          flex items-center text-green-main 
          cursor-pointer
          "
          >
            <PlusCircleIcon className="h-6 mr-2" />
            <p
              className="
             text-base font-[Poppins] font-semibold 
            "
            >
              Add to Cart
            </p>
          </div>
        </div>
      </div>

      {data.controlled && <ControlledTab />}

      <div className="mb-6">
        <h1
          className="
             text-lg font-[Poppins] mb-2
                font-bold text-green-black
            "
        >
          Product Details
        </h1>
        <p
          className="
            text-sm font-[Poppins] font-medium text-gray-main"
        >
          {data.description}
        </p>
      </div>
    </div>
  );
}

export default DescBody;
