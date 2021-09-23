import { useState } from "react";
import CustomDrop from "../../expressPage/subcomponents/CustomDrop";
import FormInput from "../../generalComponents.js/form/FormInput";
import FormText from "../../generalComponents.js/form/FormText";
import UploadFile from "../../generalComponents.js/form/UploadFile";
import GoBack from "./GoBack";

function UploadForm() {
  const [selectChoice, setSelectChoice] = useState("Select Category");
  const [selectBrand, setSelectBrand] = useState("Select Brand");
  const [selectFormular, setSelectFormular] = useState("Choose Formulation");
  const [productImg, setProductImg] = useState({});

  return (
    <div
      className="
       max-w-screen-md w-full m-auto
       grid gap-6
       "
    >
      <GoBack />
      <form action="" className="grid gap-6 max-w-screen-sm w-full">
        <CustomDrop
          selectChoice={selectChoice}
          setSelectChoice={setSelectChoice}
          selectOptions={["Baby & health Care", "Carton"]}
          desc
        />
        <FormInput
          name="PRODUCT NAME"
          type="text"
          placeholder="generic name of the product (e.g Paracetamol)"
        />
        <CustomDrop
          selectChoice={selectBrand}
          setSelectChoice={setSelectBrand}
          selectOptions={["emzol", "piriton"]}
          desc
        />
        <CustomDrop
          selectChoice={selectFormular}
          setSelectChoice={setSelectFormular}
          selectOptions={["emzol", "piriton"]}
          desc
        />
        <UploadFile
          accept=".jpg,.png,.jpeg"
          label="upload Image(s)"
          title="Upload Image(s)"
          files={productImg}
          setFiles={setProductImg}
          multiple
        />
        <FormText name="Product Description" />
      </form>
    </div>
  );
}

export default UploadForm;
