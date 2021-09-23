import { useState } from "react";
import FormText from "../../../generalComponents.js/form/FormText";
import CustomDrop from "../../../generalComponents.js/CustomDrop";
import Items from "./Items";

function ItemSelect() {
  const [selectChoice, setSelectChoice] = useState("Select a reason");

  return (
    <div className="">
      <h1
        className="
            text-lg font-[DM Sans] mb-4
            font-bold text-green-black
            "
      >
        Select items to return:
      </h1>
      <div
        className="
      grid gap-2 max-h-48 overflow-y-scroll
      scrollbar-hide mb-4
      "
      >
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
      </div>
      <CustomDrop
        selectChoice={selectChoice}
        setSelectChoice={setSelectChoice}
        selectOptions={["Wrong product", "expired product"]}
        desc
      />
      <div className="mb-4">
        <FormText name="Additional Information:" />
      </div>
      <button
        onClick={(e) => e.preventDefault()}
        className="
        py-4 bg-green-main text-white focus:outline-none
        rounded-xl font-[Poppins] font-bold text-lg mx-auto
        cursor-pointer flex justify-center w-full mt-auto
        "
      >
        Request Return
      </button>
    </div>
  );
}

export default ItemSelect;
