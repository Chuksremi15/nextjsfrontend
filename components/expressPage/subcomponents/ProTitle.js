import CustomDrop from "./CustomDrop";
import { useState } from "react";

function ProTitle({ title }) {
  const [selectChoice, setSelectChoice] = useState("Sort Alpahbetically (A-Z)");
  return (
    <div
      className="
      container flex  justify-between mb-6
      "
    >
      <h1
        className="
            text-lg text-green-black font-bold
             font-[Poppins] mr-2
            "
      >
        {title}
      </h1>
      <CustomDrop
        selectChoice={selectChoice}
        setSelectChoice={setSelectChoice}
        selectOptions={[
          "Sort Alpahbetically (A-Z)",
          "Sort by Brand",
          "Sort by Brand Name",
          "Sort by Latest",
          "Sort by Best Rated",
        ]}
      />
    </div>
  );
}

export default ProTitle;
