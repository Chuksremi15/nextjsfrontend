import FormInput from "../../generalComponents.js/form/FormInput";
import SetBtn from "../../generalComponents.js/form/SetBtn";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup.object().shape({
  oldPassword: yup
    .string()
    .required("Old password is required")
    .min(8, "8 characters minimum")
    .matches(RegExp("(.*[a-z].*)"), "one lowercase letter")
    .matches(RegExp("(.*[A-Z].*)"), "one uppercase letter")
    .matches(RegExp("(.*\\d.*)"), "one number")
    .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), "one special character"),
  newPassword: yup
    .string()
    .required("New password is required")
    .min(8, "8 characters minimum")
    .matches(RegExp("(.*[a-z].*)"), "one lowercase letter")
    .matches(RegExp("(.*[A-Z].*)"), "one uppercase letter")
    .matches(RegExp("(.*\\d.*)"), "one number")
    .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), "one special character"),
  confirm_password: yup
    .string()
    .required("confirm password is required")
    .oneOf([yup.ref("newPassword"), null], "Password must match"),
});

function ChangePassword() {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: "all",
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const onSubmit = async ({ oldPassword, newPassword }) => {
    console.log(oldPassword, newPassword);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container px-4">
      <div className="max-w-screen-sm w-full m-auto grid gap-6">
        <FormInput
          name="OLD PASSWORD"
          type="text"
          register={{ ...register("oldPassword") }}
          error={errors.oldPassword}
        />
        <FormInput
          name="NEW PASSWORD"
          type="text"
          register={{ ...register("newPassword") }}
          error={errors.newPassword}
        />
        <FormInput
          name="CONFIRM NEW PASSWORD"
          type="text"
          register={{ ...register("confirm_password") }}
          error={errors.confirm_password}
        />
      </div>
      <SetBtn text="SAVE CHANGES" className="mt-32" loading={loading} />
    </form>
  );
}

export default ChangePassword;
