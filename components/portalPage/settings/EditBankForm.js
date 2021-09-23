import FormInput from "../../generalComponents.js/form/FormInput";
import SetBtn from "../../generalComponents.js/form/SetBtn";

function EditBankForm() {
  return (
    <form action="" className="">
      <div className="grid gap-2">
        <FormInput name="BANK NAME" type="text" />
        <FormInput name="ACCOUNT NUMBER" type="text" />
        <FormInput name="ACCOUNT NAME" type="text" />
        <FormInput name="SORT CODE" type="text" />
      </div>
      <SetBtn text="SAVE CHANGES" className="mt-20" />
    </form>
  );
}

export default EditBankForm;
